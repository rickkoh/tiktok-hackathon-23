"use client";

import { loadTextComponent } from "@/components/Blog/TextComponentRegistry";
import { loadTextEditorComponent } from "@/components/Blog/TextEditorComponentRegistry";
import {
  FactoryComponentContext,
  FactoryComponents,
  FactoryComponentProvider,
} from "@/components/ComponentFactory.tsx/ComponentFactory";

import { useContext, useEffect, useRef, useState } from "react";

export default function () {
  return (
    <main className="w-full h-[100dvh] flex flex-col bg-gray-200">
      <section
        id="nav"
        className="flex flex-row w-full h-12 bg-white justify-between items-center"
      >
        <div>item 1</div>
        <div className="flex flex-row gap-4">
          <div>Preview</div>
          <div>Add</div>
        </div>
      </section>
      <section className="flex flex-col px-4 py-2 justify-center">
        <FactoryComponentProvider>
          <NewPageFactoryComponents />
        </FactoryComponentProvider>
      </section>
    </main>
  );
}

function NewPageFactoryComponents() {
  const { components: componentsReducer, addComponent } = useContext(
    FactoryComponentContext
  );

  useEffect(() => {
    loadTextComponent();
    loadTextEditorComponent();
  }, []);

  return (
    <>
      <button
        onClick={() =>
          addComponent({
            type: "TextEditor",
            props: {
              text: "Hello world!",
            },
          })
        }
      >
        Add TextEditor
      </button>
      <FactoryComponents />
      <p>{JSON.stringify(componentsReducer)}</p>
    </>
  );
}

/**
 * Components we will need
 * 1. Text component
 * 2. Image component
 * 3. Product component
 */

/**
 * Text component - How it works
 * 1. Just markdown text editor
 */

/**
 * Image Component - How it works
 * 1. Upload image to supabase storage
 * 2. Write alt text
 */

/**
 * Product component - How it works
 * Choose from a list of products created by user
 * Auto populate product details from supabase with the product id
 */
