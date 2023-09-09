import Image from "next/image";
import { registerComponent } from "../ComponentFactory.tsx/ComponentFactory";
import Link from "next/link";

interface Props {
  id?: number;
  title: string;
  src: string;
  description: string;
  url?: string;
  // price: number;
}

export default function ProductComponent(props: Props) {
  return (
    <Link
      className="w-full h-fit px-3 py-2 items-center rounded-lg flex flex-row bg-gray-100 gap-4 my-1"
      href={props.url ?? ""}
    >
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
    </Link>
  );
}

export const loadProductComponent = () => {
  registerComponent("Product", ProductComponent);
};
