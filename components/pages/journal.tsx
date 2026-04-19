"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Save,
  Lock,
  Sparkles,
  Trash2,
  TrendingUp,
  Activity,
} from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";
import { db, auth } from "@/lib/firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
  where,
  deleteDoc,
  doc,
  limit,
} from "firebase/firestore";
import { signInAnonymously, onAuthStateChanged, User } from "firebase/auth";
// Import Recharts untuk Visualisasi
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Skor Mood untuk Grafik (1-5)
const moodScores: Record<string, number> = {
  Cemas: 1,
  Sedih: 2,
  Lelah: 3,
  Biasa: 4,
  Senang: 5,
};

const moods = [
  { label: "Senang", emoji: "😊", score: 5 },
  { label: "Biasa", emoji: "🙂", score: 4 },
  { label: "Lelah", emoji: "😮‍💨", score: 3 },
  { label: "Sedih", emoji: "😔", score: 2 },
  { label: "Cemas", emoji: "😰", score: 1 },
];

const triggersList = [
  "Kuliah",
  "Tugas",
  "Teman",
  "Keluarga",
  "Pasangan",
  "Tidur",
  "Kesehatan",
  "Keuangan",
  "Masa Depan",
];

interface JournalEntry {
  id?: string;
  userId: string;
  mood: string;
  triggers: string[];
  note: string;
  date: string;
}

interface JournalProps {
  setCurrentPage: (page: string) => void;
}

export default function Journal({ setCurrentPage }: JournalProps) {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [showBridgeModal, setShowBridgeModal] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Auth & Fetch Data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setCurrentUserId(user.uid);
      } else {
        signInAnonymously(auth)
          .then((userCredential) => {
            setCurrentUser(userCredential.user);
            setCurrentUserId(userCredential.user.uid);
          })
          .catch((error) => console.error("Anonymous sign-in failed", error));
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchEntries = async () => {
      if (currentUserId) {
        setIsLoading(true);
        try {
          const q = query(
            collection(db, "journalEntries"),
            where("userId", "==", currentUserId),
            orderBy("date", "desc"),
            limit(30), // Ambil 30 hari terakhir untuk data chart yang lebih kaya
          );
          const querySnapshot = await getDocs(q);
          const fetchedEntries: JournalEntry[] = [];
          querySnapshot.forEach((doc) => {
            fetchedEntries.push({ id: doc.id, ...doc.data() } as JournalEntry);
          });
          setEntries(fetchedEntries);
        } catch (error) {
          console.error("Error fetching journal entries:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchEntries();
  }, [currentUserId]);

  const handleToggleTrigger = (trigger: string) => {
    setSelectedTriggers((prev) =>
      prev.includes(trigger)
        ? prev.filter((t) => t !== trigger)
        : [...prev, trigger],
    );
  };

  // Fungsi Hapus Item Spesifik
  const handleDeleteEntry = async (entryId: string) => {
    if (!confirm("Hapus catatan ini?")) return;
    try {
      await deleteDoc(doc(db, "journalEntries", entryId));
      setEntries((prev) => prev.filter((e) => e.id !== entryId));
    } catch (error) {
      console.error("Gagal menghapus:", error);
    }
  };

  const handleSave = async () => {
    if (!selectedMood || !currentUserId) return;

    try {
      const newEntryData = {
        userId: currentUserId,
        mood: selectedMood,
        triggers: selectedTriggers,
        note,
        date: new Date().toISOString(),
      };
      const docRef = await addDoc(
        collection(db, "journalEntries"),
        newEntryData,
      );
      const newEntry: JournalEntry = { id: docRef.id, ...newEntryData };

      setEntries((prevEntries) => [newEntry, ...prevEntries]);
      setSelectedMood("");
      setSelectedTriggers([]);
      setNote("");

      // Bridge Logic dengan Cooldown
      if (["Lelah", "Sedih", "Cemas"].includes(newEntry.mood)) {
        const lastShown = localStorage.getItem("bridgeModalLastShown");
        const now = new Date().getTime();
        const COOLDOWN = 12 * 60 * 60 * 1000; // 12 Jam

        if (!lastShown || now - parseInt(lastShown) > COOLDOWN) {
          setShowBridgeModal(true);
          localStorage.setItem("bridgeModalLastShown", now.toString());
        }
      }
    } catch (error) {
      console.error("Error saving journal entry:", error);
    }
  };

  // --- SMART INSIGHT LOGIC ---
  const insights = useMemo(() => {
    if (entries.length === 0) return null;

    // 1. Chart Data (Reverse agar urut dari tanggal lama ke baru)
    const chartData = [...entries].reverse().map((e) => ({
      date: new Date(e.date).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
      }),
      score: moodScores[e.mood] || 3,
      mood: e.mood,
    }));

    // 2. Trigger Analysis
    const negativeEntries = entries.filter((e) =>
      ["Cemas", "Sedih", "Lelah"].includes(e.mood),
    );
    const triggerCounts: Record<string, number> = {};
    negativeEntries.forEach((e) => {
      e.triggers.forEach((t) => {
        triggerCounts[t] = (triggerCounts[t] || 0) + 1;
      });
    });

    // Cari trigger terbanyak
    const topTrigger = Object.keys(triggerCounts).reduce(
      (a, b) => (triggerCounts[a] > triggerCounts[b] ? a : b),
      "",
    );

    return {
      chartData,
      topTrigger,
      negativeCount: negativeEntries.length,
      totalCount: entries.length,
    };
  }, [entries]);

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="text-[#C7913B] font-bold tracking-wider text-sm uppercase bg-[#FDF3E3] px-3 py-1 rounded-full">
              Refleksi Diri
            </span>
            <h2 className="text-4xl font-bold text-[#2E5063] mt-4">
              Jurnal Rasa
            </h2>
            <p className="text-slate-500 mt-2">
              Kenali pola emosimu. Data ini <strong>100% Privat</strong>{" "}
              milikmu.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <AnimatedSection delay={0.2} className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl shadow-[#2E5063]/5 h-full relative overflow-hidden sticky top-24">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E5063] to-[#C7913B]"></div>

              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2 text-lg">
                ✍️ Catat Hari Ini
              </h3>

              {/* Mood */}
              <div className="mb-6">
                <label className="text-xs font-bold text-slate-400 uppercase mb-3 block">
                  Perasaanmu?
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {moods.map((mood) => (
                    <button
                      key={mood.label}
                      onClick={() => setSelectedMood(mood.label)}
                      className={`flex flex-col items-center gap-1 p-2 rounded-xl border-2 transition ${
                        selectedMood === mood.label
                          ? "border-[#C7913B] bg-[#FDF3E3]"
                          : "border-slate-100 bg-slate-50 hover:bg-slate-100"
                      }`}
                    >
                      <span className="text-2xl">{mood.emoji}</span>
                      <span className="text-[10px] font-medium text-slate-600">
                        {mood.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Triggers */}
              <div className="mb-6">
                <label className="text-xs font-bold text-slate-400 uppercase mb-3 block">
                  Faktor Pemicu?
                </label>
                <div className="flex flex-wrap gap-2">
                  {triggersList.map((trigger) => (
                    <button
                      key={trigger}
                      onClick={() => handleToggleTrigger(trigger)}
                      className={`px-3 py-1.5 rounded-full border text-xs font-medium transition ${
                        selectedTriggers.includes(trigger)
                          ? "bg-[#2E5063] text-white border-[#2E5063]"
                          : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {trigger}
                    </button>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="mb-6">
                <label className="text-xs font-bold text-slate-400 uppercase mb-3 flex justify-between items-center">
                  <span>Catatan (Opsional)</span>
                  <Lock className="w-3 h-3 text-[#C7913B]" />
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#2E5063] focus:ring-1 focus:ring-[#2E5063] outline-none text-sm resize-none bg-slate-50"
                  placeholder="Ceritakan sedikit tentang harimu..."
                ></textarea>
              </div>

              <button
                onClick={handleSave}
                disabled={!selectedMood}
                className="w-full py-3 bg-[#2E5063] hover:bg-[#1D3442] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition shadow-lg shadow-[#2E5063]/20 flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                Simpan Jurnal
              </button>
            </div>
          </AnimatedSection>

          {/* Insight & History Section */}
          <AnimatedSection delay={0.4} className="lg:col-span-2 space-y-6">
            {/* GRAPH CARD (NEW) */}
            {insights && insights.chartData.length > 1 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-[#2E5063] flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#C7913B]" />
                    Grafik Mood Mingguan
                  </h3>
                  <span className="text-xs text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                    7 Hari Terakhir
                  </span>
                </div>

                <div className="h-[200px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={insights.chartData.slice(-7)}>
                      <defs>
                        <linearGradient
                          id="colorMood"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#C7913B"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="#C7913B"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#f0f0f0"
                      />
                      <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: "#94a3b8" }}
                        dy={10}
                      />
                      <YAxis hide domain={[0, 6]} />
                      <Tooltip
                        contentStyle={{
                          borderRadius: "12px",
                          border: "none",
                          boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                        }}
                        cursor={{
                          stroke: "#C7913B",
                          strokeWidth: 1,
                          strokeDasharray: "4 4",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="score"
                        stroke="#C7913B"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorMood)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* SMART INSIGHT CARD (UPDATED) */}
            <div className="bg-gradient-to-br from-[#2E5063] to-[#1D3442] rounded-3xl p-6 text-white relative overflow-hidden shadow-lg">
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#C7913B]" />
                  Analisis Lentera
                </h3>

                {insights ? (
                  <div className="space-y-2">
                    <p className="text-slate-200 text-sm leading-relaxed">
                      Kamu telah mencatat{" "}
                      <strong className="text-white">
                        {insights.totalCount} entri
                      </strong>
                      .
                      {insights.topTrigger && (
                        <span>
                          {" "}
                          Sepertinya{" "}
                          <strong className="text-[#C7913B] bg-white/10 px-2 py-0.5 rounded">
                            {insights.topTrigger}
                          </strong>{" "}
                          sering menjadi pemicu mood kamu belakangan ini.
                        </span>
                      )}
                    </p>
                    {insights.chartData.length > 0 && (
                      <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
                        <Activity className="w-3 h-3 text-[#C7913B]" />
                        Mood Terakhir:{" "}
                        {insights.chartData[insights.chartData.length - 1].mood}
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-slate-300 text-sm">
                    Belum cukup data untuk memberikan analisis. Mulailah
                    mencatat hari ini!
                  </p>
                )}
              </div>

              {/* Decorative Blob */}
              <div className="absolute right-0 top-0 w-48 h-48 bg-[#C7913B] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
            </div>

            {/* History List */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-[#2E5063] mb-4">Riwayat Catatan</h3>

              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200">
                {isLoading ? (
                  <p className="text-center text-slate-400 text-sm py-4">
                    Memuat data...
                  </p>
                ) : entries.length === 0 ? (
                  <div className="text-center py-8 text-slate-400 border-2 border-dashed border-slate-100 rounded-xl">
                    <p className="text-sm">Belum ada catatan.</p>
                  </div>
                ) : (
                  entries.map((entry) => (
                    <div
                      key={entry.id}
                      className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#C7913B]/30 transition group relative"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl bg-white p-2 rounded-xl shadow-sm border border-slate-100">
                            {moods.find((m) => m.label === entry.mood)?.emoji}
                          </span>
                          <div>
                            <p className="font-bold text-slate-700 text-sm">
                              {entry.mood}
                            </p>
                            <p className="text-xs text-slate-400">
                              {new Date(entry.date).toLocaleDateString(
                                "id-ID",
                                {
                                  weekday: "long",
                                  day: "numeric",
                                  month: "long",
                                },
                              )}
                            </p>
                          </div>
                        </div>
                        {/* Tombol Hapus per Item */}
                        <button
                          onClick={() =>
                            entry.id && handleDeleteEntry(entry.id)
                          }
                          className="p-2 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"
                          title="Hapus catatan ini"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {entry.triggers.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2 pl-[3.25rem]">
                          {entry.triggers.map((trigger) => (
                            <span
                              key={trigger}
                              className="px-2 py-0.5 bg-slate-200 text-slate-600 text-[10px] rounded-md font-medium"
                            >
                              {trigger}
                            </span>
                          ))}
                        </div>
                      )}

                      {entry.note && (
                        <p className="text-xs text-slate-600 italic pl-[3.25rem] border-l-2 border-[#C7913B]/20 ml-1 py-1">
                          "{entry.note}"
                        </p>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Bridge Modal (Tetap Sama) */}
      {showBridgeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in-95">
            <div className="w-16 h-16 bg-[#FDF3E3] rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-[#C7913B]" />
            </div>
            <h3 className="text-2xl font-bold text-[#2E5063] mb-2">
              Harimu Tampak Berat?
            </h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              Kami menyadari kamu sedang merasa kurang baik. Tidak apa-apa. Jika
              butuh teman cerita, Relawan kami siap mendengarkan secara anonim.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setShowBridgeModal(false);
                  setCurrentPage("curhat");
                }}
                className="w-full py-3 rounded-xl text-white bg-[#2E5063] hover:bg-[#1D3442] font-bold transition shadow-lg shadow-[#2E5063]/20"
              >
                Ya, Aku Mau Cerita
              </button>
              <button
                onClick={() => setShowBridgeModal(false)}
                className="w-full py-3 rounded-xl text-slate-500 hover:bg-slate-100 font-medium transition"
              >
                Nanti Saja
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
