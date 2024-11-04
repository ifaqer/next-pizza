import { Container, GroupVariants, ProductImage, Title } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
  });
  if (!product) {
    return notFound();
  }
  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1 justify-center">
        <ProductImage size={20} imageUrl={product.imageUrl} />
        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title text={product.name} size="md" className="font-extrabold mb-1"></Title>
          <p className="text-gray-400">Описание продукта один-два...</p>
          <GroupVariants
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
        </div>
      </div>
    </Container>
  );
}
