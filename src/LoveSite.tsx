import React, { useState, useEffect, useRef } from 'react';
import './LoveSite.css';
// Plan images (kept at project root /plan)
import plan1 from '../plan/1.png';
import plan2 from '../plan/2.png';

interface GuestbookEntry {
  name: string;
  message: string;
  timestamp: number;
}

interface MemoryEntry {
  id: string;
  title: string;
  date: string;
  description: string;
  location?: string;
  imageUrl?: string;
}

interface VoiceNote {
  id: string;
  timestamp: number;
  duration: number;
  blobUrl: string;
}

interface TimedContent {
  id: string;
  type: 'image' | 'message';
  content: string;
  revealDate: string;
  isRevealed: boolean;
}

interface SurpriseStep {
  id: number;
  question: string;
  answer: string;
  hint: string;
  completed: boolean;
}

export default function LoveSite() {
  const PAGES = ['Home', 'Gallery', 'Memories', 'Invitation'];
  
  // ===== STATE MANAGEMENT =====
  const [page, setPage] = useState<string>('Home');
  const [images, setImages] = useState<string[]>([]);
  // Force light-only palette (no black/dark backgrounds). Keep state for compatibility but default to false.
  const [themeDark, setThemeDark] = useState(false);
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const [countdownDate, setCountdownDate] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [guestbook, setGuestbook] = useState<GuestbookEntry[]>([]);
  const [noteDraft, setNoteDraft] = useState<string>('');
  const [memories, setMemories] = useState<MemoryEntry[]>([]);
  const [voiceNotes, setVoiceNotes] = useState<VoiceNote[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [timedContents, setTimedContents] = useState<TimedContent[]>([]);
  const [surpriseFlow, setSurpriseFlow] = useState<SurpriseStep[]>([]);
  const [surpriseFStep, setSurpriseFStep] = useState(0);
  const [surpriseAnswer, setSurpriseAnswer] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [personalizedMsg, setPersonalizedMsg] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#d6c6b8');
  const [playlistUrl, setPlaylistUrl] = useState('');
  
  // Memory form states
  const [memoryTitle, setMemoryTitle] = useState('');
  const [memoryDate, setMemoryDate] = useState('');
  const [memoryDesc, setMemoryDesc] = useState('');
  const [memoryLocation, setMemoryLocation] = useState('');
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // ===== LOAD PRE-EXISTING IMAGES FROM PUBLIC FOLDER =====
  useEffect(() => {
    const loadPublicImages = async () => {
      try {
        // Load the pre-uploaded images
        const imageFiles = [
          'IMG-20251022-WA0006.jpg',
          'IMG-20251022-WA0007.jpg',
          'IMG-20251121-WA0014.jpg',
          'IMG-20251121-WA0015.jpg',
          'IMG-20251121-WA0016.jpg',
          'IMG-20251121-WA0017.jpg',
          'IMG-20251121-WA0018.jpg',
          'IMG-20251121-WA0019.jpg',
          'IMG-20251121-WA0020.jpg',
          'IMG-20251121-WA0021.jpg',
          'IMG-20251121-WA0022.jpg',
          'IMG-20251121-WA0023.jpg',
          'IMG-20251121-WA0024.jpg',
          'IMG-20251121-WA0025.jpg',
          'IMG-20251121-WA0026.jpg',
          'IMG-20251121-WA0027.jpg',
          'IMG-20251121-WA0028.jpg',
          'IMG-20251121-WA0029.jpg',
          'IMG-20251121-WA0030.jpg',
          'IMG-20251121-WA0031.jpg',
          'IMG-20251121-WA0032.jpg',
          'IMG-20251121-WA0033.jpg',
          'IMG-20251121-WA0034.jpg',
          'IMG-20251121-WA0035.jpg',
          'IMG-20251121-WA0036.jpg',
          'IMG-20251121-WA0037.jpg',
          'IMG-20251121-WA0038.jpg',
          'IMG-20251121-WA0039.jpg',
          'IMG-20251121-WA0040.jpg',
          'IMG-20251121-WA0041.jpg',
          'IMG-20251121-WA0042.jpg',
          'IMG-20251121-WA0043.jpg',
          'IMG-20251121-WA0044.jpg',
          'IMG-20251121-WA0045.jpg',
          'IMG-20251121-WA0046.jpg',
          'IMG-20251121-WA0047.jpg',
          'IMG-20251121-WA0048.jpg',
          'IMG-20251121-WA0049.jpg',
          'IMG-20251121-WA0050.jpg',
          'IMG-20251121-WA0051.jpg',
          'IMG-20251121-WA0052.jpg',
          'IMG-20251121-WA0053.jpg',
          'IMG-20251121-WA0054.jpg',
          'IMG-20251121-WA0055.jpg',
          'IMG-20251121-WA0056.jpg',
          'IMG-20251121-WA0057.jpg',
          'IMG-20251121-WA0058.jpg',
          'IMG-20251121-WA0059.jpg',
          'IMG-20251121-WA0060.jpg',
          'IMG-20251121-WA0061.jpg',
          'IMG-20251121-WA0062.jpg',
          'IMG-20251121-WA0063.jpg',
          'IMG-20251121-WA0064.jpg',
          'IMG-20251121-WA0065.jpg',
          'IMG-20251121-WA0066.jpg',
          'IMG-20251121-WA0067.jpg',
          'IMG-20251121-WA0068.jpg',
          'IMG-20251121-WA0069.jpg',
          'IMG-20251121-WA0070.jpg',
          'IMG-20251121-WA0071.jpg',
          'IMG-20251121-WA0072.jpg',
          'IMG-20251121-WA0073.jpg',
          'IMG-20251121-WA0074.jpg',
          'IMG-20251121-WA0075.jpg',
          'IMG-20251121-WA0076.jpg',
          'IMG-20251121-WA0077.jpg',
          'IMG-20251121-WA0078.jpg',
          'IMG-20251121-WA0079.jpg',
          'IMG-20251121-WA0080.jpg',
          'IMG-20251121-WA0081.jpg',
          'IMG-20251121-WA0082.jpg',
          'IMG-20251121-WA0083.jpg',
          'IMG-20251121-WA0084.jpg',
          'IMG-20251121-WA0085.jpg',
          'IMG-20251121-WA0086.jpg',
          'IMG-20251121-WA0087.jpg',
          'IMG-20251121-WA0092.jpg',
          'IMG-20251121-WA0093.jpg',
          'IMG-20251121-WA0094.jpg',
          'IMG-20251121-WA0095.jpg',
          'WhatsApp Image 2025-11-21 at 19.27.38_caa189d2.jpg',
          'WhatsApp Image 2025-11-21 at 19.27.39_55482852.jpg',
          'WhatsApp Image 2025-11-21 at 19.27.39_edf1f5bb.jpg',
          'WhatsApp Image 2025-11-21 at 19.27.39_ef61a4cd.jpg',
          'WhatsApp Image 2025-11-21 at 19.27.40_2046c6fc.jpg',
          'WhatsApp Image 2025-11-21 at 19.27.40_56873ed7.jpg',
          'WhatsApp Image 2025-11-21 at 19.27.41_2b9c838c.jpg',
          'WhatsApp Image 2025-11-21 at 19.27.41_d453d162.jpg',
          'WhatsApp Image 2025-11-21 at 19.27.41_f80d0852.jpg',
        ];
        
        const imagePaths = imageFiles.map((file) => `/images/${file}`);
        setImages(imagePaths);
      } catch (err) {
        console.warn('Failed to load public images:', err);
      }
    };

    loadPublicImages();
  }, []);

  // ===== LOAD FROM LOCALSTORAGE =====
  useEffect(() => {
    const saved = localStorage.getItem('loveSiteData');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        // Only load images from localStorage if they were manually added
        if (data.images && data.images.length > 0) {
          setImages((prev) => [...prev, ...data.images]);
        }
        setGuestbook(data.guestbook || []);
        setMemories(data.memories || []);
        setTimedContents(data.timedContents || []);
        setSurpriseFlow(data.surpriseFlow || initializeSurpriseFlow());
        setCountdownDate(data.countdownDate || getDefaultCountdownDate());
        setThemeDark(data.themeDark !== false);
        setPersonalizedMsg(data.personalizedMsg || '');
        setPrimaryColor(data.primaryColor || '#d6c6b8');
        setPlaylistUrl(data.playlistUrl || '');
      } catch (e) {
        console.warn('Failed to load saved data:', e);
        setCountdownDate(getDefaultCountdownDate());
        setSurpriseFlow(initializeSurpriseFlow());
      }
    } else {
      setCountdownDate(getDefaultCountdownDate());
      setSurpriseFlow(initializeSurpriseFlow());
    }
  }, []);

  // ===== SAVE TO LOCALSTORAGE =====
  useEffect(() => {
    const data = {
      images,
      guestbook,
      memories,
      timedContents,
      surpriseFlow,
      countdownDate,
      themeDark,
      personalizedMsg,
      primaryColor,
      playlistUrl,
    };
    localStorage.setItem('loveSiteData', JSON.stringify(data));
  }, [images, guestbook, memories, timedContents, surpriseFlow, countdownDate, themeDark, personalizedMsg, primaryColor, playlistUrl]);

  // ===== HELPER FUNCTIONS =====
  function getDefaultCountdownDate(): string {
    const nextYear = new Date().getFullYear() + 1;
    return `${nextYear}-05-23T00:00:00`;
  }

  function initializeSurpriseFlow(): SurpriseStep[] {
    return [
      {
        id: 1,
        question: "What's my favorite date with you? (Format: DD/MM)",
        answer: 'your-date',
        hint: 'Think of that special day...',
        completed: false,
      },
      {
        id: 2,
        question: "What's the name of the place where we first met?",
        answer: 'your-place',
        hint: 'Where our story began...',
        completed: false,
      },
      {
        id: 3,
        question: "What's my favorite song? (First word)",
        answer: 'your-song',
        hint: 'The one I play when thinking of you...',
        completed: false,
      },
    ];
  }

  // ===== COUNTDOWN TIMER =====
  // Ensure the document is always in light mode (no 'dark' class)
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  useEffect(() => {
    if (!countdownDate) return;
    
    const target = new Date(countdownDate);
    const iv = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      
      if (diff <= 0) {
        setTimeLeft('🎉 It\'s Today! 🎉');
        setShowConfetti(true);
        clearInterval(iv);
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      setTimeLeft(`${days}d ${hrs}h ${mins}m ${secs}s`);
    }, 1000);
    
    return () => clearInterval(iv);
  }, [countdownDate]);

  // ===== FILE HANDLING & GALLERY =====
  function handleFiles(e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) {
    let files: FileList | null = null;
    
    if ('dataTransfer' in e) {
      files = e.dataTransfer.files;
    } else {
      files = e.target.files;
    }
    
    if (!files) return;
    
    Array.from(files).forEach((file) => {
      if (!file.type.startsWith('image/')) return;
      
      const reader = new FileReader();
      reader.onload = (ev) => {
        const result = ev.target?.result as string;
        setImages((prev) => [result, ...prev]);
      };
      reader.readAsDataURL(file);
    });
  }

  function deleteImage(idx: number) {
    setImages((prev) => prev.filter((_, i) => i !== idx));
  }

  // ===== MODAL & SLIDESHOW =====
  function openModal(i: number) {
    setModalIdx(i);
  }

  function closeModal() {
    setModalIdx(null);
  }

  function nextImage() {
    if (modalIdx !== null) {
      setModalIdx((m) => (m !== null && m < images.length - 1 ? m + 1 : m));
    }
  }

  function prevImage() {
    if (modalIdx !== null) {
      setModalIdx((m) => (m !== null && m > 0 ? m - 1 : m));
    }
  }

  // ===== GUESTBOOK =====
  function addGuest() {
    if (!noteDraft.trim()) return;
    const entry: GuestbookEntry = {
      name: 'Anonymous ❤️',
      message: noteDraft.trim(),
      timestamp: Date.now(),
    };
    setGuestbook((prev) => [entry, ...prev]);
    setNoteDraft('');
  }

  // ===== VOICE NOTES =====
  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      audioChunksRef.current = [];

      recorder.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const blobUrl = URL.createObjectURL(blob);
        const duration = Math.round(audioChunksRef.current.length * 25); // rough estimate
        
        setVoiceNotes((prev) => [
          { id: `note-${Date.now()}`, timestamp: Date.now(), duration, blobUrl },
          ...prev,
        ]);

        stream.getTracks().forEach((track) => track.stop());
      };

      recorder.start();
      mediaRecorderRef.current = recorder;
      setIsRecording(true);
    } catch (err) {
      alert('Microphone access denied or not available.');
    }
  }

  function stopRecording() {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  }

  function deleteVoiceNote(id: string) {
    setVoiceNotes((prev) => prev.filter((v) => v.id !== id));
  }

  // ===== TIMED REVEALS =====

  useEffect(() => {
    setTimedContents((prev) =>
      prev.map((tc) => ({
        ...tc,
        isRevealed: new Date(tc.revealDate) <= new Date(),
      }))
    );
  }, []);

  // ===== SURPRISE FLOW =====
  function checkSurpriseAnswer() {
    const current = surpriseFlow[surpriseFStep];
    if (current && surpriseAnswer.toLowerCase().trim() === current.answer.toLowerCase()) {
      const updated = [...surpriseFlow];
      updated[surpriseFStep].completed = true;
      setSurpriseFlow(updated);

      if (surpriseFStep < surpriseFlow.length - 1) {
        setSurpriseFStep((s) => s + 1);
        setSurpriseAnswer('');
      } else {
        setShowConfetti(true);
        alert('🎉 You completed the surprise! Check the Birthday page for your final gift!');
      }
    } else {
      alert('Not quite... try again or use the hint!');
    }
  }

  // ===== MEMORY TIMELINE =====
  function addMemory(title: string, date: string, desc: string, location?: string) {
    const m: MemoryEntry = {
      id: `mem-${Date.now()}`,
      title,
      date,
      description: desc,
      location,
    };
    setMemories((prev) => [...prev, m]);
  }

  // ===== COMPONENTS =====
  function Header() {
    return (
      <header className="flex items-center justify-between p-4 border-b border-beige-400/30 dark:border-beige-600/40 sticky top-0 z-50 bg-beige-700/80 dark:bg-beige-900/70 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-lg bg-beige-300 dark:bg-beige-600 flex items-center justify-center text-2xl font-handwrite animate-pulse-soft">
            ❤️
          </div>
          <div>
            <h1 className="text-xl font-serif font-bold tracking-tight text-beige-950 dark:text-beige-50">And Ever</h1>
            <p className="text-xs opacity-80 text-beige-900 dark:text-beige-200">A corner for our memories</p>
          </div>
        </div>

        <nav className="flex items-center space-x-2 flex-wrap gap-2">
          {PAGES.map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                page === p
                  ? 'bg-beige-400/40 dark:bg-beige-600/40 border border-beige-400 dark:border-beige-500'
                  : 'hover:bg-beige-400/20 dark:hover:bg-beige-600/20'
              }`}
            >
              {p}
            </button>
          ))}
          {/* theme toggle removed — app is light-only */}
        </nav>
      </header>
    );
  }

  function HomePage() {
    return (
      <div className="p-6 animate-fade-in">
        {/* FRONT-PAGE INVITATION CARD */}
        <div className="mb-12 max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-b from-beige-50 to-beige-100 dark:from-beige-900 dark:to-beige-950 border-2 border-beige-200 dark:border-beige-700 shadow-2xl">
          <div className="text-center space-y-6">
            <div className="text-sm font-semibold tracking-widest text-beige-700 dark:text-beige-300 uppercase">November 23rd, 2025</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-beige-900 dark:text-beige-50">INVITATION FOR DATE</h2>
            <div className="py-2 text-2xl">🌸 🌻 🌺</div>
            <div className="space-y-4 text-left max-w-2xl mx-auto font-serif text-beige-900 dark:text-beige-100 leading-relaxed text-base">
              <p className="italic">Dear Soumya,</p>
              <p>Tomorrow is your special day, and I want to make it unforgettable for you.</p>
              <p>My love you deserve a birthday filled with warmth, love, and beautiful moments — and I hope to be the one who creates those moments with you.</p>
              <p>So... I want to ask you something very important and truly from my heart —</p>
              <p className="text-lg font-semibold text-center py-3">Will you go on a date with me tomorrow?</p>
              <p>I want to spend the day celebrating you — your smile, your presence, and everything that makes you so precious to me. Whether it's a quiet place, travel, lunch, or just walking together, all I want is your company.</p>
              <p>Let's make your birthday a memory we will hold close for years.</p>
              <p>Waiting for your yes...</p>
              <p className="italic pt-3">With all my love,<br/>Nilesh</p>
            </div>
            <div className="py-4 text-2xl">🌻 🌼 💐</div>
          </div>
        </div>

        {/* PLAN IMAGES (from plan/1.png and plan/2.png) */}
        <div className="max-w-3xl mx-auto mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <img src={plan1} alt="Invitation decor 1" className="w-full h-48 object-cover rounded-lg shadow-md" />
          <img src={plan2} alt="Invitation decor 2" className="w-full h-48 object-cover rounded-lg shadow-md" />
        </div>

        {/* HERO SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight bg-gradient-to-r from-beige-900 to-beige-700 dark:from-beige-100 dark:to-beige-300 bg-clip-text text-transparent">
              Happy Birthday, my love 💌
            </h1>
            <p className="text-lg text-beige-800/80 dark:text-beige/70 leading-relaxed mb-8">
              This website is a beautiful surprise — a collection of our precious moments, photos, voice messages, 
              countdown, and more. Explore our memories, unlock surprises, and let friends and family leave their wishes in the guestbook. 
              This is my way of celebrating <span className="font-serif font-semibold italic">you</span>.
            </p>
            
            {/* FEATURES BOX */}
            <div className="mb-8 p-5 rounded-xl bg-gradient-to-br from-beige/10 to-beige/5 dark:from-beige/10 dark:to-black/30 border border-beige/20 dark:border-beige/10 shadow-md">
              <p className="text-sm font-semibold mb-3 text-beige-900 dark:text-beige-100">✨ Explore these features:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><span>📸</span> <span>Gallery with 88+ cherished photos</span></li>
                <li className="flex items-center gap-2"><span>💝</span> <span>Memories timeline to document our love</span></li>
                <li className="flex items-center gap-2"><span>🎤</span> <span>Voice messages from loved ones</span></li>
                <li className="flex items-center gap-2"><span>🎁</span> <span>Surprise riddle puzzle</span></li>
                <li className="flex items-center gap-2"><span>⏰</span> <span>Live countdown timer</span></li>
              </ul>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setPage('Gallery')}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-beige-600 to-beige-700 dark:from-beige-500 dark:to-beige-600 hover:from-beige-700 hover:to-beige-800 dark:hover:from-beige-600 dark:hover:to-beige-700 font-medium text-white transition shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
              >
                📸 View Gallery
              </button>
              <button
                onClick={() => setPage('Memories')}
                className="px-6 py-3 rounded-lg border border-beige/40 hover:bg-beige/10 dark:hover:bg-beige/20 font-medium transition transform hover:scale-105 active:scale-95"
              >
                💝 View Memories
              </button>
              <button
                onClick={() => setPage('Invitation')}
                className="px-6 py-3 rounded-lg border border-beige/40 hover:bg-beige/10 dark:hover:bg-beige/20 font-medium transition transform hover:scale-105 active:scale-95"
              >
                � Invitation
              </button>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-beige/20 dark:border-beige/10 h-96">
            {images.length > 0 ? (
              <img
                src={images[0]}
                alt="Our first memory"
                className="w-full h-full object-cover hover:scale-110 transition duration-500 cursor-pointer"
                onClick={() => { setPage('Gallery'); openModal(0); }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-beige-200 via-beige-100 to-beige-50 dark:from-beige-900 dark:via-beige-800 dark:to-beige-950 flex flex-col items-center justify-center">
                <p className="text-5xl mb-4">📸</p>
                <p className="text-lg font-semibold">Upload photos to get started</p>
                <p className="text-sm opacity-60 mt-2">Go to Gallery to add your first memory</p>
              </div>
            )}
          </div>
        </section>

        {/* STATS CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="p-6 rounded-xl border border-beige/20 dark:border-beige/10 bg-gradient-to-br from-beige/10 to-beige/5 dark:from-beige/10 dark:to-black/30 hover:shadow-lg transition transform hover:scale-105 shadow-md">
            <h3 className="font-serif font-semibold text-lg mb-3 text-beige-900 dark:text-beige-100">⏰ Days Left</h3>
            <p className="text-3xl font-bold font-handwrite text-beige-600 dark:text-beige-400">
              {timeLeft || '...'}
            </p>
            <p className="text-xs opacity-60 mt-2">Countdown to your special day</p>
          </div>

          <div className="p-6 rounded-xl border border-beige/20 dark:border-beige/10 bg-gradient-to-br from-beige/10 to-beige/5 dark:from-beige/10 dark:to-black/30 hover:shadow-lg transition transform hover:scale-105 shadow-md">
            <h3 className="font-serif font-semibold text-lg mb-3 text-beige-900 dark:text-beige-100">💬 Wishes</h3>
            <p className="text-3xl font-bold text-beige-600 dark:text-beige-400">
              {guestbook.length}
            </p>
            <p className="text-xs opacity-60 mt-2">From loved ones</p>
          </div>

          <div className="p-6 rounded-xl border border-beige/20 dark:border-beige/10 bg-gradient-to-br from-beige/10 to-beige/5 dark:from-beige/10 dark:to-black/30 hover:shadow-lg transition transform hover:scale-105 shadow-md">
            <h3 className="font-serif font-semibold text-lg mb-3 text-beige-900 dark:text-beige-100">📸 Photos</h3>
            <p className="text-3xl font-bold text-beige-600 dark:text-beige-400">
              {images.length}
            </p>
            <p className="text-xs opacity-60 mt-2">Cherished memories</p>
          </div>

          <div className="p-6 rounded-xl border border-beige/20 dark:border-beige/10 bg-gradient-to-br from-beige/10 to-beige/5 dark:from-beige/10 dark:to-black/30 hover:shadow-lg transition transform hover:scale-105 shadow-md">
            <h3 className="font-serif font-semibold text-lg mb-3 text-beige-900 dark:text-beige-100">🎁 Surprises</h3>
            <p className="text-3xl font-bold text-beige-600 dark:text-beige-400">
              {surpriseFlow.filter((s) => !s.completed).length}
            </p>
            <p className="text-xs opacity-60 mt-2">Left to unlock</p>
          </div>
        </section>

        {/* QUICK LINKS SECTION */}
        <section className="p-8 rounded-xl bg-gradient-to-br from-beige/10 to-beige/5 dark:from-beige/10 dark:to-black/30 border border-beige/20 dark:border-beige/10 shadow-lg">
          <h2 className="text-2xl font-serif font-bold mb-6">🌹 Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => setPage('Gallery')}
              className="p-4 rounded-lg border border-beige/30 hover:bg-beige/10 dark:hover:bg-beige/20 transition text-center transform hover:scale-105"
            >
              <p className="text-2xl mb-2">📸</p>
              <p className="font-semibold">Gallery</p>
              <p className="text-xs opacity-60">View all photos</p>
            </button>

            <button
              onClick={() => setPage('Memories')}
              className="p-4 rounded-lg border border-beige/30 hover:bg-beige/10 dark:hover:bg-beige/20 transition text-center transform hover:scale-105"
            >
              <p className="text-2xl mb-2">💝</p>
              <p className="font-semibold">Memories</p>
              <p className="text-xs opacity-60">Our moments</p>
            </button>

            <button
              onClick={() => setPage('Invitation')}
              className="p-4 rounded-lg border border-beige/30 hover:bg-beige/10 dark:hover:bg-beige/20 transition text-center transform hover:scale-105"
            >
              <p className="text-2xl mb-2">�</p>
              <p className="font-semibold">Invitation</p>
              <p className="text-xs opacity-60">You're invited!</p>
            </button>

            <button
              onClick={() => setPage('Surprise')}
              className="p-4 rounded-lg border border-beige/30 hover:bg-beige/10 dark:hover:bg-beige/20 transition text-center transform hover:scale-105"
            >
              <p className="text-2xl mb-2">🎁</p>
              <p className="font-semibold">Surprises</p>
              <p className="text-xs opacity-60">Unlock riddles</p>
            </button>
          </div>
        </section>

        {showConfetti && <Confetti />}
      </div>
    );
  }

  function GalleryPage() {
    return (
      <div className="p-6 animate-fade-in">
        <div className="mb-8">
          <h2 className="text-3xl font-serif font-bold mb-2">📸 Photo Gallery</h2>
          <p className="text-beige/70 dark:text-beige/60">Cherish our beautiful moments together. Drag & drop or upload your favorite photos.</p>
        </div>

        {/* UPLOAD SECTION */}
        <div className="mb-8 p-6 rounded-xl border border-beige/30 dark:border-beige/20 bg-gradient-to-br from-beige/10 to-beige/5 dark:from-beige/10 dark:to-black/30 shadow-lg dark:shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="px-6 py-8 rounded-lg border-2 border-dashed border-beige-600/40 dark:border-beige-400/40 cursor-pointer hover:bg-beige/20 dark:hover:bg-beige/20 transition flex flex-col items-center justify-center gap-3 transform hover:scale-105">
              <span className="text-4xl">📤</span>
              <span className="font-medium text-center">Click to upload photos</span>
              <span className="text-xs opacity-60">JPG, PNG supported</span>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFiles}
                className="hidden"
              />
            </label>

            <div
              onDrop={(e) => {
                e.preventDefault();
                handleFiles(e);
              }}
              onDragOver={(e) => e.preventDefault()}
              className="px-6 py-8 rounded-lg border-2 border-dashed border-beige-600/40 dark:border-beige-400/40 hover:bg-beige/20 dark:hover:bg-beige/20 transition flex flex-col items-center justify-center gap-3 cursor-pointer transform hover:scale-105"
            >
              <span className="text-4xl">🎨</span>
              <span className="font-medium text-center">Drag & drop photos here</span>
              <span className="text-xs opacity-60">Multiple files welcome!</span>
            </div>
          </div>
        </div>

        {/* PHOTOS DISPLAY */}
        {images.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-beige/20 dark:border-beige/10 rounded-xl bg-beige/5 dark:bg-beige/5">
            <p className="text-6xl mb-4">🖼️</p>
            <p className="text-2xl font-serif font-semibold mb-2">No photos yet</p>
            <p className="text-beige/70 dark:text-beige/60 mb-6">Upload your beautiful memories above to get started!</p>
            <p className="text-sm opacity-60">The website auto-loads photos from /public/images too</p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <p className="text-sm text-beige/60 dark:text-beige/70 font-medium mb-4">💕 {images.length} beautiful photo{images.length !== 1 ? 's' : ''} • Click any to view</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((src, i) => (
                  <div
                    key={i}
                    className="relative group rounded-lg overflow-hidden border border-beige/20 dark:border-beige/10 cursor-pointer hover:border-beige/60 dark:hover:border-beige/40 transition shadow-md hover:shadow-xl transform hover:scale-105 duration-300"
                    onClick={() => openModal(i)}
                  >
                    <img
                      src={src}
                      alt={`Memory ${i + 1}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23d6c6b8" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="%23999"%3EPhoto unavailable%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-beige-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-end gap-2 p-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteImage(i);
                        }}
                        className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                    <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-beige-800/20 text-beige-900 text-xs font-medium">#{i + 1}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* MODAL */}
        {modalIdx !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-beige-900/60 p-4 animate-fade-in"
            onClick={closeModal}
          >
            <div
              className="max-w-5xl w-full bg-beige-50 dark:bg-beige-900/60 rounded-xl p-6 border border-beige/20 dark:border-beige/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE */}
              <div className="mb-6 rounded-lg overflow-hidden border border-beige/20 bg-beige-50 dark:bg-beige-900/40">
                <img
                  src={images[modalIdx]}
                  alt={`Memory ${modalIdx + 1}`}
                  className="w-full max-h-[60vh] object-contain"
                />
              </div>

              {/* CONTROLS */}
              <div className="flex justify-between items-center gap-4">
                <div className="space-x-2">
                  <button
                    onClick={prevImage}
                    disabled={modalIdx === 0}
                    className="px-6 py-3 rounded-lg border border-beige/40 hover:bg-beige/10 dark:hover:bg-beige/20 disabled:opacity-40 disabled:cursor-not-allowed font-medium transition transform hover:scale-105 active:scale-95"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={nextImage}
                    disabled={modalIdx === images.length - 1}
                    className="px-6 py-3 rounded-lg border border-beige/40 hover:bg-beige/10 dark:hover:bg-beige/20 disabled:opacity-40 disabled:cursor-not-allowed font-medium transition transform hover:scale-105 active:scale-95"
                  >
                    Next →
                  </button>
                </div>

                <div className="text-sm font-medium px-4 py-2 rounded-lg bg-beige/10 dark:bg-beige/20">
                  {modalIdx + 1} of {images.length}
                </div>

                <button
                  onClick={closeModal}
                  className="px-6 py-3 rounded-lg border border-beige/40 hover:bg-beige/10 dark:hover:bg-beige/20 font-medium transition transform hover:scale-105 active:scale-95"
                >
                  ✕ Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  function MemoriesPage() {
    const sortedMemories = [...memories].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const handleAddMemory = () => {
      if (memoryTitle.trim() && memoryDate && memoryDesc.trim()) {
        addMemory(memoryTitle, memoryDate, memoryDesc, memoryLocation);
        setMemoryTitle('');
        setMemoryDate('');
        setMemoryDesc('');
        setMemoryLocation('');
      }
    };

    return (
      <div className="p-6 animate-fade-in">
        <div className="mb-8">
          <h2 className="text-3xl font-serif font-bold mb-2"> Memories Timeline</h2>
          <p className="text-beige/70 dark:text-beige/60">Our story, one moment at a time. Every moment with you is precious.</p>
        </div>

        <div className="mb-8 p-6 rounded-xl border border-beige/30 dark:border-beige/20 bg-gradient-to-br from-beige/10 to-beige/5 dark:from-beige/5 dark:to-black/30 shadow-lg dark:shadow-xl">
          <h3 className="font-serif font-semibold mb-6 text-lg"> Add a New Memory</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-beige/80 dark:text-beige/70">Memory Title</label>
              <input 
                type="text" 
                placeholder="e.g., First kiss, Our trip to Paris..." 
                value={memoryTitle} 
                onChange={(e) => setMemoryTitle(e.target.value)} 
                className="w-full p-3 rounded-lg border border-beige/30 dark:border-beige/20 bg-white dark:bg-beige-900/30 focus:outline-none focus:ring-2 focus:ring-beige-600 dark:focus:ring-beige-400 transition"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-2 text-beige/80 dark:text-beige/70">Date</label>
                <input 
                  type="date" 
                  value={memoryDate} 
                  onChange={(e) => setMemoryDate(e.target.value)} 
                  className="w-full p-3 rounded-lg border border-beige/30 dark:border-beige/20 bg-white dark:bg-beige-900/30 focus:outline-none focus:ring-2 focus:ring-beige-600 dark:focus:ring-beige-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-beige/80 dark:text-beige/70">Location</label>
                <input 
                  type="text" 
                  placeholder="Where?" 
                  value={memoryLocation} 
                  onChange={(e) => setMemoryLocation(e.target.value)} 
                  className="w-full p-3 rounded-lg border border-beige/30 dark:border-beige/20 bg-white dark:bg-beige-900/30 focus:outline-none focus:ring-2 focus:ring-beige-600 dark:focus:ring-beige-400 transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-beige/80 dark:text-beige/70">What Happened?</label>
              <textarea 
                placeholder="Tell me the beautiful story of this moment..." 
                value={memoryDesc} 
                onChange={(e) => setMemoryDesc(e.target.value)} 
                className="w-full p-3 rounded-lg border border-beige/30 dark:border-beige/20 bg-white dark:bg-beige-900/30 focus:outline-none focus:ring-2 focus:ring-beige-600 dark:focus:ring-beige-400 transition h-24 resize-none"
              />
            </div>
            <button 
              onClick={handleAddMemory} 
              disabled={!memoryTitle.trim() || !memoryDate || !memoryDesc.trim()}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-beige-600 to-beige-700 dark:from-beige-500 dark:to-beige-600 hover:from-beige-700 hover:to-beige-800 dark:hover:from-beige-600 dark:hover:to-beige-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-white transition shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
            >
               Save Memory
            </button>
          </div>
        </div>

        {sortedMemories.length === 0 ? (
          <div className="text-center py-16 border-2 border-dashed border-beige/20 dark:border-beige/10 rounded-xl bg-beige/5 dark:bg-beige/5">
            <p className="text-5xl mb-4">📖</p>
            <p className="text-xl font-serif font-semibold mb-2">No memories yet</p>
            <p className="text-beige/70 dark:text-beige/60">Start documenting our beautiful story above!</p>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-sm text-beige/60 dark:text-beige/70 font-medium">💫 {sortedMemories.length} beautiful moment{sortedMemories.length !== 1 ? 's' : ''} cherished</p>
            <ol className="relative space-y-8 pl-6">
              {sortedMemories.map((mem, idx) => (
                <li key={mem.id} className="relative">
                  <div className="absolute -left-8 top-2 w-6 h-6 bg-gradient-to-br from-beige-600 to-beige-700 dark:from-beige-400 dark:to-beige-500 rounded-full shadow-lg"></div>
                  <div className="ml-2 p-4 rounded-lg bg-gradient-to-br from-beige/10 to-beige/5 dark:from-beige/10 dark:to-black/30 border border-beige/20 dark:border-beige/10 shadow-md hover:shadow-lg transition transform hover:translate-x-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-serif font-bold text-lg text-beige-900 dark:text-beige-100">{mem.title}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-beige-600/20 dark:bg-beige-400/20 text-beige-700 dark:text-beige-300 font-medium">#{idx + 1}</span>
                    </div>
                    <p className="text-sm text-beige/70 dark:text-beige/60 font-medium mb-1">📅 {new Date(mem.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    {mem.location && <p className="text-sm text-beige/70 dark:text-beige/60 mb-3">📍 {mem.location}</p>}
                    <p className="text-beige-900/80 dark:text-beige-50/90 leading-relaxed">{mem.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    );
  }


  function InvitationPage() {
    const sortedGuestbook = [...guestbook].sort((a, b) => b.timestamp - a.timestamp);

    return (
      <div className="p-6 animate-fade-in">
        {/* MAIN INVITATION CARD */}
        <div className="mb-12 max-w-3xl mx-auto p-10 rounded-2xl bg-gradient-to-b from-beige-50 to-beige-100 dark:from-beige-900 dark:to-beige-950 border-2 border-beige-200 dark:border-beige-700 shadow-2xl">
          <div className="text-center space-y-6">
            {/* DATE HEADER */}
            <div className="text-sm font-semibold tracking-widest text-beige-700 dark:text-beige-300 uppercase">
              November 23rd, 2025
            </div>

            {/* MAIN TITLE */}
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-beige-900 dark:text-beige-50">
              INVITATION FOR DATE
            </h1>

            {/* DECORATIVE FLOWERS */}
            <div className="py-4 text-3xl">🌸 🌻 🌺</div>

            {/* INVITATION MESSAGE */}
            <div className="space-y-4 text-left max-w-2xl mx-auto font-serif text-beige-900 dark:text-beige-100 leading-relaxed text-lg">
              <p className="italic">Dear Soumya,</p>
              
              <p>
                Tomorrow is your special day, and I want to make it unforgettable for you.
              </p>

              <p>
                My love you deserve a birthday filled with warmth, love, and beautiful moments — and I hope to be the one who creates those moments with you.
              </p>

              <p>
                So... I want to ask you something very important and truly from my heart —
              </p>

              <p className="text-xl font-bold text-beige-700 dark:text-beige-400 text-center py-4">
                Will you go on a date with me tomorrow?
              </p>

              <p>
                I want to spend the day celebrating you — your smile, your presence, and everything that makes you so precious to me. Whether it's a quiet place, Travel, Lunch, or just walking together, all I want is your company.
              </p>

              <p>
                Let's make your birthday a memory we will hold close for years.
              </p>

              <p>
                Waiting for your yes...
              </p>

              <p className="italic pt-4">
                With all my love,<br />
                Nilesh
              </p>
            </div>

            {/* DECORATIVE FLOWERS BOTTOM */}
            <div className="py-6 text-3xl">🌻 🌼 💐</div>
          </div>
        </div>

        {/* RSVP SECTION */}
        <div className="max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-serif font-bold mb-6 text-center">💌 RSVP & Messages of Love</h2>

          {/* RSVP FORM */}
          <div className="mb-8 p-6 rounded-xl border border-beige/30 dark:border-beige/20 bg-gradient-to-br from-beige/10 to-beige/5 dark:from-beige/10 dark:to-black/30 shadow-lg dark:shadow-xl">
            <h3 className="font-serif font-semibold text-lg mb-4">✍️ Leave Your Message</h3>
            <div className="space-y-4">
              <textarea
                value={noteDraft}
                onChange={(e) => setNoteDraft(e.target.value)}
                placeholder="Share your wishes, blessings, or a special message for Soumya's birthday..."
                className="w-full p-4 rounded-lg border border-beige/30 dark:border-beige/20 bg-white dark:bg-beige-900/30 focus:outline-none focus:ring-2 focus:ring-beige-600 dark:focus:ring-beige-400 transition h-28 resize-none"
              />
              <div className="flex gap-3">
                <button
                  onClick={addGuest}
                  disabled={!noteDraft.trim()}
                  className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-beige-600 to-beige-700 dark:from-beige-500 dark:to-beige-600 hover:from-beige-700 hover:to-beige-800 dark:hover:from-beige-600 dark:hover:to-beige-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-white transition shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                >
                  💌 Send Wishes
                </button>
                <button
                  onClick={() => setNoteDraft('')}
                  className="px-6 py-3 rounded-lg border border-beige/30 dark:border-beige/20 hover:bg-beige/10 dark:hover:bg-beige/20 font-medium transition"
                >
                  ✕ Clear
                </button>
              </div>
            </div>
          </div>

          {/* VOICE MESSAGES SECTION */}
          <div className="mb-8 p-6 rounded-xl border border-beige/30 dark:border-beige/20 bg-gradient-to-br from-beige/10 to-beige/5 dark:from-beige/10 dark:to-black/30 shadow-lg dark:shadow-xl">
            <h3 className="font-serif font-semibold text-lg mb-4">🎤 Voice Blessings</h3>
            <div className="flex gap-3 mb-4">
              {!isRecording ? (
                <button
                  onClick={startRecording}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 font-medium text-white transition shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                >
                  🔴 Record Voice Message
                </button>
              ) : (
                <button
                  onClick={stopRecording}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 font-medium text-white transition shadow-md hover:shadow-lg animate-pulse"
                >
                  ⏹️ Stop Recording
                </button>
              )}
            </div>

            {voiceNotes.length > 0 && (
              <div className="space-y-3">
                <p className="text-sm text-beige/60 dark:text-beige/70 font-medium">🎵 {voiceNotes.length} voice message{voiceNotes.length !== 1 ? 's' : ''} recorded</p>
                {voiceNotes.map((vn) => (
                  <div key={vn.id} className="flex items-center justify-between p-4 rounded-lg bg-beige/5 dark:bg-beige-900/30 border border-beige/20 dark:border-beige/10 hover:shadow-md transition">
                    <audio
                      src={vn.blobUrl}
                      controls
                      className="flex-1"
                    />
                    <button
                      onClick={() => deleteVoiceNote(vn.id)}
                      className="px-4 py-2 rounded-lg text-sm bg-red-600 hover:bg-red-700 text-white ml-4 transition shadow-md hover:shadow-lg"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* MESSAGES DISPLAY */}
          {sortedGuestbook.length === 0 ? (
            <div className="text-center py-16 border-2 border-dashed border-beige/20 dark:border-beige/10 rounded-xl bg-beige/5 dark:bg-beige/5">
              <p className="text-5xl mb-4">�</p>
              <p className="text-xl font-serif font-semibold mb-2">No wishes yet</p>
              <p className="text-beige/70 dark:text-beige/60">Be the first to share your blessings above!</p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-beige/60 dark:text-beige/70 font-medium">� {sortedGuestbook.length} beautiful wish{sortedGuestbook.length !== 1 ? 'es' : ''}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sortedGuestbook.map((entry) => (
                  <div
                    key={`${entry.timestamp}-${entry.name}`}
                    className="p-5 rounded-lg border border-beige/20 dark:border-beige/10 bg-gradient-to-br from-beige/10 to-beige/5 dark:from-beige/10 dark:to-black/30 hover:border-beige/40 dark:hover:border-beige/20 hover:shadow-lg transition transform hover:-translate-y-1 animate-slide-up"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-serif font-semibold text-lg text-beige-900 dark:text-beige-100">
                        {entry.name}
                      </h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-beige-600/20 dark:bg-beige-400/20 text-beige-700 dark:text-beige-300">
                        {new Date(entry.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    <p className="text-beige-900/80 dark:text-beige-50/90 leading-relaxed text-base">
                      "{entry.message}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  function SurpriseFlowPage() {
    const current = surpriseFlow[surpriseFStep];
    const progress = surpriseFlow.filter((s) => s.completed).length;

    return (
      <div className="p-6 animate-fade-in">
        <div className="mb-8">
          <h2 className="text-3xl font-serif font-bold mb-2">🎁 Surprise Riddles</h2>
          <p className="text-beige/70 dark:text-beige/60">
            Answer 3 riddles to unlock a special surprise!
          </p>
        </div>

        {/* PROGRESS BAR */}
        <div className="mb-6 p-4 rounded-lg border border-beige/20 dark:border-beige/30 bg-beige/5 dark:bg-beige/10">
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold">Progress</p>
            <p className="text-sm">{progress} of 3 completed</p>
          </div>
          <div className="w-full bg-beige/20 dark:bg-beige/10 rounded-full h-2">
            <div
              className="bg-beige-600 dark:bg-beige-400 h-2 rounded-full transition-all"
              style={{ width: `${(progress / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* CURRENT RIDDLE */}
        {current && (
          <div className="p-6 rounded-lg border border-beige/20 dark:border-beige/30 bg-gradient-to-br from-beige/10 to-beige/5 mb-6 animate-slide-up">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-serif text-2xl font-bold">Riddle {surpriseFStep + 1}</h3>
              <span className="text-sm opacity-70">💡 Hint: {current.hint}</span>
            </div>

            <p className="text-lg mb-4 font-handwrite leading-relaxed">
              "{current.question}"
            </p>

            <div className="space-y-2">
              <input
                type="text"
                value={surpriseAnswer}
                onChange={(e) => setSurpriseAnswer(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') checkSurpriseAnswer();
                }}
                placeholder="Type your answer..."
                className="w-full p-3 rounded border border-beige/20 dark:bg-beige-900/50 dark:border-beige/30"
              />
              <button
                onClick={checkSurpriseAnswer}
                className="w-full px-4 py-2 rounded bg-beige/20 dark:bg-beige/30 hover:bg-beige/30 dark:hover:bg-beige/40 font-medium transition"
              >
                ✓ Submit Answer
              </button>
            </div>
          </div>
        )}

        {/* COMPLETED RIDDLES */}
        {progress > 0 && (
          <div className="mb-6">
            <h3 className="font-serif font-semibold text-lg mb-3">✓ Solved Riddles</h3>
            <div className="space-y-2">
              {surpriseFlow.map((s) =>
                s.completed ? (
                  <div
                    key={s.id}
                    className="p-3 rounded-lg bg-green-900/30 border border-green-600/50 flex items-center gap-2"
                  >
                    <span>✓</span>
                    <span>{s.question}</span>
                  </div>
                ) : null
              )}
            </div>
          </div>
        )}

        {/* ALL DONE! */}
        {progress === 3 && (
          <div className="p-6 rounded-lg border-2 border-green-600 bg-green-900/30 text-center animate-slide-up">
            <p className="text-4xl mb-3">🎉</p>
            <p className="text-2xl font-serif font-bold mb-2">You did it!</p>
            <p className="text-beige/80 dark:text-beige/70 mb-4">
              All surprises unlocked! Check the Birthday page for your special gift.
            </p>
            {showConfetti && <Confetti />}
          </div>
        )}
      </div>
    );
  }


  function Confetti() {
    return (
      <>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="fixed pointer-events-none animate-confetti-fall"
            style={{
              left: Math.random() * 100 + '%',
              top: '-10px',
              width: '10px',
              height: '10px',
              backgroundColor: ['#d6c6b8', '#ff69b4', '#ffd700'][Math.floor(Math.random() * 3)],
              borderRadius: '50%',
              animationDelay: Math.random() * 0.5 + 's',
            }}
          ></div>
        ))}
      </>
    );
  }

  // ===== MAIN RENDER =====
  return (
    <div className="min-h-screen bg-white text-beige-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        <Header />

        <main className="min-h-[calc(100vh-200px)]">
          {page === 'Home' && <HomePage />}
          {page === 'Gallery' && <GalleryPage />}
          {page === 'Memories' && <MemoriesPage />}
          {page === 'Invitation' && <InvitationPage />}
          {page === 'Surprise' && <SurpriseFlowPage />}
        </main>

        <footer className="p-6 text-center text-sm opacity-80 border-t border-beige-400/20 dark:border-beige-600/20">
          <p>Made with ❤️ for someone special</p>
          <p className="text-xs mt-1">All data stored locally in your browser</p>
        </footer>
      </div>
    </div>
  );
}
