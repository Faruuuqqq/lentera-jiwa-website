<div align="center">

# 🕯️ Lentera Jiwa: Narasi Teman Sebaya

### "Menerangi Pikiran, Menguatkan Perasaan melalui Bacaan."

<p>
  <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=flat-square&logo=firebase" alt="Firebase" />
  <img src="https://img.shields.io/badge/Status-Active-success?style=flat-square" alt="Status" />
</p>

<p>Platform dukungan kesehatan mental berbasis komunitas teman sebaya (peer support) yang terintegrasi dengan teknologi web dan biblioterapi, dirancang khusus untuk remaja dan mahasiswa Indonesia.</p>

</div>

---

## 📋 Daftar Isi

- [Tentang Proyek](#-tentang-proyek)
- [Latar Belakang Masalah](#-latar-belakang-masalah)
- [Fitur Unggulan](#-fitur-unggulan)
- [Arsitektur & Teknologi](#-arsitektur--teknologi)
- [Instalasi & Menjalankan](#-instalasi--menjalankan)
- [Struktur Folder](#-struktur-folder)
- [Tim Pengembang](#-tim-pengembang--kredit)

---

## 📖 Tentang Proyek

**Lentera Jiwa** adalah aplikasi web yang berfungsi sebagai **"Ruang Aman"**—sebuah jembatan bagi remaja dan mahasiswa yang membutuhkan dukungan emosional namun belum siap atau ragu untuk mengakses bantuan profesional klinis secara langsung.

Proyek ini bekerja di bawah supervisi **P2K2 Unpad** (Pusat Pengembangan Karakter dan Kesejahteraan Mahasiswa), mengedepankan prinsip kerahasiaan, inklusivitas, dan kemudahan akses.

## 🚩 Latar Belakang Masalah

Lentera Jiwa hadir sebagai *First Aid* (Pertolongan Pertama) psikologis digital untuk mengatasi masalah berikut:

* **Stigma:** Banyak mahasiswa takut dinilai lemah jika pergi ke psikolog.
* **Keterbatasan Akses:** Antrean layanan profesional seringkali panjang.
* **Kebutuhan Validasi:** Mahasiswa seringkali hanya butuh didengar oleh sesama mahasiswa yang "senasib" (*relatable*).
* **Kurangnya Literasi:** Kesulitan membedakan antara stres biasa, gangguan kecemasan, atau *burnout*.

## ✨ Fitur Unggulan

### 1. 💌 Kotak Cerita (*Anonymous Ticketing System*)
Layanan curhat teks 100% anonim.
* **Mekanisme:** Pengguna mengirim cerita &rarr; Mendapatkan Kode Tiket Unik &rarr; Cek balasan menggunakan kode tersebut.
* **Keamanan:** Tanpa login email kampus, menjaga privasi mutlak pengguna.
* **Tujuan:** Mendapatkan respon/saran dari Relawan Teman Sebaya.

### 2. 📝 Jurnal Rasa (*Privacy-First Mood Tracker*)
Alat refleksi diri harian.
* **Privasi:** Data disimpan di *Local Storage* perangkat pengguna (tidak dikirim ke server).
* **Analisis:** Memberikan *insight* mingguan tentang mood dominan.
* **Fitur Cerdas (The Bridge):** Jika sistem mendeteksi mood negatif berturut-turut, otomatis menawarkan bantuan ke *Kotak Cerita*.

### 3. 🍃 Ruang Tenang (*Calm Zone / Panic Button*)
Fitur intervensi krisis digital untuk serangan panik (*panic attack*).
* **Breathing Guide:** Animasi visual pemandu napas (Metode 4-4-4).
* **Ambient Sound:** Suara alam (Hujan, Hutan) untuk menurunkan gelombang otak Beta ke Alpha.

### 4. 📚 Edukasi & Biblioterapi
Pusat literasi kesehatan mental.
* **Artikel:** Tips praktis (*Grounding*, *Active Listening*).
* **Biblioterapi:** Rekomendasi buku berdasarkan kondisi emosi (misal: Buku untuk kecemasan, buku untuk motivasi).

## 🛠 Arsitektur & Teknologi

Proyek ini dibangun menggunakan *Modern Web Stack* yang ringan dan cepat:

| Komponen | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Frontend** | Next.js (React.js) | Framework web utama, mendukung SSR/SSG. |
| **Styling** | Tailwind CSS | Utility-first CSS framework untuk desain responsif. |
| **Icons** | Lucide React | Set ikon yang bersih dan ringan. |
| **Backend** | Firebase | Cloud Firestore untuk database *Kotak Cerita*. |
| **Storage** | LocalStorage | Browser API untuk penyimpanan data *Jurnal Rasa* (Privat). |

### 🎨 Identitas Visual (Skema Warna)
* 🟠 **Primary (Lentera Orange):** `#C7913B` — Harapan, Kehangatan, Cahaya.
* 🔵 **Secondary (Lentera Charcoal):** `#2c3e50` — Ketenangan, Profesionalisme.
* ⚪ **Background:** `#FFFDF9` — Kertas, Kenyamanan Visual.

## 🚀 Instalasi & Menjalankan

Pastikan Anda telah menginstal **Node.js** (versi 18.x atau lebih tinggi).

1.  **Clone Repository**
```bash
git clone https://github.com/username/lentera-jiwa.git
cd lentera-jiwa
```

2.  **Install Dependencies**
    ```bash
    npm install
    # atau
    pnpm install
    ```

3.  **Konfigurasi Environment**
    Buat file `.env.local` di root proyek dan tambahkan kredensial Firebase Anda:
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY="YOUR_API_KEY"
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="YOUR_PROJECT.firebaseapp.com"
    NEXT_PUBLIC_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="YOUR_PROJECT.appspot.com"
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="YOUR_SENDER_ID"
    NEXT_PUBLIC_FIREBASE_APP_ID="YOUR_APP_ID"
    ```

4.  **Jalankan Development Server**
    ```bash
    npm run dev
    ```

5.  **Buka di Browser**
    Kunjungi [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi.

## 📂 Struktur Folder

```text
lentera-jiwa/
├── app/                  # Root layout, pages, and global styles
│   ├── globals.css       # Global CSS styles
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page component
├── components/           # Reusable UI components
│   ├── pages/            # Specific page components (about, bibliotherapy, etc.)
│   └── ui/               # Shadcn/ui components (accordion, avatar, card, etc.)
├── lib/                  # Utility functions
├── public/               # Static assets (images, fonts, sounds)
├── styles/               # Additional CSS styles
├── next.config.mjs       # Next.js configuration
└── ...
