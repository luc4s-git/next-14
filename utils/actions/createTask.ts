'use server';

import { revalidatePath } from 'next/cache';
import prisma from '../db/db';
import { State } from '../interfaces/tasks';

import { ZodError, z } from 'zod';

export const createTask = async (
  prevState: State,
  formData: FormData
): Promise<State> => {
  const content = formData.get('task')?.toString();

  if (!content) return { message: 'Input value was not provided' };

  const Task = z.object({
    content: z.string().min(3).max(124),
  });

  try {
    Task.parse({ content: content });

    await prisma.task.create({
      data: {
        content: content,
      },
    });

    revalidatePath('/tasks');
    return { message: 'success' };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        message: error.issues.map((error) => {
          return error.code;
        }),
      };
    }
    return { message: 'error' };
  }
};
