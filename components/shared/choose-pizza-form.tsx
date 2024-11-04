/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils';
import React from 'react';
import { GroupVariants, Title } from '@/components/shared';
import { Button } from '../ui';

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  ingredients: any[];
  items?: any[];
  onClickAdd?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  className,
  imageUrl,
  name,
  ingredients,
  items,
  onClickAdd,
}) => {
  const textDetails = '30 см, традиционное тесто 30';
  const totalPrice = 350;
  return (
    <div className={cn(className, 'flex flex-1')}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>
      <div className="w-[490px] bg-[#FCFCFC] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <GroupVariants
          className="mt-5"
          selectedValue="1"
          items={[
            {
              name: 'Маленькая',
              value: '1',
            },
            {
              name: 'Средняя',
              value: '2',
            },
            {
              name: 'Большая',
              value: '3',
              disabled: true,
            },
          ]}
        />
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-5">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
