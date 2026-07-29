import { Resend } from "resend";

// Lazily instantiated: constructing Resend with an empty key throws
// immediately, which crashes `next build` while it statically collects
// page data for any route that imports this module — even though the
// key is only actually needed once a request comes in. Deferring
// construction until first use means a missing RESEND_API_KEY only
// breaks the specific request that needs it (returns a clear runtime
// error), never the build itself.
let client: Resend | null = null;

export function getResend(): Resend {
  if (!client) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error(
        "RESEND_API_KEY is not set. Add it in your hosting provider's environment variables.",
      );
    }
    client = new Resend(apiKey);
  }
  return client;
}
