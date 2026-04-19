import {
  Shield,
  Search,
  Users,
  ExternalLink,
  Play,
  Flame,
  Target,
  Heart,
  Eye,
} from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 lg:py-28 text-center px-4">
        {/* Background Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2E5063]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#C7913B]/10 rounded-full blur-[80px]" />
        </div>

        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-[#2E5063] text-sm font-bold mb-6">
            <Users className="w-4 h-4" />
            Tentang Kami
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#2E5063] mb-6 tracking-tight">
            Lentera <span className="text-[#C7913B]">Jiwa.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Inovasi sosial berbasis komunitas teman sebaya (peer support) yang
            lahir dari keresahan mahasiswa, untuk mahasiswa. Kami adalah{" "}
            <span className="font-semibold text-[#2E5063]">"Ruang Antara"</span>{" "}
            yang aman sebelum kamu melangkah ke bantuan profesional.
          </p>
        </AnimatedSection>
      </section>

      {/* --- VISI & MISI (CARD STYLE) --- */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Visi Card - Teal Theme */}
          <AnimatedSection delay={0.2}>
            <div className="bg-[#2E5063] text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Eye className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
                  <Target className="w-6 h-6 text-[#C7913B]" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Visi Kami</h3>
                <p className="text-slate-200 leading-relaxed text-lg">
                  Mewujudkan ekosistem kesejahteraan mental yang{" "}
                  <strong className="text-white">
                    suportif, inklusif, dan mudah diakses
                  </strong>{" "}
                  bagi seluruh mahasiswa Universitas Padjadjaran.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Misi Card - White Theme */}
          <AnimatedSection delay={0.4}>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 h-full relative">
              <div className="w-12 h-12 bg-[#FDF3E3] rounded-2xl flex items-center justify-center mb-6">
                <Flame className="w-6 h-6 text-[#C7913B]" />
              </div>
              <h3 className="text-3xl font-bold text-[#2E5063] mb-6">
                Misi Kami
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    text: "Menyediakan platform dukungan teman sebaya yang anonim dan rahasia.",
                    icon: Shield,
                  },
                  {
                    text: "Meningkatkan literasi kesehatan mental melalui konten edukasi.",
                    icon: Search,
                  },
                  {
                    text: "Menjadi jembatan rujukan ke layanan profesional P2K2 Unpad.",
                    icon: ExternalLink,
                  },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition"
                  >
                    <div className="mt-1 bg-slate-100 p-2 rounded-lg">
                      <item.icon className="w-4 h-4 text-[#2E5063]" />
                    </div>
                    <span className="text-slate-600 font-medium">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* --- FILOSOFI BRAND --- */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#2E5063]">
                Filosofi Lentera Jiwa
              </h2>
              <p className="text-slate-500 mt-2">
                Makna di balik identitas visual kami.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video Section - YOUTUBE EMBED */}
            <AnimatedSection delay={0.2}>
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-[#E6EFF2] bg-slate-900 aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/UO8XYOTPMXs?rel=0&modestbranding=1"
                  title="Video Profil Lentera Jiwa"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </AnimatedSection>

            {/* Color Philosophy */}
            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <div className="flex gap-5 p-4 rounded-2xl hover:bg-[#E6EFF2]/50 transition cursor-default">
                  <div className="w-16 h-16 rounded-2xl bg-[#2E5063] shadow-lg shadow-[#2E5063]/20 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2E5063] mb-1">
                      Lentera Teal
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Melambangkan ketenangan, kedalaman jiwa, dan stabilitas.
                      Warna ini memberikan rasa aman bagi siapa pun yang
                      memandangnya.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 p-4 rounded-2xl hover:bg-[#FDF3E3]/50 transition cursor-default">
                  <div className="w-16 h-16 rounded-2xl bg-[#C7913B] shadow-lg shadow-[#C7913B]/20 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-bold text-[#C7913B] mb-1">
                      Lentera Gold
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Simbol dari "Asa" (Harapan) dan kehangatan persahabatan.
                      Seperti nyala api kecil yang menerangi kegelapan.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* --- ORGANIZATIONAL STRUCTURE --- */}
      <section className="py-20 px-4 bg-[#E6EFF2]/30">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-[#2E5063] mb-10">
              Struktur Keluarga
            </h2>

            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 transform -translate-y-1/2"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center transform transition hover:-translate-y-2 duration-300">
                  <div className="w-20 h-20 rounded-full bg-[#E6EFF2] mb-4 flex items-center justify-center text-[#2E5063]">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">
                    Pembina (P2K2)
                  </h4>
                  <p className="text-sm text-slate-500">Psikolog & Dosen</p>
                </div>

                {/* Card 2 (Center Highlight) */}
                <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#C7913B] flex flex-col items-center transform md:scale-110 z-10">
                  <div className="w-24 h-24 rounded-full bg-[#FDF3E3] mb-4 flex items-center justify-center text-[#C7913B]">
                    <Heart className="w-10 h-10" fill="currentColor" />
                  </div>
                  <h4 className="font-bold text-xl text-slate-900">
                    Koordinator Utama
                  </h4>
                  <p className="text-sm text-slate-500">Mahasiswa Terpilih</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center transform transition hover:-translate-y-2 duration-300">
                  <div className="w-20 h-20 rounded-full bg-[#E6EFF2] mb-4 flex items-center justify-center text-[#2E5063]">
                    <Users className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">
                    Relawan Fakultas
                  </h4>
                  <p className="text-sm text-slate-500">Perwakilan Kampus</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* --- MENGENAL P2K2 (CTA - Updated Text) --- */}
      <AnimatedSection>
        <div className="max-w-5xl mx-auto px-4 py-20">
          <div className="bg-gradient-to-r from-[#2E5063] to-[#1D3442] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C7913B] opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg text-[#C7913B] text-xs font-bold uppercase tracking-wider mb-4">
                Layanan Profesional Kampus
              </div>
              <h3 className="text-3xl font-bold mb-4">Mengenal P2K2 Unpad</h3>
              <p className="text-slate-300 leading-relaxed mb-0">
                Pusat Pengembangan Karakter dan Kesejahteraan Mahasiswa (P2K2)
                adalah unit resmi Universitas Padjadjaran yang menyediakan
                layanan konseling profesional. Lentera Jiwa merekomendasikan P2K2
                sebagai rujukan utama bagi mahasiswa yang membutuhkan penanganan
                lebih lanjut.
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0">
              <a
                href="https://psikologi.unpad.ac.id/mengenal-pusat-penguatan-karakter-dan-konseling-p2k2-pusat-optimalisasi-potensi-diri-dan-kesehatan-fisik-serta-mental-civitas-unpad/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#2E5063] px-8 py-4 rounded-full font-bold hover:bg-[#C7913B] hover:text-white transition shadow-lg transform hover:scale-105"
              >
                Kunjungi Website P2K2
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
