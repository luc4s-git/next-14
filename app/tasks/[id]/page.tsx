import { editTask } from '@/utils/actions/editTask';
import { getSingleTask } from '@/utils/actions/getSingleTask';
import { TaskType } from '@/utils/interfaces/drinks';
import { Bird } from 'lucide-react';
import Link from 'next/link';

export default async function page({ params }: { params: { id: string } }) {
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
      <form
        action={editTask}
        className="max-w-sm p-12 border border-base-300 rounded-lg"
      >
        <input type="hidden" name="id" value={task.id} />
        <input
          type="text"
          name="task"
          value={task.content}
          className="input input-bordered w-full capitalize"
        />
        <button
          type="submit"
          className="btn btn-primary btn-sm w-full uppercase"
        >
          edit
        </button>
      </form>
    </>
  );
}
