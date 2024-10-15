import { Title, Container, TopBar, Filters, ProductsGroupList } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-5">
        <div className=" flex gap-[60px]">
          {/* {Фильтрация} */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                categoryId={1}
                title={'Пиццы'}
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 500 }],
                  },
                ]}
              />
              <ProductsGroupList
                categoryId={2}
                title={'Комбо'}
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 500 }],
                  },
                ]}
              />
              <ProductsGroupList
                categoryId={3}
                title={'Закуски'}
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 500 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
