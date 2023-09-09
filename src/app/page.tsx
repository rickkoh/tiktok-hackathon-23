"use client";
import BottomNavbar from "@/components/Navbar/BottomNavbar";
import TopNavbar from "@/components/Navbar/TopNavbar";
import Reel from "@/components/Reel/Reel";
import { useEffect, useRef, useState } from "react";
import useScrollSnap from "react-use-scroll-snap";

export default function Home() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 5 });

  return (
    <main className="flex flex-col">
      {/* Header */}
      <TopNavbar />
      <div ref={scrollRef}>
        <Reel color="bg-blue-400" />
        <Reel color="bg-red-400" />
      </div>
      <div className="h-[72px]"></div>
      <BottomNavbar />
    </main>
  );
}
