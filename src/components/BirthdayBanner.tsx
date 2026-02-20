import { useEffect, useState } from "react";
import birthdayArt from "@/assets/hosea-birthday.png";

const confettiColors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF6EC7", "#FFA500"];

interface Confetti {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
}

export const BirthdayBanner = () => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    const pieces: Confetti[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 3,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      size: 6 + Math.random() * 8,
    }));
    setConfetti(pieces);
  }, []);

  return (
    <section className="relative py-12 overflow-hidden bg-gradient-to-b from-amber-900/20 via-red-900/10 to-background">
      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="absolute top-0 animate-confetti-fall pointer-events-none"
          style={{
            left: `${c.left}%`,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            width: c.size,
            height: c.size,
            backgroundColor: c.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
          🎂 Happy Birthday Hosea! 🎉
        </h2>
        <div className="relative max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-500/50 hover:scale-[1.02] transition-transform duration-500">
          <img
            src={birthdayArt}
            alt="Happy Birthday Hosea - Birthday Celebration"
            className="w-full h-auto"
          />
        </div>
        <p className="text-lg text-muted-foreground text-center max-w-xl">
          🥂 Cheers to another amazing year of blessings, success, and endless happiness!
        </p>
      </div>
    </section>
  );
};
