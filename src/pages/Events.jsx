// Events.jsx
import { useState, useEffect, useCallback } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { eventsData } from "../data/events";
import Hero from "../components/common/Hero";

// ─── Icons (inline SVG to avoid external deps) ───────────────────────────────
const CalendarIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg
    className="w-7 h-7"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    className="w-7 h-7"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const ImageIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

// ─── Image Modal Component ───────────────────────────────────────────────────
function ImageModal({ isOpen, images, initialIndex, eventTitle, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    setIsLoading(true);
  }, [currentIndex]);

  const goNext = useCallback(() => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, goNext, goPrev, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* ── Backdrop ── */}
      <div
        className="absolute inset-0 bg-black-900/95 backdrop-blur-sm animate-fade-in cursor-pointer"
        onClick={onClose}
      />

      {/* ── Modal Content ── */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-4 animate-scale-in">
        {/* Top bar */}
        <div className="flex items-center justify-between w-full mb-4 px-2">
          <div>
            <h3 className="text-ivory-100 font-display text-lg font-semibold tracking-wide">
              {eventTitle}
            </h3>
            <p className="text-gold-400 text-sm mt-0.5">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-gold-500/30 text-ivory-100 
                       transition-all duration-300 cursor-pointer"
            aria-label="Close modal"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Image container */}
        <div className="relative w-full aspect-16/10 bg-black-800 rounded-2xl overflow-hidden shadow-gold-lg">
          {/* Loading spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-10 h-10 border-2 border-gold-500/30 border-t-gold-500 rounded-full animate-spin" />
            </div>
          )}

          {/* Main image */}
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${eventTitle} - Photo ${currentIndex + 1}`}
            className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"
              }`}
            onLoad={() => setIsLoading(false)}
          />

          {/* Gradient overlays for nav buttons */}
          <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-black/40 to-transparent pointer-events-none" />

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full 
                           bg-black/40 hover:bg-gold-500/40 text-white backdrop-blur-sm
                           transition-all duration-300 cursor-pointer group"
                aria-label="Previous image"
              >
                <ChevronLeftIcon />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full 
                           bg-black/40 hover:bg-gold-500/40 text-white backdrop-blur-sm
                           transition-all duration-300 cursor-pointer group"
                aria-label="Next image"
              >
                <ChevronRightIcon />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="flex items-center gap-2 mt-4 px-2 overflow-x-auto max-w-full pb-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden 
                           transition-all duration-300 cursor-pointer
                           ${idx === currentIndex
                    ? "ring-2 ring-gold-500 ring-offset-2 ring-offset-black-900 scale-105"
                    : "opacity-50 hover:opacity-80"
                  }`}
                aria-label={`View photo ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Keyboard hint */}
        <p className="text-ivory-400/40 text-xs mt-4 tracking-widest uppercase hidden md:block">
          Use ← → to navigate · Esc to close
        </p>
      </div>
    </div>
  );
}

// ─── Event Card Component ────────────────────────────────────────────────────
function EventCard({ event, onImageClick, index }) {
  const isReversed = index % 2 !== 0;

  return (
    <div
      className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center
                  animate-slide-up`}
      style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "both" }}
    >
      {/* ── Image Grid ── */}
      <div className={`${isReversed ? "lg:order-2" : ""}`}>
        <div
          className="relative overflow-hidden rounded-xl cursor-pointer group/img aspect-video
                     transition-all duration-500 hover:shadow-gold"
          onClick={() => onImageClick(event, 0)}
        >
          <img
            src={event.images[0]}
            alt={`${event.title} - Photo`}
            className="w-full h-full object-cover transition-transform duration-700 
                       group-hover/img:scale-110"
            loading="lazy"
          />

          {/* Hover overlay */}
          <div
            className="absolute inset-0 bg-black-900/0 group-hover/img:bg-black-900/30 
                          transition-all duration-500 flex items-center justify-center"
          >
            <div
              className="w-12 h-12 rounded-full bg-gold-500/80 flex items-center justify-center
                            opacity-0 group-hover/img:opacity-100 scale-50 group-hover/img:scale-100
                            transition-all duration-500"
            >
              <ImageIcon />
            </div>
          </div>

          {/* Image count badge */}
          {event.images.length > 1 && (
            <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black-900/70 backdrop-blur-sm rounded-full">
              <span className="text-ivory-100 text-sm font-semibold flex items-center gap-1.5">
                <ImageIcon />
                {event.images.length} photos
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ── Event Info ── */}
      <div className={`${isReversed ? "lg:order-1 lg:text-right" : ""}`}>
        {/* Decorative line */}
        <div
          className={`flex items-center gap-3 mb-4 ${isReversed ? "lg:justify-end" : ""}`}
        >
          <div className="h-px w-12 bg-linear-to-r from-gold-500 to-transparent" />
          <span className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase">
            Past Event
          </span>
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary leading-tight mb-4">
          {event.title}
        </h3>

        <p className="text-text-secondary leading-relaxed mb-6 max-w-lg">
          {event.description}
        </p>

        {/* Meta info */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mb-6 ${isReversed ? "lg:justify-end" : ""}`}
        >
          <div className="flex items-center gap-2 text-gold-600">
            <CalendarIcon />
            <span className="text-sm font-medium">{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gold-600">
            <LocationIcon />
            <span className="text-sm font-medium">{event.location}</span>
          </div>
        </div>

        {/* View gallery button */}
        <button
          onClick={() => onImageClick(event, 0)}
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-gold text-black-900 
                     font-semibold text-sm tracking-wider uppercase rounded-lg
                     hover:shadow-gold-lg transition-all duration-500 hover:-translate-y-0.5
                     cursor-pointer group/btn"
        >
          <ImageIcon />
          <span>View Gallery</span>
          <span className="text-black-900/60 text-xs">
            ({event.images.length} photos)
          </span>
        </button>
      </div>
    </div>
  );
}

// ─── Decorative Separator ────────────────────────────────────────────────────
function EventSeparator() {
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <div className="h-px w-24 bg-linear-to-r from-transparent to-gold-500/40" />
      <div className="w-2 h-2 rotate-45 bg-gold-500/60" />
      <div className="w-1.5 h-1.5 rotate-45 bg-gold-400/40" />
      <div className="w-2 h-2 rotate-45 bg-gold-500/60" />
      <div className="h-px w-24 bg-linear-to-l from-transparent to-gold-500/40" />
    </div>
  );
}

// ─── Main Events Page ────────────────────────────────────────────────────────
export default function Events() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalTitle, setModalTitle] = useState("");

  const handleImageClick = useCallback((event, imageIndex) => {
    setModalImages(event.images);
    setModalIndex(imageIndex);
    setModalTitle(event.title);
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <main className="min-h-screen bg-bg-main">
      <Header />

      <Hero
        page="events"
        pageTitle="Events"
        img="/images/hero/events.jpeg"
        imgAlt="Events"
        badgeText="Our Legacy"
        title="Previous Events"
        highlightedText=""
        description="Relive the moments that defined luxury real estate.
            Each event is a testament to our commitment to excellence and
            extraordinary experiences."
      />

      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-3">
            Moments Worth Remembering
          </h2>
          <div className="w-20 h-0.5 bg-gradient-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Events */}
        <div className="space-y-20 md:space-y-28">
          {eventsData.map((event, index) => (
            <div key={event.id}>
              <EventCard
                event={event}
                onImageClick={handleImageClick}
                index={index}
              />
              {index < eventsData.length - 1 && (
                <div className="mt-20 md:mt-28">
                  <EventSeparator />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <ImageModal
        isOpen={modalOpen}
        images={modalImages}
        initialIndex={modalIndex}
        eventTitle={modalTitle}
        onClose={handleCloseModal}
      />

      <Footer />
    </main>
  );
}