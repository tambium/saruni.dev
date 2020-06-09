import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Route {
  href: string;
  isSelected: boolean;
  pathname: string;
  title: string;
}

interface ChildProps {
  depth: number;
  route: Route;
}

export const Child: React.FC<ChildProps> = ({ depth, route }) => {
  const router = useRouter();
  const { href, isSelected, pathname, title } = route;

  const isHashChange = pathname === router.pathname;

  return (
    <div>
      {isHashChange ? (
        <a href={pathname}>{title}</a>
      ) : (
        <Link href={href} as={pathname}>
          <a css={{ color: "blue" }}>{title}</a>
        </Link>
      )}
    </div>
  );
};
