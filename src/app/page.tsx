"use client";
import Blog, { BlogRef } from "@/components/Blog/Blog";
import ExampleComponent from "@/components/ExampleComponent";
import BottomNavbar from "@/components/Navbar/BottomNavbar";
import TopNavbar from "@/components/Navbar/TopNavbar";
import Reel from "@/components/Reel/Reel";
import { useRef, useState } from "react";

export default function Home() {
  const blogRef = useRef<BlogRef>(null);

  return (
    <main className="flex flex-col">
      {/* Header */}
      <TopNavbar />
      <Reel />
      <BottomNavbar />
      {/* <button
        className="border w-fit h-fit border-black px-3 py-1 bg-blue-300"
        onClick={() => {
          if (blogRef.current) {
            blogRef.current.open();
          }
        }}
      >
        Open widget
      </button> */}
      {/* <Blog ref={blogRef} /> */}
    </main>
  );
}
