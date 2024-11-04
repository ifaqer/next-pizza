'use client';

import React from 'react';
import { useSet } from 'react-use';
import { useRouter, useSearchParams } from 'next/navigation';

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export const useFilters = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const [selectedIngredients, { toggle: onAddId }] = useSet(
    new Set<string>(searchParams.get('ingredients')?.split(',') || []),
  );

  const [prices, setPrice] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.get('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : [],
    ),
  );

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(searchParams.get('sizes') ? searchParams.get('sizes')?.split(',') : []),
  );

  return {
    selectedIngredients,
    onAddId,
    prices,
    setPrice,
    pizzaTypes,
    togglePizzaTypes,
    sizes,
    toggleSizes,
    push,
  };
};
