import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import profile1 from "@/assets/hosea-profile-1.jpg";
import profile2 from "@/assets/hosea-profile-2.jpg";
import profile3 from "@/assets/hosea-profile-3.jpg";
import techAI from "@/assets/tech-ai.jpg";

const slides = [profile1, profile2, profile3, techAI];

export const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
        </div>
      ))}
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in drop-shadow-lg">
          Hostech
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8 max-w-2xl drop-shadow-md">
          Empowering Growth through Technology, Leadership & Vision
        </p>
        <div className="flex gap-4">
          <Button
            size="lg"
            onClick={() => navigate("/about")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant"
          >
            Learn More
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/auth")}
            className="bg-secondary/20 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:bg-secondary/30"
          >
            Login / Sign Up
          </Button>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-muted-foreground hover:bg-accent/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
