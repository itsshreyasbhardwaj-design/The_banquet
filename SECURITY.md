# Security Guide — the Banquet by A.B.Corp

## Where Secrets Live

| What | Where to store it |
|------|------------------|
| Real API keys, tokens, passwords | Vercel Dashboard → Project → Settings → Environment Variables |
| Local development secrets | `.env.local` (never committed — in .gitignore) |
| Placeholder documentation | `.env.example` (safe to commit — contains no real values) |

**Never store real secrets in:**
- Source code files (`*.ts`, `*.tsx`, `*.js`)
- `.env` (without `.local`)
- `.env.production`
- `next.config.mjs`
- Any file in `public/`
- Comments in code

---

## What Must Never Be Committed

```
.env
.env.local
.env.production
.env.development
*.pem
*.key
node_modules/
.next/
.vercel/
```

All of the above are excluded in `.gitignore`. Do not remove them.

---

## If a Secret Is Accidentally Exposed

1. **Rotate it immediately** — generate a new key/token from the provider dashboard
2. The old key is compromised — assume it has been seen, even if the commit was brief
3. Remove it from Git history using `git filter-repo` or BFG Repo-Cleaner
4. Add it to `.gitignore` if not already there
5. Set the new value only in Vercel Environment Variables

---

## Environment Variable Rules

- `NEXT_PUBLIC_` prefix = **visible in the browser** → safe only for non-sensitive config (e.g. site URL, public analytics IDs)
- All other variables = server-side only → never exposed to browser
- Never add a real API key or secret as a `NEXT_PUBLIC_` variable

---

## Deployment Security Checklist

Before every production deploy:

- [ ] No real secrets in source code
- [ ] `.env.local` is not committed
- [ ] All required env vars are set in Vercel Dashboard
- [ ] Security headers are active (set in `next.config.mjs`)
- [ ] HTTPS is enabled (Vercel handles this automatically)
- [ ] Domain is verified in Vercel
- [ ] `robots.txt` is accurate

---

## Abuse Protection

This site is a static marketing website with no forms, no auth, and no API routes. Risk of spam/abuse is low.

If a contact form or API route is ever added:
- Add rate limiting (Vercel middleware or Upstash Redis)
- Add input validation and sanitization
- Add honeypot fields or Cloudflare Turnstile for public forms
- Never log full user input — redact sensitive fields
- Add webhook signature verification for any webhooks

---

## Security Headers

The following headers are set on all routes via `next.config.mjs`:

| Header | Value |
|--------|-------|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Disables camera, mic, geolocation |
| `Strict-Transport-Security` | 2-year HSTS with preload |
| `Content-Security-Policy` | Blocks inline scripts (with Next.js exceptions), restricts frame sources |

---

## Reporting a Security Issue

If you find a security issue, contact the site owner directly via WhatsApp or phone (listed on the website). Do not open a public issue.
