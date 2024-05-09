import { editTask } from '@/utils/actions/editTask';
import { TaskType } from '@/utils/interfaces/drinks';

export default function EditTaskForm(task: TaskType) {
  return (
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
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text capitalize">completed</span>
          <input
            type="checkbox"
            name="completed"
            id="completed"
            className="checkbox checkbox-primary checkbox-sm"
            checked={task.completed}
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-sm w-full uppercase">
        edit
      </button>
    </form>
  );
}
