import { registerComponent } from "../ComponentFactory.tsx/ComponentFactory";

interface Props {
  text: string;
}

const TextComponent = (props: Props) => {
  return <p className="text-sm">{props.text}</p>;
};

export const loadTextComponent = () => {
  registerComponent("Text", TextComponent);
};
