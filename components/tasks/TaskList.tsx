import prisma from '@/utils/db/db';
import { BadgeX, FilePenLine } from 'lucide-react';

const prismaTasks = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: 'asc' },
  });

  return tasks;
};

export default async function TaskList() {
  const tasks = await prismaTasks();

  return (
    <div className="flex flex-col items-center mt-8">
      {tasks.map((task) => {
        return (
          <div key={task.id} className="card shadow-md w-full">
            <div className="card-body items-center justify-between flex-row">
              <h1 className="capitalize">{task.content}</h1>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  <FilePenLine />
                </button>
                <button className="btn btn-secondary">
                  <BadgeX />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
