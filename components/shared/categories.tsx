'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import { Category } from '@prisma/client';
import React from 'react';

interface Props {
  className?: string;
  categories: Category[];
}

export const Categories: React.FC<Props> = ({ className, categories }) => {
  const activeIndex = useCategoryStore((state) => state.activeId);
  const setActiveIndex = useCategoryStore((state) => state.setActiveId);
  const cats = categories;
  return (
    <>
      <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
        {cats.map(({ name, id }, index) => (
          <a
            onClick={() => setActiveIndex(id)}
            className={cn(
              'flex items-center font-bold h-11 rounded-2xl px-5',
              activeIndex == id && 'bg-white shadow-md shadow-gray-200 text-primary',
            )}
            key={index}
            href={`#${name}`}>
            <button>{name}</button>
          </a>
        ))}
      </div>
    </>
  );
};
