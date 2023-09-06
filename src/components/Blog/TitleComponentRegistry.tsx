import { memo } from "react";
import { registerComponent } from "../ComponentRegistry/FactoryComponent";

interface Props {
  text: string;
}

const TitleComponent = (props: Props) => {
  return <h1 className="text-md font-bold my-1">{props.text}</h1>;
};

export const loadTitleComponent = () => {
  registerComponent("Title", TitleComponent);
};
