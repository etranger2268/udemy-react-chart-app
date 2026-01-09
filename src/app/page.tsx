import Link from 'next/link';

export default function HomePage() {
  const links = [
    { href: '/components', display: 'Components - section02' },
    { href: '/countup', display: 'Count up - section03' },
    { href: '/text', display: 'Text - section04' },
    { href: '/input', display: 'Input - section05' },
    { href: '/background', display: 'Background - section06' },
    { href: '/feedback', display: 'Feedback - section07' },
    { href: '/temperature', display: 'Temperature - section08' },
    { href: '/quiz', display: 'Quiz - section09' },
    { href: '/timer', display: 'Timer - section10' },
    { href: '/famous-saying', display: 'Famous Saying - section11' },
    { href: '/traffic-light', display: 'Traffic Light - section12' },
  ];
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
