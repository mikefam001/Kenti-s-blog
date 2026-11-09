import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ChevronRight,
  Clock,
  Calendar,
  AlertCircle,
  Home,
  Compass,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { getArticleBySlug, getRelatedArticles } from '../data/articles';
import { AUTHORS } from '../data/authors';
import { CATEGORIES } from '../data/categories';
import { CategoryBadge } from '../components/articles/CategoryBadge';
import { BookmarkButton } from '../components/articles/BookmarkButton';
import { ShareControls } from '../components/articles/ShareControls';
import { TableOfContents } from '../components/articles/TableOfContents';
import { ArticleBodyRenderer } from '../components/articles/ArticleBodyRenderer';
import { ArticleCard } from '../components/articles/ArticleCard';
import { Button } from '../components/common/Button';
import { formatDate, formatReadingTime } from '../utils/format';
import { useSeo } from '../utils/seo';

interface ArticlePageProps {
  onProgressChange?: (progress: number) => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = useMemo(() => (slug ? getArticleBySlug(slug) : undefined), [slug]);

  const author = article ? AUTHORS[article.authorId] || AUTHORS.kenti : AUTHORS.kenti;
  const categoryInfo = article ? CATEGORIES[article.category] : CATEGORIES.health;

  // SEO
  useSeo({
    title: article
      ? `${article.title} | Kenti's Corner`
      : "Article Not Found | Kenti's Corner",
    description: article
      ? article.excerpt
      : 'The requested article could not be located in our editorial archives.',
    ogType: 'article',
    ogImage: article?.coverImage,
    article,
    breadcrumbs: article
      ? [
          { name: 'Home', item: '/' },
          { name: 'Explore', item: '/explore' },
          { name: categoryInfo.name, item: `/explore?category=${article.category}` },
          { name: article.title, item: `/article/${article.slug}` },
        ]
      : undefined,
  });

  // ---------------------------------------------------------------------------
  // NOT FOUND FALLBACK (Within the same template)
  // ---------------------------------------------------------------------------
  if (!article) {
    return (
      <div className="py-16 sm:py-24 text-center max-w-xl mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#FFDAD6]/50 flex items-center justify-center mx-auto text-[#BA1A1A]">
          <AlertCircle className="w-8 h-8" />
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#191D17]">
          Article Not Found
        </h1>

        <p className="text-base text-[#434842] leading-relaxed">
          The publication you are looking for may have been archived or moved. Explore our latest
          pieces on health, sustainable wealth, and intentional family life below.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/explore" variant="primary" size="md" icon={<Compass className="w-4 h-4" />}>
            Explore All Articles
          </Button>
          <Button to="/" variant="secondary" size="md" icon={<Home className="w-4 h-4" />}>
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(article, 3);

  // Category Disclaimer content
  const disclaimerContent = {
    health: {
      tag: 'Health & Wellness Advisory',
      text: "Content on Kenti's Corner is for general educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis or treatment.",
      border: 'border-[#8BA58D]',
    },
    finance: {
      tag: 'Financial Education Disclosure',
      text: "Financial content is provided for educational purposes only and does not constitute personalised financial, investment, tax or legal advice.",
      border: 'border-[#D9C5A1]',
    },
    family: {
      tag: 'Family Guidance Notice',
      text: "Family and relationship articles provide general educational perspectives and should not replace appropriate professional support where needed.",
      border: 'border-[#D18672]',
    },
  }[article.category];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* --------------------------------------------------------------------- */}
      {/* SECTION 1: BREADCRUMBS                                                */}
      {/* --------------------------------------------------------------------- */}
      <nav aria-label="Breadcrumbs" className="pt-2">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-[#74776F]">
          <li>
            <Link to="/" className="hover:text-[#234B3B] transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3 h-3 text-[#C3C8C0]" />
          </li>
          <li>
            <Link to="/explore" className="hover:text-[#234B3B] transition-colors">
              Explore
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3 h-3 text-[#C3C8C0]" />
          </li>
          <li>
            <Link
              to={`/explore?category=${article.category}`}
              className="hover:text-[#234B3B] transition-colors font-medium"
            >
              {categoryInfo.name}
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3 h-3 text-[#C3C8C0]" />
          </li>
          <li className="truncate max-w-[200px] sm:max-w-xs text-[#191D17] font-semibold" aria-current="page">
            {article.title}
          </li>
        </ol>
      </nav>

      {/* --------------------------------------------------------------------- */}
      {/* SECTION 2: ARTICLE HEADER                                             */}
      {/* --------------------------------------------------------------------- */}
      <header className="max-w-4xl mx-auto space-y-6 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
          <CategoryBadge category={article.category} size="md" />
          <span className="text-xs text-[#74776F] flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#8BA58D]" />
            {formatReadingTime(article.readingTime)}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#191D17] leading-[1.15] tracking-tight">
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#434842] leading-relaxed font-normal">
          {article.excerpt}
        </p>

        {/* Author & Publication Timestamp Row */}
        <div className="pt-4 border-t border-[#E8E5DD] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-11 h-11 rounded-full object-cover border border-[#E8E5DD]"
            />
            <div className="text-left">
              <span className="block text-sm font-semibold text-[#191D17]">{author.name}</span>
              <span className="block text-xs text-[#74776F]">{author.role}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#74776F]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#8BA58D]" />
              <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            </span>
            {article.updatedAt && (
              <span className="hidden sm:inline italic">
                (Updated {formatDate(article.updatedAt)})
              </span>
            )}
          </div>
        </div>
      </header>

      {/* --------------------------------------------------------------------- */}
      {/* SECTION 3: HERO COVER IMAGE                                           */}
      {/* --------------------------------------------------------------------- */}
      <div className="max-w-5xl mx-auto">
        <figure className="aspect-[16/9] sm:aspect-[21/9] rounded-lg overflow-hidden border border-[#E8E5DD] shadow-sm bg-[#FAF8F3]">
          <img
            src={article.coverImage}
            alt={article.coverImageAlt}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </figure>
        {article.coverImageAlt && (
          <p className="mt-2 text-center text-xs text-[#74776F] italic">
            Photography: {article.coverImageAlt}
          </p>
        )}
      </div>

      {/* --------------------------------------------------------------------- */}
      {/* SECTION 4 & 5: READING BODY + TOOLS + SIDEBAR                         */}
      {/* --------------------------------------------------------------------- */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Sticky Reading Toolbar / Table of Contents (4 cols on desktop) */}
        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-36 order-2 lg:order-1">
          {/* Action Bar (Share & Bookmark) */}
          <div className="bg-white rounded-lg border border-[#E8E5DD] p-4 shadow-xs flex items-center justify-between gap-2">
            <BookmarkButton slug={article.slug} title={article.title} variant="labeled" />
            <ShareControls title={article.title} excerpt={article.excerpt} />
          </div>

          {/* Table of Contents */}
          <TableOfContents blocks={article.blocks} />

          {/* Quick Pillar Context Box */}
          <div className="bg-[#FAF8F3] rounded-lg border border-[#E8E5DD] p-5 text-xs text-[#434842] space-y-2">
            <span className="font-semibold uppercase tracking-wider text-[#234B3B] block">
              About This Pillar
            </span>
            <p className="leading-relaxed">{categoryInfo.description}</p>
            <Link
              to={`/explore?category=${article.category}`}
              className="inline-flex items-center gap-1 font-semibold text-[#234B3B] hover:underline pt-1"
            >
              <span>Explore all {categoryInfo.shortName} essays</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </aside>

        {/* Long-Form Reading Content Container (8 cols on desktop) */}
        <article className="lg:col-span-8 order-1 lg:order-2 bg-white rounded-lg border border-[#E8E5DD] p-6 sm:p-10 lg:p-12 shadow-xs">
          {/* Article Body Blocks */}
          <ArticleBodyRenderer blocks={article.blocks} />

          {/* Article Tags */}
          {article.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-[#E8E5DD] flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#74776F] mr-1">
                Topics:
              </span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs bg-[#FAF8F3] text-[#434842] rounded border border-[#E8E5DD]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* ----------------------------------------------------------------- */}
          {/* SECTION 6: EDITORIAL DISCLAIMER                                   */}
          {/* ----------------------------------------------------------------- */}
          <div
            className={`mt-10 p-5 rounded-lg bg-[#FAF8F3] border-l-4 ${disclaimerContent.border} border border-[#E8E5DD] text-xs leading-relaxed text-[#434842]`}
            role="note"
          >
            <div className="flex items-center gap-2 mb-1.5 text-[#191D17] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#8BA58D]" />
              <span>{disclaimerContent.tag}</span>
            </div>
            <p>{disclaimerContent.text}</p>
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* SECTION 7: AUTHOR INFORMATION                                     */}
          {/* ----------------------------------------------------------------- */}
          <section
            className="mt-12 pt-8 border-t border-[#E8E5DD] flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-[#F8FAF0] p-6 rounded-lg border border-[#E8E5DD]"
            aria-label="Author Profile"
          >
            <img
              src={author.avatar}
              alt={author.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
            />
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl font-medium text-[#191D17]">{author.name}</h3>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#8BA58D]/20 text-[#234B3B]">
                  Contributor
                </span>
              </div>
              <p className="text-xs font-semibold text-[#8BA58D]">{author.role}</p>
              <p className="text-xs sm:text-sm text-[#434842] leading-relaxed">{author.bio}</p>
              <p className="text-[11px] text-[#74776F] pt-1">
                <span className="font-medium">Editorial Focus:</span> {author.editorialFocus}
              </p>
            </div>
          </section>
        </article>
      </div>

      {/* --------------------------------------------------------------------- */}
      {/* SECTION 8: RELATED ARTICLES (3 ITEMS, EXCLUDING CURRENT)               */}
      {/* --------------------------------------------------------------------- */}
      <section className="pt-10 border-t border-[#E8E5DD] space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#8BA58D] block mb-1">
              Further Contemplation
            </span>
            <h2 className="font-serif text-3xl font-medium text-[#191D17]">Related Stories</h2>
          </div>
          <Link
            to="/explore"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#234B3B] hover:text-[#1B3B2E]"
          >
            <span>Explore All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {relatedArticles.map((rel) => (
            <ArticleCard key={rel.id} article={rel} />
          ))}
        </div>
      </section>
    </div>
  );
};
