import { createFileRoute } from "@tanstack/react-router";

const VOICE = "EXAVITQu4vr4xnSDxMaL";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonError(error: string, message: string, status: number) {
  return Response.json({ error, message }, { status });
}

export const Route = createFileRoute("/api/speak")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json().catch(() => null);
          const email = typeof body?.email === "string" ? body.email.trim() : "";
          const text =
            typeof body?.text === "string" ? body.text.replace(/\s+/g, " ").trim().slice(0, 800) : "";
          if (!EMAIL_PATTERN.test(email)) {
            return jsonError("invalid-email", "Enter a valid email address.", 400);
          }
          if (!text) return jsonError("empty", "Enter the text to speak.", 400);

          const key = process.env.ELEVENLABS_API_KEY?.trim();
          if (!key) {
            return jsonError("missing-key", "ElevenLabs is not configured on the server.", 503);
          }

          let upstream: Response;
          try {
            upstream = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE}`, {
              method: "POST",
              headers: {
                "xi-api-key": key,
                "Content-Type": "application/json",
                Accept: "audio/mpeg",
              },
              body: JSON.stringify({
                text,
                model_id: "eleven_multilingual_v2",
                voice_settings: {
                  stability: 0.4,
                  similarity_boost: 0.8,
                  style: 0,
                  use_speaker_boost: true,
                  speed: 0.94,
                },
              }),
            });
          } catch (error) {
            console.error("[elevenlabs]", error);
            return jsonError("upstream", "ElevenLabs could not be reached.", 502);
          }

          if (!upstream.ok || !upstream.body) {
            const detail = await upstream.text().catch(() => "");
            const message = /credit|quota|unauthorized|invalid/i.test(detail)
              ? "ElevenLabs rejected the key or the account is out of credits."
              : "ElevenLabs rejected the request.";
            return jsonError("upstream", message, 502);
          }
          return new Response(upstream.body, { headers: { "Content-Type": "audio/mpeg" } });
        } catch (error) {
          console.error("[speak]", error);
          const message = error instanceof Error ? error.message : "Speech request failed.";
          return jsonError("speak-failed", message, 502);
        }
      },
    },
  },
});
