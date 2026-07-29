/**
 * 7Band Inc. Partners Page
 * Design: Elevated Civic — photography-led hero, editorial sections
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, GraduationCap, Church, Users, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const partnerTypes = [
  { icon: Building2,      title: "Corporate Partners",          desc: "Businesses that invest in our community through sponsorships, employee volunteering, and in-kind support." },
  { icon: GraduationCap,  title: "School Partners",             desc: "K-12 schools and universities that bring our programs into classrooms and campuses." },
  { icon: Church,         title: "Faith-Based Partners",        desc: "Houses of worship and faith organizations that share our commitment to community service." },
  { icon: Users,          title: "Community Organizations",     desc: "Nonprofits, civic groups, and community associations that collaborate with us on shared goals." },
];

const currentPartners = [
  { initials: "CF", name: "Community First Bank",     type: "Corporate",  color: "bg-[#0D2B4E]", desc: "Financial sponsor and volunteer partner" },
  { initials: "LH", name: "Lincoln High School",      type: "School",     color: "bg-[#1A7A4A]", desc: "Youth program delivery partner" },
  { initials: "CC", name: "City Community Foundation", type: "Community", color: "bg-[#0D2B4E]", desc: "Grant funding and network partner" },
  { initials: "FU", name: "First Unity Church",        type: "Faith-Based",color: "bg-[#1A7A4A]", desc: "Event space and volunteer partner" },
  { initials: "MB", name: "Metro Business Alliance",   type: "Corporate",  color: "bg-[#0D2B4E]", desc: "Entrepreneurship mentorship partner" },
  { initials: "SU", name: "State University Extension","type": "School",   color: "bg-[#1A7A4A]", desc: "Digital literacy curriculum partner" },
];

const typeColors: Record<string, string> = {
  Corporate:    "bg-[#0D2B4E]/10 text-[#0D2B4E]",
  School:       "bg-[#1A7A4A]/10 text-[#1A7A4A]",
  "Faith-Based":"bg-[#D4A017]/15 text-[#9a7210]",
  Community:    "bg-purple-100 text-purple-700",
};

const benefits = [
  "Co-branded community programs",
  "Employee volunteer opportunities",
  "Sponsorship recognition",
  "Shared impact reporting",
  "Community visibility and goodwill",
  "Tax-deductible contributions",
];

export default function Partners() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0D2B4E] pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/manus-storage/programs-hero_ce0d26ec.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B4E] to-[#0D2B4E]/60" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col gap-0">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="flex-1" style={{ background: i % 2 === 0 ? "#D4A017" : "#1A7A4A" }} />
          ))}
        </div>
        <div className="container relative z-10 pl-8">
          <div className="max-w-3xl">
            <div className="band-stripe band-stripe-light band-stripe-lg mb-5">
              {[40, 28, 20, 32, 16, 24, 36].map((w, i) => (
                <span key={i} style={{ width: `${w}px` }} />
              ))}
            </div>
            <Badge className="bg-[#D4A017]/20 text-[#D4A017] border-[#D4A017]/30 mb-4 text-xs font-semibold tracking-widest uppercase">
              Our Partners
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Stronger Together
            </h1>
            <p className="text-white/75 text-xl leading-relaxed">
              Our partners share our commitment to community empowerment. Together, we multiply our impact and reach more people.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}

      {/* Current Partners */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="mb-12">
            <p className="text-[#1A7A4A] font-semibold text-xs uppercase tracking-widest mb-3">Our Network</p>
            <h2 className="text-4xl font-black text-[#0D2B4E] heading-underline" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Current Partners
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentPartners.map((p, i) => (
              <div key={i} className="flex items-start gap-4 bg-[#F8F7F4] rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${p.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {p.initials}
                </div>
                <div>
                  <h3 className="font-bold text-[#0D2B4E] text-sm mb-1">{p.name}</h3>
                  <Badge className={`text-xs mb-2 ${typeColors[p.type] || "bg-gray-100 text-gray-600"}`}>{p.type}</Badge>
                  <p className="text-gray-600 text-xs">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner — editorial asymmetric */}
      <section className="py-24 bg-[#0D2B4E]" id="become">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="band-stripe band-stripe-light mb-5">
                {[28, 20, 16, 24, 12, 18, 22].map((w, i) => (
                  <span key={i} style={{ width: `${w}px` }} />
                ))}
              </div>
              <p className="text-[#D4A017] font-semibold text-xs uppercase tracking-widest mb-3">Get Involved</p>
              <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Become a Partner
              </h2>
              <p className="text-white/75 leading-relaxed mb-6">
                Partnering with 7Band Inc. is an investment in your community. We offer flexible partnership models that align with your organization's goals and capacity.
              </p>
              <div className="space-y-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#D4A017] shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-[#0D2B4E] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Partnership Inquiry</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input placeholder="Organization Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1A7A4A] transition-colors" />
                <input placeholder="Contact Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1A7A4A] transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1A7A4A] transition-colors" />
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1A7A4A] transition-colors text-gray-600">
                  <option value="corporate">Corporate Partner</option>
                  <option value="school">School Partner</option>
                  <option value="faith">Faith-Based Partner</option>
                  <option value="community">Community Organization</option>
                </select>
                <textarea rows={3} placeholder="Tell us about your organization and how you'd like to partner..." className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1A7A4A] transition-colors resize-none" />
                <Button className="w-full bg-[#D4A017] text-[#0D2B4E] hover:bg-[#e8b420] font-bold">
                  Submit Inquiry →
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

