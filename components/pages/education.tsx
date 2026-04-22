import React, { useState, useEffect } from "react";
import {
  MessageSquareOff,
  ShieldAlert,
  UserMinus,
  MonitorOff,
  HeartHandshake,
  AlertCircle,
  PhoneCall,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

interface EducationPageProps {
  setCurrentPage: (page: string) => void;
  setSelectedArticleSlug: (slug: string) => void;
}

export default function EducationPage({ setCurrentPage }: EducationPageProps) {
  const [activeSection, setActiveSection] = useState("apa-itu");

  const sections = [
    { id: "apa-itu", label: "Apa itu Perundungan?" },
    { id: "jenis", label: "Jenis-Jenis" },
    { id: "dampak", label: "Dampak" },
    { id: "warning-signs", label: "Warning Signs" },
    { id: "cyberbullying", label: "Cyberbullying" },
    { id: "bantuan", label: "Cara Mencari Bantuan" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen text-nara-charcoal pb-24">
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4 w-full bg-gradient-to-b from-nara-blue-light to-white">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-sans text-4xl md:text-5xl font-bold mb-6 text-nara-charcoal leading-tight">
              Kenali Perundungan
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Pahami jenis, dampak, dan cara mengatasi perundungan.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* MAIN CONTENT LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12">
        {/* SIDEBAR NAVIGATION (25%) */}
        <div className="md:w-1/4 hidden md:block">
          <div className="sticky top-28 bg-nara-paper p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-nara-charcoal mb-4 uppercase text-xs tracking-wider">Daftar Isi</h3>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollTo(section.id)}
                    className={`text-sm w-full text-left py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-between group ${activeSection === section.id
                        ? "bg-white text-nara-orange font-bold shadow-sm"
                        : "text-slate-600 hover:bg-slate-50 hover:text-nara-orange"
                      }`}
                  >
                    {section.label}
                    {activeSection === section.id && <ChevronRight className="w-4 h-4" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CONTENT AREA (75%) */}
        <div className="md:w-3/4 space-y-20">

          {/* 1. Apa itu Perundungan */}
          <div id="apa-itu" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-nara-charcoal mb-4">Apa Itu Sebenarnya Perundungan?</h2>
            <p className="text-slate-600 leading-[1.7] text-base mb-6">
              Perundungan (Bullying) adalah perilaku agresif yang dilakukan secara sengaja dan berulang-ulang oleh seseorang atau sekelompok orang yang memiliki "kekuatan" lebih besar, dengan niat menyakiti korban yang merasa tidak berdaya.
            </p>
            <p className="text-slate-600 leading-[1.7] text-base">
              Berbeda dengan konflik atau argumen biasa antar teman, perundungan memiliki karakteristik ketidakseimbangan kekuasaan (power imbalance) dan intensi untuk menyakiti secara terus-menerus.
            </p>
          </div>

          {/* 2. Jenis-Jenis Perundungan */}
          <div id="jenis" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-nara-charcoal mb-6">Jenis-Jenis Perundungan</h2>
            <p className="text-slate-600 leading-[1.7] text-base mb-6">
              Perundungan bisa terjadi dalam berbagai bentuk. Kenali setiap jenisnya agar kamu bisa melindungi diri sendiri dan orang di sekitarmu.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Card 1 - Fisik */}
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80" 
                  alt="Perundungan Fisik" 
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldAlert className="w-5 h-5 text-rose-500" />
                    <h3 className="font-bold text-base text-nara-charcoal">Fisik</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-[1.6]">
                    Menyakiti tubuh atau merusak barang. Termasuk memukul, menendang, mendorong, atau menyandung sengaja.
                  </p>
                </div>
              </div>
              {/* Card 2 - Verbal */}
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" 
                  alt="Perundungan Verbal" 
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquareOff className="w-5 h-5 text-teal-600" />
                    <h3 className="font-bold text-base text-nara-charcoal">Verbal</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-[1.6]">
                    Mengejek, memanggil dengan sebutan buruk, atau melontarkan komentar rasis dan seksis yang merendahkan.
                  </p>
                </div>
              </div>
              {/* Card 3 - Relasional */}
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=400&q=80" 
                  alt="Perundungan Relasional" 
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <UserMinus className="w-5 h-5 text-purple-600" />
                    <h3 className="font-bold text-base text-nara-charcoal">Relasional</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-[1.6]">
                    Merusak reputasi atau hubungan sosial. Seperti menyebarkan rumor, mengucilkan, atau mempermalukan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Dampak Perundungan */}
          <div id="dampak" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-nara-charcoal mb-4">Dampak Perundungan</h2>
            <p className="text-slate-600 leading-[1.7] text-base mb-6">
              Luka dari perundungan sering kali tidak berdarah, namun dapat membekas seumur hidup dan mempengaruhi berbagai aspek kehidupan penyintasnya.
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="font-bold text-lg text-nara-charcoal mb-3">Dampak Psikologis</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-nara-orange"></div> Depresi kronis dan kecemasan ekstrim</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-nara-orange"></div> Penurunan drastis terhadap self-esteem</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-nara-orange"></div> Keinginan untuk melukai diri sendiri (Self-harm)</li>
                </ul>
              </div>
              <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center">
                <span className="block text-4xl mb-2">📉</span>
                <p className="font-bold text-nara-charcoal">Penurunan Performa Akademis</p>
                <p className="text-xs text-slate-500 mt-2">Siswa / mahasiswa rentan bolos untuk menghindari pelaku, yang merusak fokus belajar.</p>
              </div>
            </div>
          </div>

          {/* 4. Warning Signs */}
          <div id="warning-signs" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-nara-charcoal mb-6">Warning Signs (Tanda Bahaya)</h2>
            <p className="text-slate-600 leading-[1.7] text-base mb-6">
              Apakah temanmu bertingkah berbeda akhir-akhir ini? Berikut tanda-tanda seseorang mungkin menjadi korban perundungan:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-nara-orange" /></div>
                <span className="text-base text-slate-700">Luka fisik, memar atau goresan yang tidak bisa dijelaskan asal usulnya.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-nara-orange" /></div>
                <span className="text-base text-slate-700">Kehilangan barang berharga, buku, uang, atau elektronik yang sering terjadi secara misterius.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-nara-orange" /></div>
                <span className="text-base text-slate-700">Perubahan kebiasaan makan ekstrim; tiba-tiba tidak mau makan atau justru makan berlebih (binge eating).</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-nara-orange" /></div>
                <span className="text-base text-slate-700">Rasa takut tiba-tiba untuk pergi ke lingkungan sekolah, kampus, atau tempat spesifik lainnya.</span>
              </li>
            </ul>
          </div>

          {/* 5. Cyberbullying */}
          <div id="cyberbullying" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-nara-charcoal mb-4">Cyberbullying</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center bg-nara-blue-light/50 p-8 rounded-2xl">
              <div>
                <MonitorOff className="w-12 h-12 text-nara-charcoal mb-4" />
                <p className="text-slate-600 leading-[1.7] text-base">
                  Cyberbullying adalah perundungan menggunakan teknologi digital. Hal ini dapat terjadi di media sosial, platform pesan, platform game, atau ponsel.
                </p>
                <div className="mt-4 p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                  <p className="text-sm font-bold text-nara-charcoal mb-2">Contoh Spesifik:</p>
                  <p className="text-xs text-slate-500 italic">"Menyebarkan rumor memalukan via grup WA tertutup, membuat akun palsu untuk melecehkan identitas, doxxing (menyebar info privat)."</p>
                </div>
              </div>
              <div className="h-full min-h-[200px] rounded-xl relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" 
                  alt="Cyberbullying" 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl flex items-end p-4">
                  <p className="text-white text-sm font-medium">Digital Footprint is Forever</p>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Cara Mencari Bantuan */}
          <div id="bantuan" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-nara-charcoal mb-6">Cara Mencari Bantuan</h2>
            <div className="space-y-4">
              <div className="flex gap-6 items-start bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-nara-orange text-white font-bold flex items-center justify-center shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-nara-charcoal">Dokumentasikan Bukti</h4>
                  <p className="text-sm text-slate-600 leading-[1.6]">Simpan screenshot, rekam suara, cetak chat. Bukti ini vital jika eskalasi perundungan naik ke ranah penegakan kedisiplinan/hukum.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-nara-orange text-white font-bold flex items-center justify-center shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-nara-charcoal">Jauhi Konfrontasi Langsung Secara Sendiri</h4>
                  <p className="text-sm text-slate-600 leading-[1.6]">Jika kamu merasa fisikmu terancam, block pelaku di platform digital, pergi ke tempat ramai yang aman segera.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-nara-orange text-white font-bold flex items-center justify-center shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-nara-charcoal">Berbicara Pada Pihak Otoritas / Relawan</h4>
                  <p className="text-sm text-slate-600 leading-[1.6]">Jangan menyimpannya sendiri. Beritahu Dosen Wali, Orang Tua, atau layanan Peer Support seperti Youth Anti-Bullying Indonesia.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA SECTION AT BOTTOM */}
      <section className="max-w-4xl mx-auto px-4 mt-32">
        <div className="bg-nara-paper rounded-2xl p-10 text-center border border-slate-200">
          <HeartHandshake className="w-12 h-12 text-nara-orange mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-nara-charcoal mb-4">Butuh Bantuan Sekarang?</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">Relawan Youth Anti-Bullying Indonesia siap mendengarkan ceritamu dengan privasi yang terjamin 100%. Jangan ragu untuk mencari dukungan.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setCurrentPage("cerita")}
              className="h-[48px] px-8 bg-nara-orange text-white font-medium rounded-lg hover:bg-[#E08A44] transition-colors flex items-center justify-center gap-2"
            >
              Cerita ke Kami
            </button>
            <button
              onClick={() => setCurrentPage("faq")}
              className="h-[48px] px-8 bg-transparent text-nara-charcoal border border-nara-charcoal font-medium rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
