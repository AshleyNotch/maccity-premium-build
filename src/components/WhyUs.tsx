import { Zap, Users, DollarSign, MapPin } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast Turnaround", desc: "Most services completed same-day. Your time matters." },
  { icon: Users, title: "Trusted Mechanics", desc: "Qualified, friendly experts — not commission-driven upsellers." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "Upfront quotes, no hidden fees, ever. What we quote is what you pay." },
  { icon: MapPin, title: "Local Expertise", desc: "Proudly serving Dandenong South and the south-east for over a decade." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-card/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Why MacCity</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Built on trust. Driven by results.
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="group bg-card p-8 transition hover:bg-secondary">
              <r.icon className="h-8 w-8 text-primary transition group-hover:scale-110" />
              <h3 className="mt-6 text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
