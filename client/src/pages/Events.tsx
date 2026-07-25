/**
 * 7Band Inc. Events Page
 * Design: Elevated Civic — Deep Navy, Emerald Green, Warm Gold
 */
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const events = [
  {
    id: 1,
    title: "Financial Literacy Program — Fall Cohort Kickoff",
    date: "August 12, 2026",
    time: "6:00 PM – 8:00 PM",
    location: "Community Center, Main Hall",
    category: "Financial Literacy",
    type: "Program",
    spots: 20,
    desc: "Join us for the kickoff of our fall Financial Literacy cohort. Learn what to expect and meet your fellow participants.",
  },
  {
    id: 2,
    title: "Entrepreneurship Workshop: Business Plan Basics",
    date: "August 19, 2026",
    time: "5:30 PM – 7:30 PM",
    location: "7Band Learning Center",
    category: "Entrepreneurship",
    type: "Workshop",
    spots: 15,
    desc: "A hands-on workshop covering the fundamentals of writing a business plan that attracts investors and guides your growth.",
  },
  {
    id: 3,
    title: "Youth Leadership Summit",
    date: "August 23, 2026",
    time: "9:00 AM – 3:00 PM",
    location: "City Youth Center",
    category: "Youth Programs",
    type: "Event",
    spots: 50,
    desc: "A full-day summit for young leaders ages 14-24 featuring workshops, speakers, and networking opportunities.",
  },
  {
    id: 4,
    title: "Free Tax Preparation Assistance",
    date: "September 6, 2026",
    time: "10:00 AM – 2:00 PM",
    location: "Community Library, Room B",
    category: "Community Workshop",
    type: "Service",
    spots: 30,
    desc: "VITA-certified volunteers will provide free tax preparation assistance for qualifying community members.",
  },
  {
    id: 5,
    title: "Digital Skills Bootcamp: Getting Started Online",
    date: "September 13, 2026",
    time: "1:00 PM – 4:00 PM",
    location: "7Band Digital Lab",
    category: "Digital Learning",
    type: "Workshop",
    spots: 12,
    desc: "A beginner-friendly introduction to computers, the internet, and essential digital skills for everyday life.",
  },
  {
    id: 6,
    title: "Community Partner Mixer",
    date: "September 20, 2026",
    time: "5:00 PM – 7:00 PM",
    location: "7Band Community Hub",
    category: "Community",
    type: "Networking",
    spots: 100,
    desc: "An informal networking event for community organizations, businesses, and individuals interested in partnering with 7Band Inc.",
  },
];

const categoryColors: Record<string, string> = {
  "Financial Literacy": "bg-[#1A7A4A]/10 text-[#1A7A4A]",
  "Entrepreneurship": "bg-[#0D2B4E]/10 text-[#0D2B4E]",
  "Youth Programs": "bg-purple-100 text-purple-700",
  "Community Workshop": "bg-orange-100 text-orange-700",
  "Digital Learning": "bg-blue-100 text-blue-700",
  "Community": "bg-[#D4A017]/10 text-[#D4A017]",
};

export default function Events() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Financial Literacy", "Entrepreneurship", "Youth Programs", "Community Workshop", "Digital Learning", "Community"];
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
              Join us for workshops, programs, and community events designed to educate, connect, and empower.
            </p>
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
                    <div className="text-center">
                      <div className="text-[#D4A017] font-black text-2xl leading-none">{event.date.split(" ")[1].replace(",", "")}</div>
                      <div className="text-white/70 text-xs uppercase tracking-wider">{event.date.split(" ")[0]}</div>
                    </div>
                    <div className="w-px h-10 bg-white/20" />
                    <Badge className={`${categoryColors[event.category]} border-0 text-xs font-semibold`}>
                      {event.category}
                    </Badge>
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
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Users className="h-3.5 w-3.5" /> {event.spots} spots available
                      </div>
                    </div>
                    <Button
                      className="w-full bg-[#D4A017] text-[#0D2B4E] hover:bg-[#e8b420] font-bold text-sm"
                      onClick={() => toast.success(`Registered for "${event.title}"! We'll send confirmation details to your email.`)}
                    >
                      Register Now
                    </Button>
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
