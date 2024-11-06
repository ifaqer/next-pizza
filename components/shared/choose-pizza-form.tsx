/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils';
import React from 'react';
import { GroupVariants, IngredientItem, PizzaImage, Title } from '@/components/shared';
import { Button } from '../ui';
import { PizzaSize, pizzaSizes, PizzaType, pizzaTypes, mapPizzaType } from '@/constants/pizza';
import { Ingredient, ProductVariants } from '@prisma/client';
import { useSet } from 'react-use';

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  onClickAddCart?: VoidFunction;
  items: ProductVariants[];
}

export const ChoosePizzaForm: React.FC<Props> = ({
  className,
  items,
  imageUrl,
  name,
  ingredients,
  onClickAddCart,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]));
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)?.price || 0;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);
  const totalPrice = pizzaPrice + totalIngredientsPrice;
  const textDetails = `${size} см, ${mapPizzaType[type]} тесто`;
  const availablePizzas = items.filter((item) => item.pizzaType == type);
  const availablePizzaSizes = pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !availablePizzas.some((pizza) => pizza.size == Number(item.value)),
  }));
  const handleClickAdd = () => {
    onClickAddCart?.();
    console.log({
      size,
      type,
      ingredients: selectedIngredients,
    });
  };
  React.useEffect(() => {
    const isAvailableSize = availablePizzaSizes?.find(
      (item) => Number(item.value) == size && !item.disabled,
    );

    const availableSize = availablePizzaSizes?.find((item) => !item.disabled);
    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);
  return (
    <div className={cn(className, 'flex flex-1')}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <PizzaImage imageUrl={imageUrl} size={size} />
      </div>
      <div className="w-[490px] bg-[#FCFCFC] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <GroupVariants
          className="mt-5"
          selectedValue={String(size)}
          items={availablePizzaSizes}
          onClick={(value) => setSize(Number(value) as PizzaSize)}
        />
        <GroupVariants
          className="mt-2"
          selectedValue={String(type)}
          items={pizzaTypes}
          onClick={(value) => setType(Number(value) as PizzaType)}
        />
        <div className="mt-2 bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={ingredient.price}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>
        <Button
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-5">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
