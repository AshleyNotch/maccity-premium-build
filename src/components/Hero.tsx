import heroImg from "@/assets/hero-fallback.jpg";
import { ArrowRight, Calendar } from "lucide-react";

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

      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Trusted in Dandenong South
          </span>
          <h1 className="animate-fade-up mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            Your Car. <br />
            Our Expertise. <br />
            <span className="text-primary text-glow">Done Right.</span>
          </h1>
          <p className="animate-fade-up mt-6 max-w-xl text-lg text-muted-foreground md:text-xl" style={{ animationDelay: "0.15s" }}>
            Reliable servicing, repairs, and inspections in Dandenong South — performed by mechanics who actually care about your car.
          </p>
          <div className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.3s" }}>
            <a
              href="#book"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]"
            >
              <Calendar className="h-5 w-5" />
              Book Appointment
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/40 px-7 py-4 text-base font-semibold text-foreground backdrop-blur transition hover:bg-background/70"
            >
              View Services
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>

          <div className="animate-fade-up mt-14 grid max-w-md grid-cols-3 gap-6" style={{ animationDelay: "0.5s" }}>
            {[
              { v: "15+", l: "Years" },
              { v: "4.9★", l: "Rating" },
              { v: "5k+", l: "Cars Serviced" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold md:text-3xl">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
