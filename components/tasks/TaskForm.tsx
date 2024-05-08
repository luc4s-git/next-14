'use client';

import prisma from '@/utils/db/db';
import { FormEvent } from 'react';

const handleForm = async (e: FormEvent): Promise<void> => {
  e.preventDefault();
  const taskElement = e.currentTarget as HTMLFormElement;
  const task = taskElement.task.value;

  if (!task) return;

  await prisma.task.create({
    data: {
      content: task,
    },
  });
};

export default function TaskForm() {
  return (
    <form
      onSubmit={(e: FormEvent) => handleForm(e)}
      className="flex items-center justify-center"
    >
      <input
        type="text"
        name="task"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs rounded-tr-none rounded-br-none"
      />
      <button className="btn btn-primary uppercase rounded-tl-none rounded-bl-none">
        Create Task
      </button>
    </form>
  );
}
