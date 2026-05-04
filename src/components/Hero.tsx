import heroImg from "@/assets/hero-fallback.jpg";
import { WeatherBadge } from "./WeatherBadge";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroImg}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-a-mechanic-fixing-a-car-engine-1572/1080p.mp4"
          type="video/mp4"
        />
      </video>

      <img
        src={heroImg}
        alt="MacCity workshop"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        width={1920}
        height={1080}
      />

      {/* Subtle dark vignette only — no heavy gradient */}
      <div className="absolute inset-0 bg-black/55" />

      <WeatherBadge />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <span className="animate-fade-in text-xs font-medium uppercase tracking-[0.3em] text-foreground/80">
          MacCity Auto Workshop
        </span>
        <h1 className="animate-fade-up mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
          Where your car <br /> gets it right.
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-xl text-base text-foreground/75 md:text-lg"
          style={{ animationDelay: "0.15s" }}
        >
          Honest mechanics, transparent pricing and fast turnaround — servicing
          Dandenong South and the South-East suburbs.
        </p>
      </div>

      <a
        href="#book"
        className="animate-fade-up absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 rounded-md bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:scale-[1.02] sm:inline-flex"
        style={{ animationDelay: "0.4s" }}
      >
        Book Appointment
      </a>
    </section>
  );
}
