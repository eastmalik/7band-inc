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
  Star, Zap, TrendingUp, Award, ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    num: "01",
    title: "Credit Foundation",
    desc: "Establish a personal and commercial credit profile that opens doors to capital, grants, and funding opportunities.",
    icon: "🏗️",
    outcome: "Capital access & grant eligibility",
  },
  {
    num: "02",
    title: "Proper LLC Structure",
    desc: "Build a fundable business entity that is a credible asset — not a personal liability. Articles, EIN, D.U.N.S., Operating Agreement, Business Bank Account.",
    icon: "🏢",
    outcome: "A credible, fundable business entity",
  },
  {
    num: "03",
    title: "Accessing Capital (OPM)",
    desc: "Stop funding your dreams with your own money. Learn to leverage Other People's Money through grants and business lines of credit.",
    icon: "💰",
    outcome: "Access to grants & lines of credit",
  },
  {
    num: "04",
    title: "Private Banking (IUL)",
    desc: "Redirect interest away from banks and into a self-replenishing financial instrument you control — an Indexed Universal Life policy.",
    icon: "🏦",
    outcome: "A self-operating financial instrument",
  },
  {
    num: "05",
    title: "Trust & Holding Company Architecture",
    desc: "Legally separate yourself from your assets for maximum protection and privacy. Trusts, holding companies, and LLCs working together.",
    icon: "🛡️",
    outcome: "Legally shielded, scalable assets",
  },
  {
    num: "06",
    title: "Wealth Transfer Strategy",
    desc: "Designate your Trust as the beneficiary to bypass probate, minimize estate taxes, and ensure wealth transfers — not liability.",
    icon: "🌱",
    outcome: "Wealth transfers, not liability",
  },
  {
    num: "07",
    title: "Dynasty Building",
    desc: "Finalize your multi-generational family office structure. A complete, self-sustaining wealth ecosystem designed to outlast you.",
    icon: "👑",
    outcome: "A complete generational wealth ecosystem",
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
            backgroundImage: `url('/manus-storage/academy-hero_65336d13.jpg')`,
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
              A Financial Literacy
              <br />
              <span style={{ color: "#D4A017" }}>Academy</span>
            </h1>

            <p className="text-white/80 text-xl leading-relaxed max-w-2xl mb-4">
              Learned what you did not learn from home, school, or even college.
            </p>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-10">
              The only community with this information — in this order. A structured, step-by-step journey through The Flow, hosted by Malik East inside a private Skool community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="https://www.skool.com/the-real-ethical-agents-4233/classroom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:scale-105 shadow-lg"
                style={{ background: "#D4A017", color: "#0D2B4E" }}
              >
                Join the Academy — $50/mo
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest border border-white/30 text-white hover:bg-white/10 transition-all"
              >
                Learn About The Flow
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Free audit callout */}
            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-2xl" style={{ background: "#1A7A4A20", border: "1px solid #1A7A4A40" }}>
              <Star className="w-5 h-5 flex-shrink-0" style={{ color: "#D4A017" }} />
              <p className="text-white/90 text-sm font-semibold">
                🎁 FREE Financial Architecture Audit when you join
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
              Seven Steps.<br />
              <span style={{ color: "#1A7A4A" }}>One Unbreakable System.</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              The Academy teaches The Flow in full — each step builds on the last. This is not a playlist. It is a blueprint.
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
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
                      Step {step.num}
                    </span>
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

      {/* Bottom CTA */}
      <section className="py-16" style={{ background: "#F8F7F4" }}>
        <div className="container text-center">
          <h2
            className="text-3xl lg:text-4xl font-black text-[#0D2B4E] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Not Ready for the Academy Yet?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Start with our free Financial Literacy program through 7Band Inc. — build your foundation before investing in the full curriculum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs">
              <Button
                className="px-8 py-3 rounded-full font-bold uppercase tracking-wide"
                style={{ background: "#1A7A4A", color: "white" }}
              >
                Explore Free Programs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="px-8 py-3 rounded-full font-bold uppercase tracking-wide border-[#0D2B4E] text-[#0D2B4E] hover:bg-[#0D2B4E] hover:text-white"
              >
                Learn About The Flow
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
