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
  { icon: BookOpen, title: "Financial Literacy",       desc: "Budget, save, invest, and plan for a secure financial future. We equip participants with the tools to take control of their financial lives.", href: "/programs/financial-literacy", color: "bg-[#1A7A4A]" },
  { icon: Star,     title: "The Smart Beauty Project", desc: "Empowering Black women through financial literacy and consumer education — building wealth one beauty choice at a time.", href: "https://smartbeauty-essknvt9.manus.space/", color: "bg-[#0D2B4E]" },
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
          HERO — full-bleed photography, editorial left
          ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0D2B4E]">
        <div className="absolute inset-0">
          <img
            src="/manus-storage/hero-community_2f44b0cc.jpg"
            alt="Community members engaged in a workshop"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B4E] via-[#0D2B4E]/85 to-[#0D2B4E]/20" />
        </div>

        {/* Vertical band stripe on left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col gap-0">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className="flex-1"
              style={{ background: i % 2 === 0 ? "#D4A017" : "#1A7A4A" }}
            />
          ))}
        </div>

        <div className="container relative z-10 pt-28 pb-20 pl-8">
          <div className="max-w-2xl">
            {/* Band stripe motif */}
            <div className="band-stripe band-stripe-light band-stripe-lg mb-6">
              {[48, 32, 22, 38, 18, 28, 42].map((w, i) => (
                <span key={i} style={{ width: `${w}px` }} />
              ))}
            </div>

            <Badge className="bg-[#D4A017]/20 text-[#D4A017] border-[#D4A017]/30 mb-5 text-xs font-semibold tracking-widest uppercase">
              Nonprofit Organization
            </Badge>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Changing Futures,{" "}
              <span className="text-[#D4A017]">One Community</span>{" "}
              at a Time
            </h1>

           <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-10 max-w-xl">
              7Band Inc. empowers individuals and families through financial literacy and consumer education — creating lasting change from the ground up.
           </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/programs">
                <Button size="lg" className="bg-[#D4A017] text-[#0D2B4E] hover:bg-[#e8b420] font-bold text-base px-8 shadow-lg shadow-[#D4A017]/30">
                  Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/donate">
                <Button size="lg" variant="outline" className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white font-semibold text-base px-8">
                  Support Our Mission
                </Button>
              </Link>
            </div>

          </div>
        </div>

        {/* Diagonal bottom cut */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 80L1440 0V80H0Z" fill="#F8F7F4" />
          </svg>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          MISSION — asymmetric editorial with photo
          ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text — left, offset */}
            <div>
              <div className="band-stripe mb-5">
                {[20, 32, 16, 28, 12, 24, 18].map((w, i) => (
                  <span key={i} style={{ width: `${w}px` }} />
                ))}
              </div>
              <p className="text-[#1A7A4A] font-semibold text-xs uppercase tracking-widest mb-3">Our Mission</p>
              <h2
                className="text-4xl lg:text-5xl font-black text-[#0D2B4E] leading-tight mb-6 heading-underline"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Empowering Communities Through Education & Opportunity
              </h2>
              <p className="pull-quote mb-6">
                "Every person deserves the tools and knowledge to build a secure, prosperous future — regardless of their background."
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                7Band Inc. is a nonprofit organization dedicated to breaking cycles of poverty and inequality by providing education, webinars, workshops and resources to underserved communities.
              </p>
              <Link href="/about">
                <Button className="bg-[#0D2B4E] hover:bg-[#1a3f6f] text-white font-semibold">
                  Learn Our Story <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Photo — right, with decorative offset */}
            <div className="photo-editorial relative">
              <img
                src="/manus-storage/about-mission_6e198f1f.jpg"
                alt="Community leader with youth"
                className="relative z-10 w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
              />
              {/* Gold accent bar */}
              <div className="absolute -bottom-4 left-8 right-8 h-2 bg-[#D4A017] rounded-full z-20 opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PROGRAMS — asymmetric grid with featured card
          ══════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F8F7F4]" ref={programsRef}>
        <div className="container">
          {/* Section intro — left-anchored, not centered */}
          <div className="grid lg:grid-cols-3 gap-8 mb-14 items-end">
            <div className="lg:col-span-2">
              <p className="text-[#1A7A4A] font-semibold text-xs uppercase tracking-widest mb-3">What We Do</p>
              <h2
                className="text-4xl lg:text-5xl font-black text-[#0D2B4E] leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Two Pathways to Opportunity
              </h2>
            </div>
            <div className="lg:text-right">
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Interconnected programs designed to create comprehensive, lasting impact.
              </p>
              <Link href="/programs">
                <Button variant="outline" className="border-[#0D2B4E]/30 text-[#0D2B4E] hover:bg-[#0D2B4E] hover:text-white">
                  View All Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Staggered program grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((program, i) => (
              <a
                key={i}
                href={program.href}
                target={program.href.startsWith("http") ? "_blank" : undefined}
                rel={program.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Card className="fade-up card-lift h-full border-0 shadow-md overflow-hidden group cursor-pointer">
                  <CardContent className="p-0 h-full">
                    <div className={`${program.color} p-6 pb-4`}>
                      <program.icon className="h-8 w-8 text-white mb-3" />
                      <h3
                        className="text-xl font-bold text-white"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {program.title}
                      </h3>
                    </div>
                    {/* Band stripe separator */}
                    <div className="band-rule">
                      {Array.from({ length: 7 }).map((_, j) => <span key={j} />)}
                    </div>
                    <div className="p-6 pt-5 bg-white h-full">
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm">{program.desc}</p>
                      <span className="text-[#1A7A4A] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          IMPACT CTA — photography-backed banner
          ══════════════════════════════════════════════ */}
      <section className="relative py-24 bg-[#1A7A4A] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/manus-storage/programs-hero_ce0d26ec.jpg"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-[#1A7A4A]/80" />
        </div>
        {/* Decorative band stripes */}
        <div className="absolute top-0 left-0 right-0 h-2 flex">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex-1" style={{ background: i % 2 === 0 ? "#D4A017" : "rgba(255,255,255,0.3)" }} />
          ))}
        </div>
        <div className="container relative z-10 text-center">
          <h2
            className="text-4xl lg:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Make a Difference?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Your support helps us expand our programs, reach more families, and create lasting change in our community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-[#D4A017] text-[#0D2B4E] hover:bg-[#e8b420] font-bold px-10 shadow-lg">
                Donate Today
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button size="lg" variant="outline" className="border-white/50 text-white bg-white/10 hover:bg-white/20 hover:text-white font-semibold px-10">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 flex">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex-1" style={{ background: i % 2 === 0 ? "#D4A017" : "rgba(255,255,255,0.3)" }} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS — staggered editorial cards
          ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white" ref={testimonialsRef}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 mb-12 items-end">
            <div className="lg:col-span-2">
              <p className="text-[#1A7A4A] font-semibold text-xs uppercase tracking-widest mb-3">Community Voices</p>
              <h2
                className="text-4xl font-black text-[#0D2B4E]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Stories of Impact
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`fade-up bg-[#F8F7F4] rounded-2xl p-8 relative ${i === 1 ? "md:mt-8" : ""}`}
              >
                {/* Gold quote mark */}
                <Quote className="h-8 w-8 text-[#D4A017] mb-4 opacity-80" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-[#D4A017] text-[#D4A017]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic text-sm">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-[#0D2B4E] flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0D2B4E] text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          NEWS — editorial card grid
          ══════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F8F7F4]" ref={newsRef}>
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#1A7A4A] font-semibold text-xs uppercase tracking-widest mb-3">Stay Informed</p>
              <h2
                className="text-4xl font-black text-[#0D2B4E]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Latest News
              </h2>
            </div>
            <Link href="/news">
              <Button variant="ghost" className="text-[#0D2B4E] hover:text-[#1A7A4A] font-semibold hidden sm:flex">
                View All News <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <article key={i} className="fade-up bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                {/* Category band */}
                <div className="band-rule h-1.5">
                  {Array.from({ length: 7 }).map((_, j) => <span key={j} />)}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[item.category] || "bg-gray-100 text-gray-600"}`}>
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {item.date}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-[#0D2B4E] text-lg leading-snug mb-3 group-hover:text-[#1A7A4A] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.excerpt}</p>
                  <span className="text-[#1A7A4A] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
                Subscribe for updates on programs, events, and community stories.
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
