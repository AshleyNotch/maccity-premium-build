import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Honestly the best workshop I've been to. Got my roadworthy done same day and the price was exactly what they quoted. Will be back!",
    time: "2 weeks ago",
  },
  {
    name: "James K.",
    rating: 5,
    text: "These guys actually explain what's wrong with your car instead of just slapping you with a bill. Refreshing honesty.",
    time: "1 month ago",
  },
  {
    name: "Priya R.",
    rating: 5,
    text: "Quick, professional, and friendly. My logbook service was seamless and they even washed my car. Highly recommend.",
    time: "3 weeks ago",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Reviews</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Loved by local drivers</h2>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold">4.9</span>
            <span className="text-muted-foreground">based on 320+ Google reviews</span>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl bg-surface border border-border p-7 shadow-card">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 font-bold text-primary">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.time}</div>
                </div>
              </div>
              <div className="mt-4 flex">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
