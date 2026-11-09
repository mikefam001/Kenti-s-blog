import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

interface ShareControlsProps {
  title: string;
  excerpt: string;
  url?: string;
  className?: string;
}

export const ShareControls: React.FC<ShareControlsProps> = ({
  title,
  excerpt,
  url,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: excerpt,
          url: shareUrl,
        });
        return;
      } catch (err) {
        // User aborted share or share cancelled; fallback to copy
        if ((err as Error).name === 'AbortError') return;
      }
    }

    // Fallback: Copy link to clipboard
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setFeedback('Link copied to clipboard');
      setTimeout(() => {
        setCopied(false);
        setFeedback(null);
      }, 2500);
    } catch {
      setFeedback('Unable to copy automatically. Please copy page URL.');
      setTimeout(() => setFeedback(null), 3000);
    }
  };

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider border border-[#E8E5DD] bg-white text-[#234B3B] hover:bg-[#FAF8F3] rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8BA58D] cursor-pointer"
        aria-label="Share article"
        title="Share article or copy link"
      >
        {copied ? (
          <Check className="w-4 h-4 text-[#4C644F]" />
        ) : (
          <Share2 className="w-4 h-4 text-[#234B3B]" />
        )}
        <span>{copied ? 'Link Copied' : 'Share Story'}</span>
      </button>

      {/* Accessible Feedback Toast */}
      {feedback && (
        <span
          role="status"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#191D17] text-white text-[11px] font-medium rounded whitespace-nowrap shadow-md animate-in fade-in zoom-in-95 duration-150 z-30 pointer-events-none"
        >
          {feedback}
        </span>
      )}
    </div>
  );
};
