import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-indigo-950 p-6">
      <section className="flex w-full max-w-md flex-col rounded-[28px] bg-paper px-8 py-12">
        <p className="font-display text-sm tracking-wide text-sage">Miami Dade College</p>
        <h1 className="mt-8 font-display text-5xl leading-none font-medium text-ink">Major Spark</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink">
          No account is required. Enter your email on the main page to generate speech.
        </p>
        <Link to="/" className="mt-10 text-center text-base font-semibold text-sage">
          Back to the main page
        </Link>
      </section>
    </main>
  );
}
