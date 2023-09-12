import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/blog">Blog</Link>
    </div>
  );
}
