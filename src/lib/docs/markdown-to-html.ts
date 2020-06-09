import unified from "unified";
import markdown from "remark-parse";
import remarkToRehype from "remark-rehype";
import raw from "rehype-raw";
import prism from "@mapbox/rehype-prism";
import html from "rehype-stringify";

const handlers = {
  // Add a className to inlineCode so we can differentiate between it and code fragments
  inlineCode(h, node) {
    return {
      ...node,
      type: "element",
      tagName: "code",
      properties: { className: "inline" },
      children: [
        {
          type: "text",
          value: node.value,
        },
      ],
    };
  },
};

// Create the processor
// Note: the order of the plugins is important
const getProcessor = unified()
  .use(markdown)
  .use(remarkToRehype, { handlers, allowDangerousHtml: true })
  .use(raw)
  .use(prism)
  .use(html)
  .freeze();

export default async function markdownToHtml(md) {
  try {
    // Initialize the processor with custom plugin
    const processor = getProcessor();

    const file = await processor.process(md);
    // Replace non-breaking spaces (char code 160) with normal spaces to avoid style issues
    return file.contents.toString().replace(/\xA0/g, " ");
  } catch (error) {
    console.error(`Markdown to HTML error: ${error}`);
    throw error;
  }
}
