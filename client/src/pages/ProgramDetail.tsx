/**
 * 7Band Inc. Program Detail Page (reusable for all 5 programs)
 * Design: Elevated Civic — Deep Navy, Emerald Green, Warm Gold
 */
import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, Users, Hammer, Laptop, ArrowRight, Calendar, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const programData: Record<string, {
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  outcomes: string[];
  whoFor: string;
  duration: string;
  format: string;
  color: string;
}> = {
  "financial-literacy": {
    icon: BookOpen,
    title: "Financial Literacy",
    tagline: 'Learn "The Money Game". Alter Your Future.',
    description: "Our Financial Literacy program is a comprehensive, community-centered curriculum designed to empower Gen Z, Gen X, women, and minorities with the tools they need to succeed in today's economy. We bridge the financial knowledge gap by teaching the 'rules of money' that aren't taught in schools, helping you transform how you think about wealth and secure your financial future.",
    details: [
      "The 3 Ways Money Grows: A deep dive into Fixed, Variable, and Indexed accounts to find the best fit for your goals",
      "The \"0 is Your Hero\" Strategy: How to link your growth to the S&P 500 while maintaining a 0% floor to protect your principal from market crashes",
      "Tax-Exemption Secrets: Understanding IRS codes 7702, 101a, and 72e for tax-free growth on your hard-earned money",
      "Infinite Banking Concept: How to use specialized financial products as your own personal private bank for tax-free access to funds via electronic transfer or wire",
      "Principal Protection: Applying the Warren Buffett philosophy — Rule #1: Don't lose money; Rule #2: Never forget Rule #1",
      "Entrepreneurial Finance: Learning how to attract capital and build wealth that allows you to have a real impact on your community",
    ],
    outcomes: [
      "Create and maintain a personal budget",
      "Understand your credit score and how to improve it",
      "Build a savings habit and emergency fund",
      "Master the \"Money Game\": Gain the confidence to grow wealth using the same tax-free and risk-free tools used by the wealthy",
    ],
    whoFor: "This workshop is specifically designed for three key groups: Entrepreneurs & Business Owners looking for capital to fund, open, or grow a business venture; Active Savers building safety nets for retirement, business, or their children's education; and Baby Boomers focused on principal protection to ensure they never outlive their retirement savings.",
    duration: "Ongoing workshops — join any session",
    format: "Live webinars and in-person workshops",
    color: "bg-[#1A7A4A]",
  },
  "entrepreneurship": {
    icon: TrendingUp,
    title: "Entrepreneurship",
    tagline: "Turn Your Vision Into Reality.",
    description: "Our Entrepreneurship program supports aspiring and early-stage entrepreneurs from our community with the practical skills, mentorship, and resources needed to launch and grow successful businesses. We believe that entrepreneurship is a powerful pathway to economic independence and community wealth-building.",
    details: [
      "Business idea validation and market research",
      "Business plan development",
      "Legal structures and business registration",
      "Funding options: grants, loans, and investors",
      "Marketing and customer acquisition",
      "Financial management for small businesses",
      "Building a professional network",
      "Pitch preparation and presentation skills",
    ],
    outcomes: ["Develop a complete business plan", "Understand legal and financial requirements", "Access mentors and professional networks", "Pitch your business with confidence"],
    whoFor: "Community members with a business idea or early-stage business who want structured support and mentorship.",
    duration: "12-week intensive program",
    format: "Workshops, one-on-one mentoring, and peer learning",
    color: "bg-[#0D2B4E]",
  },
  "youth": {
    icon: Users,
    title: "Youth Programs",
    tagline: "Inspiring Tomorrow's Leaders Today.",
    description: "Our Youth Programs are designed to empower young people ages 12-24 with the skills, knowledge, and confidence to navigate their futures. Through a combination of financial education, leadership development, and mentorship, we help young people build the foundation for lifelong success.",
    details: [
      "Financial basics: earning, saving, and spending",
      "Leadership and communication skills",
      "College and career exploration",
      "Resume writing and interview preparation",
      "Goal-setting and time management",
      "Community service and civic engagement",
      "Mentorship with community professionals",
      "Entrepreneurship basics for teens",
    ],
    outcomes: ["Build a personal financial plan", "Develop leadership and communication skills", "Create a college or career roadmap", "Connect with mentors and role models"],
    whoFor: "Young people ages 12-24 in our community. School partnerships available for classroom delivery.",
    duration: "Semester-based (16 weeks) or intensive summer program",
    format: "After-school sessions, school partnerships, and summer intensives",
    color: "bg-[#1A7A4A]",
  },
  "workshops": {
    icon: Hammer,
    title: "Community Workshops",
    tagline: "Learn Together. Grow Together.",
    description: "Our Community Workshops are single-session or short-series events that address specific, practical needs in our community. From tax preparation assistance to homeownership education, our workshops are accessible, relevant, and designed to provide immediate value.",
    details: [
      "Free tax preparation assistance (VITA certified)",
      "First-time homebuyer education",
      "Benefits navigation (SNAP, Medicaid, etc.)",
      "Identity theft prevention and recovery",
      "Estate planning basics",
      "Insurance literacy",
      "Community skill-shares and peer learning",
      "Special topic workshops based on community need",
    ],
    outcomes: ["Access free tax preparation services", "Understand the homebuying process", "Navigate government benefits and services", "Protect yourself from financial fraud"],
    whoFor: "All community members. Workshops are open to everyone and free to attend.",
    duration: "Single sessions (2-3 hours) or short series (2-4 sessions)",
    format: "In-person community events",
    color: "bg-[#0D2B4E]",
  },
  "digital-learning": {
    icon: Laptop,
    title: "Digital Learning",
    tagline: "Bridge the Digital Divide.",
    description: "In today's world, digital skills are essential for employment, financial management, and civic participation. Our Digital Learning program provides accessible, hands-on technology education for community members who want to build their digital confidence and skills.",
    details: [
      "Computer and smartphone basics",
      "Internet navigation and research skills",
      "Online safety, privacy, and security",
      "Email and digital communication",
      "Online job searching and applications",
      "Digital financial tools and online banking",
      "Video conferencing and remote work skills",
      "Introduction to digital productivity tools",
    ],
    outcomes: ["Navigate computers and the internet confidently", "Protect yourself online", "Search and apply for jobs digitally", "Use digital tools for financial management"],
    whoFor: "Community members of all ages who want to build or improve their digital skills. Beginners especially welcome.",
    duration: "6-week program, meeting twice per week",
    format: "Hands-on computer lab sessions with take-home practice guides",
    color: "bg-[#1A7A4A]",
  },
};

export default function ProgramDetail() {
  const [, params] = useRoute("/programs/:slug");
  const slug = params?.slug ?? "";
  const program = programData[slug];

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-black text-[#0D2B4E] mb-4">Program Not Found</h1>
            <Link href="/programs"><Button>View All Programs</Button></Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = program.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className={`${program.color} pt-32 pb-20`}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="band-stripe mb-5">
              {[40, 28, 20, 32, 16, 24, 36].map((w, i) => (
                <span key={i} style={{ width: `${w}px` }} />
              ))}
            </div>
            <Badge className="bg-[#D4A017]/20 text-[#D4A017] border-[#D4A017]/30 mb-4 text-xs font-semibold tracking-wider uppercase">
              Program
            </Badge>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <Icon className="h-7 w-7 text-white" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              {program.title}
            </h1>
            <p className="text-white/80 text-xl italic mb-6">{program.tagline}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/events">
                <Button className="bg-[#D4A017] text-[#0D2B4E] hover:bg-[#e8b420] font-bold">
                  Register for Next Session <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white">
                  Ask a Question
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-[#0D2B4E] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                About This Program
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{program.description}</p>

              <h3 className="text-xl font-bold text-[#0D2B4E] mb-4">What You'll Learn</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {program.details.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#1A7A4A] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-[#0D2B4E] mb-4">Program Outcomes</h3>
              <div className="space-y-3">
                {program.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-[#F8F7F4] rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-[#D4A017] flex items-center justify-center text-[#0D2B4E] font-bold text-xs shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#0D2B4E] mb-4">Program Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-[#D4A017] uppercase tracking-wider mb-1">Who It's For</p>
                      <p className="text-gray-700 text-sm">{program.whoFor}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#D4A017] uppercase tracking-wider mb-1">Duration</p>
                      <p className="text-gray-700 text-sm">{program.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#D4A017] uppercase tracking-wider mb-1">Format</p>
                      <p className="text-gray-700 text-sm">{program.format}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#D4A017] uppercase tracking-wider mb-1">Cost</p>
                      <p className="text-gray-700 text-sm font-semibold text-[#1A7A4A]">Free to all community members</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-[#0D2B4E]">
                <CardContent className="p-6">
                  <Calendar className="h-8 w-8 text-[#D4A017] mb-3" />
                  <h3 className="font-bold text-white mb-2">Upcoming Sessions</h3>
                  <p className="text-white/70 text-sm mb-4">Register for the next available session of this program.</p>
                  <Link href="/events">
                    <Button className="w-full bg-[#D4A017] text-[#0D2B4E] hover:bg-[#e8b420] font-bold">
                      View Schedule
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#0D2B4E] mb-2">Questions?</h3>
                  <p className="text-gray-600 text-sm mb-4">Our team is happy to answer any questions about this program.</p>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full border-[#0D2B4E]/30 text-[#0D2B4E]">
                      Contact Us
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Programs */}
      <section className="py-16 bg-[#F8F7F4]">
        <div className="container text-center">
          <h2 className="text-3xl font-black text-[#0D2B4E] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {slug === "financial-literacy" ? "Ready to Stop the 'Rat Race'?" : "Explore Other Programs"}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {slug === "financial-literacy"
              ? "Join our next session to learn how to grow your family's wealth for generations to come. Our workshops are purely educational — no sales pressure, just the financial truth you deserve to know."
              : "We offer two focused programs to support your journey."}
          </p>
          <Link href="/programs">
            <Button className="bg-[#0D2B4E] hover:bg-[#1a3f6f] text-white font-bold">
              {slug === "financial-literacy" ? "View All Programs" : "View All Programs"} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
