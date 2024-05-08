import { deleteTask } from '@/utils/actions/deleteTask';
import { FileX } from 'lucide-react';

type Props = {
  taskId: string;
};

export default async function DeleteForm({ taskId }: Props) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={taskId} />
      <button className="btn btn-secondary btn-sm">
        <FileX />
      </button>
    </form>
  );
}
