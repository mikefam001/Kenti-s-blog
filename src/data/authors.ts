import { Author } from '../types';

export const AUTHORS: Record<string, Author> = {
  kenti: {
    id: 'kenti',
    name: 'Kenti Fam',
    role: 'Founder & Editor-in-Chief',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Lifestyle essayist and founder of Kenti’s Corner. Kenti writes on slow living, intentional daily rituals, and holistic personal growth.',
    editorialFocus: 'Intentional Living, Personal Development & Daily Rituals',
  },
  amara: {
    id: 'amara',
    name: 'Amara Eze',
    role: 'Sustainable Wealth Strategist',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Finance educator with over a decade of experience guiding families and entrepreneurs through mindful budgeting, emergency funds, and long-term asset building.',
    editorialFocus: 'Personal Budgeting, Emergency Reserves & Mindful Investing',
  },
  'dr-tariq': {
    id: 'dr-tariq',
    name: 'Tariq Oladipo',
    role: 'Integrative Wellness Contributor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Researcher and educator passionate about sleep hygiene, whole-food nourishment, and sustainable nervous system recovery.',
    editorialFocus: 'Sleep Health, Whole-Foods Nutrition & Daily Restoration',
  },
  simi: {
    id: 'simi',
    name: 'Simi Williams',
    role: 'Family Dynamics & Relationships Writer',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    bio: 'Educator and parent advocate focused on multi-generational family bonds, mindful communication, and healthy work-life rhythms.',
    editorialFocus: 'Parenting, Conscious Communication & Family Rituals',
  },
};
