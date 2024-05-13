import prisma from '@/utils/db/db';

import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  const tasks = await prisma.task.findMany();
  console.log(request);
  return NextResponse.json({ data: tasks });
};

export const POST = async (request: Request) => {
  const data = await request.json();
  const task = await prisma.task.create({
    data: {
      content: data.content,
    },
  });

  return Response.json({ data: data });
};
