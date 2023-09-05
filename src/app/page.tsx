"use client";
import Blog from "@/components/Blog/Blog";
import ExampleComponent from "@/components/ExampleComponent";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-[100dvh] bg-secondary">
      <h1>main page</h1>
      <ExampleComponent />
      <button className="border w-fit h-fit border-black px-3 py-1 bg-blue-300">
        Open widget
      </button>
      <Blog />
    </main>
  );
}
