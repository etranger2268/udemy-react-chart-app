import Link from 'next/link';
import { LINKS } from '@/app/constants';

export default function HomePage() {
  return (
    <div className="ml-4">
      <ul className="list-disc">
        {LINKS.map((link) => (
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
