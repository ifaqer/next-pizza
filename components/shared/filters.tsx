'use client';

import React from 'react';
import { CheckboxFiltersGroup, Title } from './';
import { FilterCheckbox } from './filter-checkbox';
import { Input, RangeSlider } from '../ui';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients();
  const [prices, setPrice] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  });
  const items = ingredients.map((item) => ({ text: item.name, value: String(item.id) }));
  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox name="qwe" text="Можно собирать" value="1" />
        <FilterCheckbox name="qwee" text="Новинки" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            defaultValue={500}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
          value={[prices.priceFrom, prices.priceTo]}
        />
        <CheckboxFiltersGroup
          name="ingredients"
          className="mt-14"
          title="Ингредиенты:"
          limit={5}
          defaultItems={items.slice(0, 6)}
          items={items}
          loading={loading}
          onClickCheckBox={onAddId}
          selectedIds={selectedIds}
        />
      </div>
    </div>
  );
};
