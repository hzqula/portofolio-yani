"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarouselNavigation from "@/components/carousel-navigation";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

interface Achievement {
  id: number;
  year: string;
  title: string;
  organizer: string;
  description: string;
  link: string;
  icon: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    year: "2024",
    title: "National Poetry Championship",
    organizer: "International Poetry Society",
    description:
      "First place winner in the prestigious national poetry competition",
    link: "https://example.com/achievement1",
    icon: "🏆",
  },
  {
    id: 2,
    year: "2024",
    title: "Best MC Performance",
    organizer: "Urban Music Awards",
    description:
      "Recognized for outstanding live performance and stage presence",
    link: "https://example.com/achievement2",
    icon: "🎤",
  },
  {
    id: 3,
    year: "2023",
    title: "Content Creator of the Year",
    organizer: "Digital Media Association",
    description:
      "Award for innovative and engaging content creation across platforms",
    link: "https://example.com/achievement3",
    icon: "⭐",
  },
  {
    id: 4,
    year: "2023",
    title: "Published Anthology",
    organizer: "Literary Press International",
    description: "Featured in the annual anthology of contemporary poets",
    link: "https://example.com/achievement4",
    icon: "📚",
  },
  {
    id: 5,
    year: "2022",
    title: "Emerging Artist Grant",
    organizer: "Arts Foundation",
    description: "Awarded grant to support creative development and projects",
    link: "https://example.com/achievement5",
    icon: "🎨",
  },
];

export default function AchievementsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? achievements.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === achievements.length - 1 ? 0 : prev + 1
    );
  };

  const getVisibleAchievements = () => {
    const visible = [];
    const count =
      typeof window !== "undefined"
        ? window.innerWidth < 768
          ? 1
          : window.innerWidth < 1024
          ? 2
          : 3
        : 3;

    for (let i = 0; i < count; i++) {
      visible.push(achievements[(currentIndex + i) % achievements.length]);
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
            Achievements
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Recognition and awards for creative excellence
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <CarouselNavigation direction="prev" onClick={handlePrev} />

          {/* Achievements Display */}
          <div className="flex-1 overflow-hidden">
            {/* Mobile: Single card */}
            <div className="block md:hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={achievements[currentIndex].id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <AchievementCard
                    achievement={achievements[currentIndex]}
                    isActive={true}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Desktop: Multiple cards */}
            <div className="hidden md:flex gap-4 lg:gap-6 justify-center">
              {getVisibleAchievements().map((achievement, idx) => (
                <motion.div
                  key={achievement.id}
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
                  <AchievementCard
                    achievement={achievement}
                    isActive={idx === 0}
                  />
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
          {achievements.map((_, index) => (
            <motion.button
              key={index}
              aria-label={`Go to achievement ${index + 1}`}
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

// Separate Achievement Card Component
function AchievementCard({
  achievement,
  isActive,
}: {
  achievement: Achievement;
  isActive: boolean;
}) {
  return (
    <motion.a
      href={achievement.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white rounded-lg p-5 sm:p-6 md:p-8 h-full flex flex-col border transition-all ${
        isActive ? "border-gray-300 shadow-lg" : "border-gray-200 shadow-md"
      }`}
      aria-label={`View ${achievement.title}`}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
        borderColor: "rgb(156 163 175)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start justify-between mb-4">
        {/* Icon */}
        <motion.div
          className="text-4xl sm:text-5xl"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          {achievement.icon}
        </motion.div>

        {/* Year Badge */}
        <motion.span
          className="px-3 py-1 bg-gray-900 text-white text-xs font-bold rounded-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {achievement.year}
        </motion.span>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 line-clamp-2">
        {achievement.title}
      </h3>

      {/* Organizer */}
      <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 font-medium">
        {achievement.organizer}
      </p>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-1 mb-4 sm:mb-6 line-clamp-3">
        {achievement.description}
      </p>

      {/* Link */}
      <motion.div
        className="flex items-center gap-2 text-black hover:text-gray-700 font-medium text-sm transition-colors pt-3 sm:pt-4 border-t border-gray-200 group"
        whileHover={{ x: 5 }}
      >
        <span>View Achievement</span>
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
      </motion.div>
    </motion.a>
  );
}
