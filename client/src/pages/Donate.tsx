/**
 * 7Band Inc. Donate Page
 * Design: Elevated Civic — Deep Navy, Emerald Green, Warm Gold
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Building2, Gift, RefreshCw, Users, BookOpen, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const amounts = [25, 50, 100, 250, 500, 1000];

const impactItems = [
  { amount: "$25", impact: "Provides one participant with workshop materials for a full program session" },
  { amount: "$50", impact: "Covers the cost of one youth participant's full semester in our Youth Program" },
  { amount: "$100", impact: "Funds a community workshop for up to 20 participants" },
  { amount: "$250", impact: "Provides technology access for one Digital Learning participant for a full program" },
  { amount: "$500", impact: "Sponsors one entrepreneur through our full 12-week Entrepreneurship program" },
  { amount: "$1,000", impact: "Funds an entire Financial Literacy cohort session for 20 community members" },
];

const waysToGive = [
  { icon: Heart, title: "One-Time Gift", desc: "Make a single donation of any amount to support our programs and community impact." },
  { icon: RefreshCw, title: "Monthly Giving", desc: "Become a sustaining donor with a recurring monthly gift that provides reliable support." },
  { icon: Building2, title: "Corporate Sponsorship", desc: "Partner with us as a corporate sponsor and demonstrate your commitment to community." },
  { icon: Gift, title: "Employer Matching", desc: "Double your impact — check if your employer matches charitable contributions." },
  { icon: Users, title: "In-Kind Donations", desc: "Donate goods, services, or expertise that directly support our programs." },
  { icon: BookOpen, title: "Planned Giving", desc: "Include 7Band Inc. in your estate plans to create a lasting legacy of impact." },
];

export default function Donate() {
  const [selected, setSelected] = useState<number | null>(100);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");

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
              Support Our Mission
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Invest in Community Change
            </h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Your donation directly funds programs that transform lives and strengthen our community. Every dollar makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-black text-[#0D2B4E] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Make Your Gift
              </h2>

              {/* Frequency Toggle */}
              <div className="flex gap-2 mb-6">
                {(["one-time", "monthly"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFrequency(f)}
                    className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-colors ${
                      frequency === f
                        ? "bg-[#0D2B4E] text-white"
                        : "bg-[#F8F7F4] text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {f === "one-time" ? "One-Time Gift" : "Monthly Giving"}
                  </button>
                ))}
              </div>

              {/* Amount Selection */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => { setSelected(amount); setCustom(""); }}
                    className={`py-3 rounded-xl font-bold text-sm transition-colors ${
                      selected === amount && !custom
                        ? "bg-[#D4A017] text-[#0D2B4E]"
                        : "bg-[#F8F7F4] text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={custom}
                    onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D2B4E] transition-colors"
                  />
                </div>
              </div>

              {/* Donor Info */}
              <div className="space-y-3 mb-6">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input placeholder="First Name" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D2B4E] transition-colors" />
                  <input placeholder="Last Name" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D2B4E] transition-colors" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D2B4E] transition-colors" />
              </div>

              <Button
                size="lg"
                className="w-full bg-[#D4A017] text-[#0D2B4E] hover:bg-[#e8b420] font-bold text-base"
                onClick={() => toast.success("Thank you for your generosity! You'll be redirected to our secure payment processor.")}
              >
                <Heart className="mr-2 h-5 w-5" />
                Donate {frequency === "monthly" ? "Monthly" : ""} {custom ? `$${custom}` : selected ? `$${selected}` : ""}
              </Button>
              <p className="text-gray-500 text-xs text-center mt-3">
                7Band Inc. is a 501(c)(3) nonprofit. Your donation may be tax-deductible.
              </p>
            </div>

            {/* Impact */}
            <div>
              <h2 className="text-3xl font-black text-[#0D2B4E] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Your Impact
              </h2>
              <div className="space-y-3">
                {impactItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-[#F8F7F4] rounded-xl">
                    <div className="font-black text-[#D4A017] text-lg w-16 shrink-0">{item.amount}</div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#1A7A4A] shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm">{item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-20 bg-[#F8F7F4]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-[#0D2B4E]" style={{ fontFamily: "'Playfair Display', serif" }}>
              More Ways to Give
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">There are many ways to support 7Band Inc. and our community mission.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waysToGive.map((way, i) => (
              <Card key={i} className="card-lift border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0D2B4E]/10 flex items-center justify-center mb-4">
                    <way.icon className="h-6 w-6 text-[#0D2B4E]" />
                  </div>
                  <h3 className="font-bold text-[#0D2B4E] text-lg mb-2">{way.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{way.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
