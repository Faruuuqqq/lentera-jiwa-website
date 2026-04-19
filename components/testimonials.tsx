"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rina, Mahasiswa Psikologi",
      role: "Lentera Jiwa Peer Supporter",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      quote:
        "Melalui Lentera Jiwa, saya belajar bahwa mendengarkan adalah bentuk terbesar dari kepedulian. Setiap percakapan membuat saya tumbuh dan membuat teman saya merasa tidak sendiri.",
    },
    {
      name: "Arjun, Mahasiswa Teknik",
      role: "Mahasiswa yang Mendapat Dukungan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      quote:
        "Saat stress dengan banyak tugas, saya mendapat support dari Lentera Jiwa. Mereka tidak menghakimi, hanya mendengarkan dengan tulus. Itu membuat perbedaan besar.",
    },
    {
      name: "Siti, Mahasiswa Hukum",
      role: "Lentera Jiwa Peer Supporter",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      quote:
        "Jadi bagian dari Lentera Jiwa mengajarkan saya bahwa kesehatan mental bukan hal tabu. Bersama-sama kita ciptakan ruang aman untuk saling berbagi dan tumbuh.",
    },
  ]

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-sage-50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-sage-900 sm:text-4xl">Kisah Nyata dari Komunitas Kami</h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Dengarkan bagaimana Lentera Jiwa mengubah kehidupan mahasiswa melalui dukungan teman sebaya yang penuh empati.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-sage-200 bg-white hover:shadow-lg transition-shadow p-6 flex flex-col">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-sage-900">{testimonial.name}</p>
                    <p className="text-sm text-sage-600">{testimonial.role}</p>
                  </div>
                </div>
                <span className="text-2xl text-sage-400">"</span>
              </div>
              <p className="flex-grow text-sage-700 leading-relaxed italic">{testimonial.quote}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
