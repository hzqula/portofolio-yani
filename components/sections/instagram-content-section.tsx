"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

interface SocialPost {
  id: number;
  title: string;
  image: string;
  link: string;
  platform: "instagram" | "tiktok";
  engagement: number;
}

const socialPosts: SocialPost[] = [
  {
    id: 1,
    title: "Halal lifestyle",
    image: "/content-1.jpg",
    link: "https://www.instagram.com/reel/DKKd-26Trjs/?igsh=Z2xnNTd2ZXN6Y3Nj",
    platform: "instagram",
    engagement: 5435,
  },
  {
    id: 2,
    title: "video promosi wisata",
    image: "/content-2.jpg",
    link: "https://www.instagram.com/reel/DJrcj4Szylv/?igsh=Ynk1MnhqbWZmam1k",
    platform: "instagram",
    engagement: 5900,
  },
  {
    id: 3,
    title: "Promosi jasa akademik(pro-knowledge",
    image: "/content-3.jpg",
    link: "https://www.instagram.com/reel/DJDPT7sTs_w/?igsh=MTRlejJqY2RxeHNtag==",
    platform: "instagram",
    engagement: 2600,
  },
  {
    id: 4,
    title: "edukasi cek legalitas entitas keuangan",
    image: "/content-4.jpg",
    link: "  https://www.instagram.com/reel/DIfL61xzpQN/?igsh=ZHNlaWdudXZsNWp2",
    platform: "tiktok",
    engagement: 8300,
  },
  {
    id: 5,
    title: "Bersama OJK;Edukasi dan Literasi Keuangan Syariah",
    image: "/content-5.jpg",
    link: " https://www.instagram.com/reel/DHWkU3Zz_es/?igsh=amY4aXc4bTNpOGlp",
    platform: "instagram",
    engagement: 2200,
  },
  {
    id: 6,
    title: "Bank Cimb Niaga, Bersama Wujudkan Mimpi Ciptakan Perubahan",
    image: "/content-6.jpg",
    link: "https://www.instagram.com/reel/DFkq8lmPzbx/?igsh=MTd1MDh0ZmZhNXljNQ==",
    platform: "instagram",
    engagement: 3600,
  },
  {
    id: 7,
    title: "Galang Dana Palestina",
    image: "/content-7.jpg",
    link: "https://www.instagram.com/reel/DEHkM4wvDkk/?igsh=MTA4bjR5NmxuOG5iaQ==",
    platform: "instagram",
    engagement: 7000,
  },
  {
    id: 8,
    title: "A day in my life kuliah di UIN",
    image: "/content-8.jpg",
    link: "  https://www.instagram.com/reel/DDo9Rw1vR1T/?igsh=MWF1YzBteW9jbGNncA==",
    platform: "instagram",
    engagement: 4500,
  },
  {
    id: 9,
    title: "Ngabuburit Bersama Eca",
    image: "/content-9.jpg",
    link: "https://vt.tiktok.com/ZSUg7CewF/ ",
    platform: "tiktok",
    engagement: 2621000,
  },
  {
    id: 10,
    title: "Pembekalan PKL Angkatan 22",
    image: "/content-10.jpg",
    link: "https://vt.tiktok.com/ZSUg7WJdm/",
    platform: "tiktok",
    engagement: 1954000,
  },
  {
    id: 11,
    title: "Malam Penganugerahan Mahasiswa Berprestasi UIN Suska Riau",
    image: "/content-11.jpg",
    link: "https://vt.tiktok.com/ZSUg7cqK1/",
    platform: "tiktok",
    engagement: 3219000,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function SocialContentSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? socialPosts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= socialPosts.length - 1 ? 0 : prev + 1));
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;

    if (info.offset.x > swipeThreshold) {
      handlePrev();
    } else if (info.offset.x < -swipeThreshold) {
      handleNext();
    }
  };

  const getVisiblePosts = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % socialPosts.length;
      visible.push(socialPosts[index]);
    }
    return visible;
  };

  const getMobileVisiblePost = () => {
    return socialPosts[currentIndex % socialPosts.length];
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white py-12">
      <motion.div
        className="w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div
          className="mb-8 sm:mb-10 text-center"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2 sm:mb-3">
            Social Content
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4">
            Follow my creative journey on social media
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <motion.a
              href="https://instagram.com/ramadayaniyani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="hidden sm:inline">@ramadayaniyani</span>
            </motion.a>

            <div className="w-px h-4 bg-gray-300"></div>

            <motion.a
              href="https://tiktok.com/@ramadayani52"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <span className="hidden sm:inline">@ramadayani52</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Desktop: Grid with side navigation */}
        <div className="hidden md:flex relative items-center justify-center gap-6">
          <CarouselNavigation direction="prev" onClick={handlePrev} />

          <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              {getVisiblePosts().map((post, idx) => (
                <motion.div
                  key={`${post.id}-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={idx === 2 ? "hidden lg:block" : ""}
                >
                  <SocialPostCard
                    post={post}
                    isHovered={hoveredId === post.id}
                    onHoverStart={() => setHoveredId(post.id)}
                    onHoverEnd={() => setHoveredId(null)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <CarouselNavigation direction="next" onClick={handleNext} />
        </div>

        {/* Mobile: Swipeable single card */}
        <div className="md:hidden flex flex-col items-center">
          <motion.div
            className="w-full max-w-sm mx-auto touch-pan-y"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <SocialPostCard
                  post={getMobileVisiblePost()}
                  isHovered={false}
                  onHoverStart={() => {}}
                  onHoverEnd={() => {}}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Mobile: Navigation buttons below */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <CarouselNavigation direction="prev" onClick={handlePrev} />
            <CarouselNavigation direction="next" onClick={handleNext} />
          </div>

          {/* Swipe indicator */}
          <p className="text-xs text-gray-400 mt-4 text-center">
            Swipe left or right to browse
          </p>
        </div>

        {/* Carousel Indicators */}
        <motion.div
          className="flex justify-center gap-2 mt-8 sm:mt-10"
          variants={itemVariants}
        >
          {socialPosts.map((_, index) => (
            <motion.button
              key={index}
              aria-label={`Go to post ${index + 1}`}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-black w-6 sm:w-8"
                  : "bg-gray-300 w-1.5 sm:w-2 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialPostCard({
  post,
  isHovered,
  onHoverStart,
  onHoverEnd,
}: {
  post: SocialPost;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  const PlatformIcon =
    post.platform === "instagram" ? InstagramIcon : TikTokIcon;
  const platformColor =
    post.platform === "instagram" ? "text-pink-500" : "text-black";

  return (
    <motion.a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-square block shadow-md"
      aria-label={`View ${post.title} on ${post.platform}`}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <img
        src={post.image || "/placeholder.svg"}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Platform Badge - Always Visible */}
      <div
        className={`absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md ${platformColor}`}
      >
        <PlatformIcon className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>

      {/* Mobile: Gradient overlay at bottom */}
      <div className="md:hidden absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
        <p className="text-white text-xs font-medium">{post.title}</p>
        <div className="flex items-center gap-1 text-white/90 text-xs mt-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          {post.engagement.toLocaleString()}
        </div>
      </div>

      {/* Desktop: Hover overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="hidden md:flex absolute inset-0 bg-black/60 items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-white text-center">
              <svg
                className="w-8 h-8 mx-auto mb-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <p className="text-lg font-bold mb-1">
                {post.engagement.toLocaleString()}
              </p>
              <p className="text-sm text-gray-200">{post.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
}

function CarouselNavigation({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={direction === "prev" ? "Previous posts" : "Next posts"}
    >
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {direction === "prev" ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        )}
      </svg>
    </motion.button>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}
