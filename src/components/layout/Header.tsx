import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bookmark, Menu } from 'lucide-react';
import { AnnouncementBar } from './AnnouncementBar';
import { MobileNavigation } from './MobileNavigation';
import { SearchOverlay } from './SearchOverlay';
import { BookmarksDrawer } from './BookmarksDrawer';
import { useBookmarks } from '../../hooks/useBookmarks';

interface HeaderProps {
  progress?: number; // 0-100 reading progress if on article page
}

export const Header: React.FC<HeaderProps> = ({ progress }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);

  const location = useLocation();
  const { count: bookmarksCount } = useBookmarks();

  const currentCategory = new URLSearchParams(location.search).get('category');
  const isExplore = location.pathname === '/explore';

  const navLinks = [
    { label: 'Home', to: '/', active: location.pathname === '/' },
    {
      label: 'Explore',
      to: '/explore',
      active: isExplore && (!currentCategory || currentCategory === 'all'),
    },
    {
      label: 'Health & Wellness',
      to: '/explore?category=health',
      active: isExplore && currentCategory === 'health',
    },
    {
      label: 'Finance',
      to: '/explore?category=finance',
      active: isExplore && currentCategory === 'finance',
    },
    {
      label: 'Family',
      to: '/explore?category=family',
      active: isExplore && currentCategory === 'family',
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#E8E5DD] transition-all">
        <AnnouncementBar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Left: Mobile Menu Trigger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 text-[#234B3B] hover:text-[#191D17] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8BA58D] rounded"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Brand Logo */}
            <div className="flex-1 lg:flex-none text-center lg:text-left">
              <Link to="/" className="inline-block group focus:outline-none">
                <span className="block font-serif text-2xl sm:text-3xl lg:text-[32px] tracking-[0.04em] font-medium text-[#234B3B] group-hover:text-[#1B3B2E] transition-colors leading-none">
                  KENTI’S CORNER
                </span>
                <span className="block text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-semibold text-[#74776F] mt-1.5 group-hover:text-[#8BA58D] transition-colors">
                  Living Your Best Life
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-sm font-medium tracking-wide transition-all relative py-1 ${
                    link.active
                      ? 'text-[#234B3B] font-semibold'
                      : 'text-[#434842] hover:text-[#234B3B]'
                  }`}
                >
                  {link.label}
                  {link.active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8BA58D] rounded-full animate-in fade-in duration-150" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Controls: Search & Saved Articles */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 sm:px-3 sm:py-2 text-[#434842] hover:text-[#234B3B] hover:bg-[#8BA58D]/10 rounded flex items-center gap-2 text-xs font-semibold tracking-wider uppercase transition-colors"
                aria-label="Search articles"
                title="Search articles"
              >
                <Search className="w-4 h-4 text-[#234B3B]" />
                <span className="hidden sm:inline">Search</span>
              </button>

              <button
                onClick={() => setIsBookmarksOpen(true)}
                className="relative p-2 sm:px-3 sm:py-2 text-[#434842] hover:text-[#234B3B] hover:bg-[#8BA58D]/10 rounded flex items-center gap-2 text-xs font-semibold tracking-wider uppercase transition-colors"
                aria-label={`View saved articles (${bookmarksCount} saved)`}
                title="View saved articles"
              >
                <Bookmark className="w-4 h-4 text-[#234B3B]" />
                <span className="hidden sm:inline">Saved</span>
                {bookmarksCount > 0 && (
                  <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white bg-[#234B3B] rounded-full">
                    {bookmarksCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Discreet 2px Reading Progress Indicator (Only rendered when progress is provided) */}
        {typeof progress === 'number' && (
          <div className="w-full h-[2px] bg-[#E8E5DD]/50 overflow-hidden">
            <div
              className="h-full bg-[#8BA58D] transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        )}
      </header>

      {/* Global Overlays */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        bookmarksCount={bookmarksCount}
      />

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
      />
    </>
  );
};
