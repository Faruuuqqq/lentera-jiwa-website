export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-peach-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-block rounded-full bg-peach-100 px-4 py-2 text-sm font-medium text-peach-600">
          Gerakan Kesehatan Mental Mahasiswa 🤝
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight text-teal-900 sm:text-5xl lg:text-6xl text-balance">
          Menghubungkan Cerita,
          <br /> Menguatkan Jiwa
        </h1>

        <p className="mb-8 text-lg text-teal-700 leading-relaxed max-w-2xl mx-auto text-balance">
          Cerita kamu penting. Beban yang kamu rasakan layak didengar. Youth Anti-Bullying Indonesia adalah ruang aman di mana teman
          sebayamu siap mendengarkan dengan hati yang tulus.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <button className="rounded-full bg-teal-500 px-8 py-3 font-medium text-white hover:bg-teal-600 transition-colors shadow-lg hover:shadow-xl">
            Butuh Teman Cerita
          </button>
          <button className="rounded-full border-2 border-teal-200 px-8 py-3 font-medium text-teal-600 hover:bg-teal-50 transition-colors">
            Tahukan Program Kami
          </button>
        </div>

        {/* Stats section with better spacing */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-3xl font-bold text-teal-600">500+</div>
            <p className="text-sm text-teal-600 mt-2">Peer Supporter</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-3xl font-bold text-teal-600">15</div>
            <p className="text-sm text-teal-600 mt-2">Fakultas</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-3xl font-bold text-teal-600">2000+</div>
            <p className="text-sm text-teal-600 mt-2">Cerita Didengar</p>
          </div>
        </div>
      </div>

      {/* Decorative shapes - subtler */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-100/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-peach-100/20 blur-3xl" />
    </section>
  )
}
