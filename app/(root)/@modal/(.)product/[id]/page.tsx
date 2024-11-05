import { ChooseProductModal } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      variants: true,
      ingredients: true,
    },
  });
  if (!product) {
    return notFound();
  }
  return <ChooseProductModal product={product} />;
}
