export const prerender = true;

export function GET() {
  return new Response(JSON.stringify({
    framework: "webrev",
    revision: process.env.WEBREV_REVISION ?? "dev",
    healthy: true
  }, null, 2), {
    headers: { "content-type": "application/json; charset=utf-8" }
  });
}
