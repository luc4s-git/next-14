import Link from 'next/link';

const pages = [
  { label: 'client', href: '/client' },
  { label: 'drinks', href: '/drinks' },
  { label: 'tasks', href: '/tasks' },
  { label: 'query', href: '/query' },
];

export default function Navbar() {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Next 14
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {pages.map((item) => {
            return (
              <li key={item.href}>
                <Link href={item.href} className="capitalize">
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
