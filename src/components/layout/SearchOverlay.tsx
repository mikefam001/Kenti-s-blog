import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, BookOpen } from 'lucide-react';
import { searchArticles } from '../../data/articles';
import { CategoryBadge } from '../articles/CategoryBadge';
import { formatReadingTime } from '../../utils/format';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim() ? searchArticles(query) : [];

  const handleSelectArticle = (slug: string) => {
    onClose();
    navigate(`/article/${slug}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-[#191D17]/60 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-label="Search articles"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-lg border border-[#E8E5DD] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="flex items-center px-5 py-4 border-b border-[#E8E5DD] gap-3 bg-[#FAF8F3]/60">
          <Search className="w-5 h-5 text-[#8BA58D] shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search health, wealth, family, habits, budgeting..."
            className="w-full bg-transparent text-[#191D17] placeholder-[#74776F] text-base sm:text-lg focus:outline-none"
            aria-label="Search articles"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#74776F] hover:text-[#191D17] rounded-full hover:bg-[#E8E5DD]/50"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-[#74776F] hover:text-[#191D17] rounded hover:bg-[#E8E5DD]/50 ml-1 text-xs uppercase font-semibold tracking-wider"
            aria-label="Close search modal"
          >
            Esc
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 divide-y divide-[#E8E5DD]/60">
          {!query.trim() ? (
            <div className="py-8 text-center text-[#74776F]">
              <BookOpen className="w-8 h-8 mx-auto text-[#8BA58D] mb-3 opacity-60" />
              <p className="text-sm font-medium">Type keywords above to discover curated essays</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4 max-w-md mx-auto">
                {['Morning Habits', '50/30/20 Budget', 'Rest & Sleep', 'Family Communication', 'Investing'].map(
                  (suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setQuery(suggestion)}
                      className="px-2.5 py-1 text-xs bg-[#F8FAF0] text-[#234B3B] hover:bg-[#8BA58D]/20 rounded border border-[#E8E5DD] transition-colors"
                    >
                      {suggestion}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-[#74776F]">
              <p className="font-serif text-lg text-[#191D17] mb-1">No articles found</p>
              <p className="text-xs text-[#74776F]">
                We couldn't find matches for &ldquo;{query}&rdquo;. Try broader terms like &ldquo;wellness&rdquo;, &ldquo;money&rdquo;, or &ldquo;family&rdquo;.
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wider text-[#74776F] font-semibold px-2 pb-2">
                Found {results.length} article{results.length === 1 ? '' : 's'}
              </p>
              {results.map((article) => (
                <div
                  key={article.id}
                  onClick={() => handleSelectArticle(article.slug)}
                  className="group flex items-start gap-4 p-3 rounded-lg hover:bg-[#FAF8F3] transition-colors cursor-pointer"
                >
                  <img
                    src={article.coverImage}
                    alt=""
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded shrink-0 border border-[#E8E5DD]"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <CategoryBadge category={article.category} size="sm" />
                      <span className="text-[11px] text-[#74776F]">
                        {formatReadingTime(article.readingTime)}
                      </span>
                    </div>
                    <h4 className="font-serif text-base sm:text-lg font-medium text-[#191D17] group-hover:text-[#234B3B] transition-colors truncate">
                      {article.title}
                    </h4>
                    <p className="text-xs text-[#74776F] line-clamp-2 mt-0.5 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#74776F] group-hover:text-[#234B3B] group-hover:translate-x-1 transition-transform shrink-0 self-center opacity-0 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 bg-[#F8FAF0] border-t border-[#E8E5DD] flex items-center justify-between text-[11px] text-[#74776F]">
          <span>Tip: Press ESC to exit</span>
          <span>Kenti’s Corner Editorial Index</span>
        </div>
      </div>
    </div>
  );
};
