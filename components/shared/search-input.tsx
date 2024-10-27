/* eslint-disable @next/next/no-img-element */
'use client';

import { Search } from 'lucide-react';
import React from 'react';
import { Input } from '../ui';
import { cn } from '@/lib/utils';
import { useClickAway, useDebounce } from 'react-use';
import Link from 'next/link';
import { Api } from '@/services/api-client';
import { Product } from '@prisma/client';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const ref = React.useRef(null);
  const [products, setProducts] = React.useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  useClickAway(ref, () => {
    setFocused(false);
  });
  useDebounce(
    async () => {
      try {
        const responce = await Api.products.search(searchQuery);
        setProducts(responce);
      } catch (error) {
        console.log(error);
      }
    },
    250,
    [searchQuery],
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery('');
  };

  return (
    <>
      {focused && <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-30" />}
      <div
        ref={ref}
        className={cn(className, 'z-30 flex rounded-2xl flex-1 justify-between relative h-11')}>
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <Input
          className="rounded-2xl  w-full bg-gray-100 pl-11"
          type="text"
          value={searchQuery}
          placeholder="Найти пиццу..."
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setFocused(true)}
        />
        {products.length > 0 && (
          <div
            className={cn(
              'absolute w-full bg-white rounded-2xl p-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
              focused && 'visible opacity-100 top-12',
            )}>
            {products.map((product) => (
              <Link
                onClick={onClickItem}
                key={product.id}
                href={`/product/${product.id}`}
                className=" flex rounded-xl items-center gap-3 w-full px-3 py-2 hover:bg-primary/10">
                <img className="rounded-sm h-8 w-8" src={product.imageUrl} alt={product.name} />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
