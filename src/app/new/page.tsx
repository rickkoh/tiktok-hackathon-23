"use client";
import Blog, { BlogRef } from "@/components/Blog/Blog";
import { loadImageEditorComponent } from "@/components/Blog/ImageEditorComponent";
import { loadProductEditorComponent } from "@/components/Blog/ProductEditorComponent";
import { loadTextComponent } from "@/components/Blog/TextComponentRegistry";
import { loadTextEditorComponent } from "@/components/Blog/TextEditorComponentRegistry";
import {
  FactoryComponentContext,
  FactoryComponents,
  FactoryComponentProvider,
  ComponentRegistry,
} from "@/components/ComponentFactory/ComponentFactory";
import BlogProfile from "@/components/Profile/BlogProfile";
import { Database } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineLink, AiOutlinePlus } from "react-icons/ai";
import { PiImageLight, PiTextTLight } from "react-icons/pi";

export default function Page() {
  return (
    <FactoryComponentProvider>
      <NewPageFactoryComponents />
    </FactoryComponentProvider>
  );
}

function NewPageFactoryComponents() {
  const supabase = createClientComponentClient<Database>();

  const router = useRouter();
  const blogRef = useRef<BlogRef>(null);

  const { components, addComponent, updateComponent } = useContext(
    FactoryComponentContext
  );

  const [title, setTitle] = useState("");

  const [titleSaved, setTitleSaved] = useState(false);

  const [expandButtons, setExpandButtons] = useState<boolean>(false);

  const [componentRegistry, setComponentRegistry] = useState<
    ComponentRegistry[]
  >([]);

  function saveTitle() {
    if (title === undefined || title == "") {
      return;
    }
    setTitleSaved(true);
  }

  // Converts editor components to normal components
  function convertToComponentRegistry(): ComponentRegistry[] {
    return components.map((component) => {
      if (component.type == "TextEditor") {
        return {
          type: "Text",
          props: {
            text: component.props.text,
          },
        };
      } else if (component.type == "ImageEditor") {
        return {
          type: "Image",
          props: {
            src: component.props.src,
            alt: component.props.alt,
          },
        };
      } else {
        return {
          type: "Product",
          props: {
            product_id: "b62771c9-456c-4939-82d8-e13d95545d7d",
          },
        };
      }
    });
  }

  function handlePreview() {
    setComponentRegistry(convertToComponentRegistry());

    if (blogRef.current) {
      blogRef.current.open();
    }
  }

  const handleUpload = async () => {
    if (title === undefined || title == "") {
      return;
    }
    if (!componentRegistry || componentRegistry.length == 0) {
      return;
    }
    const { data: reelData, error: reelError } = await supabase
      .from("reels")
      .insert({
        caption: "Check out the new blog feature",
        user_id: "50801985-8941-4763-b362-5c0190769f67",
        video_id: "loading.mp4",
      })
      .select();

    const reel_id = reelData![0].id;

    const { data: blogData, error } = await supabase
      .from("blogs")
      .insert({
        title: title,
        component_registry: JSON.parse(
          JSON.stringify(convertToComponentRegistry())
        ),
        user_id: "50801985-8941-4763-b362-5c0190769f67",
        reel_id: reel_id,
      })
      .select();

    router.push("/");
  };

  useEffect(() => {
    // Load registry components
    loadTextComponent();
    loadTextEditorComponent();
    loadProductEditorComponent();
    loadImageEditorComponent();
  }, []);

  return (
    <main className="w-full h-[100dvh] flex flex-col">
      <section
        id="nav"
        className="flex flex-row w-full h-12 px-2 bg-white justify-between items-center"
      >
        <Link href="/add-reel">Close</Link>
        <div className="flex flex-row gap-4">
          <button onClick={handlePreview}>Preview</button>
          <button onClick={handleUpload}>Done</button>
        </div>
      </section>
      <section className="flex flex-col px-2 py-2 justify-center gap-2"></section>
      <section className="p-6 pt-0 py-3 flex flex-col gap-3">
        {!titleSaved && (
          <>
            <input
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full h-fit focus:outline-none p-2 rounded-lg border border-gray-300"
            />
            <div className="flex flex-row gap-2 w-full justify-center">
              <button onClick={saveTitle}>
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="23" cy="22" r="18" fill="#E94359" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.6262 18.3671C29.7447 18.4831 29.8387 18.621 29.9028 18.7728C29.967 18.9246 30 19.0873 30 19.2517C30 19.416 29.967 19.5787 29.9028 19.7305C29.8387 19.8823 29.7447 20.0202 29.6262 20.1363L21.9919 27.6329C21.8738 27.7493 21.7333 27.8416 21.5788 27.9046C21.4242 27.9676 21.2585 28 21.0911 28C20.9237 28 20.758 27.9676 20.6034 27.9046C20.4489 27.8416 20.3085 27.7493 20.1903 27.6329L16.3731 23.8846C16.2548 23.7684 16.161 23.6305 16.097 23.4787C16.033 23.327 16 23.1643 16 23C16 22.8357 16.033 22.673 16.097 22.5213C16.161 22.3695 16.2548 22.2316 16.3731 22.1154C16.6121 21.8808 16.9361 21.749 17.274 21.749C17.4413 21.749 17.6069 21.7813 17.7615 21.8442C17.9161 21.9071 18.0565 21.9992 18.1748 22.1154L21.0911 24.9816L27.8245 18.3671C27.9427 18.2507 28.0831 18.1584 28.2377 18.0954C28.3923 18.0324 28.558 18 28.7254 18C28.8927 18 29.0584 18.0324 29.213 18.0954C29.3676 18.1584 29.508 18.2507 29.6262 18.3671Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </>
        )}
        {titleSaved && (
          <>
            <h1 className="text-2xl font-bold">{title}</h1>
            <BlogProfile
              minRead={Math.round(components.length / 3)}
              date={new Date()}
            />
          </>
        )}
        <FactoryComponents />
        {titleSaved &&
          components.filter((component) => component.props.editing).length ==
            0 && (
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
          )}
      </section>
      <Blog ref={blogRef} title={title} componentRegistry={componentRegistry} />
    </main>
  );
}
