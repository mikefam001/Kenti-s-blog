import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { X, Search, Bookmark, ChevronRight } from 'lucide-react';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  bookmarksCount: number;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  onOpenSearch,
  onOpenBookmarks,
  bookmarksCount,
}) => {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentCategory = new URLSearchParams(location.search).get('category');
  const isExplore = location.pathname === '/explore';

  const navItems = [
    { label: 'Home', to: '/', active: location.pathname === '/' },
    {
      label: 'Explore All',
      to: '/explore',
      active: isExplore && (!currentCategory || currentCategory === 'all'),
    },
    {
      label: 'Health & Wellness',
      to: '/explore?category=health',
      active: isExplore && currentCategory === 'health',
      badge: 'Sage',
    },
    {
      label: 'Finance',
      to: '/explore?category=finance',
      active: isExplore && currentCategory === 'finance',
      badge: 'Champagne',
    },
    {
      label: 'Family',
      to: '/explore?category=family',
      active: isExplore && currentCategory === 'family',
      badge: 'Terracotta',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex justify-start bg-[#191D17]/50 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      onClick={onClose}
    >
      <div
        className="relative w-4/5 max-w-sm h-full bg-[#FAF8F3] shadow-2xl border-r border-[#E8E5DD] flex flex-col p-6 animate-in slide-in-from-left duration-250"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E8E5DD]">
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-wider font-semibold text-[#234B3B]">
              KENTI’S CORNER
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#74776F]">
              Living Your Best Life
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#74776F] hover:text-[#191D17] hover:bg-[#E8E5DD]/50 rounded transition-colors"
            aria-label="Close navigation"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Action Controls */}
        <div className="grid grid-cols-2 gap-3 my-6">
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-white border border-[#E8E5DD] text-xs font-semibold text-[#234B3B] hover:bg-[#8BA58D]/10 transition-colors"
          >
            <Search className="w-4 h-4 text-[#8BA58D]" />
            <span>Search</span>
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenBookmarks();
            }}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-white border border-[#E8E5DD] text-xs font-semibold text-[#234B3B] hover:bg-[#8BA58D]/10 transition-colors relative"
          >
            <Bookmark className="w-4 h-4 text-[#234B3B]" />
            <span>Saved ({bookmarksCount})</span>
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={onClose}
              className={`flex items-center justify-between px-3.5 py-3 rounded text-sm font-medium transition-colors ${
                item.active
                  ? 'bg-[#234B3B] text-white'
                  : 'text-[#191D17] hover:bg-[#E8E5DD]/60 hover:text-[#234B3B]'
              }`}
            >
              <span>{item.label}</span>
              <ChevronRight
                className={`w-4 h-4 ${
                  item.active ? 'text-white/80' : 'text-[#74776F]'
                }`}
              />
            </NavLink>
          ))}
        </nav>

        {/* Bottom Editorial Note */}
        <div className="pt-6 border-t border-[#E8E5DD] text-center text-xs text-[#74776F]">
          <p className="font-serif italic text-sm text-[#234B3B] mb-1">
            &ldquo;Wellness, wealth and family — thoughtfully connected.&rdquo;
          </p>
          <p className="text-[11px] text-[#74776F]">© 2026 Kenti’s Corner</p>
        </div>
      </div>
    </div>
  );
};
