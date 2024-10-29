import { cn } from '@/lib/utils';
import { Container, Categories, SortPopUp } from './';
import React from 'react';
import { Category } from '@prisma/client';

interface Props {
  className?: string;
  categories: Category[];
}

export const TopBar: React.FC<Props> = ({ className, categories }) => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container className={cn('flex items-center justify-between', className)}>
        <Categories categories={categories} />
        <SortPopUp />
      </Container>
    </div>
  );
};
