'use server';

import { revalidatePath } from 'next/cache';
import prisma from '../db/db';
import { State } from '../interfaces/tasks';

export const createTask = async (
  prevState: State,
  formData: FormData
): Promise<State> => {
  const inputValue = formData.get('task')?.toString();

  if (!inputValue) return { message: 'Input value was not provided' };

  try {
    await prisma.task.create({
      data: {
        content: inputValue,
      },
    });

    revalidatePath('/tasks');
    return { message: 'Success' };
  } catch (error) {
    return { message: 'Error...' };
  }
};
