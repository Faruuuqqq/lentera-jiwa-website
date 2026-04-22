export interface Article {
  slug: string;
  title: string;
  category: "Artikel" | "Tips" | "Panduan";
  summary: string;
  content: string;
  image: string;
}

export const articles: Article[] = [
  {
    slug: "mengenali-tanda-tanda-perundungan",
    title: "Mengenali Tanda-Tanda Perundungan",
    category: "Artikel",
    summary:
      "Pelajari ciri-ciri perundungan dan bagaimana membedakannya dengan konflik biasa agar kamu bisa melindungi diri sendiri dan teman-temanmu.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
    content: `
      <h2>Apa itu Perundungan?</h2>
      <p>Perundungan (bullying) adalah perilaku agresif yang dilakukan secara sengaja dan berulang-ulang untuk menyakiti atau mengintimidasi seseorang yang dianggap lebih lemah. Berbeda dengan konflik biasa, perundungan melibatkan ketidakseimbangan kekuasaan dan intensi untuk menyakiti.</p>

      <h3>Tanda-Tanda Kamu Mungkin Dibully:</h3>
      <ul>
        <li>Sering diejek, dihina, atau dipanggil nama buruk di depan orang lain.</li>
        <li>Dikucilkan, diabaikan, atau disuruh tidak bergabung dengan kelompok.</li>
        <li>Barang-barang pribadimu dirusak, diambil, atau disembunyikan.</li>
        <li>Menerima pesan atau komentar menyakitkan di media sosial.</li>
        <li>Dipukul, didorong, atau diperlakukan kasar secara fisik.</li>
        <li>Difoto atau divideo tanpa izin untuk dipermalukan.</li>
      </ul>

      <h3>Tanda-Tanda Temanmu Mungkin Dibully:</h3>
      <ul>
        <li>Tiba-tiba sering bolos sekolah atau menghindari tempat tertentu.</li>
        <li>Mengalami perubahan mood yang drastis menjadi sedih atau tertutup.</li>
        <li>Barang-barangnya sering hilang atau rusak tanpa alasan.</li>
        <li>Tidak mau makan di kantin atau ikut kegiatan sosial.</li>
        <li>Menunjukkan tanda-tanda fisik seperti memar atau luka.</li>
      </ul>

      <h2>Membedakan Konflik dan Perundungan</h2>
      <p>Konflik adalah pertengkaran atau perselisihan antara dua pihak yang setara. Sementara perundungan melibatkan ketidakseimbangan kekuasaan di mana satu pihak merasa tidak berdaya. Jika kamu merasa tidak bisa membela diri atau situasinya terus berulang, itu mungkin perundungan.</p>

      <h2>Jangan Diam!</h2>
      <p>Mengenali tanda-tanda perundungan adalah langkah pertama untuk menghentikannya. Jika kamu atau temanmu mengalami ini, jangan ragu untuk mencari bantuan. Ceritakan kepada orang dewasa yang kamu percaya, guru, atau hubungi Youth Anti-Bullying Indonesia.</p>
    `,
  },
  {
    slug: "tips-menghadapi-ejekan-dan-hinaan",
    title: "Tips Menghadapi Ejekan dan Hinaan",
    category: "Tips",
    summary:
      "Strategi praktis untuk merespons ejekan dengan bijak, membangun ketahanan mental, dan menjaga harga diri.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    content: `
      <h2>Ejekan Itu Sakit, Tapi Kamu Bisa Mengatasinya</h2>
      <p>Ejekan dan hinaan adalah bentuk perundungan verbal yang paling umum. Kata-kata memang bisa menyakitkan, tapi ada cara untuk meresponsnya tanpa memperburuk situasi atau merusak harga dirimu.</p>

      <h3>Strategi MERespons Ejekan:</h3>
      <ul>
        <li><strong>Tetap Tenang:</strong> Jangan tunjukkan bahwa kamu tersinggung. Pelaku sering mencari reaksi. Jika kamu tidak bereaksi, mereka mungkin akan berhenti.</li>
        <li><strong>Gunakan Humor:</strong> Kadang merespons dengan humor ringan bisa melumpuhkan ejekan. Contoh: "Iya nih, aku memang aneh, tapi itu yang bikin aku spesial!"</li>
        <li><strong>Katakan dengan Tegas:</strong> Gunakan suara yang tenang tapi tegas. Katakan "Stop, itu tidak lucu" atau "Aku tidak suka diperlakukan seperti ini."</li>
        <li><strong>Abaikan dan Pergi:</strong> Terkadang cara terbaik adalah berjalan pergi dengan kepala tegak. Tunjukkan bahwa ejekan mereka tidak berpengaruh padamu.</li>
        <li><strong>Jangan Membalas dengan Ejekan:</strong> Membalas ejekan hanya akan menurunkan levelmu dan memperpanjang konflik.</li>
      </ul>

      <h3>Membangun Ketahanan Mental:</h3>
      <ul>
        <li><strong>Kenali Kelebihanmu:</strong> Buat daftar hal-hal baik tentang dirimu. Ingat, ejekan mereka bukan kebenaran.</li>
        <li><strong>Cari Dukungan:</strong> Kelilingi dirimu dengan teman-teman yang positif dan mendukung.</li>
        <li><strong>Self-Care:</strong> Lakukan aktivitas yang kamu sukai untuk menjaga mood dan kepercayaan diri.</li>
        <li><strong>Bicarakan Perasaanmu:</strong> Jangan simpan sendiri. Ceritakan kepada orang yang kamu percayai.</li>
      </ul>

      <h2>Jika Ejekan Berlanjut...</h2>
      <p>Jika ejekan terus berlanjut atau membuatmu merasa sangat tertekan, jangan ragu untuk melaporkannya. Perundungan verbal tetap perundungan dan harus ditangani.</p>
    `,
  },
  {
    slug: "cara-membantu-teman-yang-dibully",
    title: "Cara Membantu Teman yang Dibully",
    category: "Panduan",
    summary:
      "Panduan lengkap untuk menjadi teman yang baik dan memberikan dukungan yang tepat kepada korban perundungan.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80",
    content: `
      <h2>Peran Penting Sebagai Bystander</h2>
      <p>Sebagai saksi (bystander), kamu memiliki kekuatan besar untuk menghentikan perundungan. Dukungan dari teman sebaya bisa sangat berarti bagi korban dan membantu mereka merasa tidak sendirian.</p>

      <h3>Apa yang Bisa Kamu Lakukan:</h3>
      <ul>
        <li><strong>Dekati dengan Empati:</strong> Setelah kejadian, dekati korban dan tanyakan "Kamu baik-baik saja?" atau "Aku di sini kalau kamu mau cerita."</li>
        <li><strong>Dengarkan Tanpa Menghakimi:</strong> Biarkan mereka bercerita tanpa memotong atau langsung memberi solusi. Validasi perasaan mereka dengan kata-kata seperti "Pasti berat ya" atau "Kamu berhak merasa seperti itu."</li>
        <li><strong>Jangan Tertawa atau Ikut-ikutan:</strong> Tertawa di saat perundungan terjadi sama saja mendukung pelaku. Jauhkan dirimu dari situasi tersebut.</li>
        <li><strong>Temani Mereka:</strong> Jangan biarkan korban sendirian, terutama di tempat-tempat rawan seperti kantin atau perjalanan pulang.</li>
        <li><strong>Bantu Laporkan:</strong> Dorong dan temani mereka untuk melaporkan ke guru, konselor, atau orang dewasa yang dipercaya.</li>
      </ul>

      <h3>Apa yang JANGAN Kamu Lakukan:</h3>
      <ul>
        <li>Jangan bilang "Biarin aja" atau "Jangan dipikirin" - itu meremehkan perasaan mereka.</li>
        <li>Jangan ikut membully atau menceritakan kejadian itu ke orang lain sebagai gosip.</li>
        <li>Jangan memaksa mereka untuk melawan balik jika mereka belum siap.</li>
        <li>Jangan berjanji untuk merahasiakan jika situasinya berbahaya.</li>
      </ul>

      <h2>Jika Kamu Merasa Tidak Nyaman...</h2>
      <p>Tidak apa-apa jika kamu merasa takut atau tidak tahu harus berbuat apa. Yang terpenting adalah jangan ikut serta dalam perundungan. Laporkan kejadian tersebut secara anonim ke pihak berwenang jika perlu.</p>
    `,
  },
  {
    slug: "mengatasi-cyberbullying-di-media-sosial",
    title: "Mengatasi Cyberbullying di Media Sosial",
    category: "Artikel",
    summary:
      "Pahami bentuk-bentuk cyberbullying dan langkah-langkah konkret untuk melindungi dirimu di dunia digital.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    content: `
      <h2>Cyberbullying: Perundungan di Era Digital</h2>
      <p>Cyberbullying adalah perundungan yang terjadi melalui teknologi digital seperti media sosial, pesan teks, aplikasi chatting, atau game online. Dampaknya bisa sama bahayanya, bahkan lebih, karena bisa terjadi 24/7 dan mencapai audiens yang luas.</p>

      <h3>Bentuk-Bentuk Cyberbullying:</h3>
      <ul>
        <li>Mengirim pesan atau komentar menghina, mengancam, atau memalukan.</li>
        <li>Menyebar rumor atau fitnah melalui grup chat atau media sosial.</li>
        <li>Membuat akun palsu untuk melecehkan atau menyamar sebagai korban.</li>
        <li>Membagikan foto atau video privat tanpa izin (doxing).</li>
        <li>Mengucilkan seseorang dari grup online atau game.</li>
        <li>Cyberstalking atau menguntit aktivitas online korban.</li>
      </ul>

      <h3>Langkah Perlindungan Diri:</h3>
      <ul>
        <li><strong>Jangan Membalas:</strong> Membalas hanya akan memperpanjang konflik. Simpan bukti dan blokir pelaku.</li>
        <li><strong>Simpan Bukti:</strong> Screenshot semua pesan, komentar, atau postingan yang mengandung perundungan. Ini penting untuk melapor.</li>
        <li><strong>Blokir dan Laporkan:</strong> Gunakan fitur blokir dan laporkan di setiap platform. Setiap platform memiliki kebijakan anti-bullying.</li>
        <li><strong>Perketat Privasi:</strong> Atur akun media sosialmu menjadi private. Hanya terima pertemanan dari orang yang kamu kenal.</li>
        <li><strong>Jangan Bagikan Password:</strong> Jaga keamanan akunmu dan jangan pernah membagikan password kepada siapapun.</li>
      </ul>

      <h3>Jika Menjadi Korban:</h3>
      <p>Cyberbullying bisa membuatmu merasa tidak punya tempat untuk bersembunyi, tapi ingat: kamu punya kontrol. Matikan notifikasi, logout sejenak, dan fokus pada dunia nyata. Jangan ragu untuk melapor ke orang tua, guru, atau bahkan polisi jika mengancam keselamatanmu.</p>

      <h2>Digital Footprint adalah Selamanya</h2>
      <p>Ingat, apa yang kamu posting online bisa bertahan selamanya. Berpikirlah dua kali sebelum memposting, dan jadilah netizen yang bijak dengan tidak ikut serta dalam perundungan online.</p>
    `,
  },
  {
    slug: "membangun-konfiden-untuk-melawan-bully",
    title: "Membangun Kepercayaan Diri untuk Melawan Bullying",
    category: "Panduan",
    summary:
      "Pelajari teknik-teknik membangun self-esteem dan keberanian untuk menghadapi dan melawan perundungan.",
    image:
      "https://images.unsplash.com/photo-1621410153570-9c55676b0157?auto=format&fit=crop&w=600&q=80",
    content: `
      <h2>Mengapa Self-Esteem Penting?</h2>
      <p>Pelaku bullying seringkali menargetkan orang yang terlihat kurang percaya diri. Membangun self-esteem yang kuat adalah pelindung terbaikmu. Ketika kamu percaya pada dirimu sendiri, ejekan dan hinaan tidak akan mudah merusak harga dirimu.</p>

      <h3>Cara Membangun Kepercayaan Diri:</h3>
      <ul>
        <li><strong>Fokus pada Kelebihanmu:</strong> Buat daftar hal-hal yang kamu kuasai dan banggakan. Semua orang punya kelebihan masing-masing.</li>
        <li><strong>Latih Body Language:</strong> Berdirilah tegak, jaga kontak mata, dan tersenyum. Bahasa tubuh yang percaya diri membuatmu terlihat lebih kuat.</li>
        <li><strong>Berlatih Asertivitas:</strong> Pelajari untuk mengatakan "tidak" dan mengekspresikan perasaanmu dengan tegas tapi sopan.</li>
        <li><strong>Hindari Perbandingan:</strong> Setiap orang punya perjalanan hidup yang berbeda. Fokus pada pertumbuhanmu sendiri.</li>
        <li><strong>Kelilingi Dirimu dengan Positivitas:</strong> Bertemanlah dengan orang-orang yang mendukung dan mengapresiasimu.</li>
      </ul>

      <h3>Teknik Mental untuk Melawan Bullying:</h3>
      <ul>
        <li><strong>Visualisasi Positif:</strong> Bayangkan dirimu sebagai pahlawan yang kuat dan tangguh.</li>
        <li><strong>Affirmasi Diri:</strong> Ucapkan kalimat positif seperti "Aku berharga" atau "Aku kuat" setiap pagi.</li>
        <li><strong>Jangan Personalisasi:</strong> Ingat, bullying adalah tentang pelaku, bukan tentangmu. Mereka yang bully seringkali punya masalah sendiri.</li>
        <li><strong>Bangun Support System:</strong> Miliki minimal satu orang yang bisa kamu andalkan dan ceritakan apa pun.</li>
      </ul>

      <h2>Ketika Harus Melawan...</h2>
      <p>Kepercayaan diri juga berarti berani bertindak. Jika kamu merasa aman, beranikan diri untuk berbicara. Katakan dengan tegas "Stop!" atau laporkan ke pihak berwenang. Keberanianmu bisa menyelamatkan dirimu dan orang lain.</p>
    `,
  },
  {
    slug: "mengapa-anak-menjadi-pelaku-bullying",
    title: "Mengapa Anak Menjadi Pelaku Bullying?",
    category: "Artikel",
    summary:
      "Memahami alasan di balik perilaku bullying dan bagaimana kita bisa membantu pelaku berubah menjadi lebih baik.",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=600&q=80",
    content: `
      <h2>Bukan Sekadar Orang Jahat</h2>
      <p>Seringkali kita melihat pelaku bullying sebagai orang jahat yang harus dihukum. Tapi sebenarnya, banyak pelaku bullying mengalami masalah sendiri. Memahami alasannya bisa membantu kita mengatasi akar masalah dan mencegah perundungan.</p>

      <h3>Alasan Seseorang Menjadi Pelaku Bullying:</h3>
      <ul>
        <li><strong>Kurangnya Perhatian:</strong> Di rumah, mereka mungkin diabaikan atau diperlakukan kasar, jadi mereka meniru perilaku itu.</li>
        <li><strong>Ingin Merasa Berkuasa:</strong> Mereka mungkin merasa tidak berdaya di tempat lain, jadi mereka mencari kekuasaan dengan mengintimidasi orang lain.</li>
        <li><strong>Tekanan Kelompok:</strong> Mereka merasa harus ikut-ikutan agar diterima dalam kelompok populer.</li>
        <li><strong>Kurangnya Empati:</strong> Mereka tidak memahami dampak perbuatannya pada perasaan orang lain.</li>
        <li><strong>Masalah di Rumah:</strong> Mereka mungkin menyaksikan atau mengalami kekerasan di rumah.</li>
        <li><strong>Celah untuk Populer:</strong> Di beberapa lingkungan, bullying dilihat sebagai cara untuk jadi "keren" atau populer.</li>
      </ul>

      <h3>Apa yang Bisa Kita Lakukan?</h3>
      <ul>
        <li><strong>Jangan Membalas:</strong> Membully balik pelaku tidak akan menyelesaikan masalah. Itu hanya memperpanjang siklus kekerasan.</li>
        <li><strong>Berikan Konsekuensi:</strong> Pelaku perlu tahu bahwa tindakan mereka salah dan ada konsekuensinya.</li>
        <li><strong>Ajarkan Empati:</strong> Bantu mereka memahami bagaimana rasanya menjadi korban.</li>
        <li><strong>Dukungan Profesional:</strong> Banyak pelaku butuh bantuan konselor atau psikolog untuk mengatasi masalah mendalam mereka.</li>
        <li><strong>Ciptakan Budaya Positif:</strong> Lingkungan yang mendukung dan inklusif mengurangi insiden bullying.</li>
      </ul>

      <h2>Berubah Itu Mungkin</h2>
      <p>Jika kamu pernah menjadi pelaku bullying dan merasa menyesal, itu adalah langkah pertama yang baik. Minta maaf kepada korban (jika memungkinkan), komit untuk berubah, dan cari bantuan jika perlu. Semua orang bisa berubah menjadi lebih baik.</p>
    `,
  },
];
