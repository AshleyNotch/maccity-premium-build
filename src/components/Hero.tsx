import { CornerDownRight } from "lucide-react";
import heroImg from "@/assets/hero-fallback.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import { WeatherBadge } from "./WeatherBadge";

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroImg}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <img
        src={heroImg}
        alt="MacCity workshop"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        width={1920}
        height={1080}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Content — center-left */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-bold leading-[1.0] tracking-tight text-white">
          Where your car<br />gets it right.
        </h1>

        <div className="mt-8 flex items-start gap-3 max-w-sm md:max-w-md">
          <CornerDownRight className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
          <p className="text-sm leading-relaxed text-white/50">
            Honest mechanics, transparent pricing and fast turnaround —
            servicing Dandenong South and the South-East suburbs.
          </p>
        </div>
      </div>

      {/* Weather badge — bottom right */}
      <div className="absolute bottom-8 right-8 z-10 md:bottom-12 md:right-12">
        <WeatherBadge />
      </div>
    </section>
  );
}
