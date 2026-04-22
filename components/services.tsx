"use client"

import { Card } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      title: "Active Listening",
      description: "Mendengarkan dengan empati penuh tanpa menghakimi, memberikan ruang aman untuk berbagi cerita.",
      icon: "👂",
    },
    {
      title: "Emotional Support",
      description:
        "Dukungan emosional dasar untuk membantu teman mengatasi stres, kecemasan, atau beban yang sedang dihadapi.",
      icon: "🤝",
    },
    {
      title: "Early Detection",
      description:
        "Mengenali tanda-tanda awal distress dan membantu pencegahan sebelum masalah berkembang lebih serius.",
      icon: "🔍",
    },
    {
      title: "Referral to Professionals",
      description: "Menghubungkan ke layanan profesional P2K2 ketika diperlukan bantuan lebih lanjut dari psikolog.",
      icon: "🔗",
    },
    {
      title: "Safe Space",
      description: "Menjaga kerahasiaan dan etika pendampingan untuk menciptakan lingkungan yang benar-benar aman.",
      icon: "🛡️",
    },
    {
      title: "Peer Education",
      description:
        "Memberikan informasi tentang kesehatan mental, coping strategies, dan self-care untuk diri sendiri dan teman.",
      icon: "📚",
    },
  ]

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-sage-900 sm:text-4xl">Layanan Youth Anti-Bullying Indonesia</h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai bentuk dukungan yang dirancang khusus untuk kesejahteraan mental mahasiswa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-sage-200 bg-gradient-to-br from-sage-50 to-white hover:shadow-md transition-shadow p-6"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="mb-3 text-lg font-bold text-sage-900">{service.title}</h3>
              <p className="text-sage-600 leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-blue-50 border border-blue-200 p-8 sm:p-12">
          <div className="flex gap-4">
            <div className="text-3xl">ℹ️</div>
            <div>
              <h3 className="mb-3 text-xl font-bold text-blue-900">Bukan Pengganti Profesional</h3>
              <p className="text-blue-800 leading-relaxed">
                Youth Anti-Bullying Indonesia adalah jembatan pertama menuju dukungan profesional. Kami tidak menggantikan peran psikolog,
                tetapi membantu menciptakan jaringan dukungan yang lebih kuat di komunitas mahasiswa. Untuk masalah
                kesehatan mental yang kompleks, kami akan merujuk ke P2K2 atau psikolog profesional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
