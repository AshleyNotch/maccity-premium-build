import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Visit us</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Find the workshop</h2>
          <p className="mt-4 text-muted-foreground">
            Drop in for a chat, a quote, or a coffee. We're easy to find in Dandenong South.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {[
              { icon: MapPin, label: "Address", value: "12 Industrial Dr, Dandenong South VIC 3175" },
              { icon: Phone, label: "Phone", value: "(03) 9000 0000" },
              { icon: Mail, label: "Email", value: "hello@maccity.com.au" },
              { icon: Clock, label: "Hours", value: "Mon–Fri 8am–6pm · Sat 9am–2pm" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 rounded-2xl bg-surface border border-border p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-border lg:col-span-3 min-h-[400px]">
            <iframe
              title="MacCity location"
              src="https://www.google.com/maps?q=Dandenong+South+VIC+3175&output=embed"
              className="h-full w-full grayscale-[40%] contrast-125"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
