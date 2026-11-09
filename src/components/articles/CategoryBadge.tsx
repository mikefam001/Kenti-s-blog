import React from 'react';
import { Category } from '../../types';
import { CATEGORIES } from '../../data/categories';

interface CategoryBadgeProps {
  category: Category;
  size?: 'sm' | 'md';
  className?: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  category,
  size = 'md',
  className = '',
}) => {
  const cat = CATEGORIES[category] || CATEGORIES.health;

  const sizeClasses =
    size === 'sm'
      ? 'px-2.5 py-0.5 text-[10px] tracking-[0.08em]'
      : 'px-3 py-1 text-xs tracking-[0.08em]';

  return (
    <span
      className={`inline-flex items-center uppercase font-semibold rounded-full transition-colors ${sizeClasses} ${className}`}
      style={{
        backgroundColor: cat.badgeBg,
        color: cat.textColor,
      }}
    >
      {cat.name}
    </span>
  );
};
