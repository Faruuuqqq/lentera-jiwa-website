"use client";

import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Sadari Perundungan",
      description:
        "Kamu atau teman mengalami perundungan? Sadari bahwa ini bukan salahmu. Itu perlu ditangani dan laporkan secara anonim kepada kami.",
      icon: "😔",
      color: "from-nara-yellow/40 to-nara-yellow/10",
      textColor: "text-amber-800",
    },
    {
      number: "02",
      title: "Datang ke Lentera",
      description:
        "Hubungi kami via form 'Cerita ke Lentera' atau chat langsung dengan volunteer kami yang telah terlatih untuk kasus perundungan.",
      icon: "💌",
      color: "from-nara-orange/30 to-nara-orange/5",
      textColor: "text-orange-900",
    },
    {
      number: "03",
      title: "Cerita & Didengarkan",
      description:
        "Ceritakan pengalaman kamu. Volunteer kami siap mendengarkan dengan teknik 'Active Listening' tanpa menghakimi sedikitpun.",
      icon: "🗣️",
      color: "from-nara-blue-light to-blue-50",
      textColor: "text-[#2c3e50]",
    },
    {
      number: "04",
      title: "Dukungan & Aksi",
      description:
        "Dapatkan support emosional, edukasi, dan kami bisa membantumu untuk mengambil langkah nyata selanjutnya (termasuk komunitas mitra).",
      icon: "🤝",
      color: "from-slate-200 to-slate-50",
      textColor: "text-slate-800",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white mt-12">
      {/* Background Elements */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-nara-yellow/10 -z-10 skew-x-12 transform origin-top-right rounded-bl-[5rem]"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-sans text-3xl sm:text-4xl font-medium text-nara-charcoal mb-4">
            Alur Bantuan <span className="text-nara-orange">Sederhana.</span>
          </h2>
          <p className="text-base text-slate-600">
            Tidak perlu birokrasi rumit atau takut dihakimi. Kebebasanmu dari perundungan dimulai dari langkah pertama.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (Desktop Only) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-slate-100 -z-10 transform translate-x-1/2">
                  <div className="absolute right-0 -top-1.5">
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  </div>
                </div>
              )}

              <div
                className={`h-full bg-nara-paper p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-soft transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden`}
              >
                {/* Big Number Background */}
                <span className="absolute -right-4 -bottom-4 font-sans text-9xl font-medium text-white opacity-40 select-none pointer-events-none group-hover:scale-110 transition-transform">
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center text-3xl mb-6 shadow-sm border border-slate-100 group-hover:rotate-6 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className={`text-xl font-medium mb-3 ${step.textColor}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm leading-[1.6] ${step.textColor} opacity-80 font-normal`}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
