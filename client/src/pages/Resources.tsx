/**
 * 7Band Inc. Resources Page
 * Design: Elevated Civic — Deep Navy, Emerald Green, Warm Gold
 */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Video, BookOpen, Download, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const guides = [
  // Real guides will be added here
];

const videos = [
  { title: "Introduction to Financial Literacy", duration: "12 min", category: "Financial Literacy" },
  { title: "How to Write a Business Plan", duration: "18 min", category: "Entrepreneurship" },
  { title: "Computer Basics for Beginners", duration: "22 min", category: "Digital Learning" },
  { title: "Building Credit from Scratch", duration: "15 min", category: "Financial Literacy" },
];

const faqs = [
  { q: "Are all programs and resources free?", a: "Yes! All of our programs, workshops, and downloadable resources are completely free for community members. We believe cost should never be a barrier to education." },
  { q: "How do I register for a program?", a: "You can register for programs through our Events page or by contacting us directly. Registration is simple and can be done online or in person." },
  { q: "Do you offer resources in other languages?", a: "We are working to expand our resources in multiple languages. Please contact us if you need materials in a specific language and we will do our best to accommodate." },
  { q: "Can I share these resources with others?", a: "Absolutely! All of our resources are designed to be shared. Please credit 7Band Inc. when sharing and encourage others to connect with our programs directly." },
  { q: "How do I stay updated on new resources?", a: "Subscribe to our newsletter, follow us on social media, or check this page regularly for new guides, videos, and tools." },
];

export default function Resources() {
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
              Resources
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Free Educational Resources
            </h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Guides, videos, and tools to support your financial literacy, entrepreneurship, and digital skills journey — all free.
            </p>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-4xl font-black text-[#0D2B4E]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Guides & Downloads
              </h2>
              <p className="text-gray-600 mt-2">Free PDF guides you can download and share.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.length === 0 ? (
              <div className="col-span-3 text-center py-16 text-gray-400">
                <FileText className="h-12 w-12 mx-auto mb-4 opacity-30" />
                <p className="text-lg font-semibold text-[#0D2B4E]/40">Guides coming soon</p>
                <p className="text-sm mt-1">Free downloadable guides will be available here shortly.</p>
              </div>
            ) : guides.map((guide, i) => (
              <Card key={i} className="card-lift border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0D2B4E]/10 flex items-center justify-center shrink-0">
                      <FileText className="h-5 w-5 text-[#0D2B4E]" />
                    </div>
                    <Badge className="bg-[#1A7A4A]/10 text-[#1A7A4A] border-0 text-xs">{guide.category}</Badge>
                  </div>
                  <h3 className="font-bold text-[#0D2B4E] text-lg mb-2 leading-snug">{guide.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{guide.desc}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#0D2B4E]/30 text-[#0D2B4E] w-full"
                    onClick={() => toast.info("Download coming soon! Sign up for our newsletter to be notified.")}
                  >
                    <Download className="mr-2 h-3.5 w-3.5" /> Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-20 bg-[#F8F7F4]">
        <div className="container">
          <h2 className="text-4xl font-black text-[#0D2B4E] mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            Video Library
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {videos.map((video, i) => (
              <Card key={i} className="card-lift border-0 shadow-md">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#0D2B4E] flex items-center justify-center shrink-0">
                    <Video className="h-6 w-6 text-[#D4A017]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#0D2B4E] mb-1">{video.title}</h3>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-[#1A7A4A]/10 text-[#1A7A4A] border-0 text-xs">{video.category}</Badge>
                      <span className="text-gray-400 text-xs">{video.duration}</span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#0D2B4E]/30 text-[#0D2B4E] shrink-0"
                    onClick={() => toast.info("Video library coming soon!")}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-[#0D2B4E] text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-[#F8F7F4] rounded-xl border-0 px-6">
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
