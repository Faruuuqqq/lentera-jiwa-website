import React from "react";
import { MessageCircle, HeartHandshake, Shield, Sparkles, BookOpen, Quote, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
  return (
    <div className="bg-white text-nara-charcoal w-full pb-20">

      {/* --- HERO SECTION (Aesthetic Edition) --- */}
      <section className="relative pt-16 pb-32 lg:pt-20 lg:pb-40 overflow-hidden min-h-[95vh] flex items-center bg-gradient-to-br from-nara-paper via-white to-orange-50">
        {/* Organic Paper Texture Base (via Body) + Mesh Blobs */}
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-nara-blue-light/50 rounded-full blur-[120px] pointer-events-none mesh-blob-1 hidden md:block"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-nara-orange/10 rounded-full blur-[100px] pointer-events-none mesh-blob-2 hidden md:block" style={{ right: '10%', top: '40%' }}></div>

        <div className="max-w-7xl mx-auto px-4 w-full relative z-10 -mt-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Staggered Column */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="animate-fade-up stagger-1 w-fit">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-[#F2994A]/20 text-[#2c3e50] font-sans text-xs sm:text-sm font-bold tracking-wider uppercase mb-8 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#F2994A] animate-pulse"></span>
                  Ruang Aman Bersama
                </div>
              </div>

              <div className="animate-fade-up stagger-2">
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-6 text-nara-charcoal leading-[1.15]">
                  Kamu Tidak Sendiri <br />
                  <span className="italic text-nara-orange">Menghadapi Perundungan.</span>
                </h1>
              </div>

              <div className="animate-fade-up stagger-3">
                <p className="font-sans text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-[1.7]">
                  Youth Anti-Bullying Indonesia adalah ruang aman untuk berbagi cerita, memahami perundungan, dan menemukan dukungan bersama.
                  Menerangi Pikiran, Menguatkan Perasaan melalui Bacaan.
                </p>
              </div>

              <div className="animate-fade-up stagger-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setCurrentPage('cerita')}
                  className="h-[48px] px-8 bg-nara-orange text-white font-bold rounded-xl hover:bg-[#D47125] transition-all transform hover:-translate-y-0.5 shadow-[0_8px_20px_rgba(242,153,74,0.3)] flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  Cerita ke Kami
                </button>
                <button
                  onClick={() => setCurrentPage('kenali-perundungan')}
                  className="h-[48px] px-8 bg-white border-2 border-slate-200 text-nara-charcoal font-bold rounded-xl hover:border-nara-charcoal hover:bg-slate-50 transition-all flex items-center justify-center w-full sm:w-auto"
                >
                  Pelajari Perundungan
                </button>
              </div>
            </div>

            {/* Right Column (Abstract/Illustration Block) */}
            <div className="lg:col-span-5 relative hidden lg:block animate-fade-up stagger-5">
              <div className="relative w-full aspect-square max-w-[400px] mx-auto">
                <div className="absolute inset-0 bg-nara-orange/20 rounded-full blur-3xl animate-pulse"></div>
                
                <div className="absolute top-10 -left-12 bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-2xl shadow-soft-lg transform -rotate-6 z-20 hover:rotate-0 transition-transform cursor-default">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-nara-orange">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-nara-charcoal uppercase tracking-wider">Dukungan</p>
                      <p className="text-[10px] text-slate-500 font-medium">100% Anonim</p>
                    </div>
                  </div>
                </div>

                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden z-10 border border-slate-800 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80" 
                    alt="Teman saling mendukung"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nara-charcoal/80 via-nara-charcoal/20 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-serif text-lg italic mb-2">"Kamu tidak sendiri"</p>
                    <p className="text-sm text-white/80">Bersama kita lebih kuat</p>
                  </div>
                </div>

                <div className="absolute bottom-10 -right-8 bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-2xl shadow-soft-lg transform rotate-3 z-20 hover:rotate-0 transition-transform cursor-default">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-slate-600">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-nara-charcoal uppercase tracking-wider">Keamanan</p>
                      <p className="text-[10px] text-slate-500 font-medium">Ruang Aman</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATISTIK */}
      <section className="max-w-7xl mx-auto px-4 -mt-24 relative z-20">
        <AnimatedSection delay={0.2}>
          <div className="bg-nara-charcoal rounded-2xl p-10 shadow-soft-lg border border-transparent overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-nara-orange/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>

            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-3">Fakta yang Perlu Kamu Tahu</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/10 relative z-10">
              <div className="px-2">
                <p className="text-4xl lg:text-5xl font-bold text-nara-orange mb-2">1 dari 3</p>
                <p className="text-sm text-slate-300">Remaja pernah mengalami perundungan</p>
              </div>
              <div className="px-2">
                <p className="text-4xl lg:text-5xl font-bold text-nara-orange mb-2">40%</p>
                <p className="text-sm text-slate-300">Korban tidak pernah bercerita</p>
              </div>
              <div className="px-2">
                <p className="text-4xl lg:text-5xl font-bold text-nara-orange mb-2">30%</p>
                <p className="text-sm text-slate-300">Pernah menjadi pelaku tanpa sadar</p>
              </div>
              <div className="px-2">
                <p className="text-4xl lg:text-5xl font-bold text-nara-orange mb-2">70%</p>
                <p className="text-sm text-slate-300">Pernah menyaksikan tapi tidak tahu harus apa</p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 text-center relative z-10">
              <p className="text-slate-300 italic">"Perundungan itu nyata, dan dampaknya bisa besar. Tapi kita bisa menghadapinya bersama."</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 3. POSISI USER (NEW DIRECTIVE) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-medium text-nara-charcoal mb-4">Kenali Posisi Kamu</h2>
              <p className="text-slate-500 max-w-xl mx-auto">Kami mengerti tidak semua orang berada di posisi yang sama. Pilih opsi yang paling menggambarkan kondisimu saat ini.</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-nara-paper p-8 md:p-12 rounded-2xl border border-nara-orange/20 hover:border-nara-orange group transition-colors cursor-pointer h-full flex flex-col relative overflow-hidden">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-nara-orange mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-medium text-nara-charcoal mb-4">Aku Mengalami Perundungan</h3>
                <p className="text-slate-600 leading-[1.7] mb-8 flex-grow">
                  Kamu berhak mendapatkan bantuan dan didengar. Semua perasaanmu valid dan kamu tidak harus menanggung ini sendirian.
                </p>
                <button
                  onClick={() => setCurrentPage("action-guide")}
                  className="flex items-center gap-2 text-nara-orange font-bold hover:gap-3 transition-all"
                >
                  Cari Bantuan Sekarang <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200 hover:border-nara-charcoal group transition-colors cursor-pointer h-full flex flex-col relative overflow-hidden">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-nara-charcoal mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <HeartHandshake className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-medium text-nara-charcoal mb-4">Aku Melihat Perundungan</h3>
                <p className="text-slate-600 leading-[1.7] mb-8 flex-grow">
                  Sebagai saksi (bystander), kamu memiliki kekuatan untuk memutus rantai perundungan. Kamu bisa menjadi orang yang membantu menghentikan ini.
                </p>
                <button
                  onClick={() => setCurrentPage("action-guide")}
                  className="flex items-center gap-2 text-nara-charcoal font-bold hover:gap-3 transition-all"
                >
                  Pelajari Cara Membantu <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. KENALI PERUNDUNGAN (PREVIEW) */}
      <section className="py-24 bg-nara-paper relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-4xl font-medium text-nara-charcoal mb-6">Kenali Bentuk Perundungan</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-[1.7]">
              Perundungan tidak selalu terlihat jelas. Terkadang berupa ejekan, pengucilan, atau serangan di dunia maya. Memahaminya adalah langkah pertama untuk menghentikannya.
            </p>
            
            {/* Ilustrasi Bentuk Perundungan */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80" 
                  alt="Perundungan Fisik" 
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <p className="font-bold text-nara-charcoal text-sm">Fisik</p>
                  <p className="text-xs text-slate-500">Pukul, tendang, dorong</p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" 
                  alt="Perundungan Verbal" 
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <p className="font-bold text-nara-charcoal text-sm">Verbal</p>
                  <p className="text-xs text-slate-500">Ejekan, hinaan, julukan</p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=400&q=80" 
                  alt="Perundungan Relasional" 
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <p className="font-bold text-nara-charcoal text-sm">Relasional</p>
                  <p className="text-xs text-slate-500">Diabaikan, dikucilkan</p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80" 
                  alt="Cyberbullying" 
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <p className="font-bold text-nara-charcoal text-sm">Cyber</p>
                  <p className="text-xs text-slate-500">Online, medsos, chat</p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=400&q=80" 
                  alt="Perusakan Barang" 
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <p className="font-bold text-nara-charcoal text-sm">Perusakan</p>
                  <p className="text-xs text-slate-500">Barang dirusak, dicuri</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setCurrentPage("kenali-perundungan")}
              className="h-[48px] px-8 bg-white text-nara-charcoal border border-slate-200 font-medium rounded-xl hover:bg-slate-50 hover:border-nara-charcoal transition-all inline-flex items-center justify-center gap-2"
            >
              Mulai Belajar Sekarang <ChevronRight className="w-4 h-4" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. PREVIEW KOMUNITAS & BIBLIOTERAPI */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Biblioterapi */}
          <AnimatedSection>
            <div className="pr-0 md:pr-12">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-nara-orange mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl font-medium text-nara-charcoal mb-4">Bacaan untuk Menguatkan Dirimu</h3>
              <p className="text-slate-600 leading-[1.7] mb-8">
                Kumpulan bacaan kurasi (Biblioterapi) yang bisa membantu kamu memahami perasaan, membangun keberanian, dan menghadapi situasi sulit dari perspektif yang lebih positif.
              </p>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 mb-8 flex gap-4">
                <div className="w-16 h-20 bg-slate-200 rounded object-cover shrink-0 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=200&q=80" alt="Book cover" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-nara-charcoal">The Boy, the Mole, the Fox and the Horse</p>
                  <p className="text-xs text-nara-orange uppercase font-bold tracking-wider mt-1">Menguatkan Diri</p>
                </div>
              </div>
              <button onClick={() => setCurrentPage("bibliotherapy")} className="text-nara-charcoal font-bold hover:text-nara-orange flex items-center gap-1">Lihat semua bacaan <ChevronRight className="w-4 h-4" /></button>
            </div>
          </AnimatedSection>

          {/* Komunitas */}
          <AnimatedSection delay={0.2}>
            <div className="pl-0 md:pl-12 border-t md:border-t-0 md:border-l border-slate-100 pt-12 md:pt-0">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-slate-600 mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl font-medium text-nara-charcoal mb-4">Bersama Komunitas</h3>
              <p className="text-slate-600 leading-[1.7] mb-8">
                Kami bekerja sama dengan berbagai entitas dan komunitas untuk menciptakan lingkungan yang lebih inklusif dan aman bagi semua. Upaya melawan perundungan adalah tugas kolektif.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-600">Komunitas Anak</div>
                <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-600">Komunitas Baca</div>
                <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-600">Youth Support Group</div>
              </div>
              <button onClick={() => setCurrentPage("komunitas")} className="text-nara-charcoal font-bold hover:text-nara-orange flex items-center gap-1">Lihat mitra kami <ChevronRight className="w-4 h-4" /></button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. TESTIMONI */}
      <section className="py-24 bg-nara-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-nara-orange/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <Quote className="w-12 h-12 text-nara-orange/50 mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-medium mb-10">Cerita Bersama Youth Anti-Bullying Indonesia</h2>
            <p className="font-serif text-2xl md:text-3xl leading-[1.6] text-slate-200 mb-8 italic">
              “Aku merasa sangat takut untuk bercerita pada awalnya, namun setelah mengakses ruang aman ini, aku merasa jauh lebih lega. Ternyata aku nggak sendiri.”
            </p>
            <p className="text-nara-orange font-medium uppercase tracking-widest text-sm">— anonim, mahasiswa</p>
          </AnimatedSection>
        </div>
      </section>

      {/* 7. CTA AKHIR */}
      <section className="py-24 px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-16 border border-slate-200 shadow-soft-lg text-center flex flex-col items-center">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-nara-charcoal mb-4">
              Ceritakan Pengalamanmu
            </h2>
            <h3 className="font-serif text-2xl text-slate-500 mb-8 italic">Bersama Youth Anti-Bullying Indonesia.</h3>

            <p className="text-slate-600 mb-10 max-w-lg mx-auto">Kami siap mendengarkan tanpa menghakimi. Jaga anonimitasmu atau temui Konselor kami. Kamu berhak atas kedamaian batin.</p>

            <button
              onClick={() => setCurrentPage("cerita")}
              className="h-[56px] px-10 bg-nara-orange text-white font-medium rounded-xl hover:bg-[#D47125] transition-all transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(242,153,74,0.3)] flex items-center justify-center gap-2 text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Cerita ke Kami
            </button>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
