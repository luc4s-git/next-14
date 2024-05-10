'use client';

import { createTask } from '@/utils/actions/createTask';
import { useFormStatus } from 'react-dom';

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-primary join-item capitalize"
      disabled={pending}
    >
      {pending ? 'please wait...' : 'create task'}
    </button>
  );
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
        <SubmitBtn />
      </div>
    </form>
  );
}
