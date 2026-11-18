import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <main className="relative isolate min-h-dvh">
      <img
        src="/landing-book.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <h1 className="absolute top-[9%] right-0 left-0 z-10 text-center font-display text-5xl font-normal text-white uppercase sm:text-7xl">
        Major Spark
      </h1>

      <div className="absolute right-0 bottom-[8%] left-0 z-10 flex justify-center px-6">
        <Link
          to="/app"
          className="bg-transparent pl-[0.55em] font-sans text-2xl font-medium tracking-[0.55em] text-white uppercase"
          style={{
            textShadow: "0 0 6px #67e8f9, 0 0 14px #38bdf8, 0 0 28px #2563eb",
          }}
        >
          Enter
        </Link>
      </div>
    </main>
  );
}
