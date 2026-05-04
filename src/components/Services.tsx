import { ShieldCheck, Wrench, ClipboardCheck, Gauge, ArrowRight } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Roadworthy Inspections",
    desc: "Fast, certified roadworthy certificates so you can sell or register with total confidence.",
  },
  {
    icon: Wrench,
    title: "Mechanical Repairs",
    desc: "From brakes to engines — quality repairs done right the first time, backed by warranty.",
  },
  {
    icon: ClipboardCheck,
    title: "Logbook Servicing",
    desc: "Keep your manufacturer warranty intact with genuine logbook servicing for all makes.",
  },
  {
    icon: Gauge,
    title: "Vehicle Diagnostics",
    desc: "Advanced computer diagnostics to pinpoint issues precisely — no guesswork, no surprises.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-medium uppercase tracking-widest text-primary">What we do</span>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
              Premium service. Honest pricing.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Every job — big or small — is handled with the precision and transparency your car deserves.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative flex flex-col rounded-2xl bg-surface border border-border p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/40 shadow-card"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <a
                href="#book"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Book Now <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
