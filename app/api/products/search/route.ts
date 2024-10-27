import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || '';
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query, // искать что СОДЕРЖИТ query
        mode: 'insensitive', // не чувствителен к регистру
      },
    },
    take: 5, // возьми 5 продуктов
  });
  return NextResponse.json(products);
}

// contains - содержит
// query - запрашивать
// mode - режим
// insensitive - не чувствителен к регистру
// take - верни столько продуктов
