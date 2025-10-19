"use client"

interface ScrollIndicatorProps {
  currentSection: number
  totalSections: number
}

export default function ScrollIndicator({ currentSection, totalSections }: ScrollIndicatorProps) {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
          key={index}
          aria-label={`Go to section ${index + 1}`}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === currentSection ? "bg-black w-8" : "bg-gray-400 hover:bg-gray-600"
          }`}
          onClick={() => {
            // This would require passing a callback from parent
          }}
        />
      ))}
    </div>
  )
}
