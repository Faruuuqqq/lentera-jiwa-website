"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function GetHelp() {
  const contacts = [
    {
      title: "Chat dengan Lentera Jiwa",
      description: "Terhubung dengan peer supporter kami yang siap mendengarkan cerita Anda.",
      action: "Hubungi Kami",
      color: "from-sage-500 to-sage-600",
      textColor: "text-white",
    },
    {
      title: "P2K2 (Tim Profesional)",
      description: "Layanan psikolog profesional dan konseling untuk masalah kesehatan mental yang lebih kompleks.",
      action: "Konsultasi P2K2",
      color: "from-blue-500 to-blue-600",
      textColor: "text-white",
    },
    {
      title: "Emergency Support",
      description: "Jika Anda dalam krisis atau merasa dalam bahaya, hubungi segera layanan darurat kami.",
      action: "Hubungi Darurat",
      color: "from-red-500 to-red-600",
      textColor: "text-white",
    },
  ]

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-sage-50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-sage-900 sm:text-4xl">Butuh Bantuan?</h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Kamu tidak sendiri. Pilih cara yang paling nyaman untuk menghubungi kami atau layanan profesional kami.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-12">
          {contacts.map((contact, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${contact.color} border-0 overflow-hidden hover:shadow-lg transition-shadow`}
            >
              <div className={`${contact.textColor} p-8 h-full flex flex-col`}>
                <h3 className="mb-3 text-2xl font-bold">{contact.title}</h3>
                <p className="mb-6 flex-grow opacity-90">{contact.description}</p>
                <Button variant="secondary" className="w-full bg-white text-sage-900 hover:bg-gray-100 font-semibold">
                  {contact.action}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-sage-200 p-8 sm:p-12">
          <h3 className="mb-6 text-2xl font-bold text-sage-900">Informasi Kontak</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-sage-600 mb-2">WHATSAPP</p>
              <p className="text-lg font-bold text-sage-900">+62 812-XXXX-XXXX</p>
              <p className="text-sm text-sage-600">24/7 tersedia</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-sage-600 mb-2">EMAIL</p>
              <p className="text-lg font-bold text-sage-900">Lentera.jiwa@unpad.ac.id</p>
              <p className="text-sm text-sage-600">Respons dalam 24 jam</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-sage-600 mb-2">LOKASI</p>
              <p className="text-lg font-bold text-sage-900">P2K2, Gedung Rektorat</p>
              <p className="text-sm text-sage-600">Jl. Dipati Ukur, Bandung</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sage-600">
            <span className="font-semibold text-sage-900">Darurat kesehatan mental?</span> Hubungi psikolog 24/7 P2K2
            atau layanan kesehatan terdekat Anda.
          </p>
        </div>
      </div>
    </section>
  )
}
