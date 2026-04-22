"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  Send,
  Copy,
  Check,
  Clock,
  Search,
  MessageCircle,
  Ticket,
  AlertCircle,
  Lock,
  RefreshCcw,
} from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";
import { db, auth } from "@/lib/firebase";
import {
  setDoc, // Menggunakan setDoc untuk custom ID
  getDoc,
  doc,
} from "firebase/firestore";
import { signInAnonymously, onAuthStateChanged, User } from "firebase/auth";

interface CurhatEntry {
  id: string;
  userId: string;
  topic: string;
  message: string;
  timestamp: string;
  reply?: string;
  ticketId: string;
  isAnonymous: boolean;
  category: string;
  isUrgent: boolean;
}

export default function Curhat() {
  const [tab, setTab] = useState<"write" | "check">("write");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [checkTicket, setCheckTicket] = useState("");
  const [copied, setCopied] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [checkedCurhat, setCheckedCurhat] = useState<CurhatEntry | null>(null);
  const [checkingStatus, setCheckingStatus] = useState<
    "idle" | "loading" | "found" | "not_found" | "error"
  >("idle");
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [category, setCategory] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

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
          .catch((error) => {
            console.error("Anonymous sign-in error", error);
          });
      }
    });
    return () => unsubscribe();
  }, []);

  // Fungsi Generate ID Manusiawi (YABI-XXXX)
  // Fungsi Generate ID Manusiawi (LJ-XXXX)
  const generateTicketId = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `LJ-${randomNum}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic || !message || !category || !currentUserId) return;

    setIsSubmitting(true);
    try {
      const newTicketId = generateTicketId();

      const curhatData = {
        userId: currentUserId,
        topic,
        message,
        timestamp: new Date().toISOString(),
        ticketId: newTicketId,
        isAnonymous,
        category,
        isUrgent,
      };

      // Simpan dengan Custom ID sebagai Document ID
      await setDoc(doc(db, "curhats", newTicketId), curhatData);

      setTicketId(newTicketId);
      setSubmitted(true);
      setTopic("");
      setMessage("");
      setCategory("");
      setIsUrgent(false);
    } catch (error) {
      console.error("Error submitting curhat:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyTicket = () => {
    navigator.clipboard.writeText(ticketId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCheckTicket = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!checkTicket) return;

    setCheckingStatus("loading");
    setCheckedCurhat(null);

    try {
      const docRef = doc(db, "curhats", checkTicket);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCheckedCurhat({ id: docSnap.id, ...docSnap.data() } as CurhatEntry);
        setCheckingStatus("found");
      } else {
        setCheckingStatus("not_found");
      }
    } catch (error) {
      console.error("Error checking ticket:", error);
      setCheckingStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-nara-blue-light py-24 px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-medium text-nara-charcoal mb-4">
            Cerita ke Kami
          </h2>
          <p className="text-nara-charcoal text-lg font-medium mb-2">
            Ruang Aman Untuk Menceritakan Pengalamanmu
          </p>
          <p className="text-nara-muted text-base italic">
            Ceritamu akan dijaga. Kami di sini untuk mendengarkan, bukan menghakimi.
          </p>
        </div>
      </AnimatedSection>

      {/* Tabs Navigation */}
      <AnimatedSection delay={0.1}>
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 flex relative">
            <button
              onClick={() => setTab("write")}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 z-10 ${
                tab === "write"
                  ? "bg-[#F6C453] text-slate-800 shadow-md"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              Tulis Cerita
            </button>
            <button
              onClick={() => setTab("check")}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 z-10 ${
                tab === "check"
                  ? "bg-[#F6C453] text-slate-800 shadow-md"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <Ticket className="w-4 h-4" />
              Cek Tiket
            </button>
          </div>
        </div>
      </AnimatedSection>

      <div className="max-w-[600px] mx-auto">
        <AnimatedSection delay={0.1}>
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm border-l-4 border-nara-orange p-3 rounded-r-lg shadow-sm mb-6">
            <Lock className="w-4 h-4 text-nara-orange" />
            <p className="text-sm text-nara-charcoal font-medium">
              Semua cerita diterima secara anonim dan dijaga kerahasiaannya.
            </p>
          </div>
        </AnimatedSection>

        {/* WRITE MODE */}
        {tab === "write" && (
          <AnimatedSection delay={0.2}>
            {!submitted ? (
              <div className="bg-white rounded-xl shadow-soft border border-slate-200 overflow-hidden">
                <div className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-[#2E5063] mb-2">
                        Topik Apa yang Menggangu Pikiranmu?
                      </label>
                      <select
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2E5063] focus:ring-2 focus:ring-[#2E5063]/10 outline-none transition text-slate-700 font-medium appearance-none"
                      >
                        <option value="" disabled>
                          Pilih kategori cerita...
                        </option>
                        <option value="Perundungan Fisik">Perundungan Fisik</option>
                        <option value="Perundungan Verbal">Perundungan Verbal (Ejekan/Hinaan)</option>
                        <option value="Cyberbullying">Cyberbullying / Perundungan Daring</option>
                        <option value="Pengucilan">Pengucilan Sosial</option>
                        <option value="Pengalaman Masa Lalu">Pengalaman Masa Lalu</option>
                        <option value="Saksi Perundungan">Saya Saksi Perundungan</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-nara-charcoal mb-2">
                        Kategori Peran Kamu
                      </label>
                      <div className="flex flex-col gap-3">
                        {["Saya korban perundungan", "Saya melihat teman di-bully", "Saya pelaku & ingin berubah", "Saya ingin belajar lebih"].map((cat) => (
                          <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                            <input 
                              type="radio" 
                              name="kategori" 
                              value={cat}
                              checked={category === cat}
                              onChange={() => setCategory(cat)}
                              className="w-4 h-4 text-nara-orange border-slate-300 focus:ring-nara-orange bg-slate-50"
                            />
                            <span className={`text-base transition-colors ${category === cat ? "text-nara-charcoal font-medium" : "text-slate-600 group-hover:text-nara-charcoal"}`}>
                              {cat}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-nara-charcoal mb-2">
                        Apa yang Kamu Alami?
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={6}
                        className="w-full p-3 rounded-lg bg-white border border-slate-200 focus:border-nara-orange focus:ring-1 focus:ring-nara-orange outline-none transition text-nara-charcoal resize-none placeholder:text-slate-400 text-base"
                        placeholder="Ceritakan pengalamanmu... (minimal 50 kata)"
                      ></textarea>
                      <div className="flex flex-col gap-3 mt-4">
                        <label className="flex items-center gap-2 text-sm text-slate-600 font-medium cursor-pointer">
                          <input type="checkbox" checked={isAnonymous} onChange={(e) => setIsAnonymous(e.target.checked)} className="w-4 h-4 text-[#F2994A] rounded border-slate-300 focus:ring-[#F2994A]" />
                          Kirim tanpa mengidentifikasi profil (Anonim)
                        </label>

                        <div className="bg-[#FFF8EC] p-4 rounded-xl border border-[#F6C453]/30">
                          <label className="flex items-start gap-3 cursor-pointer">
                            <input type="checkbox" checked={isUrgent} onChange={(e) => setIsUrgent(e.target.checked)} className="w-5 h-5 mt-0.5 text-red-500 rounded border-slate-300 focus:ring-red-500" />
                            <div>
                               <span className="block text-sm font-bold text-red-600">SEVERITY CHECK: Ini adalah Situasi Darurat!</span>
                               <span className="block text-xs text-slate-500 mt-1">Gunakan opsi ini hanya jika kamu/temanmu berada dalam ancaman fisik atau dalam keadaan kritis. Tim Youth Anti-Bullying Indonesia akan memprioritaskan tiketmu dan jika diperlukan mengarahkanmu ke Crisis Line.</span>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={!topic || !message || !category || isSubmitting}
                      className="w-full h-[48px] bg-nara-orange hover:bg-[#E08A44] disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 text-base"
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse">Mengirim...</span>
                      ) : (
                        <>
                          <Send className="w-5 h-5" /> Kirim Cerita
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              // SUCCESS STATE - TICKET VIEW
              <div className="bg-white rounded-xl shadow-soft border border-slate-200 p-8 md:p-12 text-center text-nara-charcoal relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-nara-blue-light rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
                    <Check className="w-8 h-8 text-nara-orange" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">Terima kasih atas kepercayaanmu!</h3>
                  <p className="text-slate-600 mb-8 max-w-sm mx-auto text-base">
                    Ceritamu telah diterima. Volunteer kami akan merespons dalam 24-48 jam. Kamu tidak sendirian.
                  </p>

                  {/* TICKET CARD */}
                  <div className="bg-white text-[#2E5063] rounded-xl p-1 max-w-sm mx-auto shadow-lg transform hover:scale-105 transition duration-300">
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 relative">
                      <div className="absolute -left-4 top-1/2 w-6 h-6 bg-[#2E5063] rounded-full transform -translate-y-1/2"></div>
                      <div className="absolute -right-4 top-1/2 w-6 h-6 bg-[#2E5063] rounded-full transform -translate-y-1/2"></div>

                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Kode Tiket Anda
                      </p>
                      <h4 className="text-4xl font-mono font-bold text-[#2E5063] tracking-wider mb-4">
                        {ticketId}
                      </h4>

                      <button
                        onClick={handleCopyTicket}
                        className="w-full py-2 bg-[#E6EFF2] hover:bg-slate-200 text-[#2E5063] font-bold rounded-lg text-sm flex items-center justify-center gap-2 transition"
                      >
                        {copied ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                        {copied ? "Tersalin!" : "Salin Kode"}
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mt-6">
                    *Simpan kode ini. Kamu membutuhkannya untuk mengecek
                    balasan.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-slate-500 hover:text-nara-orange text-sm font-medium underline underline-offset-4"
                  >
                    Kirim cerita lain
                  </button>
                </div>
              </div>
            )}
          </AnimatedSection>
        )}

        {/* CHECK MODE */}
        {tab === "check" && (
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden p-8 md:p-10 min-h-[400px] flex flex-col">
              {/* Search Bar */}
              <form onSubmit={handleCheckTicket} className="relative mb-8">
                <input
                  type="text"
                  value={checkTicket}
                  onChange={(e) => setCheckTicket(e.target.value.toUpperCase())}
                  placeholder="Masukkan Kode Tiket (Contoh: LJ-8821)"
                  className="w-full pl-5 pr-16 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#F2994A] focus:ring-2 focus:ring-[#F2994A]/20 outline-none font-mono uppercase text-lg text-[#2E5063] placeholder:normal-case placeholder:font-sans"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 aspect-square bg-[#2E5063] hover:bg-[#1D3442] text-white rounded-xl flex items-center justify-center transition"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>

              {/* Result States */}
              <div className="flex-grow flex flex-col justify-center">
                {checkingStatus === "idle" && (
                  <div className="text-center text-slate-400">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8" />
                    </div>
                    <p>Masukkan kode tiket yang Anda dapatkan sebelumnya.</p>
                  </div>
                )}

                {checkingStatus === "loading" && (
                  <div className="text-center text-[#2E5063] animate-pulse">
                    <RefreshCcw className="w-8 h-8 mx-auto mb-4 animate-spin" />
                    <p className="font-medium">Mencari tiket...</p>
                  </div>
                )}

                {checkingStatus === "not_found" && (
                  <div className="text-center text-red-500 bg-red-50 p-6 rounded-2xl border border-red-100">
                    <AlertCircle className="w-8 h-8 mx-auto mb-3" />
                    <p className="font-bold">Tiket Tidak Ditemukan</p>
                    <p className="text-sm opacity-80 mt-1">
                      Periksa kembali kode tiket Anda. Pastikan huruf
                      besar/kecil sesuai.
                    </p>
                  </div>
                )}

                {checkingStatus === "found" && checkedCurhat && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                    {/* User Message */}
                    <div className="flex flex-col items-end">
                      <div className="bg-[#E6EFF2] text-[#2E5063] p-5 rounded-2xl rounded-tr-none max-w-[90%]">
                        <p className="text-xs font-bold uppercase text-[#C7913B] mb-1">
                          {checkedCurhat.topic}
                        </p>
                        <p className="leading-relaxed">
                          {checkedCurhat.message}
                        </p>
                      </div>
                      <span className="text-xs text-slate-400 mt-2 mr-2">
                        {new Date(checkedCurhat.timestamp).toLocaleDateString(
                          "id-ID",
                          {
                            weekday: "long",
                            day: "numeric",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          },
                        )}
                      </span>
                    </div>

                    {/* Reply */}
                    <div className="flex flex-col items-start">
                      {checkedCurhat.reply ? (
                        <>
                          <div className="flex items-center gap-2 mb-2 ml-2">
                            <div className="w-6 h-6 bg-[#F2994A] rounded-full flex items-center justify-center text-white text-xs">
                              LJ
                            </div>
                            <span className="text-xs font-bold text-[#F2994A]">
                              Relawan Youth Anti-Bullying Indonesia
                            </span>
                          </div>
                          <div className="bg-gradient-to-br from-[#2E5063] to-[#1D3442] text-white p-6 rounded-2xl rounded-tl-none shadow-lg max-w-[95%]">
                            <p className="leading-relaxed">
                              {checkedCurhat.reply}
                            </p>
                          </div>
                        </>
                      ) : (
                        <div className="flex items-center gap-3 text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100 w-full">
                          <Clock className="w-5 h-5" />
                          <p className="text-sm">
                            Pesan ini belum dibalas. Mohon tunggu, relawan kami
                            sedang membaca ceritamu.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
