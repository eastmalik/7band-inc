/**
 * 7Band Inc. News Page
 * Design: Elevated Civic — Deep Navy, Emerald Green, Warm Gold
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const articles = [
  { id: 1, date: "July 15, 2026", category: "Community", title: "7Band Inc. Launches New Digital Skills Workshop Series", excerpt: "Our newest program helps community members navigate the digital economy with confidence and practical skills.", featured: true },
  { id: 2, date: "June 28, 2026", category: "Programs", title: "Financial Literacy Cohort Celebrates 50 Graduates", excerpt: "Fifty community members completed our intensive financial literacy program this spring, marking a major milestone for 7Band Inc." },
  { id: 3, date: "June 10, 2026", category: "Partners", title: "7Band Inc. Partners with Local Schools for Youth Outreach", excerpt: "New partnership brings entrepreneurship education directly into middle and high school classrooms across the district." },
  { id: 4, date: "May 22, 2026", category: "Success Stories", title: "From Workshop to Business Owner: Maria's Story", excerpt: "After completing our Entrepreneurship program, Maria launched her catering business and has already served over 100 clients." },
  { id: 5, date: "May 8, 2026", category: "Community", title: "Annual Community Impact Report Released", excerpt: "Our 2025 Annual Impact Report highlights the growth of our programs and the lives we've touched over the past year." },
  { id: 6, date: "April 15, 2026", category: "Press Release", title: "7Band Inc. Receives Community Excellence Award", excerpt: "We are honored to receive the City Community Excellence Award for our contributions to local education and economic empowerment." },
];

const categoryColors: Record<string, string> = {
  "Community": "bg-[#1A7A4A]/10 text-[#1A7A4A]",
  "Programs": "bg-[#0D2B4E]/10 text-[#0D2B4E]",
  "Partners": "bg-blue-100 text-blue-700",
  "Success Stories": "bg-[#D4A017]/10 text-[#D4A017]",
  "Press Release": "bg-purple-100 text-purple-700",
};

export default function News() {
  const [email, setEmail] = useState("");

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
              News & Stories
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Community News & Impact Stories
            </h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Stay informed about our programs, community events, success stories, and organizational updates.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="container">
          <p className="text-[#1A7A4A] font-semibold text-sm uppercase tracking-wider mb-6">Featured Story</p>
          {articles.filter(a => a.featured).map(article => (
            <Card key={article.id} className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="bg-[#0D2B4E] p-10 flex flex-col justify-center">
                    <Badge className={`${categoryColors[article.category]} border-0 text-xs font-semibold w-fit mb-4`}>{article.category}</Badge>
                    <h2 className="text-3xl font-black text-white mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {article.title}
                    </h2>
                    <p className="text-white/70 leading-relaxed mb-6">{article.excerpt}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-white/50 text-sm flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {article.date}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white/30 text-white bg-transparent hover:bg-white/10"
                        onClick={() => toast.info("Full article coming soon!")}
                      >
                        Read Full Story <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                  <div className="bg-[#1A7A4A] p-10 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl font-black mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>50+</div>
                      <div className="text-white/80">Graduates This Year</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-[#F8F7F4]">
        <div className="container">
          <h2 className="text-3xl font-black text-[#0D2B4E] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            All Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.filter(a => !a.featured).map(article => (
              <Card key={article.id} className="card-lift border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className={`${categoryColors[article.category]} border-0 text-xs font-semibold`}>{article.category}</Badge>
                    <span className="text-gray-400 text-xs flex items-center gap-1"><Calendar className="h-3 w-3" /> {article.date}</span>
                  </div>
                  <h3 className="font-bold text-[#0D2B4E] text-lg leading-snug mb-3">{article.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <button
                    className="text-[#1A7A4A] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    onClick={() => toast.info("Full article coming soon!")}
                  >
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#0D2B4E]">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Never Miss a Story
          </h2>
          <p className="text-white/70 mb-6">Subscribe to our newsletter for the latest news, program updates, and community stories.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); toast.success("Subscribed! Welcome to the 7Band community."); setEmail(""); }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#D4A017] transition-colors"
            />
            <Button type="submit" className="bg-[#D4A017] text-[#0D2B4E] hover:bg-[#e8b420] font-bold px-6 whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
