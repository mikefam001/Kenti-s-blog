import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Sparkles, SlidersHorizontal, RefreshCcw } from 'lucide-react';
import {
  ARTICLES,
  getArticlesByCategory,
  getCategoryFeaturedArticle,
  getFeaturedArticle,
} from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { Category } from '../types';
import { ArticleCard } from '../components/articles/ArticleCard';
import { FeaturedArticle } from '../components/articles/FeaturedArticle';
import { Button } from '../components/common/Button';
import { useSeo } from '../utils/seo';

const ITEMS_PER_PAGE = 6;

export const ExplorePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawCategory = searchParams.get('category')?.toLowerCase();

  // Validate category param
  const activeCategory: Category | 'all' = useMemo(() => {
    if (rawCategory === 'health' || rawCategory === 'finance' || rawCategory === 'family') {
      return rawCategory;
    }
    return 'all';
  }, [rawCategory]);

  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);

  // SEO configuration based on category
  const seoTitle = useMemo(() => {
    if (activeCategory === 'health') return "Health & Wellness Articles | Kenti's Corner";
    if (activeCategory === 'finance') return "Personal Finance & Wealth Articles | Kenti's Corner";
    if (activeCategory === 'family') return "Family & Relationships Articles | Kenti's Corner";
    return "Explore Lifestyle Articles | Kenti's Corner";
  }, [activeCategory]);

  const seoDescription = useMemo(() => {
    if (activeCategory === 'health') {
      return 'Practical ways to nurture your body, protect your mind and build healthier everyday habits.';
    }
    if (activeCategory === 'finance') {
      return 'Build a healthier relationship with money through practical financial knowledge and intentional planning.';
    }
    if (activeCategory === 'family') {
      return 'Celebrate meaningful relationships, stronger family bonds and intentional family time.';
    }
    return 'Find inspiration, practical guidance and thoughtful stories across health, finance and family.';
  }, [activeCategory]);

  useSeo({
    title: seoTitle,
    description: seoDescription,
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Explore', item: '/explore' },
    ],
  });

  // Reset pagination when category changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeCategory]);

  const setCategoryFilter = (cat: Category | 'all') => {
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  // Get matching articles
  const matchingArticles = useMemo(() => {
    return getArticlesByCategory(activeCategory);
  }, [activeCategory]);

  // Featured story for the category
  const featuredArticle = useMemo(() => {
    if (activeCategory === 'all') {
      return getFeaturedArticle();
    }
    return getCategoryFeaturedArticle(activeCategory);
  }, [activeCategory]);

  // List of remaining articles (excluding featured to avoid immediate repetition)
  const remainingArticles = useMemo(() => {
    return matchingArticles.filter((a) => a.id !== featuredArticle.id);
  }, [matchingArticles, featuredArticle]);

  const displayedArticles = useMemo(() => {
    return remainingArticles.slice(0, visibleCount);
  }, [remainingArticles, visibleCount]);

  const hasMore = visibleCount < remainingArticles.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const filterButtons: Array<{ id: Category | 'all'; label: string }> = [
    { id: 'all', label: 'All Articles' },
    { id: 'health', label: 'Health & Wellness' },
    { id: 'finance', label: 'Finance' },
    { id: 'family', label: 'Family' },
  ];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* --------------------------------------------------------------------- */}
      {/* HEADER & OVERVIEW                                                     */}
      {/* --------------------------------------------------------------------- */}
      <section className="text-center max-w-3xl mx-auto pt-4 sm:pt-8 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8BA58D]/15 text-[#234B3B] text-xs font-semibold uppercase tracking-[0.1em]">
          <Sparkles className="w-3.5 h-3.5 text-[#8BA58D]" />
          <span>Curated Discovery</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#191D17] tracking-tight leading-tight">
          Explore Ideas for a Better Life.
        </h1>

        <p className="text-base sm:text-lg text-[#434842] leading-relaxed max-w-xl mx-auto font-normal">
          Find inspiration, practical guidance and thoughtful stories across the things that matter
          most.
        </p>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* CATEGORY FILTERS                                                      */}
      {/* --------------------------------------------------------------------- */}
      <section className="border-y border-[#E8E5DD] py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Filter Pills */}
          <div
            className="flex flex-wrap items-center justify-center sm:justify-start gap-2"
            role="tablist"
            aria-label="Category filters"
          >
            {filterButtons.map((btn) => {
              const isActive = activeCategory === btn.id;
              return (
                <button
                  key={btn.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setCategoryFilter(btn.id)}
                  className={`px-4 py-2 rounded text-xs sm:text-sm font-semibold tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#234B3B] text-white shadow-xs'
                      : 'bg-white text-[#434842] border border-[#E8E5DD] hover:border-[#8BA58D] hover:text-[#234B3B]'
                  }`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>

          {/* Active summary indicator */}
          <div className="flex items-center gap-2 text-xs text-[#74776F]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#8BA58D]" />
            <span>
              Showing {matchingArticles.length} article{matchingArticles.length === 1 ? '' : 's'}
              {activeCategory !== 'all' && ` in ${CATEGORIES[activeCategory].name}`}
            </span>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* FEATURED STORY FOR CURRENT SELECTION                                  */}
      {/* --------------------------------------------------------------------- */}
      {featuredArticle && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#8BA58D]">
              {activeCategory === 'all'
                ? 'Featured Story'
                : `Spotlight on ${CATEGORIES[activeCategory].name}`}
            </span>
          </div>

          <FeaturedArticle
            article={featuredArticle}
            badgeLabel={activeCategory === 'all' ? 'Featured Story' : `${CATEGORIES[activeCategory].shortName} Spotlight`}
          />
        </section>
      )}

      {/* --------------------------------------------------------------------- */}
      {/* ARTICLE LISTING GRID                                                  */}
      {/* --------------------------------------------------------------------- */}
      <section className="space-y-8">
        <div>
          <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#8BA58D] block mb-1">
            Complete Archive
          </span>
          <h2 className="font-serif text-3xl font-medium text-[#191D17]">
            {activeCategory === 'all' ? 'All Publications' : `More in ${CATEGORIES[activeCategory].name}`}
          </h2>
        </div>

        {displayedArticles.length === 0 ? (
          <div className="bg-white rounded-lg border border-[#E8E5DD] p-12 text-center max-w-md mx-auto space-y-4">
            <p className="font-serif text-xl font-medium text-[#191D17]">No additional articles</p>
            <p className="text-sm text-[#74776F]">
              You have viewed all published stories in this category.
            </p>
            <Button
              onClick={() => setCategoryFilter('all')}
              variant="secondary"
              size="sm"
              icon={<RefreshCcw className="w-3.5 h-3.5" />}
            >
              Reset to All Articles
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="pt-8 text-center">
            <Button
              onClick={handleLoadMore}
              variant="secondary"
              size="lg"
              className="bg-white hover:bg-[#8BA58D]/10"
            >
              Load More Articles ({remainingArticles.length - visibleCount} remaining)
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};
