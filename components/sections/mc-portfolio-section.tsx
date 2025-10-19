"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

interface MCEvent {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

const mcEvents: MCEvent[] = [
  {
    id: 1,
    title: "Summer Festival 2024",
    description:
      "Headlining performance at the annual summer music festival with 5000+ attendees",
    image: "/mc-performance-stage-festival.jpg",
    date: "June 2024",
  },
  {
    id: 2,
    title: "Urban Beats Conference",
    description:
      "Live performance and panel discussion on hip-hop culture and poetry",
    image: "/mc-conference-performance.jpg",
    date: "May 2024",
  },
  {
    id: 3,
    title: "Poetry Slam Championship",
    description: "Winning performance at the national poetry slam championship",
    image: "/poetry-slam-stage-performance.jpg",
    date: "April 2024",
  },
  {
    id: 4,
    title: "Intimate Venue Show",
    description: "Acoustic performance at the historic downtown theater",
    image: "/intimate-concert-venue.jpg",
    date: "March 2024",
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

export default function MCPortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? mcEvents.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === mcEvents.length - 1 ? 0 : prev + 1));
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;

    if (info.offset.x > swipeThreshold) {
      // Swipe right - go to previous
      handlePrev();
    } else if (info.offset.x < -swipeThreshold) {
      // Swipe left - go to next
      handleNext();
    }
  };

  const currentEvent = mcEvents[currentIndex];

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white py-12">
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
            MC Portfolio
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Live performances and event documentation
          </p>
        </motion.div>

        {/* Desktop: Carousel with side navigation */}
        <div className="hidden md:flex relative items-center justify-center gap-8">
          <CarouselNavigation direction="prev" onClick={handlePrev} />

          <motion.div className="flex-1 max-w-4xl" variants={itemVariants}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentEvent.id}
                className="relative overflow-hidden rounded-lg bg-gray-100 aspect-video cursor-pointer group shadow-lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={currentEvent.image || "/placeholder.svg"}
                  alt={currentEvent.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Desktop: Hover Overlay */}
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-6 lg:p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-white text-2xl lg:text-3xl font-bold mb-3 text-center">
                      {currentEvent.title}
                    </h3>
                    <p className="text-gray-200 text-center text-sm lg:text-base mb-4 max-w-2xl">
                      {currentEvent.description}
                    </p>
                    <p className="text-gray-300 text-sm lg:text-base">
                      {currentEvent.date}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Event Info Below Image - Desktop Only */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl lg:text-2xl font-bold text-black mb-2">
                {currentEvent.title}
              </h3>
              <p className="text-gray-600 text-sm lg:text-base">
                {currentEvent.date}
              </p>
            </motion.div>
          </motion.div>

          <CarouselNavigation direction="next" onClick={handleNext} />
        </div>

        {/* Mobile: Swipeable Image */}
        <div className="md:hidden flex flex-col items-center">
          <motion.div
            className="w-full max-w-2xl touch-pan-y"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentEvent.id}
                className="relative overflow-hidden rounded-lg bg-gray-100 aspect-video shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={currentEvent.image || "/placeholder.svg"}
                  alt={currentEvent.title}
                  className="w-full h-full object-cover"
                />

                {/* Mobile: Always Show Info Overlay at Bottom */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 sm:p-6">
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-1">
                    {currentEvent.title}
                  </h3>
                  <p className="text-gray-200 text-xs sm:text-sm mb-2 line-clamp-2">
                    {currentEvent.description}
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    {currentEvent.date}
                  </p>
                </div>
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
          className="flex justify-center gap-2 mt-8 sm:mt-12"
          variants={itemVariants}
        >
          {mcEvents.map((_, index) => (
            <motion.button
              key={index}
              aria-label={`Go to event ${index + 1}`}
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

        {/* Thumbnail Preview - Desktop Only */}
        <motion.div
          className="hidden lg:flex justify-center gap-4 mt-8"
          variants={itemVariants}
        >
          {mcEvents.map((event, index) => (
            <motion.button
              key={event.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative overflow-hidden rounded-md transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 ring-black ring-offset-2 opacity-100"
                  : "opacity-50 hover:opacity-75"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`View ${event.title}`}
            >
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-20 h-12 object-cover"
              />
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </section>
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
      aria-label={direction === "prev" ? "Previous event" : "Next event"}
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
