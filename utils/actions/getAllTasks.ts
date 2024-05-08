import prisma from '../db/db';
import { TaskType } from '../interfaces/drinks';

export const getAllTasks = async (): Promise<TaskType[]> => {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: 'asc' },
  });

  return tasks;
};
