import { memo } from "react";
import { registerComponent } from "../ComponentRegistry/FactoryComponent";
import Image from "next/image";

interface Props {
  title: string;
  src: string;
  description: string;
  price: number;
}

function ProductComponent(props: Props) {
  return (
    <div className="w-full h-fit px-3 py-2 items-center rounded-lg flex flex-row bg-gray-100 gap-4 my-1">
      <Image
        src={props.src}
        width={128}
        height={128}
        className="w-24 h-24 rounded-lg aspect-square"
        objectFit="contain"
        blurDataURL="/donald_duck.jpg"
        alt=""
      />
      <div className="flex flex-col gap-1 leading-none">
        <h1 className="font-bold text-xl">{props.title}</h1>
        <p>
          <s className="text-gray-400">$29.00</s> $20.00
        </p>
        <div className="flex flex-row">
          <p className="text-xs">{props.description}</p>
        </div>
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
