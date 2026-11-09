import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bookmark, X, ArrowRight, Trash2 } from 'lucide-react';
import { useBookmarks } from '../../hooks/useBookmarks';
import { ARTICLES } from '../../data/articles';
import { CategoryBadge } from '../articles/CategoryBadge';
import { formatReadingTime } from '../../utils/format';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({ isOpen, onClose }) => {
  const { bookmarks, removeBookmark } = useBookmarks();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
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

  const savedArticles = bookmarks
    .map((slug) => ARTICLES.find((a) => a.slug === slug))
    .filter((a): a is (typeof ARTICLES)[0] => a !== undefined);

  const handleOpenArticle = (slug: string) => {
    onClose();
    navigate(`/article/${slug}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#191D17]/50 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bookmarks-drawer-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md h-full bg-white shadow-2xl border-l border-[#E8E5DD] flex flex-col animate-in slide-in-from-right duration-250"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E5DD] bg-[#FAF8F3]">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-[#234B3B] fill-[#234B3B]" />
            <h3 id="bookmarks-drawer-title" className="font-serif text-xl font-medium text-[#191D17]">
              Saved Reading List
            </h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#8BA58D]/20 text-[#234B3B] font-semibold">
              {savedArticles.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#74776F] hover:text-[#191D17] hover:bg-[#E8E5DD]/50 rounded transition-colors"
            aria-label="Close saved articles list"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#E8E5DD]/60">
          {savedArticles.length === 0 ? (
            <div className="py-16 text-center text-[#74776F]">
              <div className="w-12 h-12 rounded-full bg-[#F8FAF0] flex items-center justify-center mx-auto mb-4 border border-[#E8E5DD]">
                <Bookmark className="w-5 h-5 text-[#8BA58D]" />
              </div>
              <p className="font-serif text-lg text-[#191D17] mb-1">Your library is currently quiet</p>
              <p className="text-xs text-[#74776F] max-w-xs mx-auto leading-relaxed">
                As you browse articles on Kenti’s Corner, click the bookmark icon on any card or story to
                preserve it here for future contemplation.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {savedArticles.map((article) => (
                <div
                  key={article.id}
                  className="group relative pt-4 first:pt-0 flex items-start gap-3"
                >
                  <img
                    src={article.coverImage}
                    alt=""
                    className="w-16 h-16 object-cover rounded shrink-0 border border-[#E8E5DD] cursor-pointer"
                    onClick={() => handleOpenArticle(article.slug)}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <CategoryBadge category={article.category} size="sm" />
                      <span className="text-[11px] text-[#74776F]">
                        {formatReadingTime(article.readingTime)}
                      </span>
                    </div>
                    <h4
                      onClick={() => handleOpenArticle(article.slug)}
                      className="font-serif text-sm font-medium text-[#191D17] group-hover:text-[#234B3B] transition-colors cursor-pointer line-clamp-2"
                    >
                      {article.title}
                    </h4>
                  </div>
                  <button
                    onClick={() => removeBookmark(article.slug)}
                    className="p-1.5 text-[#74776F] hover:text-[#BA1A1A] hover:bg-[#FFDAD6]/30 rounded transition-colors shrink-0"
                    title="Remove from saved list"
                    aria-label={`Remove ${article.title} from bookmarks`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-[#F8FAF0] border-t border-[#E8E5DD] text-center text-xs text-[#74776F]">
          <span>Saved locally on your browser. No login required.</span>
        </div>
      </div>
    </div>
  );
};
