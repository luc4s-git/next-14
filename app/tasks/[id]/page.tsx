import { TaskType } from '@/utils/interfaces/drinks';
import { Bird } from 'lucide-react';
import { getSingleTask } from '@/utils/actions/getSingleTask';
import Link from 'next/link';
import EditTaskForm from '@/components/tasks/EditTaskForm';

export default async function SingleTask({
  params,
}: {
  params: { id: string };
}) {
  const taskId = params.id;
  const task: TaskType | null = await getSingleTask(taskId);

  if (!task)
    return (
      <div className="w-full flex items-center flex-col leading-loose">
        <Bird className="w-40 h-40 mb-4" />
        <h1 className="text-xl">No tasks found for ID:</h1>
        <p>{taskId}</p>
      </div>
    );

  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-primary uppercase">
          back to tasks
        </Link>
      </div>
      <div className="flex w-full justify-center">
        <EditTaskForm {...task} />
      </div>
    </>
  );
}
