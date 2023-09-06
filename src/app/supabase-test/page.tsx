"use client";
import Blog, { BlogRef } from "@/components/Blog/Blog";
import ExampleComponent from "@/components/ExampleComponent";
import { Database, Tables } from "@/types";
import { markDownToAst } from "@/utils/helper";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useCallback, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Root } from "remark-parse/lib";

const initialMarkdown = `
# A demo of react-markdown

react-markdown is a markdown component for React.

👉 Changes are re-rendered as you type.

👈 Try writing some markdown on the left.

## Overview
`;

export default function SupabaseTest() {
  const supabase = createClientComponentClient<Database>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Tables<"reels">[]>([]);
  const [markDown, setMarkDown] = useState<string>(initialMarkdown);
  const [markDownAst, setMarkDownAst] = useState<Root | null>(null);

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

  const handleMarkDownToAst = useCallback(async () => {
    const markDownAst: Root = await markDownToAst(markDown);
    setMarkDownAst(markDownAst);
  }, [markDown]);

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
      <h1>Markdown Render Test</h1>
      <ReactMarkdown className="markdown" children={markDown} />
      <h1 className="text-lg">AST Converter Test</h1>
      <p>{JSON.stringify(markDownAst)}</p>
      <button
        className="border w-fit h-fit border-black px-3 py-1 bg-blue-300"
        onClick={() => {
          handleMarkDownToAst();
        }}
      >
        Convert to ast
      </button>
    </main>
  );
}
