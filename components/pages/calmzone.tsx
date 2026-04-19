import React, { useState, useRef, useEffect } from "react";
import { Sparkles, CloudRain, Wind } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

const CalmZonePage = () => {
  const [breathingState, setBreathingState] = useState("Inhale");
  const [activeSound, setActiveSound] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const sounds = [
    {
      name: "Hujan Tropis",
      icon: CloudRain,
      src: "/sounds/rain.mp3", 
    },
    {
      name: "Angin Hutan",
      icon: Wind,
      src: "/sounds/forest.mp3", 
    },
  ];

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.load();
    }
  }, []);

  useEffect(() => {
    const breathCycle = ["Tarik Napas", "Tahan", "Hembuskan", "Tahan"];
    let currentStateIndex = 0;

    setBreathingState(breathCycle[0]);

    const breathAnimation = setInterval(() => {
      currentStateIndex = (currentStateIndex + 1) % breathCycle.length;
      setBreathingState(breathCycle[currentStateIndex]);
    }, 4000);

    return () => clearInterval(breathAnimation);
  }, []);

  const handlePlaySound = (src: string) => {
    if (!audioRef.current) return;

    if (activeSound === src) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setActiveSound(null);
    } else {
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
        return "scale-150 opacity-100 duration-0"; 
      case "Hembuskan":
        return "scale-100 opacity-60 duration-[4000ms]";
      default:
        return "scale-100 opacity-60 duration-0";
    }
  };

  return (
    <>
      <style>{`
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .animate-ripple {
          animation: ripple 4s ease-out infinite;
        }
      `}</style>

      <div className="bg-nara-charcoal text-white min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-4 transition-colors duration-1000 overflow-hidden relative">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#F2994A 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <AnimatedSection>
          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-nara-orange text-xs font-medium uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4" />
              Sesi Kesadaran
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-white mb-4 leading-tight">
              Ruang Tenang.
            </h1>
            <p className="font-sans text-lg text-slate-300 max-w-xl mx-auto leading-[1.7]">
              Lepaskan beban sejenak. Fokus pada tarikan napas Anda. Ikuti ritme lingkaran di bawah ini untuk menenangkan sistem saraf.
            </p>
          </div>
        </AnimatedSection>

        {/* Breathing Animation */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-24 relative z-10">
          {/* Ripple Effect Background */}
          <div className="absolute w-44 h-44 bg-nara-orange rounded-full animate-ripple" />

          {/* Main Circle */}
          <div
            className={`absolute w-44 h-44 bg-nara-orange rounded-full shadow-lg shadow-nara-orange/20 transition-all ease-in-out ${getAnimationClass()}`}
          />

          {/* Text */}
          <div className="relative z-10 text-center transition-opacity duration-500">
            <p className="font-serif text-3xl font-bold text-white drop-shadow-md tracking-wide">
              {breathingState}
            </p>
            <p className="text-sm text-orange-200 mt-2 font-medium tracking-widest uppercase">4 Detik</p>
          </div>
        </div>

        {/* Ambient Sounds */}
        <AnimatedSection delay={0.2} className="w-full max-w-lg z-10">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-medium text-center mb-8 flex items-center justify-center gap-3">
              Suara Pendamping
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {sounds.map((sound) => {
                const isPlaying = activeSound === sound.src;
                return (
                  <button
                    key={sound.name}
                    onClick={() => handlePlaySound(sound.src)}
                    className={`flex flex-col items-center justify-center gap-3 h-[120px] rounded-xl transition-all border ${
                      isPlaying
                        ? "bg-nara-orange text-white border-nara-orange shadow-[0_0_20px_rgba(242,153,74,0.3)] scale-[1.02]"
                        : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"
                    }`}
                  >
                    <sound.icon
                      className={`w-8 h-8 ${isPlaying ? "animate-bounce" : "opacity-70"}`}
                      strokeWidth={1.5}
                    />
                    <span className="font-medium text-sm">
                      {isPlaying ? "Hentikan Suara" : sound.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <audio ref={audioRef} loop crossOrigin="anonymous" />
      </div>
    </>
  );
};

export default CalmZonePage;
