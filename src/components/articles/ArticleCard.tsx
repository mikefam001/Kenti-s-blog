import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { Article } from '../../types';
import { AUTHORS } from '../../data/authors';
import { CategoryBadge } from './CategoryBadge';
import { BookmarkButton } from './BookmarkButton';
import { formatDate, formatReadingTime } from '../../utils/format';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  className?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  featured = false,
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);
  const author = AUTHORS[article.authorId] || AUTHORS.kenti;

  return (
    <article
      className={`group relative flex flex-col bg-white rounded-lg border border-[#E8E5DD] overflow-hidden ambient-card-hover ${className}`}
    >
      {/* Cover Media Container */}
      <div className="relative aspect-[16/10] sm:aspect-[3/2] overflow-hidden bg-[#FAF8F3]">
        {!imgError ? (
          <img
            src={article.coverImage}
            alt={article.coverImageAlt || article.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#EDF0E7] text-[#74776F] p-4 text-center">
            <span className="font-serif italic text-sm">{article.title}</span>
          </div>
        )}

        {/* Floating Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <CategoryBadge category={article.category} size="sm" />
        </div>

        {/* Floating Bookmark Button */}
        <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-xs rounded-full shadow-xs">
          <BookmarkButton slug={article.slug} title={article.title} />
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 flex flex-col p-5 sm:p-6 justify-between">
        <div>
          {/* Metadata Row */}
          <div className="flex items-center gap-3 text-xs text-[#74776F] mb-3">
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
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#191D17] group-hover:text-[#234B3B] transition-colors leading-snug mb-2.5">
            <Link to={`/article/${article.slug}`} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {article.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-[#434842] leading-relaxed line-clamp-3 mb-6">
            {article.excerpt}
          </p>
        </div>

        {/* Author & Footer Link */}
        <div className="pt-4 border-t border-[#E8E5DD] flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2.5 z-10">
            <img
              src={author.avatar}
              alt=""
              className="w-7 h-7 rounded-full object-cover border border-[#E8E5DD]"
              loading="lazy"
            />
            <span className="text-xs font-medium text-[#191D17] truncate max-w-[120px] sm:max-w-[160px]">
              {author.name}
            </span>
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#234B3B] group-hover:text-[#1B3B2E] transition-colors">
            <span>Read Story</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </article>
  );
};
