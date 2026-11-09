import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Heart, Instagram, Facebook, Compass } from 'lucide-react';
import { InfoDialog, DialogContentType } from '../common/InfoDialog';

export const Footer: React.FC = () => {
  const [activeDialog, setActiveDialog] = useState<DialogContentType>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#EDF0E7] border-t border-[#E8E5DD] mt-24 text-[#434842]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
            {/* Col 1 & 2: Brand Information */}
            <div className="lg:col-span-2 space-y-4 pr-4">
              <Link to="/" className="inline-block group focus:outline-none">
                <span className="block font-serif text-2xl sm:text-3xl tracking-wide font-medium text-[#234B3B] group-hover:text-[#1B3B2E] transition-colors">
                  KENTI’S CORNER
                </span>
                <span className="block text-[11px] tracking-[0.2em] uppercase font-semibold text-[#74776F] mt-1">
                  Living Your Best Life
                </span>
              </Link>
              <p className="text-sm text-[#434842] leading-relaxed max-w-sm">
                A contemplative, tactile editorial publication cultivating health & wellness, sustainable
                wealth, and meaningful family kinship.
              </p>
              <div className="pt-2 flex items-center gap-3 text-[#234B3B]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram (Opens in new tab)"
                  className="p-2 rounded bg-white/70 hover:bg-white text-[#234B3B] border border-[#E8E5DD] hover:border-[#8BA58D] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook (Opens in new tab)"
                  className="p-2 rounded bg-white/70 hover:bg-white text-[#234B3B] border border-[#E8E5DD] hover:border-[#8BA58D] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest (Opens in new tab)"
                  className="p-2 rounded bg-white/70 hover:bg-white text-[#234B3B] border border-[#E8E5DD] hover:border-[#8BA58D] transition-colors"
                >
                  <Compass className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 3: Explore Pillars */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-[#191D17]">
                Explore
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-[#234B3B] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/explore" className="hover:text-[#234B3B] transition-colors">
                    All Articles
                  </Link>
                </li>
                <li>
                  <Link to="/explore?category=health" className="hover:text-[#234B3B] transition-colors">
                    Health & Wellness
                  </Link>
                </li>
                <li>
                  <Link to="/explore?category=finance" className="hover:text-[#234B3B] transition-colors">
                    Finance & Wealth
                  </Link>
                </li>
                <li>
                  <Link to="/explore?category=family" className="hover:text-[#234B3B] transition-colors">
                    Family & Kinship
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: About & Desk */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-[#191D17]">
                About
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => setActiveDialog('story')}
                    className="hover:text-[#234B3B] transition-colors text-left"
                  >
                    Our Story
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveDialog('values')}
                    className="hover:text-[#234B3B] transition-colors text-left"
                  >
                    Editorial Values
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveDialog('contact')}
                    className="hover:text-[#234B3B] transition-colors text-left"
                  >
                    Contact Editorial
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 5: Legal & Disclosures */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-[#191D17]">
                Legal & Ethics
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => setActiveDialog('privacy')}
                    className="hover:text-[#234B3B] transition-colors text-left"
                  >
                    Privacy Notice
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveDialog('terms')}
                    className="hover:text-[#234B3B] transition-colors text-left"
                  >
                    Terms of Use
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveDialog('disclaimer')}
                    className="hover:text-[#234B3B] transition-colors text-left"
                  >
                    Editorial Disclaimer
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Hairline and Sub-footer */}
          <div className="pt-8 border-t border-[#E8E5DD] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#74776F]">
            <p className="flex items-center gap-1.5 text-center sm:text-left">
              <span>© 2026 Kenti’s Corner. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Crafted with <Heart className="w-3 h-3 text-[#8BA58D] inline fill-[#8BA58D]" /> for intentional living
              </span>
            </p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[#E8E5DD] bg-white text-[#234B3B] hover:bg-[#8BA58D]/10 text-xs font-medium transition-colors"
              aria-label="Scroll back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Accessible Dialog */}
      <InfoDialog type={activeDialog} onClose={() => setActiveDialog(null)} />
    </>
  );
};
