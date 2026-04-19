"use client";

import { useState } from "react";
import {
  ArrowRight,
  Heart,
  BookOpen,
  Wind,
  ChevronDown,
  Ear,
  AlertCircle,
  FileText,
  Users,
  Phone,
  X,
} from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";
import HowItWorks from "@/components/how-it-works";

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

// DATA PROGRAM (Dipindahkan dari pages/programs.tsx)
const programsData = [
  {
    icon: Ear,
    title: "Active Listening",
    shortDesc:
      "Layanan curhat di mana kamu didengarkan sepenuhnya tanpa dihakimi.",
    longDesc:
      "Di sini, kamu bisa mencurahkan segala perasaan dan pikiranmu kepada seorang teman sebaya yang terlatih untuk mendengarkan secara aktif. Tujuannya adalah memberikan ruang aman bagimu untuk didengar dan divalidasi, bukan untuk dihakimi atau diberi solusi instan yang menggurui.",
  },
  {
    icon: Heart,
    title: "Psychological First Aid",
    shortDesc:
      "Pertolongan pertama untuk mendukung mahasiswa dalam situasi krisis.",
    longDesc:
      "PFA adalah serangkaian tindakan suportif yang diberikan kepada seseorang yang baru saja mengalami peristiwa stres yang signifikan. Ini bukan konseling, melainkan bantuan praktis untuk menenangkan, mengurangi tingkat stres, dan menghubungkan dengan bantuan lebih lanjut.",
  },
  {
    icon: AlertCircle,
    title: "Deteksi Dini",
    shortDesc:
      "Mengidentifikasi tanda-tanda stres, cemas, atau burnout sejak awal.",
    longDesc:
      "Melalui kuesioner mandiri dan edukasi, kami membantu mahasiswa untuk lebih peka terhadap perubahan kondisi mental mereka. Mengenali gejala lebih awal dapat mencegah masalah menjadi lebih serius dan mempercepat proses pemulihan.",
  },
  {
    icon: FileText,
    title: "Pendampingan Holistik",
    shortDesc: "Dukungan emosional menyeluruh yang disesuaikan kebutuhan.",
    longDesc:
      "Kami melihat setiap individu secara utuh. Pendampingan ini mencakup dukungan emosional, bantuan dalam manajemen waktu, hingga diskusi tentang gaya hidup sehat yang semuanya berpengaruh pada kesehatan mental.",
  },
  {
    icon: Users,
    title: "Peer Community",
    shortDesc:
      "Membangun komunitas saling dukung antar mahasiswa yang inklusif.",
    longDesc:
      "Lentera Jiwa membangun komunitas inklusif. Kami mengadakan sesi diskusi kelompok dan workshop untuk memperkuat ikatan sosial dan mengurangi rasa isolasi bagi korban maupun saksi perundungan.",
  },
  {
    icon: Phone,
    title: "Rujukan Profesional",
    shortDesc: "Koneksi langsung dengan layanan psikolog P2K2 jika diperlukan.",
    longDesc:
      "Jika relawan kami merasa bahwa kamu membutuhkan bantuan lebih dari yang bisa kami tawarkan, kami akan dengan hati-hati dan suportif membantumu terhubung dengan psikolog profesional di P2K2 Unpad.",
  },
];

const featuredArticles = [
  {
    title: "Perbedaan Stres Akademik vs Burnout",
    category: "Artikel",
    summary:
      "Kenali perbedaan antara tekanan studi yang normal dan kelelahan emosional yang serius.",
  },
  {
    title: "Teknik Grounding 5-4-3-2-1",
    category: "Tips",
    summary:
      "Sebuah metode sederhana untuk mengatasi cemas dengan kembali ke saat ini.",
  },
  {
    title: "Cara Menjadi Pendengar Aktif",
    category: "Panduan",
    summary:
      "Belajar bagaimana memberikan dukungan yang berarti bagi teman yang sedang bercerita.",
  },
];

export default function Home({ setCurrentPage }: HomeProps) {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 lg:py-32 overflow-hidden min-h-[90vh] flex flex-col justify-center">
        <div className="absolute inset-0 animated-gradient-bg -z-10"></div>
        <div className="glow-orb orb-1 -z-10"></div>
        <div className="glow-orb orb-2 -z-10"></div>
        <div className="glow-orb orb-3 -z-10"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <AnimatedSection delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#E6EFF2] shadow-sm text-[#2E5063] text-sm font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-[#F2994A] animate-pulse"></span>
              Ruang Aman Anti-Perundungan
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Dari Asa <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F6C453] to-[#F2994A]">
                Menjadi Makna.
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Kami di sini bukan untuk menghakimi, tapi untuk menemani. Gerakan
              kolektif kesehatan mental untuk mencegah, mendidik, dan menangani perundungan.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => setCurrentPage("cerita")}
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-800 bg-[#F6C453] rounded-full hover:bg-[#F2994A] shadow-xl shadow-[#F6C453]/30 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                <Heart className="w-5 h-5 text-white" />
                Cerita ke Lentera
              </button>
              <button
                onClick={() => setCurrentPage("tentang")}
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-[#F2994A] bg-white/50 backdrop-blur-sm border border-slate-200 rounded-full hover:bg-white hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                Kenali Lentera Jiwa
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce opacity-50">
          <ChevronDown className="w-6 h-6 text-[#2E5063]" />
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <section className="bg-white py-10 relative z-10 -mt-16 sm:-mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl shadow-xl border border-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-100">
          <div className="px-4">
            <h3 className="text-3xl font-extrabold text-[#F2994A]">500+</h3>
            <p className="text-sm font-medium text-slate-500 mt-1">Cerita Dibaca</p>
          </div>
          <div className="px-4">
            <h3 className="text-3xl font-extrabold text-[#F2994A]">120+</h3>
            <p className="text-sm font-medium text-slate-500 mt-1">Sesi Konseling</p>
          </div>
          <div className="px-4">
            <h3 className="text-3xl font-extrabold text-[#F2994A]">4</h3>
            <p className="text-sm font-medium text-slate-500 mt-1">Cabang Kampus</p>
          </div>
          <div className="px-4">
            <h3 className="text-3xl font-extrabold text-[#F2994A]">24/7</h3>
            <p className="text-sm font-medium text-slate-500 mt-1">Dukungan</p>
          </div>
        </div>
      </section>

      {/* --- PROGRAM & LAYANAN (Pengganti Services) --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative z-10 rounded-t-[3rem] -mt-10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2E5063] mb-4">
                Program & Pendampingan
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Pendekatan komprehensif kami dalam menjaga kesehatan mentalmu.
                Klik kartu untuk detail.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programsData.map((program, idx) => {
              const Icon = program.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <button
                    onClick={() => setSelectedProgram(program)}
                    className="w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-[#C7913B]/50 hover:shadow-lg transition-all duration-300 group text-left h-full flex flex-col"
                  >
                    <div className="w-14 h-14 bg-[#FFF8EC] rounded-2xl flex items-center justify-center text-[#F2994A] mb-6 group-hover:bg-[#F2994A] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2E5063]">
                      {program.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                      {program.shortDesc}
                    </p>
                    <div className="mt-6 text-[#C7913B] text-sm font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      Baca Detail <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- CARA KERJA (HOW IT WORKS) - NEW UI --- */}
      <AnimatedSection>
        <HowItWorks />
      </AnimatedSection>

      {/* --- FEATURED ARTICLES --- */}
      <AnimatedSection>
        <section className="bg-[#E6EFF2] py-20 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-[#2E5063]">
                  Bacaan Pilihan
                </h2>
                <p className="text-slate-500 mt-2">
                  Insight singkat untuk bekal hari-harimu.
                </p>
              </div>
              <button
                onClick={() => setCurrentPage("kenali-perundungan")}
                className="hidden md:flex items-center gap-2 text-[#F2994A] font-bold hover:underline"
              >
                Lihat Semua <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 p-6 flex flex-col h-full cursor-pointer hover:-translate-y-1"
                  onClick={() => setCurrentPage("kenali-perundungan")}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#FDF3E3] flex items-center justify-center text-[#C7913B] mr-3">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#C7913B] uppercase tracking-wider bg-[#FDF3E3] px-2 py-1 rounded-md">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2E5063] mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 mb-6 text-sm leading-relaxed flex-grow">
                    {article.summary}
                  </p>
                  <div className="pt-4 border-t border-slate-50 text-[#2E5063] text-sm font-bold flex items-center gap-2 group">
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 md:hidden text-center">
              <button
                onClick={() => setCurrentPage("kenali-perundungan")}
                className="px-6 py-3 bg-white border border-slate-200 rounded-full text-[#F2994A] font-bold shadow-sm"
              >
                Lihat Semua Artikel
              </button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* --- FINAL CTA (CALM ZONE) --- */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-[#F6C453] to-[#F2994A] text-center relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{
              backgroundImage: "radial-gradient(#C7913B 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <Wind className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sedang Merasa Cemas atau Panik?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Kunjungi Ruang Tenang kami untuk panduan napas dan suara alam yang
              menenangkan.
            </p>
            <button
              onClick={() => setCurrentPage("calmzone")}
              className="px-8 py-4 bg-white hover:bg-slate-50 text-[#F2994A] font-bold rounded-full transition shadow-xl transform hover:scale-105"
            >
              Masuk Ruang Tenang
            </button>
          </div>
        </section>
      </AnimatedSection>

      {/* MODAL DETAIL PROGRAM */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl animate-in zoom-in-95">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 bg-[#2E5063] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-[#2E5063]/20">
              <selectedProgram.icon className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-[#2E5063] mb-4">
              {selectedProgram.title}
            </h2>
            <div className="prose prose-slate text-slate-600 leading-relaxed">
              <p>{selectedProgram.longDesc}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100">
              <button
                onClick={() => setSelectedProgram(null)}
                className="w-full py-3 bg-[#2E5063] text-white font-bold rounded-xl hover:bg-[#1D3442] transition"
              >
                Mengerti
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
