'use client';

import { createTask } from '@/utils/actions/createTask';
import { useEffect } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import toast from 'react-hot-toast';

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

const initialState = {
  message: null,
};

export default function TaskForm() {
  const [state, formAction] = useFormState(createTask, initialState);

  useEffect(() => {
    if (state.message === 'error') {
      toast.error('There was an error.');
      return;
    }

    if (state.message === 'success') {
      toast.success('Task created.');
      return;
    }
  }, [state]);

  return (
    <form action={formAction}>
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
