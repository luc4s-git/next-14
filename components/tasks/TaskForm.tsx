'use client';

import { createTask } from '@/utils/actions/createTask';
import { useFormStatus, useFormState } from 'react-dom';

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

  return (
    <form action={formAction}>
      {state?.message ? <p className="mb-2">{state.message}</p> : null}
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
