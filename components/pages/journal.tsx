"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Save,
  Lock,
  Sparkles,
  Trash2,
  TrendingUp,
  Activity,
  Feather,
  Filter,
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
  {
    label: "Senang",
    emoji: "😊",
    score: 5,
    colors: {
      active: "bg-orange-500 text-white border-orange-500 shadow-orange-500/30",
      idle: "bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100",
    },
  },
  {
    label: "Biasa",
    emoji: "🙂",
    score: 4,
    colors: {
      active: "bg-slate-500 text-white border-slate-500 shadow-slate-500/30",
      idle: "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100",
    },
  },
  {
    label: "Lelah",
    emoji: "😮‍💨",
    score: 3,
    colors: {
      active: "bg-amber-500 text-white border-amber-500 shadow-amber-500/30",
      idle: "bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-100",
    },
  },
  {
    label: "Sedih",
    emoji: "😔",
    score: 2,
    colors: {
      active: "bg-blue-500 text-white border-blue-500 shadow-blue-500/30",
      idle: "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100",
    },
  },
  {
    label: "Cemas",
    emoji: "😰",
    score: 1,
    colors: {
      active: "bg-rose-500 text-white border-rose-500 shadow-rose-500/30",
      idle: "bg-rose-50 text-rose-600 border-rose-200 hover:bg-rose-100",
    },
  },
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

type FilterType = "Semua" | "Minggu Ini" | "Mood Negatif";

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
  const [activeFilter, setActiveFilter] = useState<FilterType>("Semua");

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

    // Empathic Narrative Builder
    let narrative = `Kamu telah mencatat ${entries.length} momen di jurnal ini. Setiap langkah kecil itu berharga.`;
    if (negativeEntries.length > 2 && topTrigger) {
      narrative = `Kamu tampak merasa kurang baik belakangan ini, dan tampaknya isu '${topTrigger}' sering membebanimu. Tidak apa-apa untuk merasa lelah. Ingatlah untuk mengambil jeda dan menghargai dirimu.`;
    } else if (negativeEntries.length > 0 && topTrigger) {
      narrative = `Beberapa kerisauanmu bersumber dari '${topTrigger}'. Jangan ragu untuk melepaskannya perlahan di sini.`;
    } else if (entries.length > 3) {
      narrative = `Kamu menjaga kestabilanmu dengan baik akhir-akhir ini! Teruslah memetakan terang dan redup emosimu bersama kami.`;
    }

    return {
      chartData,
      topTrigger,
      negativeCount: negativeEntries.length,
      totalCount: entries.length,
      narrative,
    };
  }, [entries]);

  // Filtering Logic
  const filteredEntries = useMemo(() => {
    if (activeFilter === "Menurut Negatif" || activeFilter === "Mood Negatif") {
      return entries.filter(e => ["Cemas", "Sedih", "Lelah"].includes(e.mood));
    }
    if (activeFilter === "Minggu Ini") {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      return entries.filter(e => new Date(e.date) >= sevenDaysAgo);
    }
    return entries; // "Semua"
  }, [entries, activeFilter]);

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

                {/* Mood - REVISED: Dynamic Colored Buttons */}
                <div className="mb-8">
                  <label className="text-xs font-bold text-slate-400 uppercase mb-4 block">
                    Perasaanmu?
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {moods.map((mood) => {
                      const isActive = selectedMood === mood.label;
                      return (
                        <button
                          key={mood.label}
                          onClick={() => setSelectedMood(mood.label)}
                          className={`flex flex-col items-center gap-1.5 py-3 px-1 rounded-xl border transition-all duration-300 transform ${
                            isActive
                              ? `scale-105 shadow-md ${mood.colors.active}`
                              : `scale-100 ${mood.colors.idle}`
                          }`}
                        >
                          <span className={`text-2xl mt-1 transition-transform ${isActive ? "scale-110" : ""}`}>{mood.emoji}</span>
                          <span
                            className={`text-[9px] sm:text-[10px] font-bold ${
                              isActive ? "text-white" : "text-slate-500"
                            }`}
                          >
                            {mood.label}
                          </span>
                        </button>
                      );
                    })}
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
                        className={`px-4 py-2 rounded-full border text-xs font-medium transition-all duration-300 ${
                          selectedTriggers.includes(trigger)
                            ? "bg-nara-charcoal text-white border-nara-charcoal shadow-sm scale-105"
                            : "bg-white text-slate-600 border-slate-200 hover:border-nara-orange hover:text-nara-orange"
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-nara-orange focus:ring-2 focus:ring-nara-orange/20 outline-none text-sm resize-none bg-slate-50 transition-all"
                    placeholder="Tumpahkan semua yang kamu rasakan tanpa filter..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSave}
                  disabled={!selectedMood}
                  className="w-full h-[52px] font-serif text-lg bg-nara-orange hover:bg-[#D47125] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-all duration-300 shadow-[0_8px_20px_rgba(242,153,74,0.3)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  Simpan Jurnal
                </button>
              </div>
            </AnimatedSection>

            {/* Insight & History Section */}
            <AnimatedSection delay={0.4} className="lg:col-span-2 space-y-6">
              
              {/* SMART INSIGHT CARD (Narrative Upgrade) */}
              <div className="bg-nara-charcoal rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-soft-lg group cursor-default">
                <div className="absolute right-0 top-0 w-80 h-80 bg-nara-orange/20 rounded-full blur-[80px] transform translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-1000"></div>
                <div className="relative z-10">
                  <h3 className="font-serif text-3xl font-medium mb-6 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-nara-orange" />
                    Bincang Batin Lentera
                  </h3>

                  {insights ? (
                    <div className="space-y-6">
                      <p className="text-slate-200 text-lg md:text-xl font-serif italic leading-[1.7] border-l-2 border-nara-orange pl-6 my-6">
                        "{insights.narrative}"
                      </p>
                      
                      <div className="flex flex-wrap gap-3 pt-2">
                        <div className="inline-flex items-center gap-2 text-xs font-bold text-nara-orange bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/10 uppercase tracking-wider">
                          <Activity className="w-4 h-4" />
                          Mood Tren: <span className="text-white">{insights.chartData.length > 0 ? insights.chartData[insights.chartData.length - 1].mood : "Belum Ada"}</span>
                        </div>
                        {insights.topTrigger && (
                           <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 bg-white/5 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/5 uppercase tracking-wider">
                              Dominan: <span className="text-nara-orange">{insights.topTrigger}</span>
                           </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <p className="text-slate-300 text-lg leading-[1.7] italic mb-4">
                      Kami menantimu menulis cerita pertamamu di sisi kiri layar. Jangan sungkan.
                    </p>
                  )}
                </div>
              </div>

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

              {/* History List Header & Filters */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-soft overflow-hidden flex flex-col">
                <div className="p-6 md:p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h3 className="font-serif text-2xl font-medium text-nara-charcoal">Riwayat Catatan</h3>
                  
                  {/* Filter Tabs */}
                  {entries.length > 0 && (
                    <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100">
                      {(["Semua", "Minggu Ini", "Mood Negatif"] as FilterType[]).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveFilter(tab)}
                          className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                            activeFilter === tab 
                            ? "bg-white text-nara-orange shadow-sm" 
                            : "text-slate-500 hover:text-nara-charcoal"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* List Container with Staggered Entries */}
                <div className="p-6 md:p-8 space-y-4 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
                  {isLoading ? (
                    <div className="animate-pulse flex flex-col gap-4">
                       <div className="h-24 bg-slate-50 rounded-xl w-full"></div>
                       <div className="h-24 bg-slate-50 rounded-xl w-full"></div>
                    </div>
                  ) : filteredEntries.length === 0 ? (
                     /* EMPTY STATE AESTHETIC */
                    <div className="text-center py-16 flex flex-col items-center justify-center animate-fade-up">
                      <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-nara-orange mb-6 shadow-inner">
                        <Feather className="w-10 h-10" />
                      </div>
                      <h4 className="font-serif text-2xl text-nara-charcoal mb-2">Halaman Masih Kosong</h4>
                      <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">
                        {activeFilter !== "Semua" 
                         ? `Tidak ada jurnal yang sesuai dengan filter "${activeFilter}".`
                         : "Ini adalah buku harian digital milik privasimu. Jangan ragu mencurahkan sedikit beban pikiranmu hari ini."}
                      </p>
                    </div>
                  ) : (
                    filteredEntries.map((entry, index) => {
                      const moodConf = moods.find((m) => m.label === entry.mood);
                      return (
                        <div
                          key={entry.id}
                          className="animate-fade-up p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {/* Accent Color Strip left side */}
                          <div className={`absolute top-0 left-0 bottom-0 w-1.5 ${moodConf ? moodConf.colors.active.split(' ')[0] : 'bg-slate-200'}`}></div>

                          <div className="flex justify-between items-start mb-3 pl-3">
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 flex items-center justify-center rounded-xl text-2xl ${moodConf ? moodConf.colors.idle.split('hover')[0] : 'bg-slate-50'}`}>
                                {moodConf?.emoji}
                              </div>
                              <div>
                                <p className="font-bold text-nara-charcoal text-base">
                                  {entry.mood}
                                </p>
                                <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">
                                  {new Date(entry.date).toLocaleDateString(
                                    "id-ID",
                                    {
                                      weekday: "long",
                                      day: "numeric",
                                      month: "short",
                                      hour: "2-digit",
                                      minute: "2-digit"
                                    },
                                  )}
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() =>
                                entry.id && handleDeleteEntry(entry.id)
                              }
                              className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all focus:opacity-100"
                              title="Hapus catatan ini"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="pl-[4.5rem]">
                            {entry.triggers.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-3">
                                {entry.triggers.map((trigger) => (
                                  <span
                                    key={trigger}
                                    className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] rounded-md font-bold uppercase tracking-wider"
                                  >
                                    {trigger}
                                  </span>
                                ))}
                              </div>
                            )}

                            {entry.note && (
                              <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100/50 mt-2">
                                <p className="text-sm text-slate-600 leading-[1.7] italic">
                                  "{entry.note}"
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Bridge Modal (Tetap Sama, UI Disesuaikan) */}
      {showBridgeModal && (
        <div className="fixed inset-0 bg-slate-900/60 flex items-center justify-center z-50 backdrop-blur-sm px-4 transition-all">
          <div className="bg-white rounded-3xl p-8 md:p-10 max-w-sm w-full text-center shadow-2xl animate-fade-up">
            <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Sparkles className="w-10 h-10 text-nara-orange" />
            </div>
            <h3 className="font-serif text-3xl font-medium text-nara-charcoal mb-4">
              Harimu Tampak Berat?
            </h3>
            <p className="text-slate-600 mb-8 leading-[1.7]">
              Kami menyadari akhir-akhir ini kamu merasa kurang baik. Tidak apa-apa untuk kelelahan. Jika kamu butuh tempat cerita yang aman, Relawan kami selalu ada untuk mendengarkan tanpa menghakimi.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setShowBridgeModal(false);
                  setCurrentPage("cerita");
                }}
                className="w-full h-[52px] rounded-xl text-white bg-nara-orange hover:bg-[#D47125] font-bold transition-all shadow-[0_8px_20px_rgba(242,153,74,0.3)] hover:-translate-y-0.5 flex items-center justify-center"
              >
                Cari Bantuan / Teman Cerita
              </button>
              <button
                onClick={() => setShowBridgeModal(false)}
                className="w-full h-[52px] rounded-xl text-slate-500 hover:bg-slate-100 hover:text-nara-charcoal font-bold transition-colors"
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
