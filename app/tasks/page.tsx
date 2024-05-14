import TaskForm from '@/components/tasks/TaskForm';
import TaskList from '@/components/tasks/TaskList';

export const dynamic = 'force-dynamic';

export default function TasksPage() {
  return (
    <div className="m-auto max-w-96">
      <TaskForm />
      <TaskList />
    </div>
  );
}
