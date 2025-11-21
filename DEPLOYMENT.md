# 🚀 LoveSite - Deployment & Setup Guide

## ✅ Project Status: COMPLETE & RUNNING

Your **LoveSite** birthday surprise website is fully built and running locally at **http://localhost:5173**

### What's Been Set Up

✅ **React + TypeScript + Vite** - Modern, fast development environment
✅ **Tailwind CSS v4** - Beautiful styling with custom beige palette
✅ **88 Personal Photos + 1 Video** - Auto-loaded from `/public/images`
✅ **Multi-Page Site** - Home, Gallery, Memories, Birthday, Guestbook, Settings
✅ **Advanced Features**:
  - Photo gallery with upload & drag-drop
  - Countdown timer (editable date)
  - Voice message recording
  - Guestbook for wishes
  - Surprise riddle puzzle
  - Timed content reveals
  - Printable e-card
  - Local storage persistence
  - Dark/Light theme toggle

---

## 🎯 Quick Start (Local Development)

The dev server is **already running**. Just:

1. Open http://localhost:5173 in your browser
2. Explore the site and test all features
3. Add more photos, set the birthday date, customize messages

### To Stop & Restart Dev Server

```bash
# Stop: Press Ctrl+C in the terminal
# Restart:
npm run dev
```

---

## 📦 Building for Production

When ready to deploy, create an optimized production build:

```bash
npm run build
```

This creates a `dist/` folder with optimized, minified code ready for deployment.

---

## 🌐 Deployment Options

### **Option 1: Netlify (Recommended - Free & Easy)**

**Best for: Privacy, automatic SSL, password protection**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: LoveSite"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/lovesite.git
   git push -u origin main
   ```
   > Create a **private** GitHub repo first at github.com

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repo
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
   - Deploy!

3. **Add Password Protection (Optional)**
   - In Netlify: Site settings → Access control → Password protect
   - Set a password (e.g., her birthday date)

4. **Get Your URL**
   - Example: `https://lovesite-for-her.netlify.app`
   - Share this link with her!

---

### **Option 2: Vercel (Also Excellent)**

**Best for: Speed, simplicity, Next.js-like experience**

1. Push to GitHub (private repo)
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project" → Select your GitHub repo
4. Vercel auto-detects it's a Vite app
5. Click "Deploy"
6. Your site is live! (e.g., `lovesite.vercel.app`)

---

### **Option 3: GitHub Pages (Free)**

**Best for: No external services, GitHub-hosted**

1. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/repo-name/', // Your repo name
     plugins: [react()],
   })
   ```

2. Build & deploy:
   ```bash
   npm run build
   git add .
   git commit -m "Build for GitHub Pages"
   git push origin main
   ```

3. In GitHub repo → Settings → Pages
   - Select "Deploy from branch"
   - Branch: `main`, Folder: `/` (or `/dist` if needed)
   - Your site: `https://username.github.io/repo-name/`

---

### **Option 4: Self-Hosted (Any Web Host)**

**Best for: Full control, custom domain**

1. Build locally:
   ```bash
   npm run build
   ```

2. Upload `dist/` folder to your hosting (FTP, SSH, etc.)

3. Examples:
   - Bluehost, GoDaddy, HostGator, etc.
   - Custom domain pointing to the folder

---

## 🔐 Privacy & Security Tips

### Keep Her Data Safe

✅ **Private GitHub Repo** - Don't make it public
✅ **Password Protection** - Use Netlify/Vercel password feature
✅ **Custom Domain** - Use a personal domain instead of default URL
✅ **HTTPS Always** - All hosting options provide SSL/TLS

### Data Storage

- **All data is stored locally** in her browser (localStorage)
- No backend server = no data leaving her device
- Photos, messages, voice notes all stay in her browser
- Only if she clears browser data will anything be lost

---

## 🎁 Customization Before Deploying

Edit `src/LoveSite.tsx` to customize:

### 1. **Change Surprise Riddle Answers**
Find this function around line 320:
```typescript
function initializeSurpriseFlow(): SurpriseStep[] {
  return [
    {
      id: 1,
      question: "What's my favorite date with you? (Format: DD/MM)",
      answer: 'your-date',  // ← Change this
      hint: 'Think of that special day...',
      completed: false,
    },
    // ... more riddles
  ];
}
```

### 2. **Update Default Birthday Date**
Find this around line 305:
```typescript
function getDefaultCountdownDate(): string {
  const nextYear = new Date().getFullYear() + 1;
  return `${nextYear}-05-23T00:00:00`; // ← Change to her actual birthday
}
```

### 3. **Customize Surprise Flow Questions**
Edit the 3 riddle questions and answers in `initializeSurpriseFlow()`

### 4. **Update Colors**
Edit `tailwind.config.js` to change the beige palette

---

## 📋 Pre-Deployment Checklist

Before sharing the link:

- [ ] Test all pages (Home, Gallery, Memories, Birthday, Guestbook, Settings)
- [ ] Upload all her photos (already done - 88 photos!)
- [ ] Set correct birthday date on Birthday page
- [ ] Customize riddle answers in code
- [ ] Write personalized message on Birthday page
- [ ] Test countdown timer updates
- [ ] Test voice recording (if deploying with HTTPS)
- [ ] Test guestbook (add a test message)
- [ ] Build for production: `npm run build`
- [ ] Test on mobile device
- [ ] Deploy to Netlify/Vercel/GitHub Pages
- [ ] Add password protection
- [ ] Test deployed site on her device
- [ ] Share link via WhatsApp/Email/SMS

---

## 🎤 Important Notes

### Voice Recording
- Only works on **HTTPS** (all cloud hosting provides this)
- Requires microphone permission
- Records up to 60 seconds
- Saved in her browser

### Video Playback
- Your video (VID-20251121-WA0001.mp4) is in `/public/images`
- Can be added to a new "Videos" page if needed

### Print E-Card
- Click "Print as E-Card" on Birthday page
- Use Ctrl+P (or Cmd+P on Mac)
- Save as PDF or print to paper

---

## 🆘 Troubleshooting

### Photos not loading?
- Check that `/public/images` folder exists
- Verify all 90 files are there: `ls public/images | wc -l`
- Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Countdown not working?
- Make sure JavaScript is enabled
- Check browser console (F12) for errors
- Ensure birthday date is set correctly

### Voice recording not working?
- Must be HTTPS (not HTTP)
- Check microphone permissions
- Try a different browser

### Data lost?
- localStorage should persist
- Try importing from backup JSON (Settings page)
- Use incognito/private window to test clean slate

---

## 📞 Support Commands

**Check if Vite is running:**
```bash
curl http://localhost:5173
```

**View build size:**
```bash
npm run build
# Check dist/ folder size
```

**Clean and reinstall:**
```bash
rm -r node_modules package-lock.json
npm install
npm run dev
```

---

## 🎉 You're All Set!

Your **LoveSite** is ready! Here's the recommended next steps:

1. ✅ Test locally (you're doing this now!)
2. ✅ Customize riddle answers
3. ✅ Build for production: `npm run build`
4. ✅ Deploy to Netlify (easiest option)
5. ✅ Add password protection
6. ✅ Share the link with her on her birthday!

---

**Made with ❤️ for someone special**

Questions? Check the main [README.md](./README.md) for detailed feature documentation.
