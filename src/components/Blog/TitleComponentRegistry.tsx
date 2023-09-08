import { registerComponent } from "../ComponentFactory.tsx/ComponentFactory";

interface Props {
  text: string;
}

const TitleComponent = (props: Props) => {
  return <h1 className="text-md font-bold my-1">{props.text}</h1>;
};

export const loadTitleComponent = () => {
  registerComponent("Title", TitleComponent);
};
