"use client";

import { loadImageEditorComponent } from "@/components/Blog/ImageEditorComponent";
import { loadProductEditorComponent } from "@/components/Blog/ProductEditorComponent";
import { loadTextComponent } from "@/components/Blog/TextComponentRegistry";
import TextEditor, {
  loadTextEditorComponent,
} from "@/components/Blog/TextEditorComponentRegistry";
import {
  FactoryComponentContext,
  FactoryComponents,
  FactoryComponentProvider,
} from "@/components/ComponentFactory.tsx/ComponentFactory";
import Link from "next/link";

import { useContext, useEffect, useState } from "react";
import { AiOutlineLink, AiOutlinePlus } from "react-icons/ai";
import { PiImageLight, PiTextTLight } from "react-icons/pi";

export default function () {
  const [title, setTitle] = useState("");
  return (
    <main className="w-full h-[100dvh] flex flex-col">
      <section
        id="nav"
        className="flex flex-row w-full h-12 px-2 bg-white justify-between items-center"
      >
        <Link href="/">Close</Link>
        <div className="flex flex-row gap-4">
          <button>Preview</button>
          <button className="text-red-400 hover:text-red-500">Done</button>
        </div>
      </section>
      <section className="flex flex-col px-2 py-2 justify-center gap-2">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full h-fit focus:outline-none p-2 rounded-lg border border-gray-300"
        />
        <FactoryComponentProvider>
          <NewPageFactoryComponents />
        </FactoryComponentProvider>
      </section>
    </main>
  );
}

function NewPageFactoryComponents() {
  const { components, addComponent } = useContext(FactoryComponentContext);

  const [expandButtons, setExpandButtons] = useState<boolean>(false);

  // TODO
  function preview() {
    // Convert components to respective components
    // To have a function that maps the components to the respective components
  }

  // TODO
  function reorderComponents() {
    // Implement a way to reorder components
  }

  useEffect(() => {
    loadTextComponent();
    loadTextEditorComponent();
    loadProductEditorComponent();
    loadImageEditorComponent();
  }, []);

  return (
    <>
      <FactoryComponents />
      <div className="relative flex justify-center items-center w-full transition-all duration-400">
        <button
          className={`flex absolute ${
            expandButtons
              ? "translate-x-[120%] shadow-lg"
              : "invisible shadow-none"
          } justify-center items-center rounded-full w-10 h-10 bg-white text-red-500 hover:bg-red-500 hover:text-white transitiona-all duration-300 border border-red-500`}
          onClick={() => {
            addComponent({
              type: "TextEditor",
              props: {
                placeholder: "Text",
              },
            });
            setExpandButtons(false);
          }}
        >
          <PiTextTLight className="w-5 h-5" />
        </button>
        <button
          className={`flex absolute ${
            expandButtons
              ? "translate-x-[240%] shadow-lg"
              : "invisible shadow-none"
          } justify-center items-center rounded-full w-10 h-10 bg-white text-red-500 hover:bg-red-500 hover:text-white transitiona-all duration-300 border border-red-500`}
          onClick={() => {
            addComponent({
              type: "ProductEditor",
              props: {
                productUrl: "",
              },
            });
            setExpandButtons(false);
          }}
        >
          <AiOutlineLink className="w-5 h-5" />
        </button>
        <button
          className={`flex absolute ${
            expandButtons
              ? "translate-x-[360%] shadow-lg"
              : "invisible shadow-none"
          } justify-center items-center rounded-full w-10 h-10 bg-white text-red-500 hover:bg-red-500 hover:text-white transitiona-all duration-300 border border-red-500`}
          onClick={() => {
            addComponent({
              type: "ImageEditor",
              props: {},
            });
            setExpandButtons(false);
          }}
        >
          <PiImageLight className="w-5 h-5" />
        </button>
        <button
          className={`flex z-10 justify-center border-red-500 border items-center rounded-full w-10 h-10 shadow-lg transitiona-all duration-300 ${
            expandButtons
              ? "rotate-45 bg-red-500 text-white"
              : "bg-white text-red-500"
          }`}
          onClick={() => setExpandButtons(!expandButtons)}
        >
          <AiOutlinePlus className="w-5 h-5" />
        </button>
      </div>
      {
        // <p>{JSON.stringify(components)}</p>
      }
    </>
  );
}
