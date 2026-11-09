import React, { useState, useEffect } from 'react';
import { ListCollapse, ChevronDown } from 'lucide-react';
import { ArticleBlock } from '../../types';

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  blocks: ArticleBlock[];
  className?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ blocks, className = '' }) => {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(true);

  const headings: HeadingItem[] = blocks
    .filter((b): b is Extract<ArticleBlock, { type: 'heading' }> => b.type === 'heading')
    .map((h) => ({ id: h.id, text: h.text, level: h.level }));

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0% -60% 0%', threshold: 0.1 }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const scrollToHeading = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <nav
      aria-label="Table of Contents"
      className={`bg-white rounded-lg border border-[#E8E5DD] p-5 shadow-xs ${className}`}
    >
      <div
        className="flex items-center justify-between cursor-pointer sm:cursor-default"
        onClick={() => setIsOpenMobile(!isOpenMobile)}
      >
        <div className="flex items-center gap-2 text-[#234B3B]">
          <ListCollapse className="w-4 h-4 text-[#8BA58D]" />
          <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-[#191D17]">
            Table of Contents
          </h3>
        </div>
        <button
          className="sm:hidden p-1 text-[#74776F] hover:text-[#191D17]"
          aria-label={isOpenMobile ? 'Collapse table of contents' : 'Expand table of contents'}
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isOpenMobile ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <div className={`mt-3 pt-3 border-t border-[#E8E5DD] ${isOpenMobile ? 'block' : 'hidden sm:block'}`}>
        <ul className="space-y-2 text-xs sm:text-sm">
          {headings.map((h) => {
            const isActive = activeId === h.id;
            return (
              <li
                key={h.id}
                className={h.level === 3 ? 'pl-3' : ''}
              >
                <a
                  href={`#${h.id}`}
                  onClick={(e) => scrollToHeading(h.id, e)}
                  className={`block transition-colors py-0.5 leading-snug ${
                    isActive
                      ? 'text-[#234B3B] font-semibold pl-2 border-l-2 border-[#8BA58D]'
                      : 'text-[#434842] hover:text-[#234B3B]'
                  }`}
                >
                  {h.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
