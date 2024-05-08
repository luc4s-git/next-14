import prisma from '../db/db';
import { TaskType } from '../interfaces/drinks';

export const getSingleTask = async (id: string): Promise<TaskType | null> => {
  const task = await prisma.task.findUnique({
    where: {
      id: id,
    },
  });

  return task;
};
