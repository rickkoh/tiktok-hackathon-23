import { unified } from "unified";
import remarkParse from "remark-parse";
import { Root } from "remark-parse/lib";
import remarkStringify from "remark-stringify";

// Markdown helpers

export async function markDownToAst(markDownContent: string): Promise<Root> {
  const ast: Root = await unified().use(remarkParse).parse(markDownContent);
  return ast;
}

export async function astToMarkDown(ast: Root): Promise<string> {
  const markDownContent = await unified().use(remarkStringify).stringify(ast);
  return markDownContent;
}
