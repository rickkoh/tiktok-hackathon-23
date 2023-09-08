"use client";
import Blog, { BlogRef } from "@/components/Blog/Blog";
import ExampleComponent from "@/components/ExampleComponent";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Home() {
  const blogRef = useRef<BlogRef>(null);

  return (
    <main className="flex flex-col w-full h-[100dvh] bg-secondary gap-4">
      <h1>main page</h1>
      <ExampleComponent />
      <button
        className="border w-fit h-fit border-black px-3 py-1 bg-blue-300"
        onClick={() => {
          if (blogRef.current) {
            blogRef.current.open();
          }
        }}
      >
        Open widget
      </button>
      <Link
        href="/new"
        className="border w-fit h-fit border-black px-3 py-1 bg-blue-300"
      >
        New Blog
      </Link>
      <Blog ref={blogRef} />
    </main>
  );
}
