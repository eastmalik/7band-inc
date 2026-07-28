/**
 * 7Band Inc. Home Page
 * Design: Elevated Civic — Deep Navy, Emerald Green, Warm Gold
 * Layout: Asymmetric editorial, photography-led, 7-band stripe motif throughout
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BookOpen,
  TrendingUp,
  Users,
  Laptop,
  Hammer,
  Star,
  Calendar,
  ChevronRight,
  Quote,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const programs = [
  { icon: BookOpen, title: "Financial Literacy",       desc: "We equip participants with the knowledge and resources to take control of their financial lives.", href: "/programs/financial-literacy", color: "bg-[#1A7A4A]" },
  { icon: Star,     title: "The Smart Beauty Project", desc: "Empowering Black women through financial literacy and consumer education.", href: "https://smartbeauty-essknvt9.manus.space/", color: "bg-[#0D2B4E]" },
];

const stats = [
  { value: "500+", label: "Community Members Served", sub: "and growing every year" },
  { value: "2",    label: "Active Programs",           sub: "focused and impactful" },
  { value: "20+",  label: "Volunteer Educators",       sub: "dedicated professionals" },
  { value: "3",    label: "Years of Impact",           sub: "building lasting change" },
];

const testimonials = [
  { name: "Maria Johnson",  role: "Financial Literacy Graduate",       quote: "7Band Inc. changed how I think about money. I went from living paycheck to paycheck to building my first emergency fund.", initials: "MJ" },
  { name: "Jasmine Carter", role: "Smart Beauty Project Participant",   quote: "Learning to read ingredient labels changed how I shop. I've saved hundreds of dollars and finally feel in control of my finances.", initials: "JC" },
  { name: "Aisha Williams", role: "Financial Literacy Graduate",        quote: "The tools and knowledge I gained helped me build my first emergency fund. 7Band Inc. believed in me before I believed in myself.", initials: "AW" },
];

const news = [
  { date: "July 15, 2026",  category: "Programs",  title: "Financial Literacy Cohort Celebrates 50 Graduates",        excerpt: "Fifty community members completed our intensive financial literacy program this spring." },
  { date: "June 28, 2026",  category: "Partners",  title: "7Band Inc. Partners with The Smart Beauty Project",        excerpt: "Our newest partnership brings consumer education and financial literacy to Black women across the community." },
  { date: "June 10, 2026",  category: "Community", title: "7Band Inc. Expands Community Outreach for 2026",           excerpt: "New initiatives aim to reach more families and individuals with our two flagship programs." },
];

const categoryColors: Record<string, string> = {
  Community: "bg-[#1A7A4A]/10 text-[#1A7A4A]",
  Programs:  "bg-[#0D2B4E]/10 text-[#0D2B4E]",
  Partners:  "bg-[#D4A017]/15 text-[#9a7210]",
};

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".fade-up").forEach((child, i) => {
            setTimeout(() => child.classList.add("in-view"), i * 70);
          });
          obs.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const statsRef       = useFadeUp();
  const programsRef    = useFadeUp();
  const testimonialsRef = useFadeUp();
  const newsRef        = useFadeUp();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ══════════════════════════════════════════════
          NEWSLETTER — navy band
          ══════════════════════════════════════════════ */}
      <section className="py-16 bg-[#0D2B4E]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="band-stripe band-stripe-light mb-4">
                {[28, 20, 16, 24, 12, 18, 22].map((w, i) => (
                  <span key={i} style={{ width: `${w}px` }} />
                ))}
              </div>
              <h2
                className="text-3xl font-black text-white mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Stay Connected
              </h2>
              <p className="text-white/70">
                Subscribe for updates on programs, and events
              </p>
            </div>
            <form
              className="flex gap-3"
              onSubmit={(e) => { e.preventDefault(); }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#D4A017] transition-colors"
              />
              <Button className="bg-[#D4A017] text-[#0D2B4E] hover:bg-[#e8b420] font-bold px-6 shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
