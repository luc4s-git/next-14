import prisma from '@/utils/db/db';

const createTask = async (formData: FormData) => {
  'use server';

  const inputValue = formData.get('task');

  if (!inputValue) return;

  await prisma.task.create({
    data: {
      content: inputValue.toString(),
    },
  });
};

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
