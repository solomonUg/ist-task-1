"use client";
import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <Link
        href="/"
        className="inline-block bg-black text-white px-6 py-3 text-lg"
      >
        Go home
      </Link>
    </main>
  );
}
