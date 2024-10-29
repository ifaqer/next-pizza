import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import React from 'react';

export const useIngredients = () => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(false);
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
  return { loading, ingredients };
};
