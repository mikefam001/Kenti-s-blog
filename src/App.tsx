import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { ArticlePage } from './pages/ArticlePage';
import { useReadingProgress } from './hooks/useReadingProgress';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Only scroll to top if there isn't an anchor hash in the URL
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
}

// App Layout wrapper to handle reading progress conditionally
function AppLayout() {
  const location = useLocation();
  const isArticlePage = location.pathname.startsWith('/article/');
  const progress = useReadingProgress();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#191D17]">
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#234B3B] text-white text-xs font-semibold rounded shadow-md uppercase tracking-wider"
      >
        Skip to main content
      </a>

      {/* Global Header */}
      <Header progress={isArticlePage ? progress : undefined} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
          {/* Unknown route fallback */}
          <Route path="*" element={<ArticlePage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  );
}
