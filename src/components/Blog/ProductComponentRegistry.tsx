import { memo } from "react";
import { registerComponent } from "../ComponentRegistry/FactoryComponent";

interface Props {
  title: string;
  description: string;
}

function ProductComponent(props: Props) {
  return (
    <div className="w-full h-fit px-3 py-2 items-center rounded-lg flex flex-row bg-gray-100 gap-2 my-1">
      <p className="m-5 bg-pink-300 py-5 px-3">image</p>
      <div className="flex flex-col gap-1">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
// Proin vehicula dui at odio commodo uix phoinex.

function areEqual(prevProps: any, nextProps: any) {
  return prevProps.constructor.name === nextProps.constructor.name;
}

const MemoizedProductComponent = memo(ProductComponent, areEqual);

export const loadProductComponent = () => {
  registerComponent("Product", MemoizedProductComponent);
};
