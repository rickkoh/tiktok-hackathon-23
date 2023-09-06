"use client";
import Blog, { BlogRef } from "@/components/Blog/Blog";
import ExampleComponent from "@/components/ExampleComponent";
import { Database, Tables } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useCallback, useEffect, useRef, useState } from "react";

export default function SupabaseTest() {
  const supabase = createClientComponentClient<Database>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Tables<"reels">[]>([]);

  const getReels = useCallback(async () => {
    setIsLoading(true);
    const { data, error } = await supabase.from("reels").select("*");

    setData(data ?? []);

    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
    setIsLoading(false);
  }, [supabase]);

  return (
    <main className="flex flex-col w-full h-[100dvh] bg-secondary">
      <h1>Test Page</h1>
      <p>Test Database Connection with Reels Table</p>
      {data.map((reel) => (
        <p>{JSON.stringify(reel)}</p>
      ))}
      <button
        className="border w-fit h-fit border-black px-3 py-1 bg-blue-300"
        onClick={() => {
          getReels();
        }}
      >
        {isLoading ? "Loading..." : "Fetch"}
      </button>
    </main>
  );
}
