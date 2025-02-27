/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useIntersection } from 'react-use';
import React from 'react';
import { ProductCard, Title } from '.';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
  title: string;
  items: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  const setActiveCategory = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategory(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategory]);
  return (
    <div className={className} ref={intersectionRef} id={title}>
      <Title text={title} size="lg" className="font-extrabol mb-5" />
      <div className={cn(className, 'grid grid-cols-3 gap-[50px]')}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.variants[0].price}
          />
        ))}
      </div>
    </div>
  );
};
