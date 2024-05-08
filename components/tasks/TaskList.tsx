import prisma from '@/utils/db/db';
import { FilePenLine } from 'lucide-react';
import { TaskType } from '@/utils/interfaces/drinks';
import Link from 'next/link';
import DeleteForm from './DeleteForm';

const prismaTasks = async (): Promise<TaskType[]> => {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: 'asc' },
  });

  return tasks;
};

export default async function TaskList() {
  const tasks = await prismaTasks();

  return (
    <ul className="mt-8">
      {tasks.length === 0 ? (
        <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>
      ) : (
        tasks.map((task) => {
          return (
            <li
              key={task.id}
              className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
            >
              <h2
                className={`text-lg capitalize ${
                  task.completed && 'line-through'
                }`}
              >
                {task.content}
              </h2>
              <div className="flex gap-2 items-center">
                <Link
                  href={`/tasks/${task.id}`}
                  className="btn btn-primary btn-sm"
                >
                  <FilePenLine />
                </Link>
                <DeleteForm taskId={task.id} />
              </div>
            </li>
          );
        })
      )}
    </ul>
  );
}
