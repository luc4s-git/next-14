'use server';

import { redirect } from 'next/navigation';
import prisma from '../db/db';
import { revalidatePath } from 'next/cache';

export const editTask = async (formData: FormData) => {
  const task = formData.get('task')?.toString();
  const id = formData.get('id')?.toString();
  const completed = formData.get('completed') === 'on';

  if (!task || !id) return;

  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      content: task,
      completed: completed,
    },
  });

  revalidatePath('/tasks');
  redirect('/tasks');
};
