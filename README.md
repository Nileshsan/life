# ❤️ LoveSite - Birthday Surprise Website# React + TypeScript + Vite



A beautiful, personalized birthday love website built with **React + TypeScript + Tailwind CSS**. Perfect for celebrating someone special with photos, memories, countdowns, voice messages, surprise riddles, and guestbook wishes.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## ✨ FeaturesCurrently, two official plugins are available:



### 🎁 Core Features- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- **Multi-Page Navigation**: Home, Gallery, Memories, Birthday, Guestbook, Settings- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **Photo Gallery**: Upload photos from your device with drag-and-drop support

- **Slideshow Modal**: View photos in fullscreen with navigation## React Compiler

- **Countdown Timer**: Auto-updating countdown to her birthday (editable date)

- **Memories Timeline**: Document special moments with dates and locationsThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- **Guestbook**: Friends & family can leave birthday wishes

- **Voice Messages**: Record and save voice notes using microphone## Expanding the ESLint configuration

- **Personalized Message**: Write and print a custom e-card

- **Surprise Riddles**: 3-step riddle puzzle to unlock secret contentIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- **Timed Reveals**: Schedule surprises to unlock on specific dates

- **YouTube Playlist Embed**: Embed her favorite songs or playlists```js

- **Print-Friendly**: E-card designed for printingexport default defineConfig([

- **Dark & Light Themes**: Black + Beige color scheme with theme toggle  globalIgnores(['dist']),

  {

### 💾 Data Management    files: ['**/*.{ts,tsx}'],

- **LocalStorage Persistence**: All data saved locally in browser (no server needed)    extends: [

- **Auto-Save**: Changes automatically saved as you work      // Other configs...

- **Data Backup**: Download JSON backup of all content

- **Data Export**: Easy export/import for sharing or migration      // Remove tseslint.configs.recommended and replace with this

      tseslint.configs.recommendedTypeChecked,

### 🎨 UI/UX      // Alternatively, use this for stricter rules

- **Responsive Design**: Works beautifully on mobile, tablet, and desktop      tseslint.configs.strictTypeChecked,

- **Smooth Animations**: Fade-ins, slide-ups, confetti effects      // Optionally, add this for stylistic rules

- **Accessible**: Keyboard navigation, focus management, ARIA attributes      tseslint.configs.stylisticTypeChecked,

- **Beautiful Typography**: Playfair Display serif + Dancing Script handwritten fonts

- **Custom Tailwind Config**: Extended colors, animations, and utilities      // Other configs...

    ],

## 🚀 Quick Start    languageOptions: {

      parserOptions: {

### Prerequisites        project: ['./tsconfig.node.json', './tsconfig.app.json'],

- Node.js 16+ and npm installed        tsconfigRootDir: import.meta.dirname,

- A modern web browser      },

      // other options...

### Installation    },

  },

1. **Navigate to the project**])

   ```bash```

   cd c:\Users\Admin\soumya\Bday

   ```You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:



2. **Dependencies are already installed** (run if needed):```js

   ```bash// eslint.config.js

   npm installimport reactX from 'eslint-plugin-react-x'

   ```import reactDom from 'eslint-plugin-react-dom'



3. **Start the development server**export default defineConfig([

   ```bash  globalIgnores(['dist']),

   npm run dev  {

   ```    files: ['**/*.{ts,tsx}'],

   The app will open at `http://localhost:5173`    extends: [

      // Other configs...

4. **Build for production**      // Enable lint rules for React

   ```bash      reactX.configs['recommended-typescript'],

   npm run build      // Enable lint rules for React DOM

   ```      reactDom.configs.recommended,

    ],

## 📖 How to Use    languageOptions: {

      parserOptions: {

### 1. **Home Page**        project: ['./tsconfig.node.json', './tsconfig.app.json'],

   - Overview of the site        tsconfigRootDir: import.meta.dirname,

   - Quick stats (countdown, guestbook count, unlocked surprises)      },

   - Links to main pages      // other options...

   - Hero image from gallery    },

  },

### 2. **Gallery** 📸])

   - Click "Upload photos" or drag-and-drop```

   - Click any photo to view in fullscreen slideshow
   - Navigate with Prev/Next or arrow keys
   - Delete photos with the delete button

### 3. **Memories** 💝
   - Add memory timeline entries
   - Include title, date, description, and location
   - Memories auto-sort by most recent first
   - Visual timeline with dates

### 4. **Birthday** 🎂
   - **Countdown**: Set birthday date, auto-updates every second
   - **Playlist**: Paste a YouTube URL to embed music
   - **Personalized Message**: Write a heartfelt message
   - **E-Card**: Print your message as a beautiful card
   - **Surprises**: View unlocked surprise content (timed reveals)

### 5. **Guestbook** 📖
   - Friends leave birthday wishes
   - Voice message recording (60s max)
   - All messages saved locally and displayed
   - Sorted by most recent first

### 6. **Settings** ⚙️
   - Theme toggle (Dark/Light)
   - Primary color customization
   - Privacy info and data management
   - Data backup & export
   - Deployment guide

## 🛠 Customization

### Customize Riddles
Edit the `initializeSurpriseFlow()` function in `src/LoveSite.tsx`:

```typescript
function initializeSurpriseFlow(): SurpriseStep[] {
  return [
    {
      id: 1,
      question: "What's my favorite date with you? (Format: DD/MM)",
      answer: 'your-date',  // Change this to the actual answer
      hint: 'Think of that special day...',
      completed: false,
    },
    // ... more riddles
  ];
}
```

### Customize Colors
Edit `tailwind.config.js` to change the beige palette:

```javascript
colors: {
  beige: {
    50: '#f6f3f1',
    100: '#efe6df',
    // ... customize colors here
  },
}
```

## 🌐 Deployment

### Option 1: Netlify (Recommended - Free Tier)
1. Push your code to GitHub
2. Sign up at [netlify.com](https://netlify.com)
3. Connect your GitHub repo
4. Netlify auto-builds and deploys on every push
5. **Add password protection** in Site settings

### Option 2: Vercel
1. Push your code to GitHub
2. Sign up at [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Vercel auto-builds and deploys

### Option 3: GitHub Pages
1. Run `npm run build` to generate `dist/` folder
2. Commit and push to GitHub
3. Enable GitHub Pages in repository settings

## 🔒 Privacy & Security

- **All data stored locally** in browser's localStorage
- **No backend server required**
- **Keep repo private** for confidentiality
- **Use password protection** when deploying
- **Custom domain** for professional look

## 📱 Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎤 Voice Recording
- Requires microphone permission
- Records up to 60 seconds per message
- Saved as WebM audio
- Stored in browser localStorage

## 🖨 Printing E-Card
1. Go to Birthday page
2. Write your personalized message
3. Click "Print as E-Card"
4. Use browser print dialog (Ctrl+P / Cmd+P)

---

**Made with ❤️ for someone special**

Happy Birthday! 🎂🎉
