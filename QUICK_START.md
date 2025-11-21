# 💌 LoveSite - Quick Reference

## ✨ What You Have

A fully functional birthday surprise website with:
- 📸 88 photos already loaded (from your `/images` folder)
- 🎬 1 video ready to use
- 📱 Mobile responsive design
- 🎁 Surprise riddle puzzle
- 🎂 Countdown timer
- 📖 Guestbook for wishes
- 🎤 Voice message recorder
- 💾 Auto-save all data
- 🎨 Dark/Light theme toggle

## 🎯 Next Steps (In Order)

### Step 1: Customize (Edit Code)
Edit `src/LoveSite.tsx` lines 318-348:
- Change riddle questions (3 riddles)
- Change riddle answers
- Update default birthday date (line 309)

### Step 2: Build
```bash
npm run build
```
Creates `dist/` folder ready for deployment

### Step 3: Deploy (Choose One)

**EASIEST: Netlify**
```bash
# 1. Push to GitHub (private repo)
git add .
git commit -m "Deploy LoveSite"
git push

# 2. Go to netlify.com → Connect GitHub repo
# 3. Deploy → Get URL
# 4. Share with her!
```

**ALSO EASY: Vercel**
```bash
# Same as Netlify
# Go to vercel.com → Import project → Deploy
```

**FREE: GitHub Pages**
```bash
# Edit vite.config.ts to add: base: '/repo-name/'
npm run build
git push
# Enable GitHub Pages in repo settings
```

### Step 4: Share
Copy the URL and send her:
- WhatsApp message
- Email
- SMS
- Print QR code

---

## 📝 Files to Know

| File | Purpose |
|------|---------|
| `src/LoveSite.tsx` | Main component (EDIT THIS to customize) |
| `src/index.css` | Global styles |
| `tailwind.config.js` | Color & animation config |
| `public/images/` | All 90 photos & video |
| `README.md` | Full documentation |
| `DEPLOYMENT.md` | Detailed deployment guide |
| `package.json` | Dependencies & scripts |

---

## 🔧 Common Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Check build size
ls -lh dist/

# Install missing packages
npm install

# Update dependencies
npm update
```

---

## 🚀 URLs to Know

- **Local:** http://localhost:5173 (dev server)
- **Netlify:** https://your-site.netlify.app (after deploy)
- **Vercel:** https://your-site.vercel.app (after deploy)
- **GitHub Pages:** https://username.github.io/repo-name (after deploy)

---

## 📸 Photos Info

- **Total:** 88 JPG images + 1 MP4 video
- **Location:** `/public/images/` (already copied)
- **Auto-loaded:** On page load
- **Usage:** Gallery page displays them, Birthday page can use one as hero

---

## 🎁 Feature Highlights

### Home Page
- Hero image from gallery
- Quick stats
- Links to other pages

### Gallery
- Drag & drop uploads
- Slideshow modal
- Delete individual photos

### Memories
- Timeline view
- Add new memories
- Dates & locations

### Birthday
- Editable countdown
- YouTube playlist embed
- Personalized message
- Printable e-card
- Unlocked surprises

### Guestbook
- Friends leave wishes
- Voice message recording
- Auto-sorted by date

### Settings
- Theme toggle
- Color customization
- Data backup/export
- Privacy info

---

## 🎵 Video/Playlist

In Birthday page, paste any YouTube URL:
- Full playlist: `https://youtube.com/playlist?list=...`
- Single video: `https://youtube.com/watch?v=...`
- Auto-embeds and plays!

---

## 🎤 Voice Recording

- Click "Start Recording" on Guestbook
- Records up to 60 seconds
- Browser asks for microphone permission
- Saved in localStorage
- Plays back instantly

---

## 🔐 Security Checklist

Before sharing:
- [ ] Keep GitHub repo **PRIVATE**
- [ ] Use **HTTPS** (all cloud hosts provide this)
- [ ] Add **password protection** (Netlify setting)
- [ ] Use **custom domain** if possible
- [ ] Test on her device first

---

## 📊 Project Structure

```
Bday/
├── src/
│   ├── LoveSite.tsx          ← MAIN FILE (edit here)
│   ├── LoveSite.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── public/
│   └── images/               ← All 90 files
├── tailwind.config.js        ← Colors & animations
├── postcss.config.js
├── vite.config.ts
├── package.json
├── README.md                 ← Full docs
├── DEPLOYMENT.md             ← Deploy guide
└── index.html
```

---

## ⏱️ Timeline

- **Now:** Testing locally ✅
- **5 min:** Customize riddles
- **2 min:** Build: `npm run build`
- **10 min:** Deploy to Netlify
- **1 min:** Test deployed site
- **Done:** Share with her! 🎉

---

## 💬 Git Setup (If Needed)

```bash
# Initialize git (first time only)
git init
git config user.email "your@email.com"
git config user.name "Your Name"

# Add files
git add .
git commit -m "Initial: LoveSite birthday website"

# Add GitHub remote (change URL)
git remote add origin https://github.com/YOUR_USERNAME/lovesite.git
git branch -M main
git push -u origin main
```

---

## 🎯 Success Criteria

Your site is ready when:
- ✅ Runs locally at http://localhost:5173
- ✅ All 88 photos load in gallery
- ✅ Countdown timer works
- ✅ Guestbook accepts messages
- ✅ Voice recording works (on HTTPS)
- ✅ Settings save preferences
- ✅ Surprise riddles work
- ✅ Builds without errors: `npm run build`
- ✅ Deployed to Netlify/Vercel/GitHub Pages
- ✅ Tested on mobile device

---

## 🆘 Quick Fixes

| Problem | Solution |
|---------|----------|
| Photos not showing | Check `/public/images/` exists with files |
| Build fails | Run `npm install` then `npm run build` |
| Countdown wrong | Edit line 309 in LoveSite.tsx |
| Voice doesn't work | Must be HTTPS (not on localhost) |
| Styles look wrong | Check Tailwind is installed: `npm list tailwindcss` |

---

Made with ❤️ • Ready to deploy! 🚀
