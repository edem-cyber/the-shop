import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mt-8">Next.js + Tailwind CSS</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className=" text-xl text-center">
          Get started by editing{' '}
          <code className="bg-gray-900 rounded-md p-3 font-mono text-3xl">
            pages/index.js
          </code>
        </p>
        </div>
    </main>
  );
}
