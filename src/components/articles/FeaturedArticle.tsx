import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, Sparkles } from 'lucide-react';
import { Article } from '../../types';
import { AUTHORS } from '../../data/authors';
import { CategoryBadge } from './CategoryBadge';
import { BookmarkButton } from './BookmarkButton';
import { formatDate, formatReadingTime } from '../../utils/format';
import { Button } from '../common/Button';

interface FeaturedArticleProps {
  article: Article;
  badgeLabel?: string;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  article,
  badgeLabel = 'Editor’s Pick',
}) => {
  const [imgError, setImgError] = useState(false);
  const author = AUTHORS[article.authorId] || AUTHORS.kenti;

  return (
    <section className="relative bg-white rounded-lg border border-[#E8E5DD] overflow-hidden shadow-xs hover:border-[#8BA58D] transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left / Top: Media Banner (7 cols on desktop) */}
        <div className="relative lg:col-span-7 aspect-[16/10] lg:aspect-auto min-h-[280px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden bg-[#FAF8F3]">
          {!imgError ? (
            <img
              src={article.coverImage}
              alt={article.coverImageAlt || article.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="eager"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#EDF0E7] text-[#74776F] p-8 text-center">
              <span className="font-serif italic text-lg">{article.title}</span>
            </div>
          )}

          {/* Floating Pill on image */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#191D17]/80 text-white text-[11px] font-semibold tracking-wider uppercase backdrop-blur-xs">
              <Sparkles className="w-3 h-3 text-[#D9C5A1]" />
              {badgeLabel}
            </span>
            <CategoryBadge category={article.category} size="sm" />
          </div>

          <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-xs rounded-full">
            <BookmarkButton slug={article.slug} title={article.title} />
          </div>
        </div>

        {/* Right / Bottom: Content (5 cols on desktop) */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
          <div>
            {/* Metadata */}
            <div className="flex items-center gap-3 text-xs text-[#74776F] mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#8BA58D]" />
                <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#8BA58D]" />
                <span>{formatReadingTime(article.readingTime)}</span>
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-[#191D17] hover:text-[#234B3B] transition-colors leading-[1.2] mb-4">
              <Link to={`/article/${article.slug}`}>{article.title}</Link>
            </h2>

            {/* Excerpt */}
            <p className="text-sm sm:text-base text-[#434842] leading-relaxed mb-6 font-normal">
              {article.excerpt}
            </p>
          </div>

          {/* Author & CTA */}
          <div className="pt-6 border-t border-[#E8E5DD] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={author.avatar}
                alt=""
                className="w-10 h-10 rounded-full object-cover border border-[#E8E5DD]"
              />
              <div>
                <p className="text-xs font-semibold text-[#191D17]">{author.name}</p>
                <p className="text-[11px] text-[#74776F]">{author.role}</p>
              </div>
            </div>

            <Button
              to={`/article/${article.slug}`}
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              Read Article
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
