import { Prisma } from "@prisma/client";
import { TRPCError, initTRPC } from "@trpc/server";
import { isPrismaClientKnownRequestError } from "@zenstackhq/runtime";
import superjson from "superjson";
import { type Context } from "../context";
import { createRouter as createCRUDRouter } from "zenstack/generated/trpc/routers";
// import initI18N from "~/utils/initI18N";
// import { CreateNextContextOptions } from "@trpc/server/adapters/next";
// import { getLocaleFromURL } from "~/utils/string-utils";

// type CreateContextOptions = {
//   locale: string;
// };

// const createInnerTRPCContext = (_opts: CreateContextOptions) => {
//   return {
//     locale: _opts.locale,
//   };
// };

// export const createTRPCContext = (_opts: CreateNextContextOptions) => {
//   const { req } = _opts;

//   const locale = getLocaleFromURL(req.headers.referer);

//   return createInnerTRPCContext({ locale });
// };

function makePrismaError(error: Error | undefined) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return {
      clientVersion: error.clientVersion,
      code: error.code,
      message: error.message,
    };
  } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
    return {
      clientVersion: error.clientVersion,
      message: error.message,
    };
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    return {
      message: error.message,
    };
  }
  return undefined;
}

// const t = initTRPC.context<typeof createTRPCContext>().create({
const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        prismaError: makePrismaError(error.cause),
      },
    };
  },
});

// middleware for wrapping access denied errors from enhanced Prisma
// to proper TRPC errors with 403 code
// const errorWrappedProc = t.procedure.use(async ({ ctx, next }) => {
const errorWrappedProc = t.procedure.use(async ({ next }) => {
  // const tFunction = await initI18N(ctx.locale);
  // const result = await next({ ctx: { t: tFunction } });
  const result = await next();
  if (
    !result.ok &&
    isPrismaClientKnownRequestError(result.error.cause) &&
    result.error.cause.code === "P2004" // access denied
  ) {
    return {
      ...result,
      error: new TRPCError({
        code: "FORBIDDEN",
        message: result.error.cause.message,
        cause: result.error.cause,
      }),
    };
  } else {
    return result;
  }
});

export const appRouter = createCRUDRouter(t.router, errorWrappedProc);

export type AppRouter = typeof appRouter;
