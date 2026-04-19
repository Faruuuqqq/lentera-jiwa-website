export interface Article {
  slug: string;
  title: string;
  category: "Artikel" | "Tips" | "Panduan";
  summary: string;
  content: string;
  image: string; // Properti baru
}

export const articles: Article[] = [
  {
    slug: "perbedaan-stres-akademik-vs-burnout",
    title: "Perbedaan Stres Akademik vs Burnout",
    category: "Artikel",
    summary:
      "Kenali perbedaan antara tekanan studi yang normal dan kelelahan emosional yang serius.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80", // Gambar belajar/stres
    content: `
      <h2>Memahami Perbedaan Mendasar</h2>
      <p>Stres akademik adalah bagian normal dari kehidupan mahasiswa. Ini adalah tekanan yang Anda rasakan terkait tenggat waktu, ujian, dan tugas. Stres ini seringkali bersifat jangka pendek dan dapat menjadi motivator.</p>
      <p>Di sisi lain, burnout adalah kondisi kelelahan emosional, fisik, dan mental yang disebabkan oleh stres yang berkepanjangan dan berlebihan. Ini bukan hanya merasa lelah; ini adalah perasaan hampa, sinis, dan tidak berdaya.</p>

      <h3>Gejala Stres Akademik:</h3>
      <ul>
        <li>Kecemasan sesaat sebelum ujian.</li>
        <li>Kesulitan tidur sesekali.</li>
        <li>Sakit kepala atau ketegangan otot.</li>
        <li>Mudah tersinggung.</li>
      </ul>

      <h3>Gejala Burnout:</h3>
      <ul>
        <li>Perasaan lelah yang konstan.</li>
        <li>Kehilangan minat pada studi yang dulu dinikmati.</li>
        <li>Perasaan sinis atau detasemen dari perkuliahan.</li>
        <li>Penurunan prestasi akademik yang signifikan.</li>
        <li>Menarik diri dari teman dan keluarga.</li>
      </ul>

      <h2>Kapan Harus Mencari Bantuan?</h2>
      <p>Jika Anda merasa gejala yang Anda alami lebih mengarah ke burnout, penting untuk tidak mengabaikannya. Berbicara dengan teman, keluarga, atau seorang profesional dapat membantu. Ingat, Anda tidak sendirian.</p>
    `,
  },
  {
    slug: "teknik-grounding-5-4-3-2-1",
    title: "Teknik Grounding 5-4-3-2-1",
    category: "Tips",
    summary:
      "Sebuah metode sederhana untuk mengatasi cemas dengan kembali ke saat ini.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80", // Gambar meditasi/alam
    content: `
      <h2>Apa itu Teknik Grounding?</h2>
      <p>Teknik grounding adalah strategi sederhana yang dapat membantu Anda mengatasi kecemasan, serangan panik, dan bahkan trauma. Tujuannya adalah untuk membawa Anda kembali ke saat ini (here and now) dengan memfokuskan pada panca indera Anda.</p>

      <h3>Langkah-langkah Teknik 5-4-3-2-1:</h3>
      <p>Duduklah dengan nyaman, tarik napas dalam-dalam, dan ikuti langkah-langkah berikut:</p>
      <ul>
        <li><strong>5: Sebutkan 5 hal yang bisa Anda LIHAT.</strong> Lihatlah sekeliling Anda dan perhatikan detail-detail kecil. Misalnya, jam di dinding, pola di karpet, atau bayangan di meja.</li>
        <li><strong>4: Sebutkan 4 hal yang bisa Anda SENTUH.</strong> Rasakan tekstur pakaian Anda, permukaan kursi, atau dinginnya gelas di tangan Anda.</li>
        <li><strong>3: Sebutkan 3 hal yang bisa Anda DENGAR.</strong> Dengarkan suara-suara di sekitar Anda, seperti detak jam, suara lalu lintas di kejauhan, atau suara napas Anda sendiri.</li>
        <li><strong>2: Sebutkan 2 hal yang bisa Anda CIUM.</strong> Mungkin aroma kopi di meja Anda, atau wangi sabun di tangan Anda. Jika tidak ada, coba bayangkan aroma favorit Anda.</li>
        <li><strong>1: Sebutkan 1 hal yang bisa Anda RASA/KECAP.</strong> Fokus pada rasa di mulut Anda. Anda bisa minum seteguk air atau hanya merasakan sensasi di lidah Anda.</li>
      </ul>

      <h2>Mengapa Ini Bekerja?</h2>
      <p>Teknik ini mengalihkan fokus Anda dari pikiran cemas ke lingkungan fisik Anda. Ini membantu memutus siklus pikiran negatif dan menenangkan sistem saraf Anda.</p>
    `,
  },
  {
    slug: "cara-menjadi-pendengar-aktif",
    title: "Cara Menjadi Pendengar Aktif",
    category: "Panduan",
    summary:
      "Belajar bagaimana memberikan dukungan yang berarti bagi teman yang sedang bercerita.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80", // Gambar teman bicara
    content: `
      <h2>Menjadi Pendengar yang Lebih Baik</h2>
      <p>Seringkali, ketika seorang teman curhat, yang mereka butuhkan bukanlah solusi, melainkan telinga yang mau mendengar. Menjadi pendengar aktif adalah keterampilan yang sangat berharga untuk mendukung orang-orang di sekitar kita.</p>

      <h3>Prinsip-prinsip Pendengar Aktif:</h3>
      <ul>
        <li><strong>Berikan Perhatian Penuh:</strong> Jauhkan ponsel Anda dan berikan kontak mata. Tunjukkan bahwa Anda hadir untuk mereka.</li>
        <li><strong>Tunjukkan Anda Mendengarkan:</strong> Gunakan isyarat non-verbal seperti mengangguk, dan frasa singkat seperti "Saya mengerti" atau "Lalu?".</li>
        <li><strong>Refleksikan Perasaan:</strong> Coba validasi emosi mereka. Katakan hal-hal seperti, "Itu terdengar sangat membuat frustrasi," atau "Pasti berat sekali untukmu."</li>
        <li><strong>Jangan Langsung Memberi Nasihat:</strong> Tahan keinginan untuk langsung melompat ke solusi. Tanyakan, "Apakah kamu ingin saran, atau hanya butuh didengarkan?"</li>
        <li><strong>Ajukan Pertanyaan Terbuka:</strong> Alih-alih pertanyaan ya/tidak, ajukan pertanyaan yang mendorong mereka untuk berbagi lebih banyak, seperti "Bagaimana perasaanmu tentang itu?" atau "Apa yang paling mengganggumu?".</li>
      </ul>

      <h2>Dampak Besar dari Mendengarkan</h2>
      <p>Dengan menjadi pendengar aktif, Anda menciptakan ruang yang aman bagi teman Anda untuk memproses emosi mereka. Ini adalah salah satu bentuk dukungan paling kuat yang bisa Anda berikan.</p>
    `,
  },
  {
    slug: "mengenali-mengatasi-kecemasan-sosial",
    title: "Mengenali dan Mengatasi Kecemasan Sosial",
    category: "Artikel",
    summary:
      "Pahami apa itu kecemasan sosial dan strategi efektif untuk menghadapinya di lingkungan kampus.",
    image:
      "https://images.unsplash.com/photo-1595178156906-2396ef837b0f?auto=format&fit=crop&w=600&q=80", // Gambar orang di keramaian
    content: `
      <h2>Memahami Kecemasan Sosial</h2>
      <p>Kecemasan sosial, atau fobia sosial, adalah ketakutan intens terhadap situasi sosial yang melibatkan interaksi dengan orang lain. Ini lebih dari sekadar rasa malu; ini adalah ketakutan yang melumpuhkan akan dihakimi, dipermalukan, atau ditolak.</p>

      <h3>Tanda-tanda Kecemasan Sosial:</h3>
      <ul>
        <li>Ketakutan berlebihan saat berbicara di depan umum, makan di tempat umum, atau bertemu orang baru.</li>
        <li>Menghindari situasi sosial.</li>
        <li>Gejala fisik seperti jantung berdebar, berkeringat, gemetar, atau mual saat berada di situasi sosial.</li>
        <li>Khawatir berhari-hari atau berminggu-minggu sebelum acara sosial.</li>
      </ul>

      <h3>Strategi Mengatasi Kecemasan Sosial:</h3>
      <ul>
        <li><strong>Terapi Kognitif Perilaku (CBT):</strong> Belajar mengenali dan mengubah pola pikir negatif.</li>
        <li><strong>Paparan Bertahap:</strong> Perlahan-lahan hadapi situasi sosial yang memicu kecemasan, dimulai dari yang paling ringan.</li>
        <li><strong>Latih Keterampilan Sosial:</strong> Berlatih percakapan atau role-play untuk membangun kepercayaan diri.</li>
        <li><strong>Teknik Relaksasi:</strong> Latihan pernapasan dalam atau meditasi untuk menenangkan diri.</li>
        <li><strong>Dukungan Sosial:</strong> Berbicara dengan teman atau keluarga yang Anda percaya.</li>
      </ul>

      <h2>Jangan Biarkan Kecemasan Menahan Anda</h2>
      <p>Kecemasan sosial bisa sangat melelahkan, tetapi ada banyak cara untuk mengelolanya. Jangan ragu untuk mencari bantuan profesional jika Anda merasa kesulitan menghadapinya sendiri.</p>
    `,
  },
  {
    slug: "pentingnya-self-compassion-menghadapi-kegagalan",
    title: "Pentingnya Self-Compassion dalam Menghadapi Kegagalan",
    category: "Panduan",
    summary:
      "Belajar bagaimana bersikap baik pada diri sendiri saat mengalami kesulitan atau kegagalan.",
    image:
      "https://images.unsplash.com/photo-1621410153570-9c55676b0157?auto=format&fit=crop&w=600&q=80", // Gambar memeluk diri/tenang
    content: `
      <h2>Apa itu Self-Compassion?</h2>
      <p>Self-compassion adalah kemampuan untuk memperlakukan diri sendiri dengan kebaikan, pengertian, dan dukungan saat kita mengalami penderitaan, kegagalan, atau merasa tidak sempurna. Ini adalah kebalikan dari kritik diri yang keras.</p>

      <h3>Elemen Kunci Self-Compassion:</h3>
      <ul>
        <li><strong>Kebaikan Diri (Self-Kindness):</strong> Bersikap ramah dan memahami diri sendiri daripada menghakimi diri sendiri.</li>
        <li><strong>Kemanusiaan Bersama (Common Humanity):</strong> Mengakui bahwa penderitaan dan ketidaksempurnaan adalah bagian dari pengalaman manusia yang universal, bukan sesuatu yang hanya Anda alami.</li>
        <li><strong>Perhatian Penuh (Mindfulness):</strong> Mengamati emosi dan pikiran negatif tanpa menghakimi, menekan, atau melebih-lebihkannya.</li>
      </ul>

      <h3>Manfaat Self-Compassion Saat Gagal:</h3>
      <ul>
        <li>Mengurangi rasa malu dan kritik diri.</li>
        <li>Meningkatkan motivasi untuk mencoba lagi.</li>
        <li>Membangun ketahanan emosional.</li>
        <li>Memperbaiki hubungan dengan diri sendiri dan orang lain.</li>
      </ul>

      <h2>Berhenti Menyalahkan Diri Sendiri</h2>
      <p>Kegagalan adalah bagian tak terhindarkan dari pertumbuhan. Dengan self-compassion, Anda dapat belajar dari kesalahan Anda tanpa harus menderita secara emosional. Berikan pada diri Anda dukungan yang sama yang akan Anda berikan kepada teman baik.</p>
    `,
  },
  {
    slug: "cara-membangun-rutinitas-pagi-mendukung-kesehatan-mental",
    title: "Cara Membangun Rutinitas Pagi yang Mendukung Kesehatan Mental",
    category: "Tips",
    summary:
      "Temukan kebiasaan pagi yang dapat meningkatkan energi dan suasana hati Anda sepanjang hari.",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=600&q=80", // Gambar pagi hari
    content: `
      <h2>Awal Hari yang Berdampak Positif</h2>
      <p>Cara Anda memulai hari seringkali menentukan bagaimana sisa hari Anda akan berjalan. Rutinitas pagi yang disengaja dapat secara signifikan meningkatkan kesehatan mental, mengurangi stres, dan meningkatkan fokus.</p>

      <h3>Ide Rutinitas Pagi yang Sehat:</h3>
      <ul>
        <li><strong>Bangun Lebih Awal (Sedikit):</strong> Beri diri Anda waktu ekstra untuk tidak terburu-buru. Bahkan 15-30 menit dapat membuat perbedaan besar.</li>
        <li><strong>Hindari Langsung Mengecek Ponsel:</strong> Tunda mengecek email atau media sosial. Beri otak Anda kesempatan untuk 'bangun' tanpa dibombardir informasi.</li>
        <li><strong>Minum Air Putih:</strong> Hidrasi adalah kunci untuk fungsi tubuh dan otak yang optimal.</li>
        <li><strong>Gerakkan Tubuh Anda:</strong> Ini tidak harus olahraga intens. Peregangan ringan, yoga singkat, atau berjalan kaki sebentar bisa meningkatkan mood.</li>
        <li><strong>Praktikkan Mindfulness/Meditasi:</strong> Bahkan 5-10 menit meditasi dapat membantu menenangkan pikiran dan meningkatkan konsentrasi.</li>
        <li><strong>Jurnal atau Refleksi:</strong> Tuliskan pikiran, perasaan, atau tujuan Anda untuk hari itu.</li>
        <li><strong>Sarapan Bergizi:</strong> Beri tubuh Anda bahan bakar yang tepat untuk memulai hari.</li>
      </ul>

      <h2>Konsistensi Adalah Kunci</h2>
      <p>Anda tidak perlu melakukan semuanya sekaligus. Mulailah dengan satu atau dua kebiasaan baru dan pertahankan secara konsisten. Seiring waktu, rutinitas pagi Anda akan menjadi fondasi yang kuat untuk kesehatan mental Anda.</p>
    `,
  },
];
