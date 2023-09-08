"use client";
import Blog, { BlogRef } from "@/components/Blog/Blog";
import ExampleComponent from "@/components/ExampleComponent";
import { Database, Tables } from "@/types";
import { blogData1 } from "@/utils/dummyData";
import { astToMarkDown, markDownToAst } from "@/utils/helper";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useCallback, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Root } from "remark-parse/lib";

export default function SupabaseTest() {
  const supabase = createClientComponentClient<Database>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Tables<"reels">[]>([]);
  const [markDown, setMarkDown] = useState<string>(``);
  const [markDownAst, setMarkDownAst] = useState<Root | null>(null);

  const [markDownAstStr, setMarkDownAstStr] = useState<string>(``);
  const [markDown2, setMarkDown2] = useState<string>(``);

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
    console.log(markDownAst);
    setMarkDownAst(markDownAst);
  }, [markDown]);

  const handleAstToMarkDown = useCallback(async () => {
    const str = JSON.parse(markDownAstStr);
    console.log(str);
    const markDownStr = await astToMarkDown(str);
    setMarkDown2(markDownStr);
  }, [markDownAstStr]);

  return (
    <main className="flex flex-col w-full bg-secondary">
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
      <textarea
        cols={10}
        rows={10}
        value={markDown}
        onChange={(e) => setMarkDown(e.target.value)}
      />
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
      <p>AST to Markdown converter</p>
      <textarea
        value={markDownAstStr}
        cols={10}
        rows={10}
        onChange={(e) => setMarkDownAstStr(e.target.value)}
      />
      <p>Converted Markdown render</p>
      <ReactMarkdown className="markdown" children={markDown2} />
      <button
        className="border w-fit h-fit border-black px-3 py-1 bg-blue-300"
        onClick={() => {
          handleAstToMarkDown();
        }}
      >
        Convert to markdown
      </button>
    </main>
  );
}
