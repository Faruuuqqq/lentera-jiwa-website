"use client"

import { useState } from 'react';
import { Ear, Heart, AlertCircle, FileText, Users, Phone, X } from "lucide-react"
import AnimatedSection from '@/components/ui/animated-section';

const programs = [
  {
    icon: Ear,
    title: "Active Listening",
    shortDesc: "Layanan curhat di mana kamu didengarkan sepenuhnya tanpa dihakimi.",
    longDesc: "Di sini, kamu bisa mencurahkan segala perasaan dan pikiranmu kepada seorang teman sebaya yang terlatih untuk mendengarkan secara aktif. Tujuannya adalah memberikan ruang aman bagimu untuk didengar dan divalidasi, bukan untuk dihakimi atau diberi solusi instan."
  },
  {
    icon: Heart,
    title: "Psychological First Aid (PFA)",
    shortDesc: "Pertolongan pertama untuk mendukung mahasiswa dalam situasi krisis emosional.",
    longDesc: "PFA adalah serangkaian tindakan suportif yang diberikan kepada seseorang yang baru saja mengalami peristiwa stres yang signifikan. Ini bukan konseling, melainkan bantuan praktis untuk menenangkan, mengurangi tingkat stres, dan menghubungkan dengan bantuan lebih lanjut jika diperlukan."
  },
  {
    icon: AlertCircle,
    title: "Deteksi Dini",
    shortDesc: "Mengidentifikasi tanda-tanda stres, cemas, atau burnout sejak awal.",
    longDesc: "Melalui kuesioner mandiri dan edukasi, kami membantu mahasiswa untuk lebih peka terhadap perubahan kondisi mental mereka. Mengenali gejala lebih awal dapat mencegah masalah menjadi lebih serius dan mempercepat proses pemulihan."
  },
  {
    icon: FileText,
    title: "Pendampingan Holistik",
    shortDesc: "Dukungan emosional menyeluruh yang disesuaikan dengan kebutuhan individual.",
    longDesc: "Kami melihat setiap individu secara utuh, tidak hanya dari satu aspek masalah. Pendampingan ini mencakup dukungan emosional, bantuan dalam manajemen waktu, hingga diskusi tentang gaya hidup sehat yang semuanya berpengaruh pada kesehatan mental."
  },
  {
    icon: Users,
    title: "Peer Support Community",
    shortDesc: "Membangun komunitas saling dukung antar mahasiswa yang inklusif.",
    longDesc: "Lentera Jiwa secara aktif membangun sebuah komunitas di mana mahasiswa merasa memiliki, diterima, dan saling mendukung. Kami mengadakan kegiatan kelompok, diskusi, dan workshop untuk memperkuat ikatan sosial dan mengurangi rasa isolasi."
  },
  {
    icon: Phone,
    title: "Rujukan Profesional",
    shortDesc: "Memfasilitasi koneksi dengan layanan konseling profesional P2K2 jika diperlukan.",
    longDesc: "Jika relawan kami merasa bahwa kamu membutuhkan bantuan lebih dari yang bisa kami tawarkan, kami akan dengan hati-hati dan suportif membantumu terhubung dengan psikolog profesional di P2K2 Unpad untuk penanganan lebih lanjut."
  },
]

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2E5063]">Program & Layanan</h2>
            <p className="text-slate-500 mt-2">Pendekatan kami dalam menjaga kesehatan mentalmu.</p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => {
            const Icon = program.icon
            return (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <button
                  onClick={() => setSelectedProgram(program)}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-[#C7913B]/50 transition group text-left h-full"
                >
                  <div className="w-14 h-14 bg-[#E6EFF2] rounded-xl flex items-center justify-center text-[#2E5063] mb-6 group-hover:bg-[#2E5063] group-hover:text-white transition">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
                  <p className="text-slate-600">{program.shortDesc}</p>
                </button>
              </AnimatedSection>
            )
          })}
        </div>
      </div>

      {selectedProgram && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative">
              <button onClick={() => setSelectedProgram(null)} className="absolute top-4 right-4 text-slate-500 hover:text-slate-800">
                <X className="w-6 h-6" />
              </button>
              <div className="w-16 h-16 bg-[#2E5063] rounded-xl flex items-center justify-center text-white mb-6">
                <selectedProgram.icon className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-[#2E5063] mb-4">{selectedProgram.title}</h2>
              <p className="text-slate-600 leading-relaxed">{selectedProgram.longDesc}</p>
            </div>
          </AnimatedSection>
        </div>
      )}
    </>
  )
}
