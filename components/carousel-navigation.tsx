"use client"

interface CarouselNavigationProps {
  direction: "prev" | "next"
  onClick: () => void
}

export default function CarouselNavigation({ direction, onClick }: CarouselNavigationProps) {
  const isPrev = direction === "prev"

  return (
    <button
      onClick={onClick}
      aria-label={`${isPrev ? "Previous" : "Next"} item`}
      className="flex-shrink-0 p-3 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300 group"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        style={{ transform: isPrev ? "scaleX(-1)" : "scaleX(1)" }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  )
}
