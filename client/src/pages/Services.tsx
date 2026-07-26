import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ExternalLink,
  Play,
  Star,
  TrendingUp,
  Video,
  Zap,
} from "lucide-react";

// ============================================================
// DESIGN: Elevated Civic — Deep Navy #0D2B4E, Gold #D4A017,
// Emerald #1A7A4A. Playfair Display headings, Inter body.
// Services page bridges 7Band Inc. nonprofit education to
// 7Band Financial Agency's paid services via "The Flow."
// ============================================================

const ZOOM_WEBINAR_URL = "https://zoom.us/webinar/register"; // placeholder — replace with real Zoom link
const AGENCY_URL = "https://www.7bandfinancialagency.com/";
const AGENCY_CALENDLY = "https://calendly.com/malikeast/15-minute-quick-meeting-phone-call-via-zoom";

const flowSteps = [
  {
    number: "01",
    title: "Credit Score",
    headline: "Your Credit Score Is the Foundation of Everything",
    description:
      "Before any wealth can be built, your credit profile must be strong. We help you understand, repair, and optimize both your personal and business credit so every door — capital, grants, funding — is open to you.",
    outcome: "A strong credit profile that opens doors to capital, grants, and business funding.",
    icon: "🏛️",
    color: "#1A7A4A",
  },
  {
    number: "02",
    title: "Business Structure",
    headline: "A Business Without Structure Is a Liability, Not an Asset",
    description:
      "Your LLC alone is not enough. We build the full legal and operational architecture your business needs: Articles of Incorporation, EIN & D.U.N.S., Operating Agreement, Business Bank Account, Address, Email, Phone, Website & App.",
    outcome: "A credible, fundable business entity that stands on its own — separate from you personally.",
    icon: "🏗️",
    color: "#D4A017",
  },
  {
    number: "03",
    title: "Capital Access",
    headline: "Stop Funding Your Dreams With Your Own Money",
    description:
      "High-net-worth individuals never use their own money to build wealth. We show you how to access grants, business lines of credit, and funding vehicles that kickstart your journey without depleting your personal resources.",
    outcome: "Access to capital through grants and lines of credit that kickstarts your wealth.",
    icon: "💰",
    color: "#0D2B4E",
  },
  {
    number: "04",
    title: "Overfunded Life Insurance",
    headline: "Overfund a Life Insurance Policy",
    description:
      "A properly structured, overfunded life insurance policy becomes your personal bank — a guaranteed lifetime line of credit that keeps money flowing back to you instead of to outside lenders. This is the secret the wealthy have used for generations.",
    outcome: "A self-operating financial instrument that grows wealth while protecting you.",
    icon: "🛡️",
    color: "#1A7A4A",
  },
  {
    number: "05",
    title: "Asset Protection",
    headline: "Separate Yourself From Your Assets — Legally and Permanently",
    description:
      "Owning assets in your personal name is a risk. We help you legally transfer ownership to protected entities — trusts, holding companies, and LLCs — so your assets are shielded from lawsuits, creditors, and unexpected life events.",
    outcome: "You control and own everything as a separate entity — shielded, scalable, and succession-ready.",
    icon: "⚖️",
    color: "#D4A017",
  },
  {
    number: "06",
    title: "Legacy Insurance",
    headline: "Protect Every Policy — Ensure the Wealth Transfers, Not the Liability",
    description:
      "Life insurance is not just a death benefit — it is a legacy instrument and private bank. We structure your policies so they become guaranteed lines of credit and wealth transfer vehicles that pass to the next generation intact.",
    outcome: "Life insurance becomes a legacy instrument and private bank — not just a death benefit.",
    icon: "🌿",
    color: "#0D2B4E",
  },
  {
    number: "07",
    title: "Generational Architect",
    headline: "You Are Now the Architect of Your Family's Financial Future",
    description:
      "By completing The Flow, you have built a complete, self-sustaining wealth ecosystem. A system designed not just for you — but for your children, their children, and every generation that follows. This is legacy.",
    outcome: "A complete, self-sustaining wealth ecosystem designed to grow and transfer across generations.",
    icon: "🏆",
    color: "#D4A017",
  },
];

const agencyServices = [
  {
    title: "Retirement Strategies",
    url: "https://www.7bandfinancialagency.com/retirement-strategies",
    description: "Comprehensive plans to maximize your retirement income and security.",
  },
  {
    title: "Social Security Exploration",
    url: "https://www.7bandfinancialagency.com/social-security-exploration",
    description: "Optimize when and how you claim Social Security benefits.",
  },
  {
    title: "Legacy Planning Concepts",
    url: "https://www.7bandfinancialagency.com/legacy-planning-concepts",
    description: "Structure your estate so wealth transfers — not liability.",
  },
  {
    title: "Medicare Supplement Insurance",
    url: "https://www.7bandfinancialagency.com/medicare-supplement-insurance",
    description: "Fill the gaps in Medicare coverage with the right supplemental plan.",
  },
  {
    title: "Long-Term Care Insurance",
    url: "https://www.7bandfinancialagency.com/long-term-care-insurance",
    description: "Protect your assets from the devastating cost of long-term care.",
  },
];

function StepCard({ step, index }: { step: (typeof flowSteps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
      }}
    >
      {/* Connector line */}
      {index < flowSteps.length - 1 && (
        <div
          className="absolute left-8 top-full w-0.5 h-8 z-10"
          style={{ background: "linear-gradient(to bottom, #D4A017, transparent)" }}
        />
      )}

      <div
        className={`flex gap-6 p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl group ${
          isEven ? "flex-row" : "flex-row"
        }`}
        style={{
          background: "white",
          borderColor: "rgba(13,43,78,0.1)",
          borderLeft: `4px solid ${step.color}`,
        }}
      >
        {/* Step number badge */}
        <div className="flex-shrink-0">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black"
            style={{
              background: `${step.color}15`,
              border: `2px solid ${step.color}30`,
              color: step.color,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {step.number}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <span
                className="text-xs font-bold uppercase tracking-widest mb-1 block"
                style={{ color: step.color }}
              >
                Step {step.number} — {step.title}
              </span>
              <h3
                className="text-xl font-bold leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", color: "#0D2B4E" }}
              >
                {step.headline}
              </h3>
            </div>
            <span className="text-3xl flex-shrink-0">{step.icon}</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">{step.description}</p>
          <div
            className="flex items-start gap-2 p-3 rounded-xl"
            style={{ background: `${step.color}08`, border: `1px solid ${step.color}20` }}
          >
            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: step.color }} />
            <p className="text-sm font-medium" style={{ color: step.color }}>
              <span className="font-bold">Key Outcome: </span>{step.outcome}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── HERO ── */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0D2B4E 0%, #0a2240 40%, #051525 100%)",
        }}
      >
        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/manus-storage/flow-hero_494de596.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* 7-band stripe motif */}
        <div className="absolute top-0 left-0 w-2 h-full flex flex-col">
          {["#0D2B4E","#1A7A4A","#D4A017","#0D2B4E","#1A7A4A","#D4A017","#0D2B4E"].map((c, i) => (
            <div key={i} className="flex-1" style={{ background: c }} />
          ))}
        </div>
        <div className="absolute top-0 right-0 w-1 h-full flex flex-col opacity-40">
          {["#D4A017","#1A7A4A","#0D2B4E","#D4A017","#1A7A4A","#0D2B4E","#D4A017"].map((c, i) => (
            <div key={i} className="flex-1" style={{ background: c }} />
          ))}
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6">
              <Link href="/" className="text-white/50 hover:text-white text-sm transition-colors">Home</Link>
              <span className="text-white/30 text-sm">/</span>
              <span className="text-sm font-medium" style={{ color: "#D4A017" }}>Services</span>
            </div>

            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12" style={{ background: "#D4A017" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
                7Band Financial Agency · The Flow
              </span>
            </div>

            <h1
              className="text-5xl lg:text-7xl font-black text-white leading-none mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Flow
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-4 max-w-2xl">
              A proven 7-step development incubator that transforms your family legacy.
            </p>
            <p
              className="text-sm font-bold uppercase tracking-widest mb-10"
              style={{ color: '#ffffff' }}
            >
              Business Consulting · Asset Protection · Generational Wealth
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={ZOOM_WEBINAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{ background: "#D4A017", color: "#0D2B4E" }}
              >
                <Video className="w-4 h-4" />
                Register for Free Webinar
              </a>
              <a
                href="#the-flow"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide border border-white/30 text-white hover:bg-white/10 transition-all duration-200"
              >
                Explore The 7 Steps
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRIDGE SECTION ── */}
      <section className="py-20" style={{ background: "#f8f6f0" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-12" style={{ background: "#1A7A4A" }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#1A7A4A" }}>
                  Education Meets Action
                </span>
              </div>
              <h2
                className="text-4xl lg:text-5xl font-black leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: "#0D2B4E" }}
              >
                From Knowledge to Legacy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>7Band Inc.</strong> teaches the <em>why</em> — the financial literacy, the mindset, the foundation. Once you understand the principles, the next step is putting them to work.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                <strong>7Band Financial Agency</strong> delivers the <em>how</em> — the real-world systems, structures, and strategies that high-net-worth individuals have used for generations. <strong>The Flow</strong> is the bridge that connects both.
              </p>
              <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: "#0D2B4E10", border: "1px solid #0D2B4E20" }}>
                <TrendingUp className="w-8 h-8 flex-shrink-0" style={{ color: "#D4A017" }} />
                <p className="text-sm font-medium text-gray-700">
                  The Flow is not a shortcut — it is a blueprint. Each step builds upon the last, creating an unbreakable system for generational wealth.
                </p>
              </div>
            </div>
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
                style={{ border: "4px solid #D4A01730" }}
              >
                <img
                  src="/manus-storage/flow-webinar_8156bd1e.jpg"
                  alt="The Flow Webinar"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-6 -left-6 p-4 rounded-2xl shadow-xl"
                style={{ background: "#0D2B4E", border: "2px solid #D4A017" }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#D4A017" }}>The Flow</p>
                <p className="text-white font-black text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>7 Steps.</p>
                <p className="text-white/70 text-xs">One Unbreakable System.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WEEKLY WEBINAR FEATURE ── */}
      <section className="py-20" style={{ background: "#0D2B4E" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-12" style={{ background: "#D4A017" }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
                  Free Weekly Event
                </span>
              </div>
              <h2
                className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                The Flow: Live
                <span className="block text-2xl mt-2 font-normal" style={{ color: "#D4A017" }}>
                  Weekly Zoom Webinar
                </span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Every week, join us live on Zoom as we walk through The Flow — step by step. Whether you're just starting your financial journey or ready to build your legacy, this free webinar is your starting point.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Live walkthrough of all 7 steps of The Flow",
                  "Q&A with a 7Band Financial Agency consultant",
                  "Real strategies used by high-net-worth individuals",
                  "Free to attend — no obligation",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#1A7A4A" }} />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a
                  href={ZOOM_WEBINAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  style={{ background: "#D4A017", color: "#0D2B4E" }}
                >
                  <Video className="w-4 h-4" />
                  Register Now — It's Free
                </a>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide border border-white/30 text-white hover:bg-white/10 transition-all duration-200"
                >
                  View All Events
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            {/* Webinar info card */}
            <div
              className="p-8 rounded-3xl"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,160,23,0.3)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: "#D4A01720" }}
                >
                  <Video className="w-6 h-6" style={{ color: "#D4A017" }} />
                </div>
                <div>
                  <p className="text-white font-bold">The Flow: Live</p>
                  <p className="text-white/50 text-sm">Weekly Zoom Webinar</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Frequency", value: "Every Week" },
                  { label: "Platform", value: "Zoom Webinar" },
                  { label: "Duration", value: "Approx. 60–90 minutes" },
                  { label: "Cost", value: "Free to Attend" },
                  { label: "Host", value: "7Band Financial Agency" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/50 text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
              <a
                href={ZOOM_WEBINAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm uppercase tracking-wide transition-all duration-200 hover:opacity-90"
                style={{ background: "#D4A017", color: "#0D2B4E" }}
              >
                <Play className="w-4 h-4" />
                Reserve Your Spot
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 7 STEPS ── */}
      <section id="the-flow" className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-12" style={{ background: "#D4A017" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
                The Proven System
              </span>
              <div className="h-px w-12" style={{ background: "#D4A017" }} />
            </div>
            <h2
              className="text-4xl lg:text-5xl font-black leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "#0D2B4E" }}
            >
              Seven Steps. One Unbreakable System.
            </h2>
            <p className="text-gray-500 leading-relaxed">
              The Flow is a complete, integrated system — each step activates the next. This is not a shortcut. It is a blueprint built on principles that have created generational wealth for decades.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {flowSteps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENCY SERVICES ── */}
      <section className="py-20" style={{ background: "#f8f6f0" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-12" style={{ background: "#1A7A4A" }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#1A7A4A" }}>
                  7Band Financial Agency
                </span>
              </div>
              <h2
                className="text-4xl lg:text-5xl font-black leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: "#0D2B4E" }}
              >
                Our Financial Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Beyond The Flow, 7Band Financial Agency offers a full suite of financial services to protect, grow, and transfer your wealth. Each service is designed to work within The Flow framework.
              </p>
              <a
                href={AGENCY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-200 hover:scale-105"
                style={{ background: "#0D2B4E", color: "white" }}
              >
                Visit 7Band Financial Agency
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-4">
              {agencyServices.map((service, i) => (
                <a
                  key={i}
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 rounded-2xl border bg-white hover:shadow-lg transition-all duration-200 group"
                  style={{ borderColor: "rgba(13,43,78,0.1)" }}
                >
                  <div>
                    <p className="font-bold text-sm mb-1" style={{ color: "#0D2B4E" }}>{service.title}</p>
                    <p className="text-gray-500 text-xs">{service.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 flex-shrink-0 ml-4 transition-transform group-hover:translate-x-1" style={{ color: "#D4A017" }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D2B4E 0%, #051525 100%)" }}
      >
        {/* Band stripes */}
        <div className="absolute bottom-0 left-0 right-0 h-2 flex">
          {["#0D2B4E","#1A7A4A","#D4A017","#0D2B4E","#1A7A4A","#D4A017","#0D2B4E"].map((c, i) => (
            <div key={i} className="flex-1" style={{ background: c }} />
          ))}
        </div>

        <div className="container text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12" style={{ background: "#D4A017" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
              Your Legacy Begins With One Conversation
            </span>
            <div className="h-px w-12" style={{ background: "#D4A017" }} />
          </div>
          <h2
            className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-3xl mx-auto"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Stop Working for Money?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            The Flow is not a product — it is a transformation. We work with a select number of clients at a time to ensure every step is executed with precision and intention.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={AGENCY_CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold uppercase tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-xl text-sm"
              style={{ background: "#D4A017", color: "#0D2B4E" }}
            >
              <Star className="w-4 h-4" />
              Book Your Free Strategy Session
            </a>
            <a
              href={ZOOM_WEBINAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold uppercase tracking-wide border border-white/30 text-white hover:bg-white/10 transition-all duration-200 text-sm"
            >
              <Video className="w-4 h-4" />
              Join the Free Weekly Webinar
            </a>
          </div>
          <p className="text-white/40 text-xs mt-8">
            Services provided by 7Band Financial Agency, LLC — an independent financial services company.
          </p>
        </div>
      </section>
    </div>
  );
}
