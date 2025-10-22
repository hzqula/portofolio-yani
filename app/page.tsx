"use client";

import { useEffect, useState, useRef } from "react";
import HeroSection from "@/components/sections/hero-section";
import MCPortfolioSection from "@/components/sections/mc-portfolio-section";
import PoetryWorksSection from "@/components/sections/poetry-works-section";
import InstagramContentSection from "@/components/sections/instagram-content-section";
import AchievementsSection from "@/components/sections/achievements-section";
import ContactFooterSection from "@/components/sections/contact-footer-section";
import ScrollIndicator from "@/components/scroll-indicator";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollTime = useRef(0);
  const touchStartY = useRef(0);

  const sections = [
    { id: "hero", component: HeroSection },
    { id: "mc-portfolio", component: MCPortfolioSection },
    { id: "poetry", component: PoetryWorksSection },
    { id: "instagram", component: InstagramContentSection },
    { id: "contact", component: ContactFooterSection },
  ];

  // Scroll ke section tertentu (untuk tombol Hero)
  const scrollToSection = (sectionIndex: number) => {
    if (sectionIndex >= 0 && sectionIndex < sections.length && !isScrolling) {
      setIsScrolling(true);
      setCurrentSection(sectionIndex);
      setTimeout(() => setIsScrolling(false), 800);
    }
  };

  useEffect(() => {
    // Listen untuk custom event dari Hero button
    const handleScrollToNext = () => {
      scrollToSection(currentSection + 1);
    };

    window.addEventListener(
      "scrollToNext",
      handleScrollToNext as EventListener
    );

    return () => {
      window.removeEventListener(
        "scrollToNext",
        handleScrollToNext as EventListener
      );
    };
  }, [currentSection, isScrolling]);

  useEffect(() => {
    // THRESHOLD untuk deteksi scroll - lebih rendah = lebih responsif
    const SCROLL_THRESHOLD = 50; // Cukup untuk deteksi scroll dengan cepat
    const COOLDOWN_TIME = 800; // Waktu cooldown setelah scroll (ms)

    const handleWheel = (e: WheelEvent) => {
      // Skip jika masih dalam cooldown
      const now = Date.now();
      if (now - lastScrollTime.current < COOLDOWN_TIME) return;

      // Deteksi arah scroll berdasarkan threshold
      if (Math.abs(e.deltaY) >= SCROLL_THRESHOLD) {
        const direction = e.deltaY > 0 ? 1 : -1;
        const nextSection = Math.max(
          0,
          Math.min(sections.length - 1, currentSection + direction)
        );

        if (nextSection !== currentSection) {
          setIsScrolling(true);
          setCurrentSection(nextSection);
          lastScrollTime.current = now;
          setTimeout(() => setIsScrolling(false), COOLDOWN_TIME);
        }
      }
    };

    // Touch support untuk mobile
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < COOLDOWN_TIME) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      // Minimum swipe distance
      const TOUCH_THRESHOLD = 50;

      if (Math.abs(diff) > TOUCH_THRESHOLD) {
        const direction = diff > 0 ? 1 : -1;
        const nextSection = Math.max(
          0,
          Math.min(sections.length - 1, currentSection + direction)
        );

        if (nextSection !== currentSection) {
          setIsScrolling(true);
          setCurrentSection(nextSection);
          lastScrollTime.current = now;
          setTimeout(() => setIsScrolling(false), COOLDOWN_TIME);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < COOLDOWN_TIME) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        const nextSection = Math.min(sections.length - 1, currentSection + 1);
        if (nextSection !== currentSection) {
          setIsScrolling(true);
          setCurrentSection(nextSection);
          lastScrollTime.current = now;
          setTimeout(() => setIsScrolling(false), COOLDOWN_TIME);
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        const nextSection = Math.max(0, currentSection - 1);
        if (nextSection !== currentSection) {
          setIsScrolling(true);
          setCurrentSection(nextSection);
          lastScrollTime.current = now;
          setTimeout(() => setIsScrolling(false), COOLDOWN_TIME);
        }
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollToSection(0);
        lastScrollTime.current = now;
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToSection(sections.length - 1);
        lastScrollTime.current = now;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection, sections.length]);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-white">
      <div
        className="transition-transform duration-[800ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
        }}
      >
        {sections.map((section) => {
          const Component = section.component;
          return (
            <div key={section.id} className="w-full h-screen flex-shrink-0">
              <Component />
            </div>
          );
        })}
      </div>

      <ScrollIndicator
        currentSection={currentSection}
        totalSections={sections.length}
      />
    </main>
  );
}
