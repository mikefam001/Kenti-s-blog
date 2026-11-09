import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Sparkles, HeartHandshake } from 'lucide-react';
import { ARTICLES, getFeaturedArticle } from '../data/articles';
import { CATEGORY_LIST } from '../data/categories';
import { ArticleCard } from '../components/articles/ArticleCard';
import { FeaturedArticle } from '../components/articles/FeaturedArticle';
import { Button } from '../components/common/Button';
import { useSeo } from '../utils/seo';

export const HomePage: React.FC = () => {
  useSeo({
    title: "Kenti's Corner | Living Your Best Life",
    description:
      'Discover practical ideas and inspiration for health and wellness, smarter finances and stronger family relationships.',
  });

  const featured = getFeaturedArticle();
  // Filter out the main featured article to prevent immediate visual duplication in latest 6
  const latestArticles = ARTICLES.filter((a) => a.id !== featured.id).slice(0, 6);

  const scrollToCategories = () => {
    const el = document.getElementById('categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* --------------------------------------------------------------------- */}
      {/* SECTION 1: HERO                                                        */}
      {/* --------------------------------------------------------------------- */}
      <section className="relative pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Hero Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8BA58D]/15 text-[#234B3B] text-xs font-semibold uppercase tracking-[0.1em]">
              <Sparkles className="w-3.5 h-3.5 text-[#8BA58D]" />
              <span>Independent Lifestyle Journal</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#191D17] tracking-tight leading-[1.1] max-w-2xl">
              Live Well. Grow Strong. Love Deeply.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#434842] leading-relaxed max-w-xl font-normal">
              Welcome to Kenti’s Corner — your space for practical wisdom, everyday inspiration and
              meaningful ideas to help you live a healthier, happier and more fulfilling life.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                to="/explore"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Explore Articles
              </Button>
              <Button
                onClick={scrollToCategories}
                variant="secondary"
                size="lg"
                icon={<Compass className="w-4 h-4" />}
              >
                Discover Our Categories
              </Button>
            </div>

            {/* Quick stats / reassurance */}
            <div className="pt-6 border-t border-[#E8E5DD] flex items-center gap-8 text-xs text-[#74776F]">
              <div>
                <span className="block font-serif text-xl font-semibold text-[#191D17]">3 Pillars</span>
                <span className="text-[11px] uppercase tracking-wider">Health, Wealth, Family</span>
              </div>
              <div className="w-[1px] h-8 bg-[#E8E5DD]" />
              <div>
                <span className="block font-serif text-xl font-semibold text-[#191D17]">Ad-Free</span>
                <span className="text-[11px] uppercase tracking-wider">Mindful Reading</span>
              </div>
              <div className="w-[1px] h-8 bg-[#E8E5DD]" />
              <div>
                <span className="block font-serif text-xl font-semibold text-[#191D17]">Practical</span>
                <span className="text-[11px] uppercase tracking-wider">Zero Dogma</span>
              </div>
            </div>
          </div>

          {/* Hero Right Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-[#E8E5DD] shadow-lg bg-[#FAF8F3]">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
                alt="Mindful person reading a printed lifestyle journal beside sunlight and botanical leaves"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191D17]/70 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#D9C5A1]">
                  Editorial Ethos
                </span>
                <p className="font-serif italic text-lg sm:text-xl text-white mt-1">
                  &ldquo;Wellness, wealth and family — thoughtfully connected.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* SECTION 2: WELCOME INTRODUCTION                                        */}
      {/* --------------------------------------------------------------------- */}
      <section className="bg-white rounded-lg border border-[#E8E5DD] p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-xs">
        <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#8BA58D] mb-3 block">
          Welcome to Kenti’s Corner
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#191D17] mb-6">
          A Little Corner for a Better Life.
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-[#434842] leading-relaxed max-w-2xl mx-auto">
          <p>
            Living your best life is not about pursuing cold, unattainable perfection. It is not about
            harsh sixty-day fitness punishments or sleepless entrepreneurial hustle.
          </p>
          <p>
            Instead, we believe the good life is shaped by conscious, grounded decisions—the nourishment
            you give your body, the quiet peace you cultivate around your finances, and the presence you
            bring home to the people who love you. Here, we slow down, discard the noise, and focus on
            what endures.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="w-16 h-0.5 bg-[#8BA58D]" />
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* SECTION 3: THREE CATEGORY CARDS                                        */}
      {/* --------------------------------------------------------------------- */}
      <section id="categories" className="scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#8BA58D] block mb-1">
              Three Pillars of Wholeness
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#191D17]">
              Curated Editorial Themes
            </h2>
          </div>
          <Link
            to="/explore"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#234B3B] hover:text-[#1B3B2E]"
          >
            <span>Browse All Subjects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORY_LIST.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white rounded-lg border border-[#E8E5DD] overflow-hidden flex flex-col justify-between ambient-card-hover"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={cat.coverImage}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="inline-flex px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: cat.badgeBg, color: cat.textColor }}
                  >
                    {cat.name}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#191D17] group-hover:text-[#234B3B] transition-colors mb-2.5">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-[#434842] leading-relaxed mb-6 font-normal">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E5DD]">
                  <Button
                    to={`/explore?category=${cat.id}`}
                    variant="ghost"
                    size="sm"
                    icon={<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
                    iconPosition="right"
                    className="p-0 hover:bg-transparent text-[#234B3B] font-semibold"
                  >
                    Explore {cat.shortName}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* SECTION 4: FEATURED ARTICLE                                            */}
      {/* --------------------------------------------------------------------- */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#8BA58D] block mb-1">
              Cover Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#191D17]">
              Featured Editorial
            </h2>
          </div>
        </div>

        <FeaturedArticle article={featured} badgeLabel="Cover Story" />
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* SECTION 5: LATEST ARTICLES (AT LEAST 6 ARTICLES)                       */}
      {/* --------------------------------------------------------------------- */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#8BA58D] block mb-1">
              Fresh Perspectives
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#191D17]">
              Latest Articles
            </h2>
          </div>
          <Link
            to="/explore"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#234B3B] hover:text-[#1B3B2E]"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* SECTION 6: EDITORIAL INSPIRATION BANNER                                */}
      {/* --------------------------------------------------------------------- */}
      <section className="bg-[#234B3B] text-white rounded-lg p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8BA58D]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F3]/10 text-[#D9C5A1] text-xs font-semibold uppercase tracking-[0.1em]">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Living Well Manifesto</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight">
            Your Best Life Is Built One Choice at a Time.
          </h2>

          <p className="text-base sm:text-lg text-[#F0F2E8]/90 leading-relaxed font-normal">
            Every healthy habit, every thoughtful financial decision and every moment spent nurturing
            the people you love contributes to a more meaningful life.
          </p>

          <div className="pt-2">
            <Button
              to="/explore"
              variant="secondary"
              size="lg"
              className="bg-[#FAF8F3] text-[#234B3B] border-none hover:bg-white active:bg-[#EDF0E7]"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Start Exploring Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
