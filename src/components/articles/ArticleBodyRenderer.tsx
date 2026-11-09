import React from 'react';
import { ArticleBlock } from '../../types';
import { Quote, Lightbulb } from 'lucide-react';

interface ArticleBodyRendererProps {
  blocks: ArticleBlock[];
}

export const ArticleBodyRenderer: React.FC<ArticleBodyRendererProps> = ({ blocks }) => {
  let hasRenderedFirstParagraph = false;

  return (
    <div className="space-y-7 text-[#252923] text-base sm:text-lg leading-[1.75] font-sans">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'paragraph': {
            const isFirst = !hasRenderedFirstParagraph;
            hasRenderedFirstParagraph = true;

            return (
              <p
                key={index}
                className={`text-[#252923] ${
                  isFirst ? 'drop-cap font-normal text-lg sm:text-[19px]' : ''
                }`}
              >
                {block.text}
              </p>
            );
          }

          case 'heading': {
            if (block.level === 2) {
              return (
                <div key={index} className="pt-6 pb-1">
                  <h2
                    id={block.id}
                    className="font-serif text-2xl sm:text-3xl font-medium text-[#191D17] tracking-tight scroll-mt-28"
                  >
                    {block.text}
                  </h2>
                  <div className="w-10 h-0.5 bg-[#8BA58D] mt-2.5" />
                </div>
              );
            }
            return (
              <h3
                key={index}
                id={block.id}
                className="font-serif text-xl sm:text-2xl font-medium text-[#191D17] pt-4 pb-1 scroll-mt-28"
              >
                {block.text}
              </h3>
            );
          }

          case 'list': {
            const ListTag = block.ordered ? 'ol' : 'ul';
            return (
              <ListTag
                key={index}
                className={`my-4 pl-6 space-y-2.5 text-[#374136] text-base sm:text-[17px] ${
                  block.ordered
                    ? 'list-decimal marker:text-[#234B3B] marker:font-semibold'
                    : 'list-disc marker:text-[#8BA58D]'
                }`}
              >
                {block.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="leading-relaxed pl-1">
                    {item}
                  </li>
                ))}
              </ListTag>
            );
          }

          case 'quote': {
            return (
              <figure
                key={index}
                className="my-8 py-6 px-6 sm:px-8 border-y border-[#D9C5A1] bg-[#FAF8F3]/70 relative"
              >
                <Quote className="w-8 h-8 text-[#D9C5A1] mb-2 opacity-70" />
                <blockquote className="font-serif italic text-xl sm:text-2xl text-[#191D17] leading-relaxed">
                  &ldquo;{block.text}&rdquo;
                </blockquote>
                {block.attribution && (
                  <figcaption className="mt-3 text-xs sm:text-sm font-sans uppercase tracking-wider text-[#74776F] font-semibold">
                    — {block.attribution}
                  </figcaption>
                )}
              </figure>
            );
          }

          case 'callout': {
            return (
              <aside
                key={index}
                className="my-8 p-5 sm:p-6 rounded-lg bg-[#F8FAF0] border border-[#E8E5DD] shadow-xs relative"
                aria-label="Editorial Note"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-white border border-[#E8E5DD] text-[#234B3B] shrink-0 mt-0.5">
                    <Lightbulb className="w-4 h-4 text-[#8BA58D]" />
                  </div>
                  <div className="flex-1">
                    {block.title && (
                      <h4 className="font-serif text-base sm:text-lg font-semibold text-[#191D17] mb-1.5">
                        {block.title}
                      </h4>
                    )}
                    <div className="text-sm sm:text-base text-[#434842] leading-relaxed whitespace-pre-line">
                      {block.text}
                    </div>
                  </div>
                </div>
              </aside>
            );
          }

          case 'image': {
            return (
              <figure key={index} className="my-8">
                <img
                  src={block.src}
                  alt={block.alt}
                  className="w-full rounded-lg object-cover max-h-[500px] border border-[#E8E5DD]"
                  loading="lazy"
                />
                {block.caption && (
                  <figcaption className="mt-2 text-center text-xs text-[#74776F] italic">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
};
