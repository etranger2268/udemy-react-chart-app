'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <Link href="/" className="text-blue-400 hover:underline">
      ホームへ戻る
    </Link>
  );
}
