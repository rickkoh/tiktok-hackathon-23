"use client";
import { useState } from "react";

export default function ExampleComponent() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-3 w-fit bg-red-200">
      <h1>This is an example component</h1>
      <p>Counter: {count}</p>
      <button
        className="py-1 px-3 border border-black"
        onClick={() => setCount(count + 1)}
      >
        click me
      </button>
    </div>
  );
}
