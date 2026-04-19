"use client";

import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Rasakan & Sadari",
      description:
        "Saat kamu merasa beban akademik atau emosional mulai berat, sadari bahwa itu valid. Kamu tidak perlu memendamnya sendiri.",
      icon: "😔",
      color: "from-orange-100 to-orange-50",
      textColor: "text-orange-800",
    },
    {
      number: "02",
      title: "Hubungi Lentera Jiwa",
      description:
        "Pilih cara yang paling nyaman: kirim tiket anonim lewat 'Kotak Cerita' atau chat langsung dengan Peer Supporter.",
      icon: "💌",
      color: "from-teal-100 to-teal-50",
      textColor: "text-teal-800",
    },
    {
      number: "03",
      title: "Sesi Bercerita",
      description:
        "Ceritakan apa pun. Relawan kami akan mendengarkan dengan teknik 'Active Listening' tanpa menghakimi sedikit pun.",
      icon: "🗣️",
      color: "from-blue-100 to-blue-50",
      textColor: "text-blue-800",
    },
    {
      number: "04",
      title: "Dukungan & Solusi",
      description:
        "Dapatkan kelegaan, perspektif baru, atau rujukan ke psikolog profesional (P2K2) jika masalah terasa terlalu berat.",
      icon: "🤝",
      color: "from-purple-100 to-purple-50",
      textColor: "text-purple-800",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-white -z-20"></div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#E6EFF2]/50 -z-10 skew-x-12 transform origin-top-right"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2E5063] mb-4">
            Alur Bantuan <span className="text-[#C7913B]">Sederhana.</span>
          </h2>
          <p className="text-lg text-slate-600">
            Tidak perlu birokrasi rumit. Kesehatan mentalmu adalah prioritas
            yang harus segera ditangani.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                className={`h-full bg-gradient-to-br ${step.color} p-8 rounded-3xl border border-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden`}
              >
                {/* Big Number Background */}
                <span className="absolute -right-4 -bottom-8 text-9xl font-bold text-white opacity-40 select-none pointer-events-none">
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
                    {step.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${step.textColor}`}>
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
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
