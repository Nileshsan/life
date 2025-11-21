# 🗺️ LoveSite - Website Map & Features

## Site Navigation

```
┌─────────────────────────────────────────────────────────────┐
│                        LOVESITE                            │
│  ❤️ A little corner for her birthday & memories            │
└─────────────────────────────────────────────────────────────┘
                              │
            ┌─────────────────┼─────────────────┬────────────┬──────────────┐
            │                 │                 │            │              │
        [HOME]           [GALLERY]          [MEMORIES]   [BIRTHDAY]  [GUESTBOOK]
            │                 │                 │            │              │
            │                 │                 │            │              │
```

---

## 📄 Page Details

### 🏠 **HOME** - Welcome & Overview
**Purpose:** Introduction and quick navigation

**Features:**
- Hero image from gallery
- Quick welcome message
- 3 stat cards:
  - ⏰ Countdown Timer
  - 💬 Guestbook Count
  - 🎁 Surprises Unlocked
- Links to Gallery & Birthday pages
- Sticky header with navigation
- Light/Dark theme toggle

**Interactive Elements:**
- Navigation to all pages
- Theme toggle button
- Responsive layout

---

### 📸 **GALLERY** - Photo Showcase
**Purpose:** Display and manage photos

**Features:**
- Upload photos (file input)
- Drag-and-drop upload area
- Grid display (2 cols mobile, 4 cols desktop)
- Fullscreen slideshow modal
- Previous/Next navigation
- Delete individual photos
- Delete button appears on hover
- 88 pre-loaded personal photos

**Interactive Elements:**
- Upload buttons
- Photo click to expand
- Modal with navigation
- Delete buttons
- Keyboard support (arrow keys)

**Details:**
- Shows: "Click any to view in fullscreen"
- Count display: "X photos"
- Responsive grid layout

---

### 💝 **MEMORIES** - Timeline View
**Purpose:** Document special moments

**Features:**
- Memory timeline with dates
- Add new memory form
  - Title input
  - Date picker
  - Description textarea
  - Location input (optional)
- Visual timeline with date markers
- Sorted by most recent first
- Timeline line with circle markers

**Interactive Elements:**
- Add memory form
- Delete memory buttons
- Responsive timeline

**Data Displayed:**
- Memory title
- Date (formatted)
- Description
- Location (if provided)
- Timeline connector line

---

### 🎂 **BIRTHDAY** - Celebration Central
**Purpose:** Birthday countdown and surprises

**Sections:**

#### Countdown Card
- 📅 Days Until Birthday
- Editable date input
- Auto-updating timer
- Large readable display

#### Playlist/Music Card
- YouTube URL input
- Embedded video player
- Auto-plays URL (muted for browser policy)
- Paste-and-play simplicity

#### Personalized Message Card
- Message textarea
- Live preview
- Styled message display
- Print as E-Card button
- Uses handwritten font

#### Locked Surprises Section
- Shows content waiting to unlock
- Display countdown to unlock
- Border: orange/warning style

#### Unlocked Surprises Section
- Beautiful display of unlocked content
- Images or messages revealed
- Confetti animation on unlock
- Green success border style

**Interactive Elements:**
- Date input
- YouTube URL input
- Message editor
- Print button
- Reveal animations

---

### 📖 **GUESTBOOK** - Birthday Wishes
**Purpose:** Collect wishes from friends & family

**Sections:**

#### Add Wish Area
- Large textarea for message
- Anonymous posting (no name field)
- Post button
- Clear button
- 3-column layout

#### Voice Messages Section
- Start/Stop recording buttons
- Microphone permission handling
- Audio playback controls
- Delete individual messages
- Visual recording indicator

#### Wishes Display
- Card layout grid (1-2 columns)
- Shows: Name, Date, Message
- Cards have hover effects
- Most recent first
- Displays total count

**Interactive Elements:**
- Message textarea
- Post button
- Clear button
- Record button
- Audio players
- Delete buttons

---

### ⚙️ **SETTINGS** - Customization
**Purpose:** User preferences and data management

**Sections:**

#### Theme Settings
- Dark mode radio button
- Light mode radio button
- Real-time toggle

#### Primary Color
- Color picker
- Hex color input
- Reset to default button
- Visual color preview

#### Privacy Info
- Data storage explanation
- No backend server note
- GitHub private repo recommendation
- Password protection tip

#### Data Management
- Clear all data button (with confirmation)
- Download backup button (JSON)
- Import data from backup

#### Deployment Guide
- Quick deployment steps
- Netlify, Vercel, GitHub Pages options
- Privacy recommendations

**Interactive Elements:**
- Radio buttons
- Color picker
- Text input
- Buttons with confirmations
- Download/Import buttons

---

## 🎁 **SURPRISE RIDDLES** - Puzzle Challenge
**Purpose:** Unlock special content through riddles

**Features:**
- 3-step riddle puzzle
- Progress bar showing completion
- Current riddle display
- Question text
- Hint button/display
- Answer input field
- Submit button
- Keyboard support (Enter to submit)

**Sections:**

#### Progress Bar
- Visual progress (0-3)
- Percentage display
- Animated fill

#### Current Riddle
- Question number
- Question text (handwritten font)
- Hint display
- Answer input
- Submit button

#### Solved Riddles
- List of completed riddles
- Green checkmarks
- Shows after first completion

#### Completion Screen
- Shows after all 3 riddles solved
- Confetti animation
- Message: "You did it!"
- Link to Birthday page for final gift

**Interactive Elements:**
- Answer input
- Submit button
- Hint display
- Enter key support

---

## 🎨 **Design Elements**

### Color Scheme
- **Primary Dark:** Black (#000000)
- **Primary Light:** Beige (#d6c6b8)
- **Secondary:** Beige variants (50-900)
- **Accents:** Gradient backgrounds
- **Text Light:** Beige/Off-white
- **Text Dark:** Black/Dark gray

### Typography
- **Headings:** Playfair Display (serif, elegant)
- **Handwrite/Script:** Dancing Script (cursive)
- **Body:** System fonts (readable)
- **Sizes:** Scaled hierarchy

### Animations
- **Fade In:** 0.6s ease-in-out
- **Slide Up:** 0.8s ease-out
- **Confetti Fall:** 3s ease-out
- **Pulse Soft:** 2s infinite

### Responsive Breakpoints
- **Mobile:** 320px+
- **Tablet:** 768px (md)
- **Desktop:** 1024px (lg)
- **Max Width:** 7xl (80rem)

---

## 🔄 **User Flow Examples**

### New User Journey
```
Home Page
  ↓ (learns about site)
  ↓ (sees countdown)
Gallery → Uploads more photos
  ↓ (explores memories)
Memories → Reads past moments
  ↓ (ready for birthday)
Birthday → Finds personalized message
  ↓ (unlocks surprises)
Surprise → Solves riddles → Confetti!
  ↓ (shares their wish)
Guestbook → Leaves message
  ↓ (customizes)
Settings → Changes theme/colors
  ↓ Done! All data saved locally
```

### Returning User Journey
```
Home Page
  ↓ (countdown updated)
Check Birthday Page
  ↓ (new unlocked surprises maybe?)
View Gallery
  ↓ (watch slideshow)
Settings
  ↓ (download backup)
Done! Data persisted
```

---

## 💾 **Data Storage**

### What Gets Saved (localStorage)
- ✅ Uploaded photos (as base64)
- ✅ Guestbook entries
- ✅ Voice recordings (as blob URLs)
- ✅ Memory timeline entries
- ✅ Theme preference (dark/light)
- ✅ Primary color choice
- ✅ Countdown date
- ✅ Personalized message
- ✅ Playlist URL
- ✅ Surprise flow progress
- ✅ Timed reveal status

### What Doesn't Get Saved
- ❌ Nothing critical is lost
- ❌ All data is on device only
- ❌ Can be backed up as JSON

---

## 📊 **Feature Matrix**

| Feature | Home | Gallery | Memories | Birthday | Guestbook | Settings | Surprise |
|---------|------|---------|----------|----------|-----------|----------|----------|
| Upload Photos | - | ✅ | - | - | - | - | - |
| View Gallery | ✅ | ✅ | - | ✅ | - | - | - |
| Slideshow | - | ✅ | - | - | - | - | - |
| Timeline | - | - | ✅ | - | - | - | - |
| Countdown | ✅ | - | - | ✅ | - | - | - |
| Messages | - | - | - | ✅ | ✅ | - | - |
| Voice Notes | - | - | - | - | ✅ | - | - |
| E-Card Print | - | - | - | ✅ | - | - | - |
| Riddles | - | - | - | - | - | - | ✅ |
| Customize | - | - | - | - | - | ✅ | - |
| Backup Data | - | - | - | - | - | ✅ | - |

---

## 🎯 **Quick Navigation**

**Most Visited Pages (Recommended):**
1. Home - Start here
2. Birthday - Main event page
3. Gallery - Show photos
4. Guestbook - Leave wishes
5. Settings - Customize

**Less Visited (But Valuable):**
- Memories - Document journey
- Surprise - Unlock puzzle

---

## 📱 **Mobile Optimization**

- ✅ Touch-friendly buttons
- ✅ Responsive grid layouts
- ✅ Readable font sizes
- ✅ Full-width modals on mobile
- ✅ Vertical stacking on small screens
- ✅ Horizontal scrolling for content
- ✅ Optimized image sizes
- ✅ Fast-loading gallery

---

**Visual Tour Complete!** 🎉

For detailed feature documentation, see README.md
For deployment steps, see DEPLOYMENT.md
For quick reference, see QUICK_START.md
