import { useEffect } from 'react';
import { Article } from '../types';

interface SeoProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  article?: Article;
  breadcrumbs?: Array<{ name: string; item: string }>;
}

export function useSeo({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage,
  article,
  breadcrumbs,
}: SeoProps) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // 2. Meta description
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // 3. Open Graph
    const setOgTag = (property: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setOgTag('og:title', title);
    setOgTag('og:description', description);
    setOgTag('og:type', ogType);
    if (ogImage) {
      setOgTag('og:image', ogImage);
    }

    const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');
    if (currentUrl) {
      setOgTag('og:url', currentUrl);
      let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.rel = 'canonical';
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.href = currentUrl;
    }

    // 4. Schema.org JSON-LD
    let scriptEl = document.getElementById('seo-jsonld') as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'seo-jsonld';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    const jsonLdData: Record<string, unknown>[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: "Kenti's Corner",
        url: window.location.origin,
        description: 'Living Your Best Life – A premium lifestyle editorial on health, sustainable wealth, and family.',
      },
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
      jsonLdData.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: b.name,
          item: b.item.startsWith('http') ? b.item : `${window.location.origin}${b.item}`,
        })),
      });
    }

    if (article) {
      jsonLdData.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        image: [article.coverImage],
        datePublished: article.publishedAt,
        dateModified: article.updatedAt || article.publishedAt,
        author: {
          '@type': 'Person',
          name: article.authorId,
        },
        publisher: {
          '@type': 'Organization',
          name: "Kenti's Corner",
          logo: {
            '@type': 'ImageObject',
            url: `${window.location.origin}/logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': currentUrl,
        },
      });
    }

    scriptEl.textContent = JSON.stringify(jsonLdData);
  }, [title, description, canonicalUrl, ogType, ogImage, article, breadcrumbs]);
}
