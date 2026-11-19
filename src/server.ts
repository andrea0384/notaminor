import {
  createServerEntry,
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start/server";
import type { Register } from "@tanstack/react-router";
import type { RequestHandler } from "@tanstack/react-start/server";

const handler = createStartHandler(defaultStreamHandler);

const fetch: RequestHandler<Register> = async (request, opts) => {
  try {
    return await handler(request, opts);
  } catch (error) {
    const message = error instanceof Error ? error.stack || error.message : "The page failed to render.";
    console.error("[start]", error);
    return new Response(message, {
      status: 500,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }
};

export default createServerEntry({ fetch });
