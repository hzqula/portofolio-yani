"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CarouselNavigation from "@/components/carousel-navigation";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

interface Poem {
  id: number;
  title: string;
  excerpt: string;
  publicationDate: string;
  googleDriveLink: string;
}

const poems: Poem[] = [
  {
    id: 1,
    title: "Echoes of Tomorrow",
    excerpt:
      "In the silence between heartbeats, I find the words that shape my tomorrow...",
    publicationDate: "October 2024",
    googleDriveLink: "https://drive.google.com/file/d/example1",
  },
  {
    id: 2,
    title: "Urban Verses",
    excerpt:
      "The city speaks in rhythms only we can understand, a symphony of concrete and dreams...",
    publicationDate: "September 2024",
    googleDriveLink: "https://drive.google.com/file/d/example2",
  },
  {
    id: 3,
    title: "Midnight Reflections",
    excerpt:
      "When the world sleeps, my pen awakens to capture the essence of solitude...",
    publicationDate: "August 2024",
    googleDriveLink: "https://drive.google.com/file/d/example3",
  },
  {
    id: 4,
    title: "Voices Unheard",
    excerpt:
      "Stories that demand to be told, voices that refuse to fade into silence...",
    publicationDate: "July 2024",
    googleDriveLink: "https://drive.google.com/file/d/example4",
  },
  {
    id: 5,
    title: "Fragments of Light",
    excerpt:
      "Collecting moments of beauty in a world that often forgets to look...",
    publicationDate: "June 2024",
    googleDriveLink: "https://drive.google.com/file/d/example5",
  },
];

export default function PoetryWorksSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? poems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === poems.length - 1 ? 0 : prev + 1));
  };

  const getVisiblePoems = () => {
    const visible = [];
    // Show 3 on desktop, 1 on mobile
    const count =
      typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;
    for (let i = 0; i < count; i++) {
      visible.push(poems[(currentIndex + i) % poems.length]);
    }
    return visible;
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50 py-12 sm:py-0">
      <motion.div
        className="w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div
          className="mb-8 sm:mb-12 text-center"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2 sm:mb-4">
            Poetry Works
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            A collection of published poems and verses
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <CarouselNavigation direction="prev" onClick={handlePrev} />

          {/* Poems Display */}
          <div className="flex-1 flex gap-4 sm:gap-6 justify-center overflow-hidden">
            {/* Mobile: Show only current poem */}
            <div className="block md:hidden w-full max-w-md mx-auto">
              <motion.div
                key={poems[currentIndex].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <PoemCard poem={poems[currentIndex]} isActive={true} />
              </motion.div>
            </div>

            {/* Desktop: Show 3 poems */}
            <div className="hidden md:flex gap-6 justify-center w-full">
              {getVisiblePoems().map((poem, idx) => (
                <motion.div
                  key={poem.id}
                  className={`transition-all duration-500 ${
                    idx === 0 ? "flex-1 max-w-sm" : "flex-1 max-w-xs"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: idx === 0 ? 1 : 0.6,
                    y: 0,
                    scale: idx === 0 ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <PoemCard poem={poem} isActive={idx === 0} />
                </motion.div>
              ))}
            </div>
          </div>

          <CarouselNavigation direction="next" onClick={handleNext} />
        </div>

        {/* Carousel Indicators */}
        <motion.div
          className="flex justify-center gap-2 mt-8 sm:mt-12"
          variants={itemVariants}
        >
          {poems.map((_, index) => (
            <motion.button
              key={index}
              aria-label={`Go to poem ${index + 1}`}
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

// Separate PoemCard component for cleaner code
function PoemCard({ poem, isActive }: { poem: Poem; isActive: boolean }) {
  return (
    <motion.div
      className={`bg-white rounded-lg p-5 sm:p-6 md:p-8 h-full flex flex-col border transition-colors ${
        isActive ? "border-gray-300 shadow-md" : "border-gray-200"
      }`}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        borderColor: "rgb(156 163 175)",
      }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 line-clamp-2">
        {poem.title}
      </h3>

      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-1 line-clamp-3 sm:line-clamp-4">
        {poem.excerpt}
      </p>

      <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          Published {poem.publicationDate}
        </p>

        <motion.a
          href={poem.googleDriveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-black hover:text-gray-700 font-medium text-sm transition-colors group"
          aria-label={`Read ${poem.title}`}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.98 }}
        >
          Read Full Poem
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}
