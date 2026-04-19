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
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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
            limit(30),
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

      if (["Lelah", "Sedih", "Cemas"].includes(newEntry.mood)) {
        const lastShown = localStorage.getItem("bridgeModalLastShown");
        const now = new Date().getTime();
        const COOLDOWN = 12 * 60 * 60 * 1000;

        if (!lastShown || now - parseInt(lastShown) > COOLDOWN) {
          setShowBridgeModal(true);
          localStorage.setItem("bridgeModalLastShown", now.toString());
        }
      }
    } catch (error) {
      console.error("Error saving journal entry:", error);
    }
  };

  const insights = useMemo(() => {
    if (entries.length === 0) return null;

    const chartData = [...entries].reverse().map((e) => ({
      date: new Date(e.date).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
      }),
      score: moodScores[e.mood] || 3,
      mood: e.mood,
    }));

    const negativeEntries = entries.filter((e) =>
      ["Cemas", "Sedih", "Lelah"].includes(e.mood),
    );
    const triggerCounts: Record<string, number> = {};
    negativeEntries.forEach((e) => {
      e.triggers.forEach((t) => {
        triggerCounts[t] = (triggerCounts[t] || 0) + 1;
      });
    });

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
      <div className="bg-nara-paper min-h-screen pt-24 pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-nara-orange font-bold tracking-wider text-xs uppercase bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-full mb-6">
                <Lock className="w-3 h-3" />
                Refleksi Diri Privat
              </span>
              <h2 className="font-serif text-5xl md:text-6xl font-medium text-nara-charcoal mt-2 mb-4 leading-tight">
                Jurnal <span className="italic text-nara-orange">Rasa.</span>
              </h2>
              <p className="text-slate-600 mt-2 max-w-xl mx-auto leading-[1.7]">
                Kenali pola emosimu. Data ini <strong>100% Privat</strong> dan milikmu seutuhnya. Tidak ada yang bisa membacanya melainkan dirimu sendiri.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Input Section */}
            <AnimatedSection delay={0.2} className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-soft h-full relative overflow-hidden sticky top-28 hover:border-nara-orange hover:shadow-soft-lg transition-all">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-nara-orange to-orange-200"></div>

                <h3 className="font-serif text-2xl font-medium text-nara-charcoal mb-8 text-center flex items-center justify-center gap-2">
                  ✍️ Catat Hari Ini
                </h3>

                {/* Mood */}
                <div className="mb-8">
                  <label className="text-xs font-bold text-slate-400 uppercase mb-4 block">
                    Perasaanmu?
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {moods.map((mood) => (
                      <button
                        key={mood.label}
                        onClick={() => setSelectedMood(mood.label)}
                        className={`flex flex-col items-center gap-1 p-2 rounded-xl transition ${
                          selectedMood === mood.label
                            ? "bg-nara-orange text-white shadow-soft-lg scale-105"
                            : "bg-slate-50 border border-slate-100 text-slate-500 hover:bg-slate-100"
                        }`}
                      >
                        <span className="text-2xl mt-1">{mood.emoji}</span>
                        <span className={`text-[10px] font-bold ${selectedMood === mood.label ? "text-white" : "text-slate-500"}`}>
                          {mood.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Triggers */}
                <div className="mb-8">
                  <label className="text-xs font-bold text-slate-400 uppercase mb-4 block">
                    Faktor Kondisi?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {triggersList.map((trigger) => (
                      <button
                        key={trigger}
                        onClick={() => handleToggleTrigger(trigger)}
                        className={`px-4 py-2 rounded-full border text-xs font-medium transition ${
                          selectedTriggers.includes(trigger)
                            ? "bg-nara-charcoal text-white border-nara-charcoal shadow-sm"
                            : "bg-white text-slate-600 border-slate-200 hover:border-nara-orange"
                        }`}
                      >
                        {trigger}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Note */}
                <div className="mb-8">
                  <label className="text-xs font-bold text-slate-400 uppercase mb-3 flex justify-between items-center">
                    <span>Catatan (Bebas)</span>
                    <Lock className="w-3 h-3 text-slate-300" />
                  </label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-nara-orange outline-none text-sm resize-none bg-slate-50 transition-colors"
                    placeholder="Tumpahkan semua yang kamu rasakan tanpa filter..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSave}
                  disabled={!selectedMood}
                  className="w-full h-[48px] bg-nara-orange hover:bg-[#D47125] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition shadow-soft flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Simpan Jurnal
                </button>
              </div>
            </AnimatedSection>

            {/* Insight & History Section */}
            <AnimatedSection delay={0.4} className="lg:col-span-2 space-y-6">
              
              {/* GRAPH CARD */}
              {insights && insights.chartData.length > 1 && (
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-soft">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-serif text-2xl font-medium text-nara-charcoal flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-nara-orange" />
                      Kurva Emosi
                    </h3>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      Seminggu Terakhir
                    </span>
                  </div>

                  <div className="h-[240px] w-full">
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
                              stopColor="#F2994A"
                              stopOpacity={0.4}
                            />
                            <stop
                              offset="95%"
                              stopColor="#F2994A"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          vertical={false}
                          stroke="#f1f5f9"
                        />
                        <XAxis
                          dataKey="date"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 11, fill: "#94a3b8", fontWeight: 600 }}
                          dy={10}
                        />
                        <YAxis hide domain={[0, 6]} />
                        <Tooltip
                          contentStyle={{
                            borderRadius: "12px",
                            border: "none",
                            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                            fontWeight: 600
                          }}
                          cursor={{
                            stroke: "#F2994A",
                            strokeWidth: 1,
                            strokeDasharray: "4 4",
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="score"
                          stroke="#F2994A"
                          strokeWidth={3}
                          fillOpacity={1}
                          fill="url(#colorMood)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {/* SMART INSIGHT CARD */}
              <div className="bg-nara-charcoal rounded-2xl p-8 text-white relative overflow-hidden shadow-soft-lg transform hover:scale-[1.01] transition-transform">
                <div className="absolute right-0 top-0 w-64 h-64 bg-nara-orange/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl font-medium mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-nara-orange" />
                    Analisis Lentera
                  </h3>

                  {insights ? (
                    <div className="space-y-4">
                      <p className="text-slate-300 text-base leading-[1.7]">
                        Kamu telah mencatat{" "}
                        <strong className="text-white">
                          {insights.totalCount} entri
                        </strong>
                        .
                        {insights.topTrigger && (
                          <span>
                            {" "}
                            Berdasarkan pola ini, tampak bahwa{" "}
                            <strong className="text-nara-charcoal bg-nara-orange px-2 py-0.5 rounded-md font-bold mx-1">
                              {insights.topTrigger}
                            </strong>{" "}
                            sering menjadi pemicu beban emosionalmu.
                          </span>
                        )}
                      </p>
                      {insights.chartData.length > 0 && (
                        <div className="inline-flex items-center gap-2 text-xs font-bold text-nara-orange bg-nara-orange/10 px-4 py-2 rounded-lg border border-nara-orange/20 tracking-wider">
                          <Activity className="w-4 h-4" />
                          MOOD TERAKHIR:{" "}
                          <span className="text-white">{insights.chartData[insights.chartData.length - 1].mood}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-slate-300 leading-[1.7]">
                      Belum cukup data untuk membaca pola emosimu. Teruslah mencatat untuk memetakan pikiranmu!
                    </p>
                  )}
                </div>
              </div>

              {/* History List */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-soft overflow-hidden">
                <div className="p-8 border-b border-slate-100">
                  <h3 className="font-serif text-2xl font-medium text-nara-charcoal">Riwayat Catatan</h3>
                </div>

                <div className="p-4 space-y-3 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 pr-2">
                  {isLoading ? (
                    <p className="text-center text-slate-400 text-sm py-10 font-medium">
                      Mengambil data pribadimu...
                    </p>
                  ) : entries.length === 0 ? (
                    <div className="text-center py-12 text-slate-400 border-2 border-dashed border-slate-100 rounded-xl m-4">
                      <p className="font-medium">Belum ada goresan jurnal.</p>
                      <p className="text-xs mt-1">Satu kalimat pun sudah cukup untuk memulai.</p>
                    </div>
                  ) : (
                    entries.map((entry) => (
                      <div
                        key={entry.id}
                        className="p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-nara-orange hover:shadow-md transition-all group relative"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-xl border border-slate-100 shadow-sm text-2xl">
                              {moods.find((m) => m.label === entry.mood)?.emoji}
                            </div>
                            <div>
                              <p className="font-bold text-nara-charcoal text-base">
                                {entry.mood}
                              </p>
                              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
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
                          <button
                            onClick={() =>
                              entry.id && handleDeleteEntry(entry.id)
                            }
                            className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                            title="Hapus catatan ini"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {entry.triggers.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3 pl-[4rem]">
                            {entry.triggers.map((trigger) => (
                              <span
                                key={trigger}
                                className="px-2 py-1 bg-slate-100 border border-slate-200 text-slate-600 text-[10px] rounded-md font-bold uppercase tracking-wider"
                              >
                                {trigger}
                              </span>
                            ))}
                          </div>
                        )}

                        {entry.note && (
                          <p className="text-sm text-slate-600 leading-[1.6] pl-[4rem] border-l-2 border-nara-orange/20 ml-6 py-1">
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
      </div>

      {/* Bridge Modal (Tetap Sama, UI Disesuaikan) */}
      {showBridgeModal && (
        <div className="fixed inset-0 bg-slate-900/40 flex items-center justify-center z-50 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl p-8 md:p-10 max-w-sm w-full text-center shadow-2xl animate-in zoom-in-95">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-nara-orange" />
            </div>
            <h3 className="font-serif text-3xl font-medium text-nara-charcoal mb-4">
              Harimu Tampak Berat?
            </h3>
            <p className="text-slate-600 mb-8 leading-[1.7]">
              Kami menyadari kamu sedang merasa kurang baik. Tidak apa-apa. Jika
              butuh teman cerita, Relawan kami siap mendengarkan tanpa menghakimi.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setShowBridgeModal(false);
                  setCurrentPage("cerita");
                }}
                className="w-full h-[48px] rounded-xl text-white bg-nara-orange hover:bg-[#D47125] font-bold transition shadow-soft flex items-center justify-center"
              >
                Ya, Aku Butuh Teman Cerita
              </button>
              <button
                onClick={() => setShowBridgeModal(false)}
                className="w-full h-[48px] rounded-xl text-slate-500 hover:bg-slate-100 font-medium transition"
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
