/**
 * A plain Vercel import was returning TanStack's generic
 * {"unhandled":true,"message":"HTTPError"} and hiding the real error.
 * If a request still fails, answer with the error text instead of crashing
 * the function with an empty status.
 */
interface GuardEvent {
  url: URL;
}

export default async function startupGuard(_event: GuardEvent, next: () => Promise<unknown>): Promise<unknown> {
  const notes: string[] = [];
  const original = console.error;
  console.error = (...args: unknown[]) => {
    notes.push(
      args
        .map((item) => (item instanceof Error ? item.message : typeof item === "string" ? item : ""))
        .filter(Boolean)
        .join(" ")
        .slice(0, 400),
    );
    original(...args);
  };
  try {
    const result = await next();
    if (!(result instanceof Response) || result.status < 500) return result;
    let body = "";
    try {
      body = await result.clone().text();
    } catch {
      return result;
    }
    if (!body.includes("\"unhandled\":true")) return result;
    const detail = notes.find(Boolean) || "The server failed before the page could render.";
    return new Response(detail, {
      status: 500,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "The server failed before the page could render.";
    return new Response(detail, {
      status: 500,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  } finally {
    console.error = original;
  }
}
