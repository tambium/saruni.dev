import React from "react";
import { styled } from "";
import manifest from "../../manifest.json";
import { removeFromLast } from "../../lib/docs/utils";
import { Heading, Parent, Child } from "../../components/sidebar";

interface DocsLayoutProps {
  children: React.ReactChild;
}

const SIDEBAR_WIDTH_FULL = 250;
const SIDEBAR_WIDTH_MIN = 225;
const CONTENT_WIDTH_FULL = 1260;
const CONTENT_WIDTH_MIN = 1000;

const getCategoryPath = (routes) => {
  const route = routes.find((r) => r.path);
  return route && removeFromLast(route.path, "/");
};

const SidebarRoutes = ({ routes: currentRoutes, depth = 1 }) => {
  return currentRoutes.map(({ path, title, routes, isHeading }) => {
    if (routes) {
      const pathname = getCategoryPath(routes);

      if (isHeading) {
        return (
          <Heading key={pathname} title={title}>
            <SidebarRoutes routes={routes} depth={depth + 1} />
          </Heading>
        );
      }

      return (
        <Parent depth={depth} key={pathname} title={title}>
          <SidebarRoutes routes={routes} depth={depth + 1} />
        </Parent>
      );
    }

    const href = "/docs/[...slug]";
    const pathname = removeFromLast(path, ".");
    const isSelected = false;
    const route = { href, isSelected, path, title, pathname };

    return <Child depth={depth} key={title} route={route} />;
  });
};

export const DocsLayout: React.FC<DocsLayoutProps> = ({ children }) => {
  const { routes } = manifest;

  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: `minmax(${SIDEBAR_WIDTH_FULL}px, calc((100% - ${CONTENT_WIDTH_FULL}px) / 2 + ${SIDEBAR_WIDTH_MIN}px)) ${CONTENT_WIDTH_MIN}px 1fr`,
        height: "100%",
      }}
    >
      <div
        css={{
          borderRight: "1px solid #e1e7ed",
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
          flexGrow: 1,
          minWidth: SIDEBAR_WIDTH_FULL,
          width: "100%",
        }}
      >
        <div css={{ width: SIDEBAR_WIDTH_MIN }}>
          <h1 css={{ fontSize: 21 }}>Saruni Docs</h1>
        </div>
        <div css={{ width: SIDEBAR_WIDTH_MIN }}>
          <SidebarRoutes routes={routes} />
        </div>
      </div>
      <div css={{ padding: 24 }}>{children}</div>
      <div css={{ flexGrow: 1 }} />
    </div>
  );
};
