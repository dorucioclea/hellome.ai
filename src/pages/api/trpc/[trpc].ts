import { createNextApiHandler } from "@trpc/server/adapters/next"

import { appRouter } from "@/server/api/root"
import { createTRPCContext } from "@/server/api/trpc"

// export API handler
// @see https://trpc.io/docs/api-handler
// @see https://nextjs.org/docs/api-routes/introduction
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    process.env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
          )
        }
      : undefined,
})
