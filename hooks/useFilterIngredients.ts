import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useSet } from 'react-use';

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIngredients: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
  const searchParams = useSearchParams();
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [selectedIds, { toggle }] = useSet(
    new Set<string>(searchParams.get('ingredients')?.split(',') || []),
  );
  React.useEffect(() => {
    async function fetchIngredient() {
      try {
        setLoading(true);
        const responce = await Api.ingredients.getAll();
        setIngredients(responce);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchIngredient();
  }, []);

  return { ingredients, loading, onAddId: toggle, selectedIngredients: selectedIds };
};
