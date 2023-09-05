"use client";
import { Ref, forwardRef, useImperativeHandle, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ProductComponent from "../ComponentRegistry/ProductComponent";

// Backend to retrieve the data here

/**
 * Blog has two state,
 * 1. Blog in modal view when the widget is clicked
 * 2. Able to xxpand fully when the widget is dragged up
 */

interface Props {}

export interface BlogRef {
  open: () => void;
}

function Blog(props: Props, ref: Ref<BlogRef>) {
  const [showModal, setShowModal] = useState(true);

  const [fullscreenModal, setFullscreenModal] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      setShowModal(true);
    },
  }));

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
        <h1 className="text-4xl">Top 5 product to buy this Christmas</h1>
        <p className="text-gray-700">
          Description lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus varius ligula id mauris pulvinar lobortis. Mauris sagittis
          scelerisque
        </p>
        <p>2 mins read • written by User</p>
        <p>Product Components</p>
        <h1 className="text-2xl font-bold my-1">1. Best Overall</h1>
        <ProductComponent />
        <p>
          Pudor lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus varius ligula id mauris pulvinar lobortis. Mauris sagittis
          scelerisque
        </p>
        <p>
          Pudor lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus varius ligula id mauris pulvinar lobortis. Mauris sagittis
          scelerisque
        </p>
        <h1 className="text-2xl font-bold my-1">2. Most Useful</h1>
        <ProductComponent />
        <p>
          Pudor lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus varius ligula id mauris pulvinar lobortis. Mauris sagittis
          scelerisque
        </p>
        <p>
          Pudor lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus varius ligula id mauris pulvinar lobortis. Mauris sagittis
          scelerisque
        </p>
        <section id="comment-section" className="flex flex-col gap-4">
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
