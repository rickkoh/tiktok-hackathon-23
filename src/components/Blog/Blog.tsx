"use client";
import {
  Ref,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useReducer,
  useState,
} from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ComponentRegistry } from "@/types";
import FactoryProvider from "../ComponentRegistry/FactoryProvider";
import FactoryComponents from "../ComponentRegistry/FactoryComponents";
import { ComponentRegistryProps } from "../ComponentRegistry/FactoryComponent";
import { loadTextComponent } from "./TextComponentRegistry";
import { loadProductComponent } from "./ProductComponent";
import { loadTitleComponent } from "./TitleRegistry";

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
    type: "Title",
    props: {
      text: "1. Best Overall",
    },
  },
  {
    type: "Product",
    props: {
      title: "Title",
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
  {
    type: "Title",
    props: {
      text: "2. Most Useful",
    },
  },
  {
    type: "Product",
    props: {
      title: "Title",
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

function registryReducer(
  state: ComponentRegistryProps[],
  action: any
): ComponentRegistryProps[] {
  switch (action.type) {
    case "add":
      return [...state, { ...action.payload }];
    case "addAll":
      return [
        ...state,
        ...action.payload.map((e: ComponentRegistryProps) => ({
          type: e.type,
          props: e.props,
        })),
      ];
    case "update":
      return state.map((e, i) =>
        i === action.payload.id
          ? { type: action.payload.type, props: action.payload.props }
          : e
      );
    case "delete":
      return state.filter((e, i) => i !== action.payload.id);
    case "set":
      return action.payload;
    default:
      return state;
  }
}

interface Props {}

export interface BlogRef {
  open: () => void;
}

function Blog(props: Props, ref: Ref<BlogRef>) {
  // Component state
  const [showModal, setShowModal] = useState(true);

  const [fullscreenModal, setFullscreenModal] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      setShowModal(true);
    },
  }));

  // Registry state
  const [state, dispatch] = useReducer(registryReducer, []);

  useEffect(() => {
    loadTextComponent();
    loadTitleComponent();
    loadProductComponent();
    dispatch({
      type: "addAll",
      payload: fakeComponents,
    });
  }, []);

  return (
    <div
      className={`fixed transition-all duration-500 w-full h-[100dvh] rounded-t-xl shadow-xl flex flex-col gap-4 bg-background overflow-scroll top-0
    ${
      showModal
        ? fullscreenModal
          ? "rounded-none translate-y-0"
          : "translate-y-1/4 rounded-t-xl"
        : "translate-y-full"
    }
    `}
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
          <button
            className="absolute right-5"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <AiOutlineClose className="w-6 h-6 transition-all duration-300 hover:text-red-500" />
          </button>
        </div>
      </section>
      <section className="p-6 pt-0 py-3 flex flex-col gap-2">
        {
          // Eventually will need to retrieve data from database
        }
        <h1 className="text-4xl">Top 5 product to buy this Christmas</h1>
        <p className="text-gray-700">
          Description lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus varius ligula id mauris pulvinar lobortis. Mauris sagittis
          scelerisque
        </p>
        <p>2 mins read • written by User</p>
        <FactoryProvider state={state} dispatch={dispatch}>
          <FactoryComponents />
        </FactoryProvider>
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
  );
}

export default forwardRef(Blog);
