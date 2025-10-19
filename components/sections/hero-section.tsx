"use client";

import { motion } from "framer-motion";

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

export default function HeroSection() {
  const scrollToNext = () => {
    window.dispatchEvent(new CustomEvent("scrollToNext"));
  };

  const downloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/cv-ramadayani.pdf";
    link.download = "ramadayani-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-gray-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 sm:w-80 sm:h-80 bg-gray-50 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="relative z-10 text-center max-w-2xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Profile Image */}
        <motion.div
          className="mb-8 sm:mb-12 flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <img
              src="/professional-portrait-poet-mc.jpg"
              alt="Ramadayani Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-3 sm:mb-4 tracking-tight px-4"
          variants={itemVariants}
        >
          <span className="text-balance">Ramadayani</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-2 sm:mb-3 font-light px-4"
          variants={itemVariants}
        >
          Poet • MC • Content Creator
        </motion.p>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed px-4"
          variants={itemVariants}
        >
          Crafting words that resonate. Performing verses that inspire. Creating
          content that connects.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          variants={itemVariants}
        >
          <motion.button
            onClick={scrollToNext}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white rounded-sm hover:bg-gray-800 active:bg-gray-900 transition-colors duration-300 font-medium text-sm sm:text-base shadow-md hover:shadow-lg w-full sm:w-auto"
            aria-label="Scroll to next section"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.button>

          <motion.button
            onClick={downloadCV}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black border-2 border-gray-300 rounded-sm hover:bg-gray-50 hover:border-gray-400 active:bg-gray-100 transition-colors duration-300 font-medium text-sm sm:text-base shadow-md hover:shadow-lg w-full sm:w-auto"
            aria-label="Download CV"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download CV
          </motion.button>
        </motion.div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          className="hidden sm:block absolute -bottom-32 md:-bottom-40 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
              Scroll
            </span>
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
