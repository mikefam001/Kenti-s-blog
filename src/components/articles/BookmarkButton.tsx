import React, { useState } from 'react';
import { Bookmark } from 'lucide-react';
import { useBookmarks } from '../../hooks/useBookmarks';

interface BookmarkButtonProps {
  slug: string;
  title?: string;
  variant?: 'icon' | 'labeled';
  className?: string;
}

export const BookmarkButton: React.FC<BookmarkButtonProps> = ({
  slug,
  title,
  variant = 'icon',
  className = '',
}) => {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(slug);
  const [toast, setToast] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const added = toggleBookmark(slug);
    setToast(added ? 'Saved to your reading list' : 'Removed from saved reading list');
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        onClick={handleClick}
        className={`inline-flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8BA58D] rounded cursor-pointer ${
          variant === 'icon'
            ? 'p-2 text-[#74776F] hover:text-[#234B3B] hover:bg-[#8BA58D]/15'
            : 'px-3.5 py-2 text-xs font-semibold uppercase tracking-wider gap-2 border border-[#E8E5DD] bg-white text-[#234B3B] hover:bg-[#FAF8F3]'
        } ${className}`}
        aria-label={bookmarked ? `Remove ${title || 'article'} from bookmarks` : `Save ${title || 'article'} to bookmarks`}
        title={bookmarked ? 'Saved to your reading list' : 'Save article'}
      >
        <Bookmark
          className={`w-4 h-4 transition-transform duration-200 ${
            bookmarked
              ? 'fill-[#234B3B] text-[#234B3B] scale-110'
              : 'text-[#434842] group-hover:text-[#234B3B]'
          }`}
        />
        {variant === 'labeled' && (
          <span>{bookmarked ? 'Saved in Library' : 'Save for Later'}</span>
        )}
      </button>

      {/* Micro-toast feedback */}
      {toast && (
        <span
          role="status"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#191D17] text-white text-[11px] font-medium rounded whitespace-nowrap shadow-md animate-in fade-in zoom-in-95 duration-150 z-30 pointer-events-none"
        >
          {toast}
        </span>
      )}
    </div>
  );
};
