import { Category, CategoryInfo } from '../types';

export const CATEGORIES: Record<Category, CategoryInfo> = {
  health: {
    id: 'health',
    name: 'Health & Wellness',
    shortName: 'Health',
    tagline: 'Nurture body and mind with intentional rituals',
    description: 'Discover practical ways to nurture your body, protect your mind and build healthier everyday habits.',
    accentColor: '#8BA58D',
    badgeBg: 'rgba(139, 165, 141, 0.15)',
    textColor: '#234B3B',
    coverImage: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
  },
  finance: {
    id: 'finance',
    name: 'Finance',
    shortName: 'Finance',
    tagline: 'Cultivate sustainable wealth and quiet financial peace',
    description: 'Build a healthier relationship with money through practical financial knowledge, smarter decisions and intentional planning.',
    accentColor: '#D9C5A1',
    badgeBg: 'rgba(217, 197, 161, 0.25)',
    textColor: '#594928',
    coverImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
  },
  family: {
    id: 'family',
    name: 'Family',
    shortName: 'Family',
    tagline: 'Deepen bonds and cherish everyday connections',
    description: 'Celebrate meaningful relationships, stronger family bonds and the everyday moments that make life special.',
    accentColor: '#D18672',
    badgeBg: 'rgba(209, 134, 114, 0.15)',
    textColor: '#6E392B',
    coverImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
  },
};

export const CATEGORY_LIST: CategoryInfo[] = [
  CATEGORIES.health,
  CATEGORIES.finance,
  CATEGORIES.family,
];
