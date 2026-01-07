import Link from 'next/link';

export default function HomePage() {
  const links = [{ href: '/components', display: 'Components - section2' }];
  return (
    <div className="ml-4">
      <ul className="list-disc">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-blue-400 hover:underline">
              {link.display}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
