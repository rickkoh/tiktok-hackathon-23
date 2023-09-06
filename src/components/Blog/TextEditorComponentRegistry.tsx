"use client";
import { useImperativeHandle, useState } from "react";

export default function TextEditorComponentRegistry() {
  // text update => update json prop state for text
  const [text, setText] = useState("");
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="w-full h-fit focus:outline-none"
    />
  );
}
