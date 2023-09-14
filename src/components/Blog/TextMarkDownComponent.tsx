import { useEffect, useState } from "react";
import { Root } from "remark-parse/lib";
import ReactMarkdown from "react-markdown";
import { astToMarkDown } from "@/utils/helper";
import { registerComponent } from "../ComponentFactory/ComponentFactory";

interface Props {
  ast: Root;
}

const TextMarkDownComponent = (props: Props) => {
  const [markDown, setMarkDown] = useState<string>(``);

  useEffect(() => {
    (async () => {
      const markDownStr = await astToMarkDown(props.ast);
      setMarkDown(markDownStr);
    })();
  }, [props.ast]);

  return <ReactMarkdown className="markdown">markDown</ReactMarkdown>;
};

export const loadTextMarkDownComponent = () => {
  registerComponent("MarkDownText", TextMarkDownComponent);
};
