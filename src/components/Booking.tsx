import { useState } from "react";
import { Calendar, Clock, Car, User, Check, ChevronRight, ChevronLeft } from "lucide-react";

const SERVICES = ["Roadworthy Inspection", "Mechanical Repair", "Logbook Service", "Vehicle Diagnostics"];
const TIMES = ["08:00", "09:30", "11:00", "13:00", "14:30", "16:00"];

function getNextDays(n: number) {
  const days = [];
  const today = new Date();
  for (let i = 1; i <= n; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

export function Booking() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    car: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const update = (k: string, v: string) => setData({ ...data, [k]: v });
  const days = getNextDays(10);

  const canNext =
    (step === 1 && data.service) ||
    (step === 2 && data.date && data.time) ||
    (step === 3 && data.name && data.email && data.phone);

  if (confirmed) {
    return (
      <section id="book" className="py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6">
          <div className="rounded-3xl bg-surface border border-primary/30 p-10 text-center shadow-glow">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-3xl font-bold">Appointment Confirmed</h3>
            <p className="mt-3 text-muted-foreground">
              Thanks {data.name.split(" ")[0]}! We've booked your <span className="text-foreground font-medium">{data.service}</span> on{" "}
              <span className="text-foreground font-medium">{new Date(data.date).toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "long" })}</span> at{" "}
              <span className="text-foreground font-medium">{data.time}</span>.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">A confirmation has been sent to {data.email}.</p>
            <button
              onClick={() => { setConfirmed(false); setStep(1); setData({ service: "", date: "", time: "", name: "", email: "", phone: "", car: "" }); }}
              className="mt-8 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-muted"
            >
              Book another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Book online</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Reserve your slot in 60 seconds</h2>
          <p className="mt-4 text-muted-foreground">Pick a service, choose a time, you're done.</p>
        </div>

        <div className="mt-12 rounded-3xl bg-surface border border-border p-6 shadow-card md:p-10">
          <div className="mb-10 flex items-center justify-center gap-2">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="flex items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition ${
                  step >= n ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {step > n ? <Check className="h-4 w-4" /> : n}
                </div>
                {n < 4 && <div className={`h-px w-8 md:w-16 ${step > n ? "bg-primary" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="animate-fade-up">
              <div className="mb-6 flex items-center gap-2 text-lg font-semibold">
                <Car className="h-5 w-5 text-primary" /> Select a service
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {SERVICES.map((s) => (
                  <button
                    key={s}
                    onClick={() => update("service", s)}
                    className={`rounded-xl border p-5 text-left transition ${
                      data.service === s ? "border-primary bg-primary/10" : "border-border hover:border-primary/40 bg-card"
                    }`}
                  >
                    <div className="font-semibold">{s}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-up space-y-8">
              <div>
                <div className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <Calendar className="h-5 w-5 text-primary" /> Pick a date
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {days.map((d) => {
                    const iso = d.toISOString().split("T")[0];
                    const selected = data.date === iso;
                    return (
                      <button
                        key={iso}
                        onClick={() => update("date", iso)}
                        className={`flex min-w-[72px] flex-col items-center rounded-xl border px-3 py-3 transition ${
                          selected ? "border-primary bg-primary/10" : "border-border hover:border-primary/40 bg-card"
                        }`}
                      >
                        <span className="text-xs uppercase text-muted-foreground">{d.toLocaleDateString("en-AU", { weekday: "short" })}</span>
                        <span className="mt-1 text-xl font-bold">{d.getDate()}</span>
                        <span className="text-xs text-muted-foreground">{d.toLocaleDateString("en-AU", { month: "short" })}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <Clock className="h-5 w-5 text-primary" /> Pick a time
                </div>
                <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
                  {TIMES.map((t) => (
                    <button
                      key={t}
                      onClick={() => update("time", t)}
                      className={`rounded-lg border py-3 text-sm font-semibold transition ${
                        data.time === t ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/40 bg-card"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-up">
              <div className="mb-6 flex items-center gap-2 text-lg font-semibold">
                <User className="h-5 w-5 text-primary" /> Your details
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="Full name" className="rounded-xl border border-border bg-card px-4 py-3 outline-none focus:border-primary" />
                <input value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Phone" className="rounded-xl border border-border bg-card px-4 py-3 outline-none focus:border-primary" />
                <input value={data.email} onChange={(e) => update("email", e.target.value)} type="email" placeholder="Email" className="rounded-xl border border-border bg-card px-4 py-3 outline-none focus:border-primary md:col-span-2" />
                <input value={data.car} onChange={(e) => update("car", e.target.value)} placeholder="Car make & model (optional)" className="rounded-xl border border-border bg-card px-4 py-3 outline-none focus:border-primary md:col-span-2" />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-fade-up">
              <div className="mb-6 text-lg font-semibold">Review & confirm</div>
              <dl className="space-y-3 rounded-xl border border-border bg-card p-5 text-sm">
                {[
                  ["Service", data.service],
                  ["Date", new Date(data.date).toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "long" })],
                  ["Time", data.time],
                  ["Name", data.name],
                  ["Phone", data.phone],
                  ["Email", data.email],
                  ["Vehicle", data.car || "—"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-border pb-2 last:border-0 last:pb-0">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-right font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="mt-10 flex items-center justify-between">
            <button
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className="inline-flex items-center gap-1 rounded-full px-5 py-2.5 text-sm font-semibold text-muted-foreground transition hover:text-foreground disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" /> Back
            </button>
            {step < 4 ? (
              <button
                onClick={() => canNext && setStep(step + 1)}
                disabled={!canNext}
                className="inline-flex items-center gap-1 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
              >
                Continue <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={() => setConfirmed(true)}
                className="inline-flex items-center gap-1 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
              >
                Confirm Booking <Check className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
