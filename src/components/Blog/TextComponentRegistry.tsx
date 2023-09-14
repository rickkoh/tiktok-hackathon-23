import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { registerComponent } from "../ComponentFactory/ComponentFactory";

interface Props {
  text: string;
}

const TextComponent = (props: Props) => {
  return (
    <ReactMarkdown className="markdown text-sm">{props.text}</ReactMarkdown>
  );
};

export const loadTextComponent = () => {
  registerComponent("Text", TextComponent);
};
