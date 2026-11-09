import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export type DialogContentType =
  | 'story'
  | 'values'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'disclaimer'
  | null;

interface InfoDialogProps {
  type: DialogContentType;
  onClose: () => void;
}

export const InfoDialog: React.FC<InfoDialogProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const contentMap: Record<
    NonNullable<DialogContentType>,
    { title: string; subtitle: string; body: React.ReactNode }
  > = {
    story: {
      title: 'Our Story',
      subtitle: 'The genesis of an intentional sanctuary',
      body: (
        <div className="space-y-4 text-[#434842] leading-relaxed">
          <p>
            Kenti’s Corner was born from a simple realization: in an era of relentless algorithmic
            acceleration, our minds, wallets, and families are constantly hurried. We found ourselves
            surrounded by publications offering extreme productivity hacks, get-rich-quick gambles,
            and prescriptive lifestyle dogma.
          </p>
          <p>
            We created Kenti’s Corner as an antidote—a calm editorial haven centered on the timeless art
            of living your best life. Drawing inspiration from independent print periodicals like{' '}
            <em>Kinfolk</em> and <em>Cereal</em>, we celebrate quiet progress, intentional daily rituals,
            responsible financial discipline, and joyful family kinship.
          </p>
          <p>
            Here, living well is not an elite luxury or a state of pristine perfection. It is a series of
            quiet, loving choices made day by day.
          </p>
        </div>
      ),
    },
    values: {
      title: 'Editorial Values',
      subtitle: 'Guiding principles behind every written word',
      body: (
        <div className="space-y-4 text-[#434842] leading-relaxed">
          <div>
            <h4 className="font-serif font-semibold text-[#191D17] text-lg">1. Intentionality & Truth</h4>
            <p className="text-sm mt-1">
              Every story must offer actionable, authentic value. We do not publish clickbait, fear-driven
              headlines, or unsubstantiated wellness trends.
            </p>
          </div>
          <div>
            <h4 className="font-serif font-semibold text-[#191D17] text-lg">2. Inclusivity & Dignity</h4>
            <p className="text-sm mt-1">
              We respect diverse backgrounds, cultural traditions, and family architectures. Our financial
              guidance addresses realistic economies—from Lagos and London to Toronto and Nairobi.
            </p>
          </div>
          <div>
            <h4 className="font-serif font-semibold text-[#191D17] text-lg">3. Sustainable Permanence</h4>
            <p className="text-sm mt-1">
              We favor timeless habits over seasonal fads. Our articles are written to be as resonant five
              years from now as they are this morning.
            </p>
          </div>
        </div>
      ),
    },
    contact: {
      title: 'Contact the Editorial Desk',
      subtitle: 'Letters to the editor, inquiries, and reader contributions',
      body: (
        <div className="space-y-4 text-[#434842] leading-relaxed">
          <p>
            We welcome letters from our readers, thoughtful editorial suggestions, and inquiries.
            Our team reads every dispatch with care.
          </p>
          <div className="p-4 bg-[#F8FAF0] rounded border border-[#E8E5DD] space-y-2">
            <p className="text-sm">
              <span className="font-semibold text-[#191D17]">Editorial Inquiries:</span>{' '}
              <a
                href="mailto:editorial@kentiscorner.com"
                className="text-[#234B3B] underline underline-offset-4 hover:text-[#1B3B2E]"
              >
                editorial@kentiscorner.com
              </a>
            </p>
            <p className="text-sm">
              <span className="font-semibold text-[#191D17]">General Correspondence:</span>{' '}
              <a
                href="mailto:hello@kentiscorner.com"
                className="text-[#234B3B] underline underline-offset-4 hover:text-[#1B3B2E]"
              >
                hello@kentiscorner.com
              </a>
            </p>
            <p className="text-xs text-[#74776F] mt-2">
              Desk hours: Monday – Friday, 9:00 AM – 5:00 PM (GMT+1).
            </p>
          </div>
        </div>
      ),
    },
    privacy: {
      title: 'Privacy Notice',
      subtitle: 'Your privacy is paramount and respected',
      body: (
        <div className="space-y-4 text-[#434842] leading-relaxed text-sm">
          <p>
            Last updated: October 2026.
          </p>
          <p>
            Kenti’s Corner operates as a privacy-respecting client publication. We do not track your
            personal data across third-party networks, sell your reading history, or monetize your
            identity.
          </p>
          <p>
            <strong>Local Storage:</strong> Your saved bookmarks are stored exclusively within your own
            browser’s local storage on your device. They never leave your machine and can be cleared at
            any time by emptying your browser cache or removing individual bookmarks.
          </p>
          <p>
            We do not use surveillance trackers, tracking pixels, or intrusive marketing cookies.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Terms of Use',
      subtitle: 'Standards for enjoying our publication',
      body: (
        <div className="space-y-4 text-[#434842] leading-relaxed text-sm">
          <p>
            By reading and sharing content from Kenti’s Corner, you agree to treat the community and
            content with respect.
          </p>
          <p>
            All original essays, photographs, and layout designs published on Kenti’s Corner are protected
            by international copyright law. You may quote short passages with explicit editorial attribution
            and direct links back to the original article slug.
          </p>
          <p>
            Reproduction of full articles without prior written permission is strictly prohibited.
          </p>
        </div>
      ),
    },
    disclaimer: {
      title: 'Editorial Disclaimer',
      subtitle: 'Important disclosures regarding our content',
      body: (
        <div className="space-y-4 text-[#434842] leading-relaxed text-sm">
          <div className="p-3 bg-[#FAF8F3] border-l-2 border-[#8BA58D]">
            <strong className="text-[#234B3B] block mb-1">Health & Wellness:</strong>
            Content on Kenti’s Corner is for general educational and informational purposes only. It is
            not a substitute for professional medical advice, diagnosis, or treatment. Always seek the
            guidance of a qualified physician with any questions regarding a medical condition.
          </div>
          <div className="p-3 bg-[#FAF8F3] border-l-2 border-[#D9C5A1]">
            <strong className="text-[#594928] block mb-1">Finance & Wealth:</strong>
            Financial content is provided for educational purposes only and does not constitute
            personalized financial, investment, tax, or legal advice. Consult a certified financial
            planner or licensed advisor before making significant financial commitments.
          </div>
          <div className="p-3 bg-[#FAF8F3] border-l-2 border-[#D18672]">
            <strong className="text-[#6E392B] block mb-1">Family & Relationships:</strong>
            Family and relationship articles provide general educational perspectives and should not
            replace licensed counseling or professional family therapy where needed.
          </div>
        </div>
      ),
    },
  };

  const item = contentMap[type];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#191D17]/50 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-dialog-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-lg border border-[#E8E5DD] shadow-xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#74776F] hover:text-[#191D17] hover:bg-[#FAF8F3] rounded transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 pr-6">
          <h3 id="info-dialog-title" className="font-serif text-2xl sm:text-3xl font-medium text-[#191D17]">
            {item.title}
          </h3>
          <p className="text-sm text-[#74776F] mt-1">{item.subtitle}</p>
          <div className="w-12 h-0.5 bg-[#8BA58D] mt-3" />
        </div>

        <div className="prose prose-stone text-sm">{item.body}</div>

        <div className="mt-8 pt-4 border-t border-[#E8E5DD] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#234B3B] text-white rounded hover:bg-[#1B3B2E] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
