export type Category = 'health' | 'finance' | 'family';

export interface CategoryInfo {
  id: Category;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  accentColor: string;
  badgeBg: string;
  textColor: string;
  coverImage: string;
}

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string; id: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'callout'; title?: string; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string };

export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  editorialFocus: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: Category;
  excerpt: string;
  coverImage: string;
  coverImageAlt: string;
  authorId: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number; // in minutes
  tags: string[];
  blocks: ArticleBlock[];
  relatedArticleIds: string[];
  featured: boolean;
  categoryFeatured?: boolean;
}
