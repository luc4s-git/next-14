'use client';

import { CircleEllipsis, FileX } from 'lucide-react';
import { useFormStatus } from 'react-dom';

const DeleteBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-secondary btn-sm max-w"
      disabled={pending}
    >
      {pending ? <CircleEllipsis /> : <FileX />}
    </button>
  );
};

export default DeleteBtn;
