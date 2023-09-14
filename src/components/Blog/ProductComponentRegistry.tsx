import Image from "next/image";
import { registerComponent } from "../ComponentFactory/ComponentFactory";
import Link from "next/link";
import Stars from "../Product/Stars";

interface Props {
  id?: number;
  title: string;
  src: string;
  description: string;
  productUrl?: string;
  rating?: number;
}

export default function ProductComponent(props: Props) {
  return (
    <Link
      className="w-full h-fit px-3 py-2 items-center rounded-lg flex flex-row bg-gray-100 gap-4 my-1"
      href={"/product"}
    >
      <div className="flex flex-col gap-4 w-full h-fit">
        <div className="flex flex-row gap-4 w-full h-fit">
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
              <p className="text-xs">
                <Stars rating={props.rating ?? 5} />
                {props.description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-start items-center">
          <h1 className="font-bold">Author rating:</h1>
          <Stars rating={5} width={16} height={16} />
        </div>
      </div>
    </Link>
  );
}

export const loadProductComponent = () => {
  registerComponent("Product", ProductComponent);
};
