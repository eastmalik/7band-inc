/**
 * 7Band Inc. Footer
 * Design: Deep Navy background, organized columns, gold accents
 */
import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  organization: [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Financial Transparency", href: "/about#transparency" },
    { label: "Annual Reports", href: "/about#reports" },
  ],
  programs: [
    { label: "Financial Literacy", href: "/programs/financial-literacy" },
    { label: "The Smart Beauty Project", href: "https://smartbeauty-essknvt9.manus.space/" },
],
  getInvolved: [
    { label: "Donate", href: "/donate" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Become a Partner", href: "/partners#become" },
    { label: "Events", href: "/events" },
    { label: "Resources", href: "/resources" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0D2B4E] text-white">
      {/* Main Footer */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
             <img
                src="/manus-storage/logo-7band_52529872.png"
                alt="7Band Inc."
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                7Band Inc.
              </span>
            </div>
            <div className="band-stripe mb-4">
              {[28, 20, 16, 24, 12, 18, 22].map((w, i) => (
                <span key={i} style={{ width: `${w}px` }} />
              ))}
            </div>
           <p className="text-white/70 text-sm leading-relaxed mb-6">
              Building futures through financial literacy, consumer education, and community empowerment.
           </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4A017] flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Organization */}
          <div>
            <h4 className="font-semibold text-[#D4A017] uppercase tracking-wider text-xs mb-4">
              Organization
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.organization.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-[#D4A017] uppercase tracking-wider text-xs mb-4">
              Programs
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved + Contact */}
          <div>
            <h4 className="font-semibold text-[#D4A017] uppercase tracking-wider text-xs mb-4">
              Get Involved
            </h4>
            <ul className="space-y-2.5 mb-6">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-[#D4A017] uppercase tracking-wider text-xs mb-3">
              Contact
            </h4>
            <div className="space-y-2">
              <a href="mailto:info@7bandinc.org" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                info@7bandinc.org
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                <Phone className="h-3.5 w-3.5 shrink-0" />
                (123) 456-7890
              </a>
              <div className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                <span>Community Center, Your City, ST 00000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>© {new Date().getFullYear()} 7Band Inc. All rights reserved. 501(c)(3) Nonprofit Organization.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
