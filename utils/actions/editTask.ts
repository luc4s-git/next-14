'use server';

import { revalidatePath } from 'next/cache';
import prisma from '../db/db';

export const editTask = async (formData: FormData) => {
  const task = formData.get('task')?.toString();
  const id = formData.get('id')?.toString();

  if (!task || !id) return;

  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      content: task,
    },
  });

  revalidatePath('/tasks/**');
};
