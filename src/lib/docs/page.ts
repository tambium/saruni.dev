import fs from "fs";
import path from "path";
import { removeFromLast } from "./utils";

interface Routes {
  path?: string;
  isHeading?: boolean;
  title: string;
  routes?: Routes[];
}

export const findRouteByPath = (path: string, routes: Routes[]) => {
  for (const route of routes) {
    if (route.path && removeFromLast(route.path, ".") === path) {
      return route;
    }
    const childPath = route.routes && findRouteByPath(path, route.routes);
    if (childPath) return childPath;
  }
};

export const getPaths = (nextRoutes: Routes[], carry = []) => {
  nextRoutes.forEach(({ path, routes }) => {
    if (path) {
      carry.push(removeFromLast(path, "."));
    } else if (routes) {
      getPaths(routes, carry);
    }
  });

  return carry;
};

// const docsDir = path.join(process.cwd(), "src/docs");

// const fetchFile = (): Promise<string[]> => {
//   return new Promise((resolve, reject) => {
//     fs.readdir(docsDir, (err, files) => {
//       if (err) return reject(err);
//       return resolve(
//         files
//           .filter((file) => file.match(/\.md$/))
//           .map((file) => path.join(docsDir, file))
//       );
//     });
//   });
// };

// export const getRawFile = async (path: string) => {
//   const file = await fetchFile(path);
// };
