import { deleteTask } from '@/utils/actions/deleteTask';
import DeleteBtn from './DeleteBtn';

type Props = {
  taskId: string;
};

export default async function DeleteForm({ taskId }: Props) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={taskId} />
      <DeleteBtn />
    </form>
  );
}
