# Deploy And Ever on Render

Your site is **ready to deploy**. Follow these steps to go live on Render.com.

## Prerequisites ✅

- ✅ GitHub repo pushed: https://github.com/Nileshsan/life
- ✅ Site builds locally: `npm run build` succeeds
- ✅ dist folder exists with index.html
- Create a free Render account: https://render.com (sign up if needed)

## Step 1: Create Static Site on Render

1. Go to https://dashboard.render.com
2. Click **New** → **Static Site**
3. Click **Connect GitHub**
4. Select repo: `Nileshsan/life`
5. Click **Connect**

## Step 2: Configure Build Settings

In the form, enter:

```
Name: and-ever
Branch: main
Build Command: npm ci && npm run build
Publish Directory: dist
Node Version: 18.x (default)
```

Click **Create Static Site**

Render will immediately start building. Watch the **Build** tab for progress (takes 2–5 minutes on first deploy).

## Step 3: Enable SPA Rewriting (CRITICAL!)

After build completes:

1. Go to **Settings** (top right)
2. Scroll to **Redirects/Rewrites**
3. Click **Add Redirect Rule**
4. Enter:
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - **Status Code**: `200`
5. Click **Save**

This ensures all routes (Gallery, Memories, Invitation) work correctly.

## Step 4: Your Site is Live! 🎉

Once the build succeeds, Render gives you a URL like:
```
https://and-ever.onrender.com
```

Visit it to verify:
- [ ] Page loads
- [ ] Background is white/beige
- [ ] Plan images appear on home page
- [ ] Gallery, Memories, Invitation pages work
- [ ] Refresh on any page—no 404 error

## Auto-Deploy on Every Push

Every commit to `main` automatically redeploys:

```bash
git add .
git commit -m "update site"
git push origin main
```

Monitor in the Render dashboard **Deployments** tab.

## Troubleshooting

**Build fails?**
- Check Render **Build Logs** (click on the failed deploy)
- Ensure `npm install` works locally
- Verify Node 18 compatibility

**Images missing?**
- Check browser **Network** tab (F12) for 404s
- Plan images are bundled by Vite (should always load)
- Gallery images copied to dist/images during build

**Routes 404?**
- Confirm SPA rewrite rule is saved
- Redeploy after adding the rule

**Performance slow?**
- Render free tier has fair-use limits
- Check Render **Analytics** for metrics

## Share Your Site

Once verified, share the Render URL with friends and family:

**Site**: And Ever — A Birthday Invitation
**URL**: https://and-ever.onrender.com
**Built with**: React + Vite + Tailwind + TypeScript

---

**Need help?** Check:
- Render docs: https://render.com/docs/static-sites
- Vite docs: https://vitejs.dev
- GitHub repo: https://github.com/Nileshsan/life
