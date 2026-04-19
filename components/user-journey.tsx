"use client"

import { useState } from "react"

export default function UserJourney() {
  const [activeStep, setActiveStep] = useState(0)

  const journeySteps = [
    {
      title: "Merasakan Beban",
      description: "Mahasiswa mengalami stres, kecemasan, atau burnout dalam perjalanan akademik mereka",
      icon: "😔",
    },
    {
      title: "Bertemu Teman Sebaya",
      description: "Menemukan Lentera Jiwa terlatih yang siap mendengarkan dengan penuh empati",
      icon: "🤗",
    },
    {
      title: "Berbagi Cerita",
      description: "Menciptakan ruang aman untuk mengekspresikan perasaan dan kegelisahan",
      icon: "💬",
    },
    {
      title: "Menerima Dukungan",
      description: "Mendapatkan mendengarkan aktif dan pendampingan awal yang bermakna",
      icon: "❤️",
    },
    {
      title: "Merasa Lebih Kuat",
      description: "Beban terasa lebih ringan, tahu tidak sendirian, dan siap mengambil langkah selanjutnya",
      icon: "💪",
    },
  ]

  return (
    <section id="journey" className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-sage-50">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-sage-900 sm:text-4xl">Perjalanan Mahasiswa dengan Lentera Jiwa</h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Bagaimana teman sebaya kami mengubah kisah dari kekhawatiran menjadi pemberdayaan
          </p>
        </div>

        {/* Mobile & Tablet Journey View */}
        <div className="grid gap-6 lg:hidden">
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className="rounded-2xl border-2 border-sage-200 bg-white p-6 cursor-pointer hover:shadow-lg transition-all"
              onClick={() => setActiveStep(index)}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{step.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-sage-900 mb-2">{step.title}</h3>
                  <p className="text-sage-600">{step.description}</p>
                </div>
                <div className="text-2xl font-bold text-sage-300">0{index + 1}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Journey View */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-16 bottom-0 w-1 bg-gradient-to-b from-sage-300 to-sage-200" />

            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <div key={index} className="flex gap-8 cursor-pointer group" onClick={() => setActiveStep(index)}>
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`h-16 w-16 rounded-full flex items-center justify-center text-2xl transition-all ${
                        activeStep === index
                          ? "bg-sage-500 text-white scale-110 shadow-lg"
                          : "bg-sage-100 text-sage-600 group-hover:bg-sage-200"
                      }`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  <div
                    className={`flex-1 rounded-2xl border-2 p-6 transition-all ${
                      activeStep === index
                        ? "border-sage-500 bg-gradient-to-br from-sage-50 to-white shadow-lg"
                        : "border-sage-100 bg-white hover:border-sage-200"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-sage-900 mb-2">{step.title}</h3>
                    <p className="text-sage-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
