import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-7xl capitalize italic">ad victoriam</h1>
      <Link href="/about">Brotherhood of Steel</Link>
    </div>
  );
}
