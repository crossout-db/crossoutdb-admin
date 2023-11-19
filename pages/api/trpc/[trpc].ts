import * as trpcNext from '@trpc/server/adapters/next';
import { createContext } from '@server/context';
import { appRouter } from '@server/api/_app';

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: (options) => createContext(options),
});


// import { createNextApiHandler } from "@trpc/server/adapters/next";
// import { env } from "~/env.mjs";
// import { appRouter } from "@server/api/_app";
// import { createContext } from "@server/context";

// // export API handler
// export default createNextApiHandler({
//   router: appRouter,
//   createContext: createContext,
//   onError:
//     env.NODE_ENV === "development"
//       ? ({ path, error }) => {
//           console.error(
//             `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
//           );
//         }
//       : undefined,
// });
