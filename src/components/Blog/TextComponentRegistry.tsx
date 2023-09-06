import { memo } from "react";
import { registerComponent } from "../ComponentRegistry/FactoryComponent";

interface Props {
  text: string;
}

const TextComponent = (props: Props) => {
  return <p className="text-sm">{props.text}</p>;
};

export const loadTextComponent = () => {
  registerComponent("Text", TextComponent);
};
