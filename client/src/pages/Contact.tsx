/**
 * 7Band Inc. Contact Page
 * Design: Elevated Civic — Deep Navy, Emerald Green, Warm Gold
 */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Clock, Facebook, Youtube, CalendarCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0D2B4E] pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="band-stripe mb-5">
              {[40, 28, 20, 32, 16, 24, 36].map((w, i) => (
                <span key={i} style={{ width: `${w}px` }} />
              ))}
            </div>
            <Badge className="bg-[#D4A017]/20 text-[#D4A017] border-[#D4A017]/30 mb-4 text-xs font-semibold tracking-wider uppercase">
              Contact Us
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              We'd Love to Hear From You
            </h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Have a question, want to get involved, or just want to learn more? Reach out — we're here for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black text-[#0D2B4E] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Get in Touch
                </h2>
              </div>
              {[
                { icon: Mail, label: "General Inquiries", value: "info@7bandinc.org", href: "mailto:info@7bandinc.org" },
                { icon: Phone, label: "Phone", value: "678-775-9800", href: "tel:+16787759800" },
                { icon: Clock, label: "Office Hours", value: "Mon–Fri: 9:00 AM – 5:00 PM\nSat: 10:00 AM – 2:00 PM", href: null },
                { icon: CalendarCheck, label: "Book a Free Session", value: "Schedule a 10-min call with Malik East", href: "https://calendly.com/malikeast/10min" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0D2B4E]/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-[#0D2B4E]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#D4A017] uppercase tracking-wider mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-gray-700 hover:text-[#0D2B4E] transition-colors whitespace-pre-line">{item.value}</a>
                    ) : (
                      <p className="text-gray-700 whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div>
                <p className="text-xs font-semibold text-[#D4A017] uppercase tracking-wider mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61556716666847" },
                    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@Malik_East" },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#0D2B4E]/10 hover:bg-[#0D2B4E] hover:text-white flex items-center justify-center text-[#0D2B4E] transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-black text-[#0D2B4E] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Send Us a Message
                  </h2>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#0D2B4E] mb-1.5">First Name *</label>
                        <input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D2B4E] transition-colors" placeholder="First name" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0D2B4E] mb-1.5">Last Name *</label>
                        <input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D2B4E] transition-colors" placeholder="Last name" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0D2B4E] mb-1.5">Email Address *</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D2B4E] transition-colors" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0D2B4E] mb-1.5">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D2B4E] transition-colors" placeholder="(555) 000-0000" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0D2B4E] mb-1.5">Subject *</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D2B4E] transition-colors bg-white">
                        <option value="">Select a subject</option>
                        <option value="programs">Program Information</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="donate">Donations</option>
                        <option value="partner">Partnerships</option>
                        <option value="media">Media Inquiry</option>
                        <option value="general">General Question</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0D2B4E] mb-1.5">Message *</label>
                      <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D2B4E] transition-colors resize-none" placeholder="How can we help you?" />
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-[#0D2B4E] hover:bg-[#1a3f6f] text-white font-bold"
                      onClick={() => toast.success("Message sent! We'll get back to you within 2-3 business days.")}
                    >
                      Send Message
                    </Button>
                    <p className="text-gray-400 text-xs text-center">We typically respond within 2-3 business days.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
