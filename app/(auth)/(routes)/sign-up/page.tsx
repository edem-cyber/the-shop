import { Button } from '@/components/ui/button';
import Link from 'next/link';


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to the Next.js Tailwind CSS Starter
      </h1>
      <Link href="/signup">
        <Button>Sign Up</Button>
      </Link>
    </main>
  );
}
