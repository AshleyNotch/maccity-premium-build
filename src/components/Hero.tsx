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

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Bottom vignette for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Bottom-left headline */}
      <div className="absolute bottom-0 left-0 z-10 p-8 md:p-14 lg:p-20">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-white/50">
          Dandenong South — Est. 2005
        </p>
        <h1 className="text-5xl font-bold leading-[1.0] tracking-tight text-white md:text-7xl lg:text-8xl">
          Where your car<br />gets it right.
        </h1>
        <a
          href="#book"
          className="mt-8 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-widest text-white/50 transition-colors hover:text-white"
        >
          Book Appointment
          <span className="block h-px w-8 bg-current" />
        </a>
      </div>

      {/* Weather badge — bottom right */}
      <div className="absolute bottom-8 right-8 z-10 md:bottom-14 md:right-14 lg:bottom-20 lg:right-20">
        <WeatherBadge />
      </div>
    </section>
  );
}
