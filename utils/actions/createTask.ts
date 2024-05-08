'use server';

import { revalidatePath } from 'next/cache';
import prisma from '../db/db';

export const createTask = async (formData: FormData) => {
  const inputValue = formData.get('task')?.toString();

  if (!inputValue) return;

  await prisma.task.create({
    data: {
      content: inputValue,
    },
  });

  revalidatePath('/tasks');
};
