import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './index';
import { Button } from '../ui/index';
import { CircleUserRound, ShoppingCart, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
        <Container className='flex items-center justify-between py-8'>
          <div className='flex items-center gap-3'>
            <Image src="/logo.png" width={38} height={38} alt='logo'/>
            <div>
              <h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className="flex items-center gap-3">
            <Button variant="outline">
              <CircleUserRound size={18} className='mr-1'/>
              Войти</Button>
            </div>
            <div>
              <Button
              className={cn('group relative', className)}>
              <b>500 ₽</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight size="20" className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
            </div>
          </div>
        </Container>
    </header>
  );
};