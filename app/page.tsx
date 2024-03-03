import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to the Next.js Tailwind CSS Starter
      </h1>

      <a href='/signup'>
        Sign out
      </a>
    </main>
  );
}