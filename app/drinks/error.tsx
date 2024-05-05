'use client';

const error = (error: { error: { message: string } }) => {
  console.log(error);
  return <div>{error.error.message}</div>;
};

export default error;
