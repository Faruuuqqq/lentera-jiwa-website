import React, { useState } from "react";
import { Users, Heart, BookOpen, Mail, Link as LinkIcon, MapPin, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

const filterCategories = ["Semua", "Komunitas Anak", "Komunitas Baca"];

// Data komunitas mitra Lentera Jiwa
const communitiesData = [
  // Komunitas Anak 👧📚
  {
    id: "anak_1",
    name: "TK Darul Hikam",
    category: "Komunitas Anak",
    type: "Pendidikan Islam Usia Dini",
    since: "2000",
    description: "Taman Kanak-kanak dengan pendekatan pendidikan Islam usia dini. Mendekatkan anak dengan nilai-nilai keislaman sejak dini melalui metode pembelajaran yang menyenangkan.",
    focus: "Pendidikan anak usia dini dengan dasar Islam",
    activities: "Pembelajaran agama, keterampilan sosial, pembiasaan ibadah",
    contact: "TK Darul Hikam",
    status: "active",
  },
  {
    id: "anak_2",
    name: "TBM Riang Cendikia",
    category: "Komunitas Anak",
    type: "Sudut Baca Madrasah",
    since: "2024",
    description: "Taman Bacaan yang fokus pada pengembangan sudut baca di lingkungan madrasah. Menciptakan ruang membaca yang nyaman untuk menumbuhkan minat literasi anak-anak.",
    focus: "Pengembangan sudut baca madrasah dan minat literasi anak",
    activities: "Pembacaan bersama, storytelling, lomba membaca",
    contact: "TBM Riang Cendikia",
    status: "active",
  },
  // Komunitas Baca 📖✨
  {
    id: "baca_1",
    name: "TBM Panti Baca Ceria",
    category: "Komunitas Baca",
    type: "Literasi Masyarakat",
    since: "2016",
    description: "Taman Bacaan yang lahir dari keprihatinan akan minimnya literasi di masyarakat. Berkomitmen meningkatkan minat membaca melalui akses buku yang terbuka untuk semua kalangan.",
    focus: "Peningkatan literasi masyarakat umum",
    activities: "Peminjaman buku gratis, diskusi literasi, workshop menulis",
    contact: "TBM Panti Baca Ceria",
    status: "active",
  },
  {
    id: "baca_2",
    name: "Perpus Jalanan Pendopo",
    category: "Komunitas Baca",
    type: "Akses Buku Terbatas",
    since: "2025",
    description: "Perpustakaan jalanan yang hadir untuk mengatasi keterbatasan akses buku di masyarakat. Membawa literasi ke ruang-ruang publik agar semua orang bisa menikmati buku.",
    focus: "Meningkatkan akses buku bagi masyarakat dengan keterbatasan",
    activities: "Perpustakaan keliling, baca bareng di ruang publik, donasi buku",
    contact: "Perpus Jalanan Pendopo",
    status: "active",
  },
];

export default function Komunitas() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filteredCommunities = communitiesData.filter(c => activeFilter === "Semua" || c.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    if (category === "Komunitas Anak") return <Users className="w-5 h-5" />;
    if (category === "Komunitas Baca") return <BookOpen className="w-5 h-5" />;
    return <Heart className="w-5 h-5" />;
  };

  return (
    <div className="bg-nara-paper min-h-screen text-nara-charcoal pb-32">
      {/* HEADER */}
      <section className="pt-24 pb-16 px-4 max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-nara-orange/10 text-nara-charcoal text-sm font-medium mb-6">
            <Heart className="w-4 h-4 text-nara-orange" />
            Komunitas Kami
          </div>
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-nara-charcoal leading-tight">
            Komunitas <span className="text-nara-orange">Bersama Lentera Jiwa</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Bergabunglah dengan komunitas yang mendukung pertumbuhan positif dan saling menguatkan dalam perjalanan literasi dan pendidikan.
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

      {/* INFO BOX */}
      <section className="max-w-6xl mx-auto px-4 mb-8">
        <AnimatedSection delay={0.15}>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <p className="text-sm text-blue-800">
              <strong>Info:</strong> Data komunitas mitra Lentera Jiwa. Hubungi komunitas langsung untuk informasi lebih lanjut.
            </p>
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
                  
                  {/* Top Section: Icon & Category */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${
                      com.category === "Komunitas Anak" ? "bg-orange-100 text-orange-600" : "bg-teal-100 text-teal-600"
                    }`}>
                      {getCategoryIcon(com.category)}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        {com.category}
                      </span>
                      <span className="text-[10px] font-medium text-nara-orange bg-nara-orange/10 px-2 py-1 rounded">
                        {com.type}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex-grow">
                    <h3 className="font-sans text-xl font-bold mb-3 text-nara-charcoal group-hover:text-nara-orange transition-colors">
                      {com.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {com.description}
                    </p>
                    
                    {/* Info Stats */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Users className="w-3.5 h-3.5" />
                        <span>Berdiri sejak {com.since}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Heart className="w-3.5 h-3.5" />
                        <span>{com.activities}</span>
                      </div>
                    </div>
                  </div>

                  {/* Focus Area */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-xs font-semibold text-nara-orange bg-nara-orange/10 px-2 py-1 rounded">Fokus:</span>
                      <span className="text-xs text-slate-500 leading-relaxed">{com.focus}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 h-[44px] bg-slate-50 hover:bg-nara-orange hover:text-white text-nara-charcoal font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                    <LinkIcon className="w-4 h-4" /> Lihat Detail
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
              <p className="text-slate-600 mb-8 max-w-lg mx-auto leading-[1.6]">Kami mengundang komunitas-komunitas positif di seluruh Indonesia untuk masuk ke dalam direktori Lentera Jiwa. Mari saling menguatkan dalam literasi dan pendidikan.</p>
             
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
