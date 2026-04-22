export default function CTA() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-sage-500 to-sage-600">
      <div className="mx-auto max-w-3xl text-center text-white">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Siap Memulai Perjalanan Anda?</h2>
        <p className="mb-8 text-lg text-sage-100 leading-relaxed">
          Bergabunglah dengan komunitas Youth Anti-Bullying Indonesia dan rasakan kekuatan dukungan teman sebaya. Setiap cerita berharga,
          setiap suara penting.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <button className="rounded-full bg-white px-8 py-3 font-medium text-sage-600 hover:bg-sage-50 transition-colors">
            Hubungi P2K2 Unpad
          </button>
          <button className="rounded-full border-2 border-white px-8 py-3 font-medium text-white hover:bg-white/10 transition-colors">
            Cari Youth Anti-Bullying Indonesia di Fakultasku
          </button>
        </div>
      </div>
    </section>
  )
}
