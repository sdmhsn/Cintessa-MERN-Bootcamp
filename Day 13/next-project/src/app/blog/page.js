import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>Blog</h1>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
