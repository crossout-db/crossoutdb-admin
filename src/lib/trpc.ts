import { TRPCClientError, httpBatchLink } from "@trpc/client";
// the generated `createTRPCNext` creates a client with typing that mimics PrismaClient
import { createTRPCNext } from "zenstack/generated/trpc/client/next";
import superjson from "superjson";
import type { AppRouter } from "../server/api/_app";

function getBaseUrl() {
  if (typeof window !== "undefined") return "";

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  } else {
    return `http://localhost:${process.env.PORT ?? 3000}`;
  }
}

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      transformer: superjson,
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      queryClientConfig: {
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false
          }
        }
      }
    };
  },
  ssr: false,
});

export function isTRPCClientError(
  error: unknown,
): error is TRPCClientError<AppRouter> {
  return error instanceof TRPCClientError;
}
