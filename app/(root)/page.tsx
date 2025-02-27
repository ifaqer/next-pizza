import { Title, Container, TopBar, Filters, ProductsGroupList } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          variants: true,
        },
      },
    },
  });
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar categories={categories.filter((category) => category.products.length > 0)} />
      <Container className="pb-14 mt-5">
        <div className=" flex gap-[60px]">
          {/* {Фильтрация} */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map((category) => (
                <ProductsGroupList
                  key={category.id}
                  categoryId={category.id}
                  title={category.name}
                  items={category.products}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
