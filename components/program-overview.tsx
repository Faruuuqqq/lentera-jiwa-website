export default function ProgramOverview() {
  const features = [
    {
      title: "Pemahaman Dasar",
      description: "Belajar tentang kesehatan mental dan tanda-tanda distress yang perlu diperhatikan",
      icon: "🧠",
    },
    {
      title: "Mendengar Empatik",
      description: "Kuasai teknik active listening untuk memberikan dukungan yang bermakna",
      icon: "👂",
    },
    {
      title: "Pendampingan Pertama",
      description: "Berikan Psychological First Aid dengan penuh kepedulian dan profesionalitas",
      icon: "🤝",
    },
    {
      title: "Etika & Batas",
      description: "Pahami pentingnya kerahasiaan dan menjaga batas pendampingan yang sehat",
      icon: "🛡️",
    },
  ]

  return (
    <section id="program" className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-sage-900 sm:text-4xl">Apa Itu Youth Anti-Bullying Indonesia?</h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Program pelatihan teman sebaya yang memberdayakan mahasiswa untuk memberikan dukungan emosional dasar dan
            menjadi pendengar pertama.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-sage-100 bg-gradient-to-br from-sage-50 to-white p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3 className="mb-2 text-lg font-bold text-sage-900">{feature.title}</h3>
              <p className="text-sm text-sage-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-sage-500 to-sage-600 p-8 text-white sm:p-12">
          <h3 className="mb-4 text-2xl font-bold">Mengapa Youth Anti-Bullying Indonesia Penting?</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span>✓</span>
              <span>Membangun budaya saling menjaga dan empati di kampus</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span>
              <span>Mengurangi stigma dalam berbagi cerita dan beban emosional</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span>
              <span>Deteksi dini dan pencegahan krisis kesehatan mental</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span>
              <span>Memperkuat peran P2K2 melalui jejaring dukungan yang lebih dekat</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
