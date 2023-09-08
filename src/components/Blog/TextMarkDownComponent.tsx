import { memo, useEffect, useState } from "react";
import { registerComponent } from "../ComponentRegistry/FactoryComponent";
import { Root } from "remark-parse/lib";
import ReactMarkdown from "react-markdown";
import { astToMarkDown } from "@/utils/helper";

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

  return <ReactMarkdown className="markdown" children={markDown} />;
};

export const loadTextMarkDownComponent = () => {
  registerComponent("MarkDownText", TextMarkDownComponent);
};
