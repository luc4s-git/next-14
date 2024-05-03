'use client';

import { useState } from 'react';

export default function Client() {
  const [count, setCount] = useState(0);
  return (
    <div className="grid place-items-center ">
      <h1 className="text-7xl font-bold">{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
