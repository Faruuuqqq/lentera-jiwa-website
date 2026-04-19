import React from "react";
import { Ear, Heart, ShieldCheck, Users, Milestone, CalendarDays } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

const timelinePrograms = [
  {
    icon: ShieldCheck,
    title: "Deteksi Dini & Screening",
    status: "Rutin Tiap Semester",
    description: "Program asessment mandiri online untuk mengidentifikasi tingkat stres, kecemasan, atau tanda awal bullying di lingkungan sekolah atau kampus. Membantu intervensi sebelum masalah membesar.",
    color: "bg-nara-yellow",
    textColor: "text-amber-700"
  },
  {
    icon: Ear,
    title: "Layanan Curhat Sebaya (Active Listening)",
    status: "Tersedia 24/7",
    description: "Konseling teman sebaya anonim atau terbuka. Kamu akan didengarkan sepenuhnya tanpa dihakimi oleh relawan terlatih Lentera Jiwa yang memiliki rentang usia yang sama agar lebih nyambung.",
    color: "bg-nara-orange",
    textColor: "text-orange-800"
  },
  {
    icon: Users,
    title: "Support Group Anti-Perundungan",
    status: "Setiap Akhir Bulan",
    description: "Pertemuan berkala (luring dan daring) yang aman dan tertutup bagi penyintas perundungan untuk saling berbagi, mendukung, dan memvalidasi perasaan satu sama lain.",
    color: "bg-[#2E5063]",
    textColor: "text-white"
  },
  {
    icon: Heart,
    title: "Psychological First Aid (PFA)",
    status: "Khusus Situasi Krisis",
    description: "Pertolongan pertama psikologis cepat tanggap untuk mahasiswa atau siswa yang baru saja mengalami kejadian perundungan hebat atau kepanikan ekstrem di hari h kejadian.",
    color: "bg-slate-800",
    textColor: "text-slate-100"
  }
];

export default function Programs() {
  return (
    <div className="bg-nara-paper min-h-screen text-nara-charcoal pb-32">
      {/* HEADER */}
      <section className="pt-24 pb-16 px-4 max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-nara-orange/10 text-nara-orange text-sm font-medium mb-6">
            <Milestone className="w-4 h-4" />
            Langkah Nyata Lentera Jiwa
          </div>
          <h1 className="font-sans text-5xl md:text-6xl font-medium mb-6 leading-tight">
            Program & <span className="text-nara-orange">Aktivitas Kami</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Menghapus perundungan tidak bisa dilakukan dalam semalam. Berikut adalah program konkrit kami yang berfokus pada pencegahan, pendampingan, hingga pemulihan.
          </p>
        </AnimatedSection>
      </section>

      {/* TIMELINE SECTION */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="relative border-l-4 border-nara-yellow/30 ml-6 md:ml-12 lg:ml-20 py-8 space-y-16">
          
          {timelinePrograms.map((program, idx) => {
            const Icon = program.icon;
            return (
              <AnimatedSection key={idx} delay={idx * 0.15}>
                <div className="relative pl-8 md:pl-12 group">
                  {/* Timeline Node */}
                  <div className={`absolute -left-[30px] md:-left-[38px] top-4 w-14 h-14 rounded-full ${program.color} flex items-center justify-center text-white shadow-lg border-4 border-nara-paper z-10 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Card Content */}
                  <div className="bg-white rounded-xl p-8 md:p-10 shadow-soft border border-slate-200 hover:border-nara-orange transition-all duration-300 relative overflow-hidden">
                    {/* Decorative Background Icon */}
                    <Icon className={`absolute -right-6 -bottom-6 w-40 h-40 opacity-[0.03] text-nara-charcoal pointer-events-none`} />

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
                      <h3 className="font-sans text-2xl md:text-3xl font-medium text-nara-charcoal">
                        {program.title}
                      </h3>
                      <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wide bg-slate-50 ${program.textColor} border border-slate-100`}>
                        <CalendarDays className="w-3.5 h-3.5" />
                        {program.status}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-[1.6] text-base relative z-10">
                      {program.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}

        </div>
      </section>

      {/* CALL TO ACTION BOTTOM */}
      <section className="max-w-4xl mx-auto px-4 mt-24">
        <AnimatedSection delay={0.4}>
          <div className="bg-white rounded-xl p-10 md:p-12 text-center border border-slate-200 shadow-soft">
            <h3 className="font-sans text-2xl md:text-3xl font-medium mb-4 text-nara-charcoal">Ingin Menyelenggarakan Program Ini di Kampusmu?</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto leading-[1.6]">Kami membuka kolaborasi support group dan screening untuk organisasi sekolah atau himpunan mahasiswa. Mari ciptakan zonamu sendiri yang bebas bully.</p>
            <button className="h-[48px] px-8 bg-nara-orange text-white font-medium rounded-lg hover:bg-[#E08A44] transition-colors duration-300 shadow-sm mx-auto flex items-center justify-center">
              Hubungi Kami untuk Kolaborasi
            </button>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
