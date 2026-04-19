"use client"

import { Heart, Ear, Shield, Lightbulb } from "lucide-react"

export default function Values() {
  const values = [
    {
      icon: Ear,
      title: "Mendengarkan dengan Hati",
      description: "Setiap cerita berharga. Kami mendengarkan tanpa menghakimi, dengan penuh empati dan perhatian.",
    },
    {
      icon: Shield,
      title: "Privasi Terjamin",
      description: "Apa yang kamu ceritakan aman bersama kami. Kerahasiaan adalah komitmen kami yang utama.",
    },
    {
      icon: Heart,
      title: "Teman, Bukan Terapis",
      description: "Kami memahami yang kamu rasakan karena kami juga mahasiswa. Dukungan dari hati ke hati.",
    },
    {
      icon: Lightbulb,
      title: "Asa dan Harapan",
      description: "Dalam setiap tantangan ada jalan keluar. Bersama kita temukan cahaya di tengah kegelapan.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900 mb-4 text-balance">Nilai Inti Lentera Jiwa</h2>
          <p className="text-lg text-teal-700 max-w-2xl mx-auto text-balance">
            Fondasi program kami dibangun atas nilai-nilai yang menekankan kemanusiaan, kepercayaan, dan pertumbuhan
            bersama.
          </p>
        </div>

        {/* Values grid - more spacious */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-white border border-teal-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-peach-100 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-peach-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-900 mb-3">{value.title}</h3>
                <p className="text-teal-700 leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
