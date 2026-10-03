/**
 * 7Band Inc. Volunteer Page
 * Design: Elevated Civic — Deep Navy, Emerald Green, Warm Gold
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, Clock, Award, Users, BookOpen, Laptop, Hammer, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const opportunities = [
  { icon: BookOpen, title: "Program Facilitator", commitment: "4-6 hrs/week", desc: "Lead or co-facilitate one of our educational programs. Training provided." },
  { icon: Users, title: "Mentor", commitment: "2-4 hrs/month", desc: "Provide one-on-one mentorship to program participants on their personal and professional goals." },
  { icon: Laptop, title: "Digital Skills Tutor", commitment: "2-3 hrs/week", desc: "Help community members build basic computer and internet skills in our digital lab." },
  { icon: Hammer, title: "Event Support", commitment: "As needed", desc: "Help set up, run, and break down community events and workshops." },
  { icon: Award, title: "Professional Skills Presenter", commitment: "1-2 sessions", desc: "Share your professional expertise in a workshop or panel discussion." },
  { icon: Heart, title: "Administrative Support", commitment: "Flexible", desc: "Support our team with administrative tasks, communications, and outreach." },
];

const faqs = [
  { q: "Do I need special qualifications to volunteer?", a: "Most volunteer roles require only a willingness to serve and a commitment to our mission. Specialized roles like Program Facilitator include full training. We welcome volunteers from all backgrounds." },
  { q: "How much time do I need to commit?", a: "It depends on the role. Some opportunities require just a few hours per month, while others involve a weekly commitment. We work with your schedule to find the right fit." },
  { q: "Is there a background check required?", a: "Yes, volunteers who work directly with youth or vulnerable populations are required to complete a background check. This is provided at no cost to volunteers." },
  { q: "Will I receive training?", a: "Absolutely. All volunteers receive an orientation to 7Band Inc. and role-specific training. We want you to feel confident and prepared." },
  { q: "Can my organization volunteer as a group?", a: "Yes! We welcome corporate and organizational volunteer groups. Contact us to arrange a group volunteer day or ongoing partnership." },
  { q: "How do I track my volunteer hours?", a: "We provide a simple volunteer hour tracking system. Hours are logged and we provide documentation for employer matching programs, court-ordered community service, and personal records." },
];

export default function Volunteer() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1A7A4A] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/volunteer-hero_8eb4b506.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1A7A4A]/60" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="band-stripe mb-5">
              {[40, 28, 20, 32, 16, 24, 36].map((w, i) => (
                <span key={i} style={{ width: `${w}px` }} />
              ))}
            </div>
            <Badge className="bg-[#D4A017]/20 text-[#D4A017] border-[#D4A017]/30 mb-4 text-xs font-semibold tracking-wider uppercase">
              Get Involved
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Volunteer With Us
            </h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Join the Movement — your time and talent can transform lives. Volunteers are the heart of 7Band Inc.
            </p>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Heart, title: "Make Real Impact", desc: "Your time directly improves lives in our community." },
              { icon: Clock, title: "Flexible Commitment", desc: "We have opportunities that fit any schedule." },
              { icon: Award, title: "Grow Your Skills", desc: "Gain experience, training, and professional connections." },
            ].map((item, i) => (
              <div key={i} className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-[#1A7A4A]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-[#1A7A4A]" />
                </div>
                <h3 className="font-bold text-[#0D2B4E] text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 bg-[#F8F7F4]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-[#0D2B4E]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Volunteer Opportunities
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">Find the role that matches your skills and availability.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp, i) => (
              <Card key={i} className="card-lift border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0D2B4E]/10 flex items-center justify-center shrink-0">
                      <opp.icon className="h-6 w-6 text-[#0D2B4E]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0D2B4E] text-lg mb-1">{opp.title}</h3>
                      <Badge className="bg-[#D4A017]/10 text-[#D4A017] border-0 text-xs mb-2">{opp.commitment}</Badge>
                      <p className="text-gray-600 text-sm leading-relaxed">{opp.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-black text-[#0D2B4E]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Apply to Volunteer
              </h2>
              <p className="text-gray-600 mt-3">Fill out the form below and we'll be in touch within 3-5 business days.</p>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#0D2B4E] mb-1.5">Full Name *</label>
                    <input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D2B4E] transition-colors" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0D2B4E] mb-1.5">Email *</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D2B4E] transition-colors" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0D2B4E] mb-1.5">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D2B4E] transition-colors" placeholder="(555) 000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0D2B4E] mb-1.5">Area of Interest *</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D2B4E] transition-colors bg-white">
                    <option value="program-facilitator">Program Facilitator</option>
                    <option value="mentor">Mentor</option>
                    <option value="digital-tutor">Digital Skills Tutor</option>
                    <option value="event-support">Event Support</option>
                    <option value="presenter">Professional Skills Presenter</option>
                    <option value="admin">Administrative Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0D2B4E] mb-1.5">Tell Us About Yourself</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D2B4E] transition-colors resize-none" placeholder="Share your background, skills, and why you want to volunteer with 7Band Inc." />
                </div>
                <Button
                  size="lg"
                  className="w-full bg-[#1A7A4A] hover:bg-[#15603b] text-white font-bold"
                  onClick={() => toast.success("Application submitted! We'll be in touch within 3-5 business days.")}
                >
                  Submit Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[#F8F7F4]">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-[#0D2B4E] text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-xl border-0 shadow-sm px-6">
                <AccordionTrigger className="text-[#0D2B4E] font-semibold text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
}
