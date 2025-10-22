"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";

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
    title: "Kembali Merindu",
    excerpt:
      "In the silence between heartbeats, I find the words that shape my tomorrow...",
    publicationDate: "4 Januari 2024",
    googleDriveLink:
      " https://docs.google.com/document/d/1KPA5dh9b2g9feIene0ZarrC-bCQfH7Z1/edit?usp=drivesdk&ouid=118052189672788357030&rtpof=true&sd=true",
  },
  {
    id: 2,
    title: "Globalisasi Menguasai Bumi",
    excerpt:
      "The city speaks in rhythms only we can understand, a symphony of concrete and dreams...",
    publicationDate: "21 Oktober 2023",
    googleDriveLink:
      " https://docs.google.com/document/d/1uVvHRWDzQ0MLmbV_fhD-mshkz-aCbMvN/edit?usp=drivesdk&ouid=118052189672788357030&rtpof=true&sd=true",
  },
  {
    id: 3,
    title: "Ramadhan, Izinkan Aku Kembali Pulang",
    excerpt:
      "When the world sleeps, my pen awakens to capture the essence of solitude...",
    publicationDate: "28 Maret 2024",
    googleDriveLink:
      "https://drive.google.com/file/d/1aFdWupC5RTiusxiceU0xR9WNbaY5zROl/view?usp=drivesdk",
  },
  {
    id: 4,
    title: "Rokan Hilir",
    excerpt:
      "Stories that demand to be told, voices that refuse to fade into silence...",
    publicationDate: "26 Oktober 2021",
    googleDriveLink:
      " https://docs.google.com/document/d/16wzDaVnruAZhlhpVm8Ih7dNhMY1mJOMG/edit?usp=drivesdk&ouid=118052189672788357030&rtpof=true&sd=true",
  },
  {
    id: 5,
    title: "Maraknya Hoax Dan Framing Informasi Di Era Keuangan Digital",
    excerpt:
      "Collecting moments of beauty in a world that often forgets to look...",
    publicationDate: "30 April 2025",
    googleDriveLink:
      " https://www.riausatu.com/kolom/42915055148/maraknya-hoaks-dan-framing-informasi-di-era-keuangan-digital",
  },
  {
    id: 6,
    title:
      "Studi Club Dinamika Publik UIN Suska Riau Gelar Diseminasi Hasil Penelitian",
    excerpt:
      "Collecting moments of beauty in a world that often forgets to look...",
    publicationDate: "12 Juni 2025",
    googleDriveLink:
      "https://feis.uin-suska.ac.id/2025/06/12/study-club-dinamika-publik-uin-suska-riau-gelar-diseminasi-hasil-penelitian/",
  },
  {
    id: 7,
    title:
      "Maulid Nabi Muhammad SAW 2023 Himpunan Mahasiswa Program Studi Administrasi Negara UIN Sultan Syarif Kasim Riau",
    excerpt:
      "Collecting moments of beauty in a world that often forgets to look...",
    publicationDate: "7 Oktober 2023",
    googleDriveLink:
      "https://anafeis.uin-suska.ac.id/maulid-nabi-muhammad-saw-2023-himpunan-mahasiswa-program-studi-administrasi-negara-uin-sultan-syarif-kasim-riau/?fbclid=PAT01DUANgHLhleHRuA2FlbQIxMAABp9Yw2-urIuqJh-LITVa50WCxnR-sA1yJTpAmVee4GjQ4ey1NvxBASNQlVvzZ_aem_6J9qfwD7oGw1zDO_TNbxMg",
  },
  {
    id: 8,
    title:
      "Perlombaan dalam Rangka Festival Ekonomi Syari’ah Nusantara 2023 Universitas Islam Negri Sultan Syarif Kasim Riau",
    excerpt:
      "Collecting moments of beauty in a world that often forgets to look...",
    publicationDate: "23 September 2023",
    googleDriveLink:
      " https://anafeis.uin-suska.ac.id/press-release-perlombaan-dalam-rangka-festival-ekonomi-syariah-nusantara-2023-universitas-islam-negri-sultan-syarif-kasim-riau/?fbclid=PAT01DUANgHPpleHRuA2FlbQIxMAABpx4Jd5m25EYQi4cdePwXRhAGGTsswCCv2pvVlNRRJw7O-bWy3zWFGTiLLzoL_aem_g81jGhLECZjQ35RHYwAFrA",
  },
  {
    id: 9,
    title:
      "Pengaruh Komunikasi dan Gaya Kepemimpinan Terhadap Kinerja Karyawan PT. Sewangi Sejati Luhur",
    excerpt:
      "Collecting moments of beauty in a world that often forgets to look...",
    publicationDate: "10 Juni 2023",
    googleDriveLink:
      "https://journals.ukitoraja.ac.id/index.php/jesit/article/view/2549:",
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

export default function PoetryWorksSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? poems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === poems.length - 1 ? 0 : prev + 1));
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

  const getVisiblePoems = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(poems[(currentIndex + i) % poems.length]);
    }
    return visible;
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50 py-12">
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
            My Writings
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            A collection of my written works
          </p>
        </motion.div>

        {/* Desktop: Carousel with side navigation */}
        <div className="hidden md:flex relative items-center justify-center gap-6">
          <CarouselNavigation direction="prev" onClick={handlePrev} />

          <div className="flex-1 flex gap-6 justify-center w-full">
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

          <CarouselNavigation direction="next" onClick={handleNext} />
        </div>

        {/* Mobile: Swipeable card */}
        <div className="md:hidden flex flex-col items-center">
          <motion.div
            className="w-full max-w-md mx-auto touch-pan-y"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            style={{ x, opacity }}
          >
            <motion.div
              key={poems[currentIndex].id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <PoemCard poem={poems[currentIndex]} isActive={true} />
            </motion.div>
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
          Read Full
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
      aria-label={direction === "prev" ? "Previous poem" : "Next poem"}
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
