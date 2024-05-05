'use client';

const error = ({ error }: { error: Error }) => {
  console.log(error);
  return <div>{error.message}</div>;
};

export default error;
