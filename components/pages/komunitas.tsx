import React, { useState } from "react";
import { Users, Globe, Mail, MessageCircle, HeartHandshake, Link as LinkIcon, Instagram } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

const filterCategories = ["Semua", "Kesehatan Mental", "Anak & Remaja", "Pendidikan", "Literasi Digital"];

const dummyCommunities = [
  {
    id: "com_1",
    name: "Youth Anti-Bullying Indonesia",
    category: "Anak & Remaja",
    focus: "Mencegah perundungan di sekolah melalui training peer-counselor.",
    logo: "YABI",
    color: "bg-blue-100 text-blue-700",
    instagram: "@yab_indo",
    website: "yabindo.org",
    whatsapp: "+62811...",
  },
  {
    id: "com_2",
    name: "Safe Net Indonesia",
    category: "Literasi Digital",
    focus: "Edukasi privasi data dan perlindungan dari kasus cyberbullying.",
    logo: "SAFENET",
    color: "bg-teal-100 text-teal-700",
    instagram: "@safenet",
    website: "safenet.or.id",
    whatsapp: null,
  },
  {
    id: "com_3",
    name: "Mental Health Care Jabar",
    category: "Kesehatan Mental",
    focus: "Layanan support group offline untuk penyintas bullying di Jawa Barat.",
    logo: "MHC",
    color: "bg-rose-100 text-rose-700",
    instagram: "@mhc_jabar",
    website: null,
    whatsapp: "+62812...",
  },
  {
    id: "com_4",
    name: "Forum Guru Peduli",
    category: "Pendidikan",
    focus: "Penyusunan modul anti-perundungan untuk tenaga pendidik dan sekolah dasar.",
    logo: "FGP",
    color: "bg-amber-100 text-amber-700",
    instagram: "@forumgurupeduli",
    website: "fgpb.id",
    whatsapp: "+62852...",
  }
];

export default function Komunitas() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filteredCommunities = dummyCommunities.filter(c => activeFilter === "Semua" || c.category === activeFilter);

  return (
    <div className="bg-nara-paper min-h-screen text-nara-charcoal pb-32">
      {/* HEADER */}
      <section className="pt-24 pb-16 px-4 max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-nara-orange/10 text-nara-charcoal text-sm font-medium mb-6">
            <HeartHandshake className="w-4 h-4 text-nara-orange" />
            Kolaborasi Mitra Lentera
          </div>
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-nara-charcoal leading-tight">
            Komunitas <span className="text-nara-orange">Bersama Lentera</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Menghapus perundungan tidak bisa dilakukan sendirian. Kami bangga bekerjasama dengan organisasi dan komunitas luar biasa ini untuk membangun ekosistem tanpa bullying.
          </p>
        </AnimatedSection>
      </section>

      {/* FILTER BUTTONS */}
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 h-[40px] flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 ${activeFilter === cat ? "bg-nara-charcoal text-nara-paper shadow-sm" : "bg-white text-nara-charcoal border border-slate-200 hover:border-nara-orange"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* COMMUNITY GRID */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        {filteredCommunities.length === 0 ? (
           <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
             <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
             <p className="text-slate-500 font-medium">Belum ada komunitas terdaftar di kategori ini.</p>
           </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCommunities.map((com, idx) => (
              <AnimatedSection key={com.id} delay={0.1 + idx * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-slate-200 flex flex-col h-full group">
                  
                  {/* Top Section: Logo & Category */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 ${com.color} rounded-2xl flex items-center justify-center font-bold text-xl shadow-sm`}>
                      {com.logo}
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                      {com.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="flex-grow">
                    <h3 className="font-sans text-2xl font-medium mb-3 text-nara-charcoal group-hover:text-nara-orange transition-colors">
                      {com.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                      <span className="text-nara-charcoal font-bold">Fokus:</span> {com.focus}
                    </p>
                  </div>

                  {/* Contact Links */}
                  <div className="pt-6 border-t border-slate-100 space-y-3">
                    {com.instagram && (
                      <a href={`https://instagram.com/${com.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-600 hover:text-nara-orange transition-colors">
                        <Instagram className="w-4 h-4 opacity-70" />
                        <span className="font-medium">{com.instagram}</span>
                      </a>
                    )}
                    {com.website && (
                      <a href={`https://${com.website}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-600 hover:text-nara-orange transition-colors">
                        <Globe className="w-4 h-4 opacity-70" />
                        <span className="font-medium">{com.website}</span>
                      </a>
                    )}
                    {com.whatsapp && (
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <MessageCircle className="w-4 h-4 opacity-70" />
                        <span className="font-medium">{com.whatsapp}</span>
                      </div>
                    )}
                  </div>
                  
                  <button className="w-full mt-8 h-[48px] bg-slate-50 hover:bg-nara-orange hover:text-white text-nara-charcoal font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                    <LinkIcon className="w-4 h-4" /> Pelajari Lebih Lanjut
                  </button>

                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </section>

      {/* CTA BOTTOM */}
      <section className="max-w-4xl mx-auto px-4">
        <AnimatedSection>
          <div className="bg-white rounded-xl p-10 md:p-14 text-center border border-slate-200 shadow-soft relative overflow-hidden">
             {/* Decorative blob */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-nara-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <Mail className="w-12 h-12 text-nara-orange mx-auto mb-6" />
             <h3 className="font-sans text-2xl md:text-3xl font-medium mb-4 text-nara-charcoal">Komunitas Anda ingin bergabung?</h3>
             <p className="text-slate-600 mb-8 max-w-lg mx-auto leading-[1.6]">Kami mengundang inisiatif-inisiatif mulia di seluruh Indonesia untuk masuk ke dalam direktori Lentera Jiwa. Mari saling menguatkan.</p>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
               <button className="px-8 h-[48px] flex items-center justify-center bg-nara-charcoal text-white font-medium rounded-lg hover:bg-[#2c3e50] transition-colors duration-300 w-full sm:w-auto">
                 Hubungi Kami
               </button>
               <button className="px-8 h-[48px] flex items-center justify-center bg-white text-nara-charcoal font-medium rounded-lg hover:bg-slate-50 transition-colors duration-300 border border-slate-200 w-full sm:w-auto">
                 Lihat Persyaratan
               </button>
             </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
