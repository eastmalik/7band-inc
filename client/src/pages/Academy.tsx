/**
 * 7Band Inc. — Financial Literacy Academy Page
 * Design: Elevated Civic — Deep Navy, Emerald Green, Warm Gold
 * Purpose: Bridge between free nonprofit education and paid Flow services
 * Links to Skool community at $50/month
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, CheckCircle2, Users, BookOpen, Shield,
  Star, Zap, TrendingUp, Award
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    num: "01", title: "Foundations",
    desc: "Establish the core concepts, mindset, and vocabulary needed to navigate your 12-step journey. This is where every builder begins.",
    icon: "♟️", outcome: "A solid financial mindset and vocabulary that prepares you to execute every module that follows",
  },
  {
    num: "02", title: "Budgeting",
    desc: "Master the essential tools for managing income and expenses. Learn how to allocate, track, and optimize your money so every dollar has a purpose.",
    icon: "⚖️", outcome: "A personal budget system that creates surplus and accelerates your path to financial freedom",
  },
  {
    num: "03", title: "Life Insurance",
    desc: "A deep dive into the basics and why this is a critical pillar of stability. Understand life insurance as a wealth tool — not just a death benefit.",
    icon: "🛡️", outcome: "A clear understanding of life insurance as a foundational pillar of financial stability",
  },
  {
    num: "04", title: "The Credit Score Foundation",
    desc: "Move from being a financial liability to having a solid personal and commercial credit profile that opens every door to capital, grants, and funding.",
    icon: "⚙️", outcome: "A strong credit profile that opens doors to capital, grants, and business funding",
  },
  {
    num: "05", title: "Proper Business Structure",
    desc: "Learn to build fundable entities that protect your personal assets. A business without structure is not an asset — it is a lawsuit waiting to happen.",
    icon: "📜", outcome: "A credible, fundable business entity that stands on its own — separate from you personally",
  },
  {
    num: "06", title: "Accessing Capital (OPM)",
    desc: "Stop using your own money and start leveraging 'Other People's Money' to fund your vision through grants, business lines of credit, and funding vehicles.",
    icon: "🏛️", outcome: "Access to capital through grants and lines of credit that kickstart your wealth",
  },
  {
    num: "07", title: "Private Banking (IUL)",
    desc: "Keep interest 'in the family' by using self-replenishing financial instruments. Learn how to use an Indexed Universal Life policy as your own private bank.",
    icon: "🌳", outcome: "A self-operating financial instrument that grows wealth while protecting you",
  },
  {
    num: "08", title: "Trust & Holding Co. Architecture",
    desc: "Create a true legacy by legally separating yourself from your assets for maximum protection. Build the legal architecture that shields everything you own.",
    icon: "🏙️", outcome: "You control everything as a separate entity — shielded, scalable, and succession-ready",
  },
  {
    num: "09", title: "Protect Every Policy",
    desc: "Master wealth preservation strategies so that success doesn't die with the individual. Finalize beneficiary designations so your policies and assets transfer — not get lost.",
    icon: "⚡", outcome: "Life insurance becomes a legacy instrument — wealth transfers, not liability",
  },
  {
    num: "10", title: "The Generational Wealth Dynasty",
    desc: "Finalize your multi-generational family office structure. You are now the Architect of your family's financial future — a complete, self-sustaining wealth ecosystem.",
    icon: "👑", outcome: "A complete financial ecosystem designed to grow and transfer across generations",
  },
  {
    num: "11", title: "Private Markets",
    desc: "Explore high-level investment opportunities outside of traditional public markets — private equity, alternative assets, and exclusive deal flow.",
    icon: "📈", outcome: "Access to private market investment opportunities beyond traditional stocks and bonds",
  },
  {
    num: "12", title: "The Academy Library",
    desc: "Gain continuous access to a hub of expert financial resources — tools, templates, checklists, and reference materials to support every stage of your journey.",
    icon: "📚", outcome: "On-demand access to every resource you need to execute The Flow",
  },
];

export default function Academy() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#F8F7F4" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0D2B4E 0%, #051525 60%, #0D2B4E 100%)",
        }}
      >
        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/images/academy-hero_65336d13.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Gold accent bar left */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "linear-gradient(to bottom, #D4A017, #1A7A4A)" }} />

        <div className="container relative z-10">
          <div className="max-w-4xl">
            {/* Band stripe */}
            <div className="flex gap-1.5 mb-6">
              {[40, 28, 20, 32, 16, 24, 36].map((w, i) => (
                <span
                  key={i}
                  className="h-1 rounded-full inline-block"
                  style={{
                    width: `${w}px`,
                    background: ["#D4A017","#1A7A4A","#D4A017","#ffffff40","#D4A017","#1A7A4A","#D4A017"][i],
                  }}
                />
              ))}
            </div>

            <h1
              className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Become the Architect of
              <br />
              <span style={{ color: "#D4A017" }}>Your Family's Financial Future.</span>
            </h1>

            <p className="text-white/80 text-xl leading-relaxed max-w-2xl mb-4">
              Join the only community providing a 12 course roadmap to wealth preservation and legacy building.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="https://www.skool.com/the-real-ethical-agents-4233/classroom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:scale-105 shadow-lg"
                style={{ background: "#D4A017", color: "#0D2B4E" }}
              >
                Join the Academy — $1.00/mo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Free audit callout */}
            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-2xl" style={{ background: "#1A7A4A20", border: "1px solid #1A7A4A40" }}>
              <Star className="w-5 h-5 flex-shrink-0" style={{ color: "#D4A017" }} />
              <p className="text-white/90 text-sm font-semibold">
                🎁 FREE FINANCIAL ARCHITECTURE AUDIT included when you join!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn — 7 Steps */}
      <section className="py-20" style={{ background: "#F8F7F4" }}>
        <div className="container">
          <div className="max-w-2xl mb-14">
            <Badge className="bg-[#D4A017]/20 text-[#D4A017] border-[#D4A017]/30 mb-3 text-xs font-semibold tracking-wider uppercase">
              The Curriculum
            </Badge>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#0D2B4E] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              1 Platform.<br />
              <span style={{ color: "#1A7A4A" }}>12 Modules</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              Each classroom builds on the last, But feel free to explore around.
            </p>
            <a
              href="https://www.skool.com/the-real-ethical-agents-4233/classroom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-7 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105"
              style={{ background: "#0D2B4E", color: "white" }}
            >
              Enter the Classroom
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-6 p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all group"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black"
                  style={{ background: "#0D2B4E10", color: "#0D2B4E" }}
                >
                  {step.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-black text-[#0D2B4E] text-lg">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{step.desc}</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#1A7A4A" }} />
                    <span className="text-xs font-semibold" style={{ color: "#1A7A4A" }}>
                      Outcome: {step.outcome}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join the Academy */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <Badge className="bg-[#1A7A4A]/10 text-[#1A7A4A] border-0 mb-3 text-xs font-semibold tracking-wider uppercase">
              Why Join
            </Badge>
            <h2 className="text-4xl font-black text-[#0D2B4E]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Join the Academy?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: BookOpen, title: "Sequential Learning", desc: "Most programs give you pieces of the puzzle; we give you the information in the exact order you need it to succeed." },
              { icon: Users, title: "Community & Leadership", desc: "Hosted by Malik East, providing direct guidance and accountability through every classroom in the curriculum." },
              { icon: Award, title: "Incredible Value", desc: "Access the full 12-classroom library and private community for only $1.00 per month — plus a FREE Financial Audit when you join." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-2xl" style={{ background: "#F8F7F4", border: "1px solid #e5e1d8" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "#0D2B4E10" }}>
                  <item.icon className="w-7 h-7" style={{ color: "#0D2B4E" }} />
                </div>
                <h3 className="font-black text-[#0D2B4E] text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ background: "#F8F7F4" }}>
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-[#0D2B4E] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to start Module 01?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg">
            Join a community of builders today and get your FREE Financial Audit included.
          </p>
          <a
            href="https://www.skool.com/the-real-ethical-agents-4233/classroom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:scale-105 shadow-lg"
            style={{ background: "#D4A017", color: "#0D2B4E" }}
          >
            Join the Academy &amp; Get Your Free Audit
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
