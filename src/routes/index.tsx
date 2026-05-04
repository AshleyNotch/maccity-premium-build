import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MacCity — Car Workshop in Dandenong South | Servicing & Repairs" },
      { name: "description", content: "Premium car servicing, mechanical repairs, roadworthy inspections and logbook servicing in Dandenong South. Book online in 60 seconds." },
      { property: "og:title", content: "MacCity — Trusted Car Workshop in Dandenong South" },
      { property: "og:description", content: "Reliable servicing, repairs, and inspections by mechanics who care. Book online today." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Booking />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
