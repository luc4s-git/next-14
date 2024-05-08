'use server';

import { revalidatePath } from 'next/cache';
import prisma from '../db/db';

export const deleteTask = async (formData: FormData) => {
  const id = formData.get('id')?.toString();

  try {
    await prisma.task.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    alert(error);
  }

  revalidatePath('/tasks');
};
