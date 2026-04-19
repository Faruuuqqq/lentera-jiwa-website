/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Untuk gambar Unsplash
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org", // Untuk audio/img wikimedia
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com", // Jika nanti upload ke Firebase
      },
    ],
  },
};

export default nextConfig;
