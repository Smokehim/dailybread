import type { Metadata } from "next";
import { Header } from "./app/components/Header";
import { Hero } from "./app/components/Hero";
import { ServiceTimes } from "./app/components/ServiceTimes";
import { About } from "./app/components/About";
import { Calendar } from "./app/components/Calendar";
import { Youth } from "./app/components/Youth";
import { Branches } from "./app/components/Branches";
import { Contact } from "./app/components/Contact";
import { Footer } from "./app/components/Footer";

export const metadata: Metadata = {
  title: "Daily Bread",
  description: "Premium portfolio site",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServiceTimes />
        <About />
        <Calendar />
        <Youth />
        <Branches />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

