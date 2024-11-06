'use client';

import { DialogContent, Dialog } from '@/components/ui/dialog';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ChoosePizzaForm, ChooseProductForm } from '..';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
  className?: string;
  product: ProductWithRelations;
}

export const ChooseProductModal: React.FC<Props> = ({ product }) => {
  const router = useRouter();
  const isPizzaForm = Boolean(product.variants[0].pizzaType);
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent className="p-0 w-[1060px] max-w-[1060px] min-h-[520px] bg-white overflow-hidden">
        {!isPizzaForm ? (
          <ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
        ) : (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.variants}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
