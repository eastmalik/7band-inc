/**
 * 7Band Inc. Programs Hub Page
 * Design: Elevated Civic — Deep Navy, Emerald Green, Warm Gold
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, Users, Hammer, Laptop, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const programs = [
  {
    icon: BookOpen,
    title: "Financial Literacy",
    tagline: "Know Your Money. Build Your Future.",
    desc: "Our Financial Literacy program equips participants with the knowledge and skills to budget, save, invest, and plan for a secure financial future. From understanding credit scores to building emergency funds, we cover the essentials of personal finance.",
    outcomes: ["Budget creation & management", "Credit building strategies", "Savings & investment basics", "Debt reduction planning"],
    href: "/programs/financial-literacy",
    color: "bg-[#1A7A4A]",
  },
  {
    icon: TrendingUp,
    title: "Entrepreneurship",
    tagline: "Turn Your Vision Into Reality.",
    desc: "We support aspiring entrepreneurs at every stage — from idea validation to business launch and growth. Our program provides mentorship, business planning tools, and connections to resources that help turn dreams into sustainable businesses.",
    outcomes: ["Business plan development", "Market research skills", "Access to mentors & networks", "Startup resource connections"],
    href: "/programs/entrepreneurship",
    color: "bg-[#0D2B4E]",
  },
  {
    icon: Users,
    title: "Youth Programs",
    tagline: "Inspiring Tomorrow's Leaders Today.",
    desc: "Our Youth Programs engage young people ages 12-24 with leadership development, financial education, and life skills training. We partner with schools and community organizations to reach youth where they are.",
    outcomes: ["Leadership development", "Financial basics for teens", "College & career readiness", "Mentorship connections"],
    href: "/programs/youth",
    color: "bg-[#1A7A4A]",
  },
  {
    icon: Hammer,
    title: "Community Workshops",
    tagline: "Learn Together. Grow Together.",
    desc: "Our Community Workshops bring neighbors together for hands-on learning experiences. From tax preparation assistance to homeownership education, our workshops address the practical financial and life skills needs of our community.",
    outcomes: ["Tax preparation assistance", "Homeownership education", "Benefits navigation", "Community skill-shares"],
    href: "/programs/workshops",
    color: "bg-[#0D2B4E]",
  },
  {
    icon: Laptop,
    title: "Digital Learning",
    tagline: "Bridge the Digital Divide.",
    desc: "In an increasingly digital world, access to technology and digital skills is essential. Our Digital Learning program provides training in computer basics, internet safety, online job searching, and digital financial tools.",
    outcomes: ["Computer & internet basics", "Online safety & privacy", "Digital job search skills", "Financial technology tools"],
    href: "/programs/digital-learning",
    color: "bg-[#1A7A4A]",
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
              Five Pathways to Opportunity
            </h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Each of our programs is designed to address a critical need in our community, working together to create comprehensive, lasting impact.
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
                      <Link href={program.href} className="mt-6">
                        <Button className="bg-[#D4A017] text-[#0D2B4E] hover:bg-[#e8b420] font-bold w-full sm:w-auto">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
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
