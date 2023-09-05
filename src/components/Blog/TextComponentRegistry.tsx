import { memo } from "react";
import { registerComponent } from "../ComponentRegistry/FactoryComponent";

interface Props {
  text: string;
}

const TextComponent = (props: Props) => {
  return <p>{props.text}</p>;
};

function areEqual(prevProps: any, nextProps: any) {
  return prevProps.constructor.name === nextProps.constructor.name;
}

const MemoizedTextComponent = memo(TextComponent, areEqual);

export const loadTextComponent = () => {
  registerComponent("Text", MemoizedTextComponent);
};
