import {
  Shield,
  Heart,
  Eye,
  HandHeart,
  MessageCircle,
  ExternalLink,
  Sparkles,
  ArrowRight
} from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

export default function About() {
  return (
    <div className="min-h-screen bg-nara-paper overflow-hidden text-nara-charcoal pb-32">
      {/* --- HERO SECTION: MANIFESTO STYLE --- */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-nara-orange/5 to-nara-paper -z-10"></div>
        
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 shadow-sm text-nara-charcoal text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 text-nara-orange" />
            Tentang Lentera Jiwa
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-8 tracking-tight max-w-4xl mx-auto leading-[1.1]">
            Mendobrak Kesunyian, <br />
            <span className="italic text-nara-orange font-light">Menyalakan Harapan.</span>
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-nara-muted leading-[1.7] max-w-2xl mx-auto">
            Lentera Jiwa bukan sekadar platform digital. Kami adalah gerakan perlawanan terhadap perundungan, di mana suara korban tidak lagi dibungkam, melainkan didengar, dirangkul, dan divalidasi.
          </p>
        </AnimatedSection>
      </section>

      {/* --- THE STORY (LATAR BELAKANG) --- */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-soft border border-slate-200 relative overflow-hidden">
          {/* Decorative element */}
          <Eye className="absolute -right-10 -top-10 w-64 h-64 text-slate-50 opacity-50 pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <AnimatedSection>
              <h2 className="font-serif text-4xl mb-6 font-medium leading-[1.2]">
                Lahir dari Cerita yang <span className="text-slate-400 line-through">Diabaikan</span>
              </h2>
              <div className="w-16 h-1 bg-nara-orange mb-8"></div>
              <p className="text-lg text-slate-600 leading-[1.8] mb-6">
                Mahasiswa seringkali terjebak dalam tekanan sosial dan hirarki kampus yang beracun. Ketika perundungan terjadi, penyintas kerap ragu melapor karena takut dihakimi atau proses birokrasi yang rumit.
              </p>
              <p className="text-lg text-slate-600 leading-[1.8]">
                Kami hadir sebagai <strong>"Ruang Antara"</strong>—sebuah jembatan peer-support di mana kamu bisa melepas beban dengan sesama mahasiswa sebelum akhirnya siap, jika diperlukan, melangkah ke bantuan profesional.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] bg-nara-charcoal rounded-2xl p-8 text-white flex flex-col justify-center shadow-soft-lg transform md:rotate-2">
                  <MessageCircle className="w-12 h-12 text-nara-orange/80 mb-6" strokeWidth={1} />
                  <p className="font-serif text-2xl md:text-3xl leading-[1.4] font-medium text-white/90">
                    "Aku tidak pernah mencari musuh. Aku hanya ingin kuliah dengan tenang, tanpa ada yang menertawakan siapa diriku."
                  </p>
                  <p className="mt-8 text-sm font-medium tracking-wider text-nara-muted uppercase">
                    — Suara Anonim
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* --- NILAI INTI (CORE VALUES) --- */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium text-nara-charcoal mb-4">
              Pilar Perjuangan Kami
            </h2>
            <p className="text-nara-muted text-lg">
              Prinsip tak tergoyahkan dalam mendampingi setiap cerita.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Anonimitas Mutlak",
              desc: "Ceritamu tidak akan pernah bocor. Identitasmu adalah milikmu. Kami membangun enkripsi kepercayaan sejak baris pertama kamu mengetik."
            },
            {
              icon: HandHeart,
              title: "Empati Tanpa Syarat",
              desc: "Kamu tidak datang ke sini untuk dihakimi atau dinasihati. Kamu dibantu untuk didengarkan, divalidasi, dan merasakan kelegaan."
            },
            {
              icon: Heart,
              title: "Pemulihan Nyata",
              desc: "Keluar dari lingkaran bullying butuh aksi konkrit. Kami menyediakan dukungan sebaya hingga eskalasi ke perlindungan kampus."
            }
          ].map((value, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.15}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 h-full hover:border-nara-orange transition-colors duration-500 group">
                <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-nara-orange/10 transition-colors">
                  <value.icon className="w-8 h-8 text-nara-charcoal group-hover:text-nara-orange transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-nara-charcoal mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-[1.7]">
                  {value.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* --- EKOSISTEM DUKUNGAN (Replacing Org Chart) --- */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <AnimatedSection>
          <div className="bg-nara-charcoal rounded-[2.5rem] p-10 md:p-16 text-white shadow-xl relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nara-orange/10 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

            <h2 className="font-serif text-3xl md:text-5xl font-medium mb-12 text-center relative z-10">
              Didukung Oleh <span className="text-nara-orange">Mereka yang Peduli.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-6 h-6 text-nara-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Relawan Peer Support</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Mahasiswa terlatih yang mendedikasikan waktunya untuk mendengarkan. Mereka adalah garda terdepan yang mengerti betul rasanya beban di wilayah kampus.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-6 h-6 text-nara-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Ahli & Psikolog (P2K2)</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Lentera Jiwa beroperasi di bawah payung pengawasan psikolog kampus. Setiap krisis perundungan yang membutuhkan eskalasi akan ditangani secara profesional oleh institusi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col justify-center">
                <blockquote className="text-lg md:text-xl font-serif leading-[1.6] italic text-white/90">
                  "Menghukum pelaku bullying adalah tugas otoritas. Tapi menyembuhkan korban adalah tugas kita bersama."
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px bg-nara-orange w-12"></div>
                  <span className="text-sm tracking-widest uppercase font-medium text-slate-400">Prinsip Lentera</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* --- CTA MENGENAL P2K2 --- */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <AnimatedSection delay={0.2}>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-sm hover:shadow-soft transition-shadow">
            <div>
              <h3 className="font-serif text-2xl font-medium mb-2 text-nara-charcoal">Butuh Rujukan Medis dan Psikologis Langsung?</h3>
              <p className="text-slate-500">Pusat Pengembangan Karakter dan Kesejahteraan (P2K2) Unpad selalu bersama kami.</p>
            </div>
            <a
              href="https://psikologi.unpad.ac.id/mengenal-pusat-penguatan-karakter-dan-konseling-p2k2-pusat-optimalisasi-potensi-diri-dan-kesehatan-fisik-serta-mental-civitas-unpad/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-[48px] px-8 bg-slate-50 text-nara-charcoal border border-slate-300 rounded-lg hover:bg-slate-100 hover:text-nara-orange transition-colors font-medium whitespace-nowrap flex-shrink-0"
            >
              Kenali P2K2 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
