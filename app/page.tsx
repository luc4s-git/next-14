import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-5xl capitalize italic font-bold mb-8">
        ad victoriam
      </h1>
      <div className="flex w-full justify-center">
        <Link href="/client" className="btn btn-accent capitalize">
          access client application
        </Link>
      </div>
    </div>
  );
}
