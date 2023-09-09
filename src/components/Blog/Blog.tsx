"use client";
import {
  Ref,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useReducer,
  useRef,
  useState,
} from "react";
import { AiOutlineClose } from "react-icons/ai";
import { loadTextComponent } from "./TextComponentRegistry";
import { loadProductComponent } from "./ProductComponentRegistry";
import { loadTitleComponent } from "./TitleComponentRegistry";
import Image from "next/image";
import { loadImageComponent } from "./ImageComponentRegistry";
import { BsShare, BsChat, BsBookmark, BsHeart } from "react-icons/bs";
import {
  ComponentRegistry,
  FactoryComponentContext,
  FactoryComponents,
  FactoryComponentProvider,
} from "../ComponentFactory.tsx/ComponentFactory";

// Backend to retrieve the data here

/**
 * Blog has two state,
 * 1. Blog in modal view when the widget is clicked
 * 2. Able to xxpand fully when the widget is dragged up
 */

// database

// fake data here for now
// make changes to the fake data to see how componentregistry works
// data here will eventually be fetched from live database

const fakeComponents: ComponentRegistry[] = [
  {
    type: "Text",
    props: {
      text: "Rubber duckies have been a beloved bathtub companion for generations, bringing joy and laughter to bath time routines. These timeless toys come in a variety of shapes and sizes, but in this article, we're diving into the world of rubber duckies to uncover the top three must-have rubber duckies. Among them, you'll find one that's sure to make waves – the Donald Duck, a rubber ducky inspired by the iconic Donald Trump.",
    },
  },
  {
    type: "Title",
    props: {
      text: "1. Donald Duck: A Presidential Quack-tastic Addition",
    },
  },
  {
    type: "Product",
    props: {
      title: "Donald Duck",
      src: "/donald_duck.jpg",
      description: "12,000 sold",
    },
  },
  {
    type: "Text",
    props: {
      text: "The Donald Duck rubber ducky is not your ordinary bath toy. Modeled after the former President of the United States, Donald Trump, this whimsical creation adds a unique twist to the classic rubber ducky. With meticulous attention to detail, it features the signature hairstyle, suit, and even a tiny red tie.",
    },
  },
  {
    type: "Image",
    props: {
      src: "/donald_duck2.png",
      alt: "Rubber Ducky held by Jesus' hand",
    },
  },
  {
    type: "Title",
    props: {
      text: "Features:",
    },
  },
  {
    type: "Text",
    props: {
      text: "Pudor lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius ligula id mauris pulvinar lobortis. Mauris sagittis scelerisque",
    },
  },
  {
    type: "Text",
    props: {
      text: "Whether you're a fan of Donald Trump or simply appreciate the novelty of this one-of-a-kind rubber duck, the Donald Duck is sure to be a conversation starter.",
    },
  },
  {
    type: "Title",
    props: {
      text: "2. Classic Yellow Rubber Ducky: Timeless Charm",
    },
  },
  {
    type: "Product",
    props: {
      title: "Title",
      src: "/donald_duck.jpg",
      description: "Proin vehicula dui at odio commodo uix phoinex.",
    },
  },
  {
    type: "Text",
    props: {
      text: "Pudor lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius ligula id mauris pulvinar lobortis. Mauris sagittis scelerisque",
    },
  },
  {
    type: "Text",
    props: {
      text: "Pudor lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius ligula id mauris pulvinar lobortis. Mauris sagittis scelerisque",
    },
  },
];

interface Props {}

export interface BlogRef {
  open: () => void;
}

function Blog(props: Props, ref: Ref<BlogRef>) {
  const [showModal, setShowModal] = useState(false);

  const [fullscreenModal, setFullscreenModal] = useState(false);

  const mainRef = useRef<HTMLDivElement>(null);

  function handleScroll(e: any) {
    if (e.target.scrollTop >= 50) {
      setFullscreenModal(true);
    } else if (e.target.scrollTop <= -50) {
      handleClose();
    } else {
      setFullscreenModal(false);
    }
  }

  function handleClose() {
    setShowModal(false);
    setFullscreenModal(false);
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  useImperativeHandle(ref, () => ({
    open: () => {
      if (mainRef.current) {
        mainRef.current.scrollTo({ top: 0, behavior: "instant" });
      }
      setShowModal(true);
    },
  }));

  return (
    <>
      {showModal && (
        <section
          id="toolbar"
          className="fixed flex flex-row justify-between items-center px-16 py-4 pb-8 bottom-0 left-0 h-fit w-full bg-white z-50"
        >
          <BsShare className="w-6 h-6" />
          <BsBookmark className="w-6 h-6" />
          <BsChat className="w-6 h-6" />
          <BsHeart className="w-6 h-6" />
        </section>
      )}
      <div
        ref={mainRef}
        className={`fixed transition-all duration-500 w-full h-[100dvh] rounded-t-xl shadow-xl flex flex-col gap-4 bg-background overflow-scroll top-0
    ${
      showModal
        ? fullscreenModal
          ? "rounded-none translate-y-0"
          : "translate-y-1/4 rounded-t-xl"
        : "translate-y-full"
    }
    `}
        onScroll={handleScroll}
      >
        <section id="nav" className="sticky top-0 left-0">
          <div className="w-full h-12 p-3 flex flex-row justify-end bg-white items-center">
            <button
              className="absolute left-1/2 -translate-x-1/2"
              onClick={() => {
                setFullscreenModal(!fullscreenModal);
              }}
            >
              <div className="w-32 h-1 rounded-full transition-all duration-300 bg-gray-200 hover:bg-gray-600" />
            </button>
            <button className="absolute right-5" onClick={handleClose}>
              <AiOutlineClose className="w-6 h-6 transition-all duration-300 hover:text-red-500" />
            </button>
          </div>
        </section>
        <section className="p-6 pt-0 py-3 flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Top 3 Rubber Duckies</h1>
          <div className="flex flex-row gap-3 items-center">
            <Image
              src="/dp.jpeg"
              width={64}
              height={64}
              alt=""
              className="w-12 h-12 rounded-full aspect-square"
            />
            <div className="flex flex-col leading-none">
              <div>Cap&apos;n Crunch</div>
              <div className="text-gray-400">5 min read</div>
            </div>
            <div className="flex flex-col leading-none ml-2">
              <button className="text-red-400 text-start hover:text-red-500">
                Follow
              </button>
              <div className="text-gray-400">Sep 5, 2023</div>
            </div>
          </div>
          <FactoryComponentProvider>
            <BlogFactoryComponents />
          </FactoryComponentProvider>
          <section id="comment-section" className="flex flex-col gap-4">
            {
              // Eventually will need to retrieve data from database
            }
            <h1 className="text-2xl font-bold my-1 mt-4">Comments</h1>
            <p>Comment 1</p>
            <p>Comment 2</p>
            <p>Comment 3</p>
            <p>Comment 4</p>
            <p>Componentize Comment</p>
          </section>
          <div className="mb-20"></div>
        </section>
      </div>
    </>
  );
}

function BlogFactoryComponents() {
  const { addAllComponents } = useContext(FactoryComponentContext);

  useEffect(() => {
    loadTextComponent();
    loadTitleComponent();
    loadProductComponent();
    loadImageComponent();
    addAllComponents(fakeComponents);
  }, [addAllComponents]);
  return <FactoryComponents />;
}

export default forwardRef(Blog);
