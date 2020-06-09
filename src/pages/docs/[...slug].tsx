import React from "react";
import { promises } from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { DocsLayout } from "../../layouts/docs/DocsLayout";
import { getSlug } from "../../lib/docs/utils";
import { findRouteByPath, getPaths } from "../../lib/docs/page";
import manifest from "../../manifest.json";
import markdownToHtml from "../../lib/docs/markdown-to-html";

interface DocsProps {}

const Docs: React.FC<DocsProps> = ({ html }) => {
  const router = useRouter();

  return (
    <DocsLayout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DocsLayout>
  );
};

export async function getStaticPaths() {
  return { paths: getPaths(manifest.routes), fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = getSlug(params);

  const route = manifest && findRouteByPath(slug, manifest.routes);
  if (!route) return { props: {} };

  const md = await promises.readFile(
    path.join(process.cwd(), "src", `${route.path}`),
    "utf-8"
  );

  const { content, data } = matter(md);
  const html = await markdownToHtml(content);

  return { props: { data, html, route, routes: manifest.routes } };
};

export default Docs;
