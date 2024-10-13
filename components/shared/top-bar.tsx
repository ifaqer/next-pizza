import { cn } from '@/lib/utils';
import { Container, Categories, SortPopUp } from './';
import React from 'react';

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container className={cn('flex items-center justify-between', className)}>
        <Categories />
        <SortPopUp />
      </Container>
    </div>
  );
};
