import { Ingredient, Product, ProductVariants } from '@prisma/client';

export type ProductWithRelations = Product & {
  ingredients: Ingredient[];
  variants: ProductVariants[];
};
