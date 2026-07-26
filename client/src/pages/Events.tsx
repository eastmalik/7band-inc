/**
 * 7Band Inc. Events Page
 * Design: Elevated Civic — Deep Navy, Emerald Green, Warm Gold
 */
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, ArrowRight, Video, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const events = [
  {
    id: 1,
    title: "The Flow: Live — Free Weekly Webinar",
    date: "Every Week",
    time: "Check Zoom for weekly schedule",
    location: "Zoom Webinar (Online)",
    category: "The Flow",
    type: "Webinar",
    spots: null,
    isRecurring: true,
    isExternal: true,
    externalUrl: "https://zoom.us/webinar/register",
    desc: "Join 7Band Financial Agency every week for a live walkthrough of The Flow — a proven 7-step system to generational wealth. Free to attend. Q&A included.",
  },
  {
    id: 2,
    title: "Financial Literacy Program — Fall Cohort Kickoff",
    date: "August 12, 2026",
    time: "6:00 PM – 8:00 PM",
    location: "Community Center, Main Hall",
    category: "Financial Literacy",
    type: "Program",
    spots: 20,
    isRecurring: false,
    isExternal: false,
    externalUrl: null,
    desc: "Join us for the kickoff of our fall Financial Literacy cohort. Learn what to expect and meet your fellow participants.",
  },
  {
    id: 3,
    title: "Free Tax Preparation Assistance",
    date: "September 6, 2026",
    time: "10:00 AM – 2:00 PM",
    location: "Community Library, Room B",
    category: "Community",
    type: "Service",
    spots: 30,
    isRecurring: false,
    isExternal: false,
    externalUrl: null,
    desc: "VITA-certified volunteers will provide free tax preparation assistance for qualifying community members.",
  },
  {
    id: 4,
    title: "Community Partner Mixer",
    date: "September 20, 2026",
    time: "5:00 PM – 7:00 PM",
    location: "7Band Community Hub",
    category: "Community",
    type: "Networking",
    spots: 100,
    isRecurring: false,
    isExternal: false,
    externalUrl: null,
    desc: "An informal networking event for community organizations, businesses, and individuals interested in partnering with 7Band Inc.",
  },
];

const categoryColors: Record<string, string> = {
  "Financial Literacy": "bg-[#1A7A4A]/10 text-[#1A7A4A]",
  "The Flow": "bg-[#D4A017]/20 text-[#D4A017]",
  "Community": "bg-[#D4A017]/10 text-[#D4A017]",
};

export default function Events() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "The Flow", "Financial Literacy", "Community"];
  const filtered = filter === "All" ? events : events.filter(e => e.category === filter);

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
              Events & Workshops
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Upcoming Events
            </h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Join us for workshops, webinars, and community events designed to educate, connect, and empower — including our free weekly Flow webinar.
            </p>
          </div>
        </div>
      </section>

      {/* Featured: Weekly Flow Webinar Banner */}
      <section className="py-10" style={{ background: "#f8f6f0" }}>
        <div className="container">
          <div
            className="rounded-3xl p-8 flex flex-col lg:flex-row items-center gap-8"
            style={{ background: "linear-gradient(135deg, #0D2B4E 0%, #051525 100%)", border: "2px solid #D4A01740" }}
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "#D4A01720" }}>
              <Video className="w-8 h-8" style={{ color: "#D4A017" }} />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#D4A017" }}>
                Free · Every Week · Zoom Webinar
              </p>
              <h2 className="text-2xl font-black text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Flow: Live — Weekly Webinar
              </h2>
              <p className="text-white/70 text-sm">
                Join 7Band Financial Agency every week for a live walkthrough of The Flow — the proven 7-step system to generational wealth. Q&A included. Free to attend.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="https://zoom.us/webinar/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all hover:scale-105"
                style={{ background: "#D4A017", color: "#0D2B4E" }}
              >
                <Video className="w-4 h-4" />
                Register Free
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide border border-white/30 text-white hover:bg-white/10 transition-all"
              >
                Learn About The Flow
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Events */}
      <section className="py-16 bg-[#F8F7F4]">
        <div className="container">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-[#0D2B4E] text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event) => (
              <Card key={event.id} className="card-lift border-0 shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-[#0D2B4E] p-4 flex items-center gap-3">
                    <div className="text-center min-w-[40px]">
                      {event.isRecurring ? (
                        <Video className="w-6 h-6 mx-auto" style={{ color: "#D4A017" }} />
                      ) : (
                        <>
                          <div className="text-[#D4A017] font-black text-2xl leading-none">{event.date.split(" ")[1]?.replace(",", "") ?? "—"}</div>
                          <div className="text-white/70 text-xs uppercase tracking-wider">{event.date.split(" ")[0]}</div>
                        </>
                      )}
                    </div>
                    <div className="w-px h-10 bg-white/20" />
                    <Badge className={`${categoryColors[event.category] ?? "bg-gray-100 text-gray-700"} border-0 text-xs font-semibold`}>
                      {event.category}
                    </Badge>
                    {event.isRecurring && (
                      <Badge className="bg-[#1A7A4A]/20 text-[#1A7A4A] border-0 text-xs font-semibold ml-auto">
                        Weekly
                      </Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-[#0D2B4E] text-lg leading-snug mb-3">{event.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{event.desc}</p>
                    <div className="space-y-1.5 mb-4">
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Clock className="h-3.5 w-3.5" /> {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <MapPin className="h-3.5 w-3.5" /> {event.location}
                      </div>
                      {event.spots && (
                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                          <Users className="h-3.5 w-3.5" /> {event.spots} spots available
                        </div>
                      )}
                    </div>
                    {event.isExternal ? (
                      <a
                        href={event.externalUrl ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold text-sm transition-all hover:opacity-90"
                        style={{ background: "#D4A017", color: "#0D2B4E" }}
                      >
                        <Video className="w-4 h-4" />
                        Register on Zoom
                      </a>
                    ) : (
                      <Button
                        className="w-full bg-[#D4A017] text-[#0D2B4E] hover:bg-[#e8b420] font-bold text-sm"
                        onClick={() => toast.success(`Registered for "${event.title}"! We'll send confirmation details to your email.`)}
                      >
                        Register Now
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer at Events */}
      <section className="py-16 bg-[#0D2B4E]">
        <div className="container text-center">
          <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Volunteer at Our Events
          </h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Help us make our events possible. Volunteers are the backbone of everything we do.
          </p>
          <Link href="/volunteer">
            <Button className="bg-[#D4A017] text-[#0D2B4E] hover:bg-[#e8b420] font-bold">
              Become a Volunteer <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
