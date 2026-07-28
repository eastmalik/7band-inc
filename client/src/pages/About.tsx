/**
 * 7Band Inc. About Page
 * Design: Elevated Civic — Deep Navy, Emerald Green, Warm Gold
 * Sections: Hero, Mission/Vision/Values, History, Leadership, Financial Transparency
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Heart, Users, Award, FileText, ChevronRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: Shield, title: "Integrity", desc: "We operate with transparency, accountability, and the highest ethical standards in all we do." },
  { icon: Eye, title: "Vision", desc: "We see the potential in every person and community, and work to help that person flourish." },
  { icon: Heart, title: "Compassion", desc: "We lead with empathy, meeting people where they are and honoring their desires and dreams." },
  { icon: Users, title: "Community", desc: "We believe in the power of collective action and the strength that comes from working together." },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards in program quality, impact measurement, and service delivery." },
  { icon: BookOpen, title: "Education", desc: "We believe education is the most powerful tool for creating lasting, generational change." },
];

const leadership = [
  { name: "Malik East", title: "President", initials: "ME", bio: "Founder of 7Band Inc., dedicated to teaching financial literacy to families and individuals in the community, schools, and churches." },
  { name: "Mickala Johnson", title: "Secretary", initials: "MJ", bio: "Dedicated advocate for educational equity and economic empowerment in underserved communities." },
  { name: "Haylie Spight", title: "Treasury", initials: "HS", bio: "Expert in financial management and community-based education with a focus on sustainable nonprofit growth." },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0D2B4E] pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="/manus-storage/about-mission_6e198f1f.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B4E] via-[#0D2B4E]/80 to-[#0D2B4E]/40" />
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
              About Us
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Story & Mission
            </h1>
            <p className="text-white/75 text-xl leading-relaxed">
              7Band Inc. was founded in 2022 by Malik East out of the desire to teach financial literacy to the families and individuals in the community, schools, and churches.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white" id="mission">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-[#0D2B4E] rounded-2xl p-10">
              <p className="text-[#D4A017] font-semibold text-sm uppercase tracking-wider mb-3">Our Mission</p>
              <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why We Exist
              </h2>
              <p className="text-white/80 leading-relaxed text-lg">
                To empower individuals and families in underserved communities with financial literacy, knowledge, and connections they might have missed or never been taught.
              </p>
            </div>
            <div className="bg-[#1A7A4A] rounded-2xl p-10">
              <p className="text-[#D4A017] font-semibold text-sm uppercase tracking-wider mb-3">Our Vision</p>
              <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Where We're Going
              </h2>
              <p className="text-white/80 leading-relaxed text-lg">
                A world where every underserved individual, family, and community has the knowledge, resources, and connections needed to make their desires and dreams come true. Every person can build the future they deserve.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <p className="text-[#1A7A4A] font-semibold text-sm uppercase tracking-wider mb-3">What Guides Us</p>
            <h2 className="text-4xl font-black text-[#0D2B4E]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Card key={i} className="card-lift border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0D2B4E]/10 flex items-center justify-center mb-4">
                    <v.icon className="h-6 w-6 text-[#0D2B4E]" />
                  </div>
                  <h3 className="font-bold text-[#0D2B4E] text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-[#F8F7F4]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="photo-editorial relative">
              <img
                src="/manus-storage/hero-community_2f44b0cc.jpg"
                alt="Community members at a 7Band Inc. event"
                className="relative z-10 w-full rounded-2xl shadow-xl object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 left-8 right-8 h-2 bg-[#D4A017] rounded-full z-20 opacity-80" />
            </div>
            <div>
              <p className="text-[#1A7A4A] font-semibold text-xs uppercase tracking-widest mb-3">Our Journey</p>
              <h2 className="text-4xl font-black text-[#0D2B4E] mb-6 heading-underline" style={{ fontFamily: "'Playfair Display', serif" }}>
                How 7Band Inc. Began
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Our founders — community members themselves — came together with a shared vision: to build an organization that would meet people where they are, speak their language, and provide the resources and services needed to create real, lasting change.</p>
                <p>The name "7Band" reflects our belief in the seven interconnected bands of opportunity that, when woven together, create the fabric of a thriving community: education, financial literacy, entrepreneurship, digital access, youth development, community connection, and civic engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white" id="leadership">
        <div className="container">
          <div className="mb-12">
            <p className="text-[#1A7A4A] font-semibold text-xs uppercase tracking-widest mb-3">The Team</p>
            <h2 className="text-4xl font-black text-[#0D2B4E] heading-underline" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Leadership
            </h2>
            <p className="text-gray-600 mt-6 max-w-xl">
              Dedicated professionals committed to our mission of community empowerment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl">
            {leadership.map((person, i) => (
              <Card key={i} className="card-lift border-0 shadow-md text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-[#0D2B4E] flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {person.initials}
                  </div>
                  <h3 className="font-bold text-[#0D2B4E] text-lg mb-1">{person.name}</h3>
                  <p className="text-[#1A7A4A] text-sm font-semibold mb-3">{person.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{person.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-20 bg-[#0D2B4E]" id="transparency">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="band-stripe band-stripe-light mb-5">
                {[28, 20, 16, 24, 12, 18, 22].map((w, i) => (
                  <span key={i} style={{ width: `${w}px` }} />
                ))}
              </div>
              <p className="text-[#D4A017] font-semibold text-xs uppercase tracking-widest mb-3">Accountability</p>
              <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Financial Transparency
              </h2>
              <p className="text-white/75 leading-relaxed">
                We are committed to full transparency in our finances and operations. Our donors and community deserve to know how their contributions are used.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Annual Report",            sub: "Full organizational report",       icon: "📄" },
                { label: "IRS Determination Letter", sub: "501(c)(3) status documentation",  icon: "📋" },
                { label: "Financial Statements",     sub: "Audited financial records",        icon: "📊" },
              ].map((doc, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-5 text-center hover:bg-white/15 transition-colors cursor-pointer">
                  <div className="text-3xl mb-3">{doc.icon}</div>
                  <h4 className="text-white font-semibold text-sm mb-1">{doc.label}</h4>
                  <p className="text-white/60 text-xs mb-3">{doc.sub}</p>
                  <span className="text-[#D4A017] text-xs font-semibold">Coming Soon</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8F7F4]">
        <div className="container text-center">
          <h2 className="text-3xl font-black text-[#0D2B4E] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Join Our Community
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Whether you want to volunteer, donate, or partner with us — there's a place for you in the 7Band community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/volunteer"><Button className="bg-[#D4A017] text-[#0D2B4E] hover:bg-[#e8b420] font-bold">Volunteer</Button></Link>
            <Link href="/donate"><Button className="bg-[#0D2B4E] hover:bg-[#1a3f6f] text-white font-semibold">Donate</Button></Link>
            <Link href="/contact"><Button variant="outline" className="border-[#0D2B4E]/30 text-[#0D2B4E] hover:bg-[#0D2B4E] hover:text-white">Contact Us</Button></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
