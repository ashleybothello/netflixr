import { useState, useEffect, useRef } from "react";

// ==================== TRANSLATIONS ====================
const T = {
  English: {
    signIn: "Sign In", signOut: "Sign Out", getStarted: "Get Started ›",
    unlimited: "Unlimited movies, TV shows and more",
    startsAt: "Starts at ₹149. Cancel at any time.",
    readyToWatch: "Ready to watch? Enter your email to create or restart your membership.",
    emailPlaceholder: "Email address", trending: "Trending Now",
    moreReasons: "More reasons to join", faq: "Frequently Asked Questions",
    play: "▶ Play", moreInfo: "ℹ More Info", kids: "Kids",
    home: "Home", tvShows: "TV Shows", movies: "Movies",
    newPopular: "New & Popular", myList: "My List",
    continueWatching: "Continue Watching", newReleases: "New Releases",
    topPicks: "Top Picks for You", theme: "Theme",
    enjoyTV: "Enjoy on your TV", enjoyTVDesc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    download: "Download your shows", downloadDesc: "Save your favourites easily and always have something to watch.",
    watchEverywhere: "Watch everywhere", watchEverywhereDesc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    kidsProfile: "Create profiles for kids", kidsProfileDesc: "Send kids on adventures with their favourite characters in a space made just for them.",
    questionsCall: "Questions? Call 000-800-919-1694", netflixIndia: "Netflix India",
    faq1q: "What is Netflix?", faq1a: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    faq2q: "How much does Netflix cost?", faq2a: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month.",
    faq3q: "Where can I watch?", faq3a: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device.",
    faq4q: "How do I cancel?", faq4a: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks.",
    faq5q: "What can I watch on Netflix?", faq5a: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    faq6q: "Is Netflix good for kids?", faq6a: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
  },
  "हिन्दी": {
    signIn: "साइन इन", signOut: "साइन आउट", getStarted: "शुरू करें ›",
    unlimited: "असीमित फ़िल्में, टीवी शो और बहुत कुछ",
    startsAt: "₹149 से शुरू। कभी भी रद्द करें।",
    readyToWatch: "देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या शुरू करने के लिए ईमेल दर्ज करें।",
    emailPlaceholder: "ईमेल पता", trending: "अभी ट्रेंडिंग में",
    moreReasons: "शामिल होने के और कारण", faq: "अक्सर पूछे जाने वाले प्रश्न",
    play: "▶ चलाएं", moreInfo: "ℹ अधिक जानकारी", kids: "बच्चे",
    home: "होम", tvShows: "टीवी शो", movies: "फ़िल्में",
    newPopular: "नया और लोकप्रिय", myList: "मेरी सूची",
    continueWatching: "देखना जारी रखें", newReleases: "नई रिलीज़",
    topPicks: "आपके लिए शीर्ष चयन", theme: "थीम",
    enjoyTV: "अपने टीवी पर आनंद लें", enjoyTVDesc: "स्मार्ट टीवी, प्लेस्टेशन, एक्सबॉक्स और अधिक पर देखें।",
    download: "अपने शो डाउनलोड करें", downloadDesc: "अपने पसंदीदा आसानी से सहेजें।",
    watchEverywhere: "कहीं भी देखें", watchEverywhereDesc: "अपने फोन, टैबलेट, लैपटॉप और टीवी पर स्ट्रीम करें।",
    kidsProfile: "बच्चों के लिए प्रोफ़ाइल", kidsProfileDesc: "बच्चों को उनके पसंदीदा किरदारों के साथ भेजें।",
    questionsCall: "प्रश्न? कॉल करें 000-800-919-1694", netflixIndia: "नेटफ्लिक्स इंडिया",
    faq1q: "नेटफ्लिक्स क्या है?", faq1a: "नेटफ्लिक्स एक स्ट्रीमिंग सेवा है जो पुरस्कार विजेता टीवी शो, फिल्में, एनीमे, डॉक्यूमेंट्री और बहुत कुछ प्रदान करती है।",
    faq2q: "नेटफ्लिक्स की लागत कितनी है?", faq2a: "एक निश्चित मासिक शुल्क पर देखें। योजनाएं ₹149 से ₹649 प्रति माह तक हैं।",
    faq3q: "मैं कहाँ देख सकता हूँ?", faq3a: "कहीं भी, कभी भी देखें। अपने नेटफ्लिक्स खाते से तुरंत देखें।",
    faq4q: "मैं कैसे रद्द करूं?", faq4a: "नेटफ्लिक्स लचीला है। कोई अनुबंध नहीं। दो क्लिक में रद्द करें।",
    faq5q: "मैं नेटफ्लिक्स पर क्या देख सकता हूँ?", faq5a: "नेटफ्लिक्स में फीचर फिल्मों, डॉक्यूमेंट्री, टीवी शो, एनीमे का विशाल पुस्तकालय है।",
    faq6q: "क्या नेटफ्लिक्स बच्चों के लिए अच्छा है?", faq6a: "नेटफ्लिक्स किड्स अनुभव आपकी सदस्यता में शामिल है।",
  },
  "தமிழ்": {
    signIn: "உள்நுழை", signOut: "வெளியேறு", getStarted: "தொடங்கு ›",
    unlimited: "வரம்பற்ற திரைப்படங்கள், டிவி நிகழ்ச்சிகள்",
    startsAt: "₹149 முதல். எப்போது வேண்டுமானாலும் ரத்து செய்யலாம்.",
    readyToWatch: "பார்க்க தயாரா? உங்கள் மின்னஞ்சலை உள்ளிடவும்.",
    emailPlaceholder: "மின்னஞ்சல் முகவரி", trending: "இப்போது டிரெண்டிங்",
    moreReasons: "சேர மேலும் காரணங்கள்", faq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    play: "▶ இயக்கு", moreInfo: "ℹ மேலும்", kids: "குழந்தைகள்",
    home: "முகப்பு", tvShows: "டிவி", movies: "திரைப்படம்",
    newPopular: "புதிய & பிரபலம்", myList: "என் பட்டியல்",
    continueWatching: "தொடர்ந்து பாருங்கள்", newReleases: "புதிய வெளியீடுகள்",
    topPicks: "சிறந்த தேர்வுகள்", theme: "தீம்",
    enjoyTV: "உங்கள் டிவியில் அனுபவிக்கவும்", enjoyTVDesc: "ஸ்மார்ட் டிவி, பிளேஸ்டேஷன் மற்றும் மேலும் பலவற்றில் பாருங்கள்.",
    download: "உங்கள் நிகழ்ச்சிகளை பதிவிறக்கவும்", downloadDesc: "உங்கள் பிடித்தவற்றை எளிதாக சேமிக்கவும்.",
    watchEverywhere: "எங்கும் பாருங்கள்", watchEverywhereDesc: "உங்கள் ஃபோன், டேப்லெட், லேப்டாப்பில் ஸ்ட்ரீம் செய்யுங்கள்.",
    kidsProfile: "குழந்தைகளுக்கான ப்ரொஃபைல்", kidsProfileDesc: "குழந்தைகளுக்கான இடம்.",
    questionsCall: "கேள்விகள்? அழைக்கவும் 000-800-919-1694", netflixIndia: "நெட்ஃபிளிக்ஸ் இந்தியா",
    faq1q: "நெட்ஃபிளிக்ஸ் என்றால் என்ன?", faq1a: "நெட்ஃபிளிக்ஸ் ஒரு ஸ்ட்ரீமிங் சேவை.",
    faq2q: "நெட்ஃபிளிக்ஸ் எவ்வளவு செலவாகும்?", faq2a: "₹149 முதல் ₹649 வரை.",
    faq3q: "நான் எங்கே பார்க்கலாம்?", faq3a: "எங்கும், எப்போதும் பாருங்கள்.",
    faq4q: "நான் எப்படி ரத்து செய்வது?", faq4a: "இரண்டு கிளிக்கில் ரத்து செய்யலாம்.",
    faq5q: "நான் என்ன பார்க்க முடியும்?", faq5a: "திரைப்படங்கள், ஆவணப்படங்கள், டிவி நிகழ்ச்சிகள் மற்றும் பல.",
    faq6q: "குழந்தைகளுக்கு நல்லதா?", faq6a: "நெட்ஃபிளிக்ஸ் கிட்ஸ் உங்கள் சந்தாவில் அடங்கும்.",
  },
};

// ==================== MOVIE DATA ====================
const movies = [
  { id: 1, title: "Black Panther", genre: "Action", rating: "PG-13", year: 2018, img: "/images/poster1.jpg", video: "/videos/mhv.mp4" },
  { id: 2, title: "Pathaan", genre: "Action", rating: "UA", year: 2023, img: "/images/poster2.jpg", video: "/videos/pav.mp4" },
  { id: 3, title: "Money Heist", genre: "Thriller", rating: "TV-MA", year: 2017, img: "/images/poster3.jpg", video: "/videos/pv.mp4" },
  { id: 4, title: "Padmavati", genre: "Drama", rating: "UA", year: 2018, img: "/images/poster4.jpg", video: "/videos/mhv.mp4" },
  { id: 5, title: "Raid", genre: "Thriller", rating: "UA", year: 2018, img: "/images/poster5.jpg", video: "/videos/pav.mp4" },
  { id: 6, title: "Rogue One", genre: "Sci-Fi", rating: "PG-13", year: 2016, img: "/images/poster6.jpg", video: "/videos/pv.mp4" },
  { id: 7, title: "Grey's Anatomy", genre: "Drama", rating: "TV-14", year: 2005, img: "/images/poster7.jpg", video: "/videos/mhv.mp4" },
  { id: 8, title: "Bridgerton", genre: "Romance", rating: "TV-MA", year: 2020, img: "/images/poster8.jpg", video: "/videos/pav.mp4" },
  { id: 9, title: "Stranger Things", genre: "Sci-Fi", rating: "TV-14", year: 2016, img: "/images/poster9.jpg", video: "/videos/pv.mp4" },
  { id: 10, title: "The Abyss", genre: "Sci-Fi", rating: "PG-13", year: 1989, img: "/images/poster10.jpg", video: "/videos/mhv.mp4" },
];

// ==================== MOVIE CARD (with hover video) ====================
const MovieCard = ({ movie, isDark }) => {
  const [hovered, setHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const timerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (hovered) {
      timerRef.current = setTimeout(() => setShowVideo(true), 500);
    } else {
      clearTimeout(timerRef.current);
      setShowVideo(false);
    }
    return () => clearTimeout(timerRef.current);
  }, [hovered]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", minWidth: 200, height: 300, borderRadius: 6,
        overflow: "visible", cursor: "pointer", flexShrink: 0,
        transition: "transform 0.35s cubic-bezier(.25,.8,.25,1), box-shadow 0.35s ease",
        transform: hovered ? "scale(1.35)" : "scale(1)",
        zIndex: hovered ? 20 : 1,
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.8)" : "none",
      }}
    >
      {/* Thumbnail / Video preview */}
      <div style={{ width: "100%", height: "100%", borderRadius: hovered ? "6px 6px 0 0" : 6, overflow: "hidden", position: "relative" }}>
        {showVideo && movie.video ? (
          <video
            ref={videoRef}
            src={movie.video} autoPlay muted loop
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          <img
            src={movie.img} alt={movie.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={(e) => { e.target.src = `https://via.placeholder.com/200x300/1a1a2e/e50914?text=${encodeURIComponent(movie.title)}`; }}
          />
        )}
        {/* Sound icon on video */}
        {showVideo && (
          <div style={{ position: "absolute", right: 8, bottom: 8, background: "rgba(0,0,0,0.5)", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #888" }}>
            <span style={{ fontSize: 12, color: "#fff" }}>🔇</span>
          </div>
        )}
      </div>

      {/* Expanded info panel - ONLY on hover */}
      {hovered && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: isDark ? "#181818" : "#fff",
          borderRadius: "0 0 6px 6px", padding: "12px",
          color: isDark ? "#fff" : "#111",
          animation: "fadeIn 0.2s ease",
          boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
        }}>
          {/* Action buttons row */}
          <div style={{ display: "flex", gap: 6, marginBottom: 8, alignItems: "center" }}>
            <button style={{ background: "#fff", color: "#000", border: "none", borderRadius: "50%", width: 36, height: 36, fontWeight: 700, fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >▶</button>
            <button style={{ background: "transparent", border: "2px solid #888", borderRadius: "50%", width: 36, height: 36, color: isDark ? "#fff" : "#333", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#fff"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#888"}
            >+</button>
            <button style={{ background: "transparent", border: "2px solid #888", borderRadius: "50%", width: 36, height: 36, color: isDark ? "#fff" : "#333", cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#fff"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#888"}
            >👍</button>
            <div style={{ flex: 1 }} />
            <button style={{ background: "transparent", border: "2px solid #888", borderRadius: "50%", width: 36, height: 36, color: isDark ? "#fff" : "#333", cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#fff"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#888"}
            >⌄</button>
          </div>
          {/* Metadata */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, color: "#46d369", fontWeight: 700 }}>98% Match</span>
            <span style={{ fontSize: 10, border: "1px solid #888", padding: "1px 5px", color: isDark ? "#bcbcbc" : "#555" }}>{movie.rating}</span>
            <span style={{ fontSize: 11, color: isDark ? "#bcbcbc" : "#555" }}>1h 45m</span>
            <span style={{ fontSize: 10, border: "1px solid #888", padding: "1px 5px", color: isDark ? "#bcbcbc" : "#555" }}>HD</span>
          </div>
          {/* Genre tags */}
          <div style={{ display: "flex", gap: 4, alignItems: "center", fontSize: 11, color: isDark ? "#ddd" : "#444" }}>
            <span>{movie.genre}</span>
            <span style={{ color: isDark ? "#646464" : "#bbb" }}>•</span>
            <span>Exciting</span>
            <span style={{ color: isDark ? "#646464" : "#bbb" }}>•</span>
            <span>{movie.year}</span>
          </div>
        </div>
      )}
    </div>
  );
};

// ==================== MOVIE ROW ====================
const MovieRow = ({ title, movies: rowMovies, startIdx = 0, isDark }) => {
  const scrollRef = useRef(null);
  const visibleMovies = rowMovies.slice(startIdx, startIdx + 8);
  const scroll = (dir) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 600, behavior: "smooth" });
  };
  return (
    <div style={{ marginBottom: 50, position: "relative" }}>
      <h2 style={{ color: isDark ? "#e5e5e5" : "#111", fontSize: 22, fontWeight: 700, marginBottom: 14, paddingLeft: 4 }}>{title}</h2>
      <div style={{ position: "relative" }}>
        <button onClick={() => scroll(-1)} style={{ position: "absolute", left: -20, top: "50%", transform: "translateY(-50%)", zIndex: 30, background: "rgba(0,0,0,0.6)", color: "#fff", border: "none", borderRadius: "50%", width: 40, height: 40, fontSize: 20, cursor: "pointer", opacity: 0.7 }}>‹</button>
        <div ref={scrollRef} style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 120, paddingTop: 20, scrollbarWidth: "none", scrollBehavior: "smooth" }}>
          {visibleMovies.map(m => <MovieCard key={m.id} movie={m} isDark={isDark} />)}
        </div>
        <button onClick={() => scroll(1)} style={{ position: "absolute", right: -20, top: "50%", transform: "translateY(-50%)", zIndex: 30, background: "rgba(0,0,0,0.6)", color: "#fff", border: "none", borderRadius: "50%", width: 40, height: 40, fontSize: 20, cursor: "pointer", opacity: 0.7 }}>›</button>
      </div>
    </div>
  );
};

// ==================== FAQ ITEM ====================
const FAQItem = ({ q, a, isDark }) => {
  const [open, setOpen] = useState(false);
  const bgColor = isDark ? "#2d2d2d" : "#e8e8e8";
  const hoverBg = isDark ? "#404040" : "#d5d5d5";
  return (
    <div style={{ marginBottom: 8 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", background: bgColor, border: isDark ? "1px solid #444" : "1px solid #ccc", color: isDark ? "#fff" : "#111", padding: "20px 24px", fontSize: 18, fontWeight: 500, textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "background 0.2s", borderRadius: open ? "4px 4px 0 0" : 4 }}
        onMouseEnter={e => e.currentTarget.style.background = hoverBg}
        onMouseLeave={e => e.currentTarget.style.background = bgColor}
      >
        {q}
        <span style={{ fontSize: 28, fontWeight: 300, transform: open ? "rotate(45deg)" : "none", transition: "transform 0.3s", display: "inline-block" }}>+</span>
      </button>
      <div style={{ maxHeight: open ? 300 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
        <div style={{ background: bgColor, padding: "20px 24px", color: isDark ? "#fff" : "#111", fontSize: 16, lineHeight: 1.6, borderTop: isDark ? "2px solid #444" : "2px solid #ccc", borderRadius: "0 0 4px 4px" }}>
          {a}
        </div>
      </div>
    </div>
  );
};

// ==================== VIDEO PLAYER MODAL ====================
const VideoModal = ({ src, onClose }) => (
  <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", animation: "fadeIn 0.3s ease" }}>
    <div onClick={e => e.stopPropagation()} style={{ position: "relative", width: "80%", maxWidth: 900, borderRadius: 12, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.8)" }}>
      <video src={src} autoPlay controls style={{ width: "100%", display: "block" }} />
      <button onClick={onClose} style={{ position: "absolute", top: 12, right: 12, background: "rgba(0,0,0,0.7)", color: "#fff", border: "none", borderRadius: "50%", width: 36, height: 36, fontSize: 20, cursor: "pointer" }}>✕</button>
    </div>
  </div>
);

// ==================== MAIN COMPONENT ====================
export default function NetflixClone() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [lang, setLang] = useState("English");
  const [theme, setTheme] = useState("dark");
  const [videoModal, setVideoModal] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = theme === "dark";
  const t = (key) => (T[lang] && T[lang][key]) || T["English"][key] || key;
  const bg = isDark ? "#141414" : "#f5f5f5";
  const textColor = isDark ? "#fff" : "#111";
  const cardBg = isDark ? "#1a1a2e" : "#fff";

  const faqs = [
    { q: t("faq1q"), a: t("faq1a") }, { q: t("faq2q"), a: t("faq2a") },
    { q: t("faq3q"), a: t("faq3a") }, { q: t("faq4q"), a: t("faq4a") },
    { q: t("faq5q"), a: t("faq5a") }, { q: t("faq6q"), a: t("faq6a") },
  ];

  const reasons = [
    { icon: "📺", title: t("enjoyTV"), desc: t("enjoyTVDesc") },
    { icon: "📥", title: t("download"), desc: t("downloadDesc") },
    { icon: "📱", title: t("watchEverywhere"), desc: t("watchEverywhereDesc") },
    { icon: "👶", title: t("kidsProfile"), desc: t("kidsProfileDesc") },
  ];

  const filteredMovies = searchQuery
    ? movies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : movies;

  // ==================== STYLES ====================
  const globalStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes scrollUp { from { transform: translateY(0); } to { transform: translateY(-50%); } }
    @keyframes scrollDown { from { transform: translateY(-50%); } to { transform: translateY(0); } }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
    @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    ::-webkit-scrollbar { display: none; }
    body { font-family: 'Inter', 'Netflix Sans', 'Helvetica Neue', sans-serif; }
  `;

  // ==================== LANDING PAGE ====================
  if (!isLoggedIn) {
    return (
      <div style={{ fontFamily: "'Inter', sans-serif", background: isDark ? "#000" : "#f5f5f5", color: isDark ? "#fff" : "#111", minHeight: "100vh", transition: "background 0.4s, color 0.4s" }}>
        <style>{globalStyles}</style>

        {/* NAVBAR */}
        <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 48px", background: scrolled ? (isDark ? "rgba(0,0,0,0.95)" : "rgba(255,255,255,0.95)") : "transparent", transition: "background 0.4s", backdropFilter: scrolled ? "blur(12px)" : "none" }}>
          <h1 style={{ color: "#e50914", fontSize: 40, fontWeight: 900, fontFamily: "Netflix Sans, sans-serif", margin: 0, letterSpacing: -2 }}>N</h1>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <select value={lang} onChange={e => setLang(e.target.value)} style={{ background: isDark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.8)", color: isDark ? "#fff" : "#111", border: "1px solid #555", borderRadius: 6, padding: "8px 14px", cursor: "pointer", fontSize: 14, backdropFilter: "blur(6px)" }}>
              <option style={{ background: isDark ? "#111" : "#fff" }}>English</option>
              <option style={{ background: isDark ? "#111" : "#fff" }}>हिन्दी</option>
              <option style={{ background: isDark ? "#111" : "#fff" }}>தமிழ்</option>
            </select>
            <button onClick={() => setTheme(isDark ? "light" : "dark")} style={{ background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)", color: isDark ? "#fff" : "#111", border: "1px solid #555", borderRadius: 6, padding: "8px 14px", cursor: "pointer", fontSize: 14, transition: "all 0.3s" }}>{isDark ? "☀️" : "🌙"} {t("theme")}</button>
            <button onClick={() => setIsLoggedIn(true)} style={{ background: "#e50914", color: "#fff", border: "none", borderRadius: 6, padding: "8px 20px", fontWeight: 700, cursor: "pointer", fontSize: 15, transition: "background 0.3s", letterSpacing: 0.5 }}>{t("signIn")}</button>
          </div>
        </nav>

        {/* HERO */}
        <div style={{ position: "relative", height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="/images/header-image.jpg" alt="Netflix Background" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", opacity: isDark ? 0.4 : 0.25 }} />
          <div style={{ position: "absolute", inset: 0, background: isDark ? "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, #000 100%)" : "linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.6) 50%, #f5f5f5 100%)" }} />

          <div style={{ position: "relative", textAlign: "center", padding: "0 20px", animation: "slideUp 0.8s ease", maxWidth: 800 }}>
            <h1 style={{ fontSize: "clamp(32px, 6vw, 64px)", fontWeight: 900, marginBottom: 20, textShadow: isDark ? "2px 2px 12px rgba(0,0,0,0.9)" : "none", lineHeight: 1.1, color: isDark ? "#fff" : "#111" }}>{t("unlimited")}</h1>
            <p style={{ fontSize: 22, marginBottom: 8, color: isDark ? "#e5e5e5" : "#444" }}>{t("startsAt")}</p>
            <p style={{ fontSize: 18, marginBottom: 28, color: isDark ? "#e5e5e5" : "#555" }}>{t("readyToWatch")}</p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder={t("emailPlaceholder")} type="email" style={{ padding: "16px 20px", fontSize: 16, borderRadius: 6, border: isDark ? "1px solid #555" : "1px solid #ccc", width: 360, background: isDark ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.9)", color: isDark ? "#fff" : "#111", backdropFilter: "blur(6px)" }} />
              <button onClick={() => setIsLoggedIn(true)} style={{ background: "#e50914", color: "#fff", border: "none", borderRadius: 6, padding: "16px 32px", fontSize: 20, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", transition: "transform 0.2s, background 0.3s", letterSpacing: 0.5 }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"} onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>{t("getStarted")}</button>
            </div>
          </div>
        </div>

        {/* TRENDING */}
        <div style={{ padding: "60px 48px", background: isDark ? "#000" : "#f5f5f5", borderTop: isDark ? "8px solid #222" : "8px solid #ddd" }}>
          <h2 style={{ fontSize: 30, fontWeight: 900, marginBottom: 24, color: isDark ? "#fff" : "#111" }}>{t("trending")}</h2>
          <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 16 }}>
            {movies.slice(0, 6).map((m, i) => (
              <div key={m.id} style={{ position: "relative", minWidth: 220, borderRadius: 8, overflow: "hidden", cursor: "pointer", flexShrink: 0, transition: "transform 0.3s" }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"} onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                <img src={m.img} alt={m.title} style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} onError={e => e.target.src = `https://via.placeholder.com/220x320/1a1a2e/e50914?text=${encodeURIComponent(m.title)}`} />
                <div style={{ position: "absolute", bottom: 0, left: -10, fontSize: 120, fontWeight: 900, color: "transparent", WebkitTextStroke: isDark ? "3px #fff" : "3px #333", lineHeight: 1, pointerEvents: "none" }}>{i + 1}</div>
              </div>
            ))}
          </div>
        </div>

        {/* MORE REASONS */}
        <div style={{ padding: "60px 48px", borderTop: isDark ? "8px solid #222" : "8px solid #ddd", background: isDark ? "#000" : "#f5f5f5" }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 40, color: isDark ? "#fff" : "#111" }}>{t("moreReasons")}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
            {reasons.map((r, i) => (
              <div key={i} style={{ background: isDark ? "linear-gradient(135deg, #0f0f0f, #1a1a2e)" : "linear-gradient(135deg, #fff, #f0f0ff)", borderRadius: 16, padding: 28, border: isDark ? "1px solid #333" : "1px solid #ddd", transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = "#e50914"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(229,9,20,0.15)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = isDark ? "#333" : "#ddd"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ fontSize: 44, marginBottom: 14 }}>{r.icon}</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, color: isDark ? "#fff" : "#111" }}>{r.title}</h3>
                <p style={{ color: isDark ? "#aaa" : "#666", lineHeight: 1.6 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ padding: "60px 48px", borderTop: isDark ? "8px solid #222" : "8px solid #ddd", background: isDark ? "#000" : "#f5f5f5" }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 32, color: isDark ? "#fff" : "#111" }}>{t("faq")}</h2>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} isDark={isDark} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <p style={{ marginBottom: 20, fontSize: 18, color: isDark ? "#e5e5e5" : "#555" }}>{t("readyToWatch")}</p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
              <input placeholder={t("emailPlaceholder")} type="email" style={{ padding: "14px 20px", fontSize: 16, borderRadius: 6, border: isDark ? "1px solid #555" : "1px solid #ccc", width: 300, background: isDark ? "rgba(0,0,0,0.7)" : "#fff", color: isDark ? "#fff" : "#111" }} />
              <button onClick={() => setIsLoggedIn(true)} style={{ background: "#e50914", color: "#fff", border: "none", borderRadius: 6, padding: "14px 24px", fontSize: 18, fontWeight: 700, cursor: "pointer" }}>{t("getStarted")}</button>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer style={{ padding: "40px 48px", borderTop: isDark ? "1px solid #333" : "1px solid #ddd", background: isDark ? "#000" : "#f5f5f5", color: isDark ? "#757575" : "#888" }}>
          <p style={{ marginBottom: 20 }}>{t("questionsCall")}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8, marginBottom: 24 }}>
            {["FAQ", "Help Centre", "Account", "Media Centre", "Investor Relations", "Jobs", "Ways to Watch", "Terms of Use", "Privacy", "Cookie Preferences", "Corporate Information", "Contact Us", "Speed Test", "Legal Notices", "Only on Netflix"].map(l => (
              <a key={l} href="#" style={{ color: isDark ? "#757575" : "#888", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }} onMouseEnter={e => e.target.style.textDecoration = "underline"} onMouseLeave={e => e.target.style.textDecoration = "none"}>{l}</a>
            ))}
          </div>
          <select value={lang} onChange={e => setLang(e.target.value)} style={{ background: "transparent", color: isDark ? "#757575" : "#888", border: "1px solid #555", borderRadius: 4, padding: "6px 12px" }}>
            <option>🌐 English</option><option>हिन्दी</option><option>தமிழ்</option>
          </select>
          <p style={{ marginTop: 12, fontSize: 13 }}>{t("netflixIndia")}</p>
        </footer>
      </div>
    );
  }

  // ==================== LOGGED IN DASHBOARD ====================
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: bg, color: textColor, minHeight: "100vh", transition: "background 0.4s, color 0.4s" }}>
      <style>{globalStyles}</style>

      {videoModal && <VideoModal src={videoModal} onClose={() => setVideoModal(null)} />}

      {/* TOP NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 48px", background: scrolled ? (isDark ? "rgba(0,0,0,0.95)" : "rgba(255,255,255,0.95)") : (isDark ? "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)" : "linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)"), transition: "background 0.4s", backdropFilter: scrolled ? "blur(12px)" : "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <h1 style={{ color: "#e50914", fontSize: 36, fontWeight: 900, fontFamily: "Netflix Sans, sans-serif", margin: 0, letterSpacing: -1 }}>N</h1>
          <div style={{ display: "flex", gap: 20 }}>
            {[{ key: "home", label: t("home") }, { key: "tv shows", label: t("tvShows") }, { key: "movies", label: t("movies") }, { key: "new & popular", label: t("newPopular") }, { key: "my list", label: t("myList") }].map(tab => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{ background: "none", border: "none", color: activeTab === tab.key ? (isDark ? "#fff" : "#111") : (isDark ? "#b3b3b3" : "#777"), cursor: "pointer", fontSize: 14, fontWeight: activeTab === tab.key ? 700 : 400, padding: "4px 0", transition: "color 0.2s" }}>{tab.label}</button>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Search */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {searchOpen && <input autoFocus value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Titles, people, genres" style={{ background: isDark ? "rgba(0,0,0,0.8)" : "#fff", border: isDark ? "1px solid #fff" : "1px solid #333", color: isDark ? "#fff" : "#111", padding: "6px 12px", fontSize: 14, borderRadius: 4, marginRight: 8, width: 200, transition: "width 0.3s" }} />}
            <button onClick={() => { setSearchOpen(!searchOpen); if (searchOpen) setSearchQuery(""); }} style={{ background: "none", border: "none", color: isDark ? "#fff" : "#111", cursor: "pointer", fontSize: 20 }}>🔍</button>
          </div>
          <span style={{ color: isDark ? "#fff" : "#111", fontSize: 14 }}>{t("kids")}</span>
          <button style={{ background: "none", border: "none", color: isDark ? "#fff" : "#111", cursor: "pointer", fontSize: 20 }}>🔔</button>
          {/* Language */}
          <select value={lang} onChange={e => setLang(e.target.value)} style={{ background: "transparent", color: isDark ? "#fff" : "#111", border: isDark ? "1px solid #555" : "1px solid #ccc", borderRadius: 4, padding: "4px 8px", fontSize: 12, cursor: "pointer" }}>
            <option style={{ background: isDark ? "#111" : "#fff" }}>English</option>
            <option style={{ background: isDark ? "#111" : "#fff" }}>हिन्दी</option>
            <option style={{ background: isDark ? "#111" : "#fff" }}>தமிழ்</option>
          </select>
          {/* Theme Toggle */}
          <button onClick={() => setTheme(isDark ? "light" : "dark")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18 }}>{isDark ? "☀️" : "🌙"}</button>
          <div style={{ width: 36, height: 36, borderRadius: 6, background: "#e50914", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 18 }}>😊</div>
          <button onClick={() => setIsLoggedIn(false)} style={{ background: "none", border: isDark ? "1px solid #aaa" : "1px solid #555", color: isDark ? "#fff" : "#111", borderRadius: 4, padding: "4px 10px", cursor: "pointer", fontSize: 12 }}>{t("signOut")}</button>
        </div>
      </nav>

      {/* HERO BANNER */}
      <div style={{ position: "relative", height: "85vh", overflow: "hidden" }}>
        <video
          autoPlay muted loop playsInline
          poster="/images/header-image.jpg"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
          src="/videos/hero.mp4"
          onError={(e) => { e.target.src = "/videos/BPV.mp4"; }}
        />
        <div style={{ position: "absolute", inset: 0, background: isDark ? "linear-gradient(to right, rgba(0,0,0,0.85) 35%, transparent 100%), linear-gradient(to top, #141414 0%, transparent 50%)" : "linear-gradient(to right, rgba(255,255,255,0.9) 35%, transparent 100%), linear-gradient(to top, #f5f5f5 0%, transparent 50%)" }} />
        <div style={{ position: "absolute", bottom: "20%", left: 48, maxWidth: 550, animation: "fadeIn 1s ease" }}>
          <h1 style={{ fontSize: 60, fontWeight: 900, color: isDark ? "#fff" : "#111", textShadow: isDark ? "2px 2px 8px rgba(0,0,0,0.6)" : "none", marginBottom: 16 }}>Stranger Things</h1>
          <p style={{ color: isDark ? "#e5e5e5" : "#555", fontSize: 16, lineHeight: 1.6, marginBottom: 24 }}>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.</p>
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={() => setVideoModal("/videos/BPV.mp4")} style={{ background: "#fff", color: "#000", border: "none", borderRadius: 6, padding: "12px 28px", fontSize: 18, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, transition: "transform 0.2s, background 0.2s" }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.background = "#e6e6e6"; }} onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "#fff"; }}>{t("play")}</button>
            <button style={{ background: isDark ? "rgba(109,109,110,0.7)" : "rgba(0,0,0,0.1)", color: isDark ? "#fff" : "#111", border: "none", borderRadius: 6, padding: "12px 24px", fontSize: 18, fontWeight: 700, cursor: "pointer", backdropFilter: "blur(4px)", transition: "transform 0.2s" }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"} onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>{t("moreInfo")}</button>
          </div>
        </div>
      </div>

      {/* MOVIE ROWS */}
      <div style={{ padding: "0 48px 60px", marginTop: -80, position: "relative", zIndex: 1 }}>
        <MovieRow title={t("trending")} movies={filteredMovies} startIdx={0} isDark={isDark} />
        <MovieRow title={t("continueWatching")} movies={[...filteredMovies].reverse()} startIdx={0} isDark={isDark} />
        <MovieRow title={t("newReleases")} movies={filteredMovies} startIdx={2} isDark={isDark} />
        <MovieRow title={t("topPicks")} movies={[...filteredMovies].sort(() => 0.5 - Math.random())} startIdx={0} isDark={isDark} />
      </div>

      {/* FOOTER */}
      <footer style={{ padding: "32px 48px", borderTop: isDark ? "1px solid #333" : "1px solid #ddd", background: isDark ? "#000" : "#f5f5f5", color: isDark ? "#757575" : "#888" }}>
        <p>{t("questionsCall")}</p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginTop: 16, fontSize: 13 }}>
          {["FAQ", "Help Centre", "Privacy", "Terms of Use", "Contact Us"].map(l => (
            <a key={l} href="#" style={{ color: isDark ? "#757575" : "#888", textDecoration: "none" }} onMouseEnter={e => e.target.style.textDecoration = "underline"} onMouseLeave={e => e.target.style.textDecoration = "none"}>{l}</a>
          ))}
        </div>
        <p style={{ marginTop: 12, fontSize: 12 }}>{t("netflixIndia")} © 2024</p>
      </footer>
    </div>
  );
}
