import { memo } from "react";
import { registerComponent } from "../ComponentRegistry/FactoryComponent";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

const ImageComponent = (props: Props) => {
  return (
    <div>
      <Image
        src={props.src}
        width={414}
        height={736}
        className="w-full h-fit my-1"
        alt={props.alt}
      />
      <p className="text-gray-500 text-sm">{props.alt}</p>
    </div>
  );
};

export const loadImageComponent = () => {
  registerComponent("Image", ImageComponent);
};
