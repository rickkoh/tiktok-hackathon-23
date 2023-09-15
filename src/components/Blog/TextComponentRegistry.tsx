import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { registerComponent } from "../ComponentFactory/ComponentFactory";
import { Root } from "remark-parse/lib";
import { useEffect, useState } from "react";
import { astToMarkDown } from "@/utils/helper";
interface Props {
  id?: number;
  ast: Root;
}

const TextComponent = (props: Props) => {
  const [markDown, setMarkDown] = useState<string>("");
  useEffect(() => {
    (async () => {
      const markDownStr = await astToMarkDown(props.ast);
      setMarkDown(markDownStr);
    })();
  }, [props.ast, props.id]);

  return <ReactMarkdown className="markdown">{markDown}</ReactMarkdown>;
};

export const loadTextComponent = () => {
  registerComponent("Text", TextComponent);
};
