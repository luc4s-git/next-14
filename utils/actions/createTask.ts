'use server';

import { revalidatePath } from 'next/cache';
import prisma from '../db/db';
import { State } from '../interfaces/tasks';

import { z } from 'zod';

export const createTask = async (
  prevState: State,
  formData: FormData
): Promise<State> => {
  const content = formData.get('task')?.toString();

  if (!content) return { message: 'Input value was not provided' };

  const Task = z.object({
    content: z.string().min(5),
  });

  try {
    Task.parse({ content: content });

    await prisma.task.create({
      data: {
        content: content,
      },
    });

    revalidatePath('/tasks');
    return { message: 'Success' };
  } catch (error) {
    return { message: 'Error...' };
  }
};
