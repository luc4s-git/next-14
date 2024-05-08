import { createTask } from '@/utils/actions/createTask';

export default function TaskForm() {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="Type Here"
          name="task"
          required
        />
        <button type="submit" className="btn btn-primary join-item capitalize">
          create task
        </button>
      </div>
    </form>
  );
}
