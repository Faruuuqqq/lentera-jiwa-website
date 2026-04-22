import React, { useState } from "react";
import { Users, Heart, BookOpen, Mail, Link as LinkIcon, Instagram, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

const filterCategories = ["Semua", "Komunitas Anak", "Komunitas Baca"];

// Data placeholder - nanti akan diisi dengan data dari tim
const communitiesData = [
  // Komunitas Anak
  {
    id: "anak_1",
    name: "Youth Support Group",
    category: "Komunitas Anak",
    type: "Support Group",
    description: "Komunitas dukungan untuk remaja yang mengalami atau menyaksikan perundungan. Ruang aman berbagi cerita dan pengalaman.",
    members: "150+ anggota",
    activities: "Weekly sharing session, mentoring",
    contact: "@youthsupport_id",
    status: "placeholder",
  },
  {
    id: "anak_2",
    name: "Circle of Friends",
    category: "Komunitas Anak",
    type: "Peer Support",
    description: "Komunitas pertemanan positif yang fokus pada empati, keberanian, dan saling mendukung antar remaja.",
    members: "200+ anggota",
    activities: "Team building, workshop anti-bullying",
    contact: "@circleoffriends_id",
    status: "placeholder",
  },
  {
    id: "anak_3",
    name: "Youth Voice Indonesia",
    category: "Komunitas Anak",
    type: "Advocacy",
    description: "Platform remaja untuk bersuara melawan perundungan dan menjadi agen perubahan di lingkungan masing-masing.",
    members: "300+ anggota",
    activities: "Campaign, public speaking training",
    contact: "@youthvoice_id",
    status: "placeholder",
  },
  {
    id: "anak_4",
    name: "Warrior Teens",
    category: "Komunitas Anak",
    type: "Empowerment",
    description: "Komunitas empowerment remaja untuk membangun ketahanan mental dan percaya diri menghadapi bullying.",
    members: "180+ anggota",
    activities: "Self-defense workshop, confidence building",
    contact: "@warriorteens_id",
    status: "placeholder",
  },
  // Komunitas Baca
  {
    id: "baca_1",
    name: "Book Club Anti-Bullying",
    category: "Komunitas Baca",
    type: "Reading Club",
    description: "Klub baca yang fokus pada literatur tentang anti-bullying, kesehatan mental, dan pengembangan diri remaja.",
    members: "100+ anggota",
    activities: "Monthly book discussion, book review",
    contact: "@bookclubantibullying",
    status: "placeholder",
  },
  {
    id: "baca_2",
    name: "Reading Circle SD",
    category: "Komunitas Baca",
    type: "Children Reading",
    description: "Komunitas membaca untuk anak SD dengan fokus buku-buku tentang persahabatan, keberanian, dan anti-bullying.",
    members: "80+ anggota",
    activities: "Storytelling session, reading challenge",
    contact: "@readingcirclesd",
    status: "placeholder",
  },
  {
    id: "baca_3",
    name: "Literasi Mental Health",
    category: "Komunitas Baca",
    type: "Mental Health Literacy",
    description: "Komunitas yang membahas buku-buku tentang kesehatan mental, emosi, dan cara menghadapi stres sosial.",
    members: "120+ anggota",
    activities: "Book therapy session, mental health talk",
    contact: "@literasimentalhealth",
    status: "placeholder",
  },
  {
    id: "baca_4",
    name: "Baca Bersama YABI",
    category: "Komunitas Baca",
    type: "Community Reading",
    description: "Program membaca bersama dari Youth Anti-Bullying Indonesia untuk mempromosikan literasi dan empati.",
    members: "250+ anggota",
    activities: "Weekly reading, discussion forum",
    contact: "@bacabersamayabi",
    status: "placeholder",
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
            Komunitas <span className="text-nara-orange">Bersama YABI</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Bergabunglah dengan komunitas yang mendukung pertumbuhan positif dan saling menguatkan dalam perjalanan melawan perundungan.
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
              <strong>Info:</strong> Data komunitas ini merupakan placeholder. Informasi lengkap akan diupdate oleh tim Youth Anti-Bullying Indonesia.
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
                        <span>{com.members}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Heart className="w-3.5 h-3.5" />
                        <span>{com.activities}</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Instagram className="w-4 h-4 text-slate-400" />
                      <span className="font-medium">{com.contact}</span>
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
             <p className="text-slate-600 mb-8 max-w-lg mx-auto leading-[1.6]">Kami mengundung komunitas-komunitas positif di seluruh Indonesia untuk masuk ke dalam direktori Youth Anti-Bullying Indonesia. Mari saling menguatkan.</p>
             
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
