/**
 * 7Band Inc. Navbar
 * Design: Elevated Civic — Deep Navy (#0D2B4E), Gold accents, Playfair Display headings
 * Behavior: Transparent over hero, transitions to solid navy on scroll
 * Mobile: Hamburger menu with full-screen drawer
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Financial Literacy", href: "/programs/financial-literacy" },
      { label: "The Smart Beauty Project", href: "https://smartbeauty-essknvt9.manus.space/" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Services", href: "/services" },
  { label: "Partners", href: "/partners" },
  { label: "Resources", href: "/resources" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = isHome && !scrolled
    ? "bg-transparent"
    : "bg-[#0D2B4E] shadow-lg shadow-[#0D2B4E]/20";
  const textColor = "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
       <Link href="/" className="flex items-center gap-3 group">
          <div>
            <span
              className={`font-bold text-xl tracking-tight ${textColor}`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              7Band Inc.
            </span>
            <div className="band-stripe mt-0.5">
              {[28, 20, 16, 24, 12, 18, 22].map((w, i) => (
                <span key={i} style={{ width: `${w}px` }} />
              ))}
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${textColor} hover:text-[#D4A017]`}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="bg-[#0D2B4E] border-[#1a3f6f] min-w-[200px]"
                >
                  {link.children.map((child) => (
                    <DropdownMenuItem key={child.href} asChild>
                      <Link
                        href={child.href}
                        className="text-white hover:text-[#D4A017] hover:bg-[#1a3f6f] cursor-pointer"
                      >
                        {child.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${textColor} hover:text-[#D4A017]`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/volunteer">
            <Button
              variant="outline"
              className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white text-sm"
            >
              Volunteer
            </Button>
          </Link>
          <Link href="/donate">
            <Button
              className="bg-[#D4A017] text-[#0D2B4E] hover:bg-[#e8b420] font-semibold text-sm"
            >
              Donate
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button className={`p-2 rounded-md ${textColor}`} aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0D2B4E] border-[#1a3f6f] w-80 p-0">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-[#1a3f6f]">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                  7Band Inc.
                </span>
                <button onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-6 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 text-white hover:text-[#D4A017] font-medium rounded-md hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-white/70 hover:text-[#D4A017] text-sm rounded-md hover:bg-white/5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="p-6 border-t border-[#1a3f6f] space-y-3">
                <Link href="/volunteer" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full border-white/30 text-white bg-transparent hover:bg-white/10">
                    Volunteer
                  </Button>
                </Link>
                <Link href="/donate" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-[#D4A017] text-[#0D2B4E] hover:bg-[#e8b420] font-semibold">
                    Donate Now
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
