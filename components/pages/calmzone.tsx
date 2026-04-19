import React, { useState, useRef, useEffect } from "react";
import { Zap, CloudRain, Wind } from "lucide-react";

const CalmZonePage = () => {
  const [breathingState, setBreathingState] = useState("Inhale");
  const [activeSound, setActiveSound] = useState(null); // Melacak audio mana yang aktif
  const audioRef = useRef(null);

  // Update array sounds ke path lokal
  const sounds = [
    {
      name: "Hujan",
      icon: CloudRain,
      // Pastikan file ada di folder public/sounds/rain.mp3
      src: "/sounds/rain.mp3", 
    },
    {
      name: "Hutan",
      icon: Wind,
      // Pastikan file ada di folder public/sounds/forest.mp3
      src: "/sounds/forest.mp3", 
    },
  ];

  // Tambahan: Preload audio agar instan saat diklik
  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.load();
    }
  }, []);

  useEffect(() => {
    const breathCycle = ["Tarik Napas", "Tahan", "Hembuskan", "Tahan"];
    let currentStateIndex = 0;

    // Set state awal
    setBreathingState(breathCycle[0]);

    const breathAnimation = setInterval(() => {
      currentStateIndex = (currentStateIndex + 1) % breathCycle.length;
      setBreathingState(breathCycle[currentStateIndex]);
    }, 4000); // Ganti status setiap 4 detik

    return () => clearInterval(breathAnimation);
  }, []);

  const handlePlaySound = (src) => {
    if (!audioRef.current) return;

    // Jika menekan tombol yang sama -> Pause & Reset
    if (activeSound === src) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setActiveSound(null);
    } else {
      // Jika tombol berbeda -> Ganti source & Play
      audioRef.current.src = src;
      audioRef.current
        .play()
        .catch((err) => console.error("Playback error:", err));
      setActiveSound(src);
    }
  };

  const getAnimationClass = () => {
    switch (breathingState) {
      case "Tarik Napas":
        return "scale-150 opacity-100 duration-[4000ms]";
      case "Tahan":
        return "scale-150 opacity-100 duration-0"; // Tetap diam
      case "Hembuskan":
        return "scale-100 opacity-70 duration-[4000ms]";
      default:
        return "scale-100 opacity-70 duration-0";
    }
  };

  return (
    <>
      {/* CSS In-JS untuk animasi Ripple (Kompatibel dengan semua React) */}
      <style>{`
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .animate-ripple {
          animation: ripple 4s ease-out infinite;
        }
      `}</style>

      <div className="bg-[#1D3442] text-white min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-1000 overflow-hidden relative">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#C7913B 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="text-center mb-12 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Ruang Tenang
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Fokus pada napas Anda. Ikuti lingkaran ini untuk menenangkan diri.
          </p>
        </div>

        {/* Breathing Animation */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-16">
          {/* Ripple Effect Background */}
          <div className="absolute w-48 h-48 bg-[#C7913B] rounded-full animate-ripple" />

          {/* Main Circle */}
          <div
            className={`absolute w-48 h-48 bg-[#C7913B] rounded-full shadow-2xl transition-all ease-in-out ${getAnimationClass()}`}
          />

          {/* Text */}
          <div className="relative z-10 text-center transition-opacity duration-500">
            <p className="text-3xl font-bold text-white drop-shadow-md uppercase tracking-wider">
              {breathingState}
            </p>
            <p className="text-sm text-slate-200 font-mono mt-1">4 Detik</p>
          </div>
        </div>

        {/* Ambient Sounds */}
        <div className="w-full max-w-sm z-10">
          <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
            <Zap className="text-[#C7913B]" /> Suara Alam
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {sounds.map((sound) => {
              const isPlaying = activeSound === sound.src;
              return (
                <button
                  key={sound.name}
                  onClick={() => handlePlaySound(sound.src)}
                  className={`flex flex-col items-center justify-center gap-2 p-6 rounded-2xl transition border ${
                    isPlaying
                      ? "bg-[#C7913B] text-white border-[#C7913B] shadow-lg scale-105"
                      : "bg-white/10 hover:bg-white/20 text-slate-300 border-transparent"
                  }`}
                >
                  <sound.icon
                    className={`w-8 h-8 ${isPlaying ? "animate-bounce" : ""}`}
                  />
                  <span className="font-semibold">
                    {isPlaying ? "Matikan" : sound.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <audio ref={audioRef} loop crossOrigin="anonymous" />
      </div>
    </>
  );
};

export default CalmZonePage;
