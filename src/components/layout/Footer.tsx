import Link from 'next/link';
import { SITE_CONFIG } from '@/constants';
import { Facebook, Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-secondary p-1.5 rounded-lg">
                <div className="w-6 h-6 text-primary font-bold flex items-center justify-center">ISMT</div>
              </div>
              <span className="text-xl font-bold uppercase tracking-tight">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {SITE_CONFIG.description}. Empowering students to achieve academic excellence and professional success in the digital age.
            </p>
            <div className="flex gap-4">
              {Object.entries(SITE_CONFIG.socials).map(([platform, url]) => {
                const Icon = {
                  facebook: Facebook,
                  linkedin: Linkedin,
                  instagram: Instagram,
                  twitter: Twitter,
                }[platform as keyof typeof SITE_CONFIG.socials] || Twitter;
                return (
                  <a
                    key={platform}
                    href={url}
                    className="p-2 bg-primary-light rounded-full hover:bg-secondary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-secondary w-fit pb-1">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              {SITE_CONFIG.nav.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-secondary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-secondary w-fit pb-1">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>{SITE_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>{SITE_CONFIG.contact.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-secondary w-fit pb-1">Newsletter</h4>
            <p className="text-sm text-slate-300 mb-4">Stay updated with latest news and events.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-primary-light border border-primary-dark px-3 py-2 rounded-md text-sm w-full focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
              <button className="bg-secondary px-4 py-2 rounded-md text-sm font-semibold hover:bg-secondary-dark transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-light pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved. | Designed for Educational Purposes.</p>
        </div>
      </div>
    </footer>
  );
}
