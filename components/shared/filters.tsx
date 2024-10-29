'use client';

import React from 'react';
import { CheckboxFiltersGroup, Title } from './';
import { Input, RangeSlider } from '../ui';
import qs from 'qs';
import { useFilters } from '@/hooks/use-filters';
import { useIngredients } from '@/hooks/use-ingredients';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const {
    onAddId,
    setPrice,
    prices,
    push,
    selectedIngredients,
    pizzaTypes,
    togglePizzaTypes,
    sizes,
    toggleSizes,
  } = useFilters();

  const items = ingredients.map((item) => ({ text: item.name, value: String(item.id) }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };

  React.useEffect(() => {
    const filters = {
      ...prices,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIngredients),
    };
    const query = qs.stringify(filters, {
      arrayFormat: 'comma',
    });
    push(`?${query}`, {
      scroll: false,
    });
    console.log(query);
  }, [prices, pizzaTypes, sizes, selectedIngredients, push]);

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <CheckboxFiltersGroup
          name="pizzaTypes"
          title="Тип теста:"
          className="mb-5"
          onClickCheckBox={togglePizzaTypes}
          selected={pizzaTypes}
          items={[
            { text: 'Тонкое', value: '1' },
            { text: 'Традиционное', value: '2' },
          ]}
        />
        <CheckboxFiltersGroup
          name="sizes"
          title="Размеры:"
          className="mb-5"
          onClickCheckBox={toggleSizes}
          selected={sizes}
          items={[
            { text: '20 см', value: '20' },
            { text: '30 см', value: '30' },
            { text: '40 см', value: '40' },
          ]}
        />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={prices.priceFrom}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            defaultValue={prices.priceTo}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
          value={[prices.priceFrom || 0, prices.priceTo || 1000]}
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
          selected={selectedIngredients}
        />
      </div>
    </div>
  );
};
