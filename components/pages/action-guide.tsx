import React from "react";
import { Shield, Eye, Heart, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

interface ActionGuideProps {
  setCurrentPage: (page: string) => void;
}

export default function ActionGuidePage({ setCurrentPage }: ActionGuideProps) {
  return (
    <div className="min-h-screen bg-nara-paper pb-32">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-nara-orange/5 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-medium mb-6 text-nara-charcoal leading-tight">
              Apa yang Harus <br />
              <span className="italic text-nara-orange">Kamu Lakukan?</span>
            </h1>
            <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto leading-[1.7]">
              Langkah-langkah praktis dan nyata yang bisa kamu ambil, di manapun posisimu saat ini. Kamu tidak sendirian.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* CONTENT BLOCKS */}
      <section className="max-w-5xl mx-auto px-4 space-y-8">
        
        {/* Block 1: Korban */}
        <AnimatedSection delay={0.1}>
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-nara-orange shrink-0">
              <Shield className="w-8 h-8" />
            </div>
            <div className="flex-grow">
              <h2 className="font-serif text-3xl font-medium text-nara-charcoal mb-4">
                Jika Kamu <span className="text-nara-orange">Mengalami</span> Perundungan
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-nara-charcoal shrink-0 mt-0.5">1</div>
                  <p className="text-slate-600 leading-[1.7]">
                    <strong>Tetap Tenang & Ingat: Ini Bukan Salahmu.</strong> Perundungan adalah tentang kontrol dan rasa tidak aman dari pelakunya, bukan tentang kekuranganmu.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-nara-charcoal shrink-0 mt-0.5">2</div>
                  <p className="text-slate-600 leading-[1.7]">
                    <strong>Bicara ke Orang Terpercaya.</strong> Jangan simpan sendiri. Beri tahu dosen, orang tua, teman tepercaya, atau Relawan Lentera.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-nara-charcoal shrink-0 mt-0.5">3</div>
                  <p className="text-slate-600 leading-[1.7]">
                    <strong>Simpan Bukti (Cyberbullying).</strong> Screenshot percakapan, komentar, atau foto yang menyakitkan sebagai bukti valid jika harus dilaporkan ke pihak berwajib.
                  </p>
                </li>
              </ul>
              <button
                onClick={() => setCurrentPage("cerita")}
                className="inline-flex items-center gap-2 bg-nara-charcoal text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition shadow-soft hover:-translate-y-0.5"
              >
                Cari Bantuan Sekarang <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Block 2: Saksi */}
        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-slate-600 shrink-0">
              <Eye className="w-8 h-8" />
            </div>
            <div className="flex-grow">
              <h2 className="font-serif text-3xl font-medium text-nara-charcoal mb-4">
                Jika Kamu <span className="text-slate-500">Melihat</span> Perundungan
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-nara-charcoal shrink-0 mt-0.5">1</div>
                  <p className="text-slate-600 leading-[1.7]">
                    <strong>Jangan Ikut Memperparah Situasi.</strong> Tertawa, menonton, atau memforward konten hanya akan memberi validasi kepada pelaku.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-nara-charcoal shrink-0 mt-0.5">2</div>
                  <p className="text-slate-600 leading-[1.7]">
                    <strong>Dukung Korban.</strong> Setelah kejadian, dekati korban. Tanyakan keadaannya. Dukungan kecil darimu bisa mencegah mereka dari keputusasaan.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-nara-charcoal shrink-0 mt-0.5">3</div>
                  <p className="text-slate-600 leading-[1.7]">
                    <strong>Laporkan Secara Aman.</strong> Jika kamu takut campur tangan langsung, laporkan ke otoritas kampus atau sampaikan secara anonim via Lentera.
                  </p>
                </li>
              </ul>
              <button
                onClick={() => setCurrentPage("faq")}
                className="inline-flex items-center gap-2 border border-nara-charcoal text-nara-charcoal px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition"
              >
                Lihat Kontak Lapangan <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Block 3: Pelaku */}
        <AnimatedSection delay={0.3}>
          <div className="bg-nara-blue-light/30 rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-nara-charcoal shrink-0 border border-slate-100">
              <Heart className="w-8 h-8" />
            </div>
            <div className="flex-grow">
              <h2 className="font-serif text-3xl font-medium text-nara-charcoal mb-4">
                Jika Kamu Pernah Mengambil Peran <span className="text-nara-charcoal italic">Pelaku</span>
              </h2>
              <p className="text-slate-600 leading-[1.7] mb-6">
                Mengakui kesalahan adalah langkah pertama yang paling berani untuk berubah. Kami tidak ada di sini untuk menghukummu.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-nara-charcoal shrink-0 mt-0.5">1</div>
                  <p className="text-slate-600 leading-[1.7]">
                    <strong>Sadari Tindakanmu Melukai Orang Lain.</strong> Coba posisikan dirimu menjadi mereka dan pahami dampak panjang dari perbuatanmu.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-nara-charcoal shrink-0 mt-0.5">2</div>
                  <p className="text-slate-600 leading-[1.7]">
                    <strong>Mulai Berubah dan Minta Maaf.</strong> Jika situasinya memungkinkan dan aman, minta maaflah secara tulus. Jika tidak, berjanjilah untuk memperbaiki sikapmu ke depan.
                  </p>
                </li>
              </ul>
              <button
                onClick={() => setCurrentPage("calmzone")}
                className="inline-flex items-center gap-2 bg-white text-nara-charcoal px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition shadow-sm border border-slate-200"
              >
                Refleksi di Ruang Tenang <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
