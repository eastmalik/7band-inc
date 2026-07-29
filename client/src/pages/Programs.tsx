/**
 * 7Band Inc. Programs Hub Page
 * Design: Elevated Civic — Deep Navy, Emerald Green, Warm Gold
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Star, ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const programs = [
  {
    icon: BookOpen,
    title: "Financial Literacy",
    tagline: 'Learn "The Money Game". Alter Your Future.',
    desc: "Our Financial Literacy program is a comprehensive, community-centered curriculum designed to empower Gen Z, Gen X, women, and minorities with the tools they need to succeed in today's economy. We teach the 'rules of money' that aren't taught in schools.",
    outcomes: ["The 3 Ways Money Grows", "Tax-Exemption Secrets (IRS 7702, 101a, 72e)", "Infinite Banking Concept", "Principal Protection & Entrepreneurial Finance"],
    href: "/programs/financial-literacy",
    color: "bg-[#1A7A4A]",
    external: false,
  },
  {
    icon: Star,
    title: "The Smart Beauty Project",
    tagline: "Science Over Marketing. Savings Over Spending.",
    desc: "The Smart Beauty Project empowers Black women with the scientific knowledge and financial literacy to make informed purchasing decisions — building wealth one beauty choice at a time. A 501(c)(3) nonprofit operating since 2022.",
    outcomes: ["Ingredient label reading skills", "Marketing vs. science literacy", "Beauty budget planning", "Intentional purchasing habits"],
    href: "https://smartbeauty-essknvt9.manus.space/",
    color: "bg-[#0D2B4E]",
    external: true,
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0D2B4E] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/manus-storage/programs-hero_ce0d26ec.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0D2B4E]/60" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="band-stripe mb-5">
              {[40, 28, 20, 32, 16, 24, 36].map((w, i) => (
                <span key={i} style={{ width: `${w}px` }} />
              ))}
            </div>
            <Badge className="bg-[#D4A017]/20 text-[#D4A017] border-[#D4A017]/30 mb-4 text-xs font-semibold tracking-wider uppercase">
              Our Programs
            </Badge>
           <h1 className="text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Two Pathways to Opportunity
           </h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Two focused programs working together to create comprehensive, lasting financial impact in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-20 bg-[#F8F7F4]">
        <div className="container">
          <div className="space-y-8">
            {programs.map((program, i) => (
              <Card key={i} className="card-lift border-0 shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3">
                    <div className={`${program.color} p-8 flex flex-col justify-between`}>
                      <div>
                        <program.icon className="h-10 w-10 text-white mb-4" />
                        <h2 className="text-2xl font-black text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {program.title}
                        </h2>
                        <p className="text-white/80 font-medium italic">{program.tagline}</p>
                      </div>
                      <a href={program.href} target={program.external ? "_blank" : undefined} rel={program.external ? "noopener noreferrer" : undefined} className="mt-6 block">
                        <Button className="bg-[#D4A017] text-[#0D2B4E] hover:bg-[#e8b420] font-bold w-full sm:w-auto">
                          {program.external ? "Visit Website" : "Learn More"} {program.external ? <ExternalLink className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
                        </Button>
                      </a>
                    </div>
                    <div className="lg:col-span-2 p-8">
                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">{program.desc}</p>
                      <div>
                        <p className="font-semibold text-[#0D2B4E] text-sm uppercase tracking-wider mb-3">Program Outcomes</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {program.outcomes.map((outcome, j) => (
                            <div key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] shrink-0" />
                              {outcome}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="py-16 bg-[#0D2B4E]">
        <div className="container text-center">
          <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Get Started?
          </h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Register for one of our upcoming programs or contact us to learn more about how we can support your goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/events"><Button className="bg-[#D4A017] text-[#0D2B4E] hover:bg-[#e8b420] font-bold">View Upcoming Events</Button></Link>
            <Link href="/contact"><Button variant="outline" className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white">Contact Us</Button></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
