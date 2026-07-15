# Aventra Creative

## Deploy checklist

1. Copy `.env.example` to `.env.local` for local work. Never commit real values.
2. In Vercel (or your host), add every required production environment variable from `.env.example`.
3. In Resend, verify the domain used by `RESEND_FROM_EMAIL`. Newsletter sign-ups are stored as Resend Contacts.
4. In Sanity Manage, add `https://your-domain.com` to CORS Origins. Add `http://localhost:3000` for local Studio use.
5. Set `NEXT_PUBLIC_SITE_URL` to the final canonical HTTPS domain and replace all social-profile URLs.
6. Run `npm run check`, then deploy.

## Commands

```bash
npm run dev
npm run check
npm run build
npm run start
```

The embedded Sanity Studio is available at `/studio`.
# Aventra-Creative
