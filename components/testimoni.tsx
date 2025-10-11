"use client";
import React from 'react';

type Testimonial = {
  quote: string;
  name: string;
  avatar: string;
  bg: string;      // background color code, e.g. #0a0a0a or rgba(...)
  color: string;   // text color code
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Their consistency, quality, and eco-friendly practices are unmatched in the industry.",
    name: "Fred Anderson",
    avatar: "/FolakeMi.jpg",
    bg: "#fafafa", // emerald-800-like
    color: "#111111",
  },
  {
    quote:
      "Their sustainable practices give us a competitive edge and make our brand story stronger.",
    name: "Noah Kim",
    avatar: "/Flouri.png",
    bg: "#111827", // gray-900
    color: "#FFFFFF",
  },
  {
    quote:
      "We've observed tangible enhancements in both the quality of our crops and our operational efficiency since collaborating with them.",
    name: "Jaycee Wilkins",
    avatar: "/akara1.jpg",
    bg: "#fafafa",
    color: "#111111",
  },
  {
    quote:
      "We’ve experienced remarkable enhancements in both the quality of our crops and the efficiency of our workflows.",
    name: "Sammy Moore",
    avatar: "/akrawomn.jpg",
    bg: "#F97316",
    color: "#ffffff",
  },
  {
    quote:
      "Since teaming up with them, we've experienced remarkable enhancements in crop quality and the efficiency of our operations!",
    name: "Roman Sumner",
    avatar: "/DgTal.jpg",
    bg: "#FFFFFF",
    color: "#111111",
  },
 
  {
    quote:
      "Outstanding traceability and partner support. We can count on consistent quality and timely deliveries.",
    name: "Gianna Patel",
    avatar: "/Flourii.png",
    bg: "#F3F4F6", // gray-100
    color: "#111111",
  },
 
];

const Testimoni = () => {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);

  const scrollByAmount = (amount: number) => {
    if (!scrollerRef.current) return;
    
    // Check if we're at extremes and need to reset
    if (amount < 0 && isAtStart) {
      // At start, scrolling left - reset to end
      const maxScroll = scrollerRef.current.scrollWidth - scrollerRef.current.clientWidth;
      scrollerRef.current.scrollTo({ 
        left: maxScroll, 
        behavior: "smooth" 
      });
    } else if (amount > 0 && isAtEnd) {
      // At end, scrolling right - reset to start
      scrollerRef.current.scrollTo({ 
        left: 0, 
        behavior: "smooth" 
      });
    } else {
      // Normal scroll
      scrollerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const checkScrollPosition = React.useCallback(() => {
    if (!scrollerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
    const threshold = 10; // Small threshold to account for sub-pixel scrolling
    
    const atStart = scrollLeft <= threshold;
    const atEnd = scrollLeft >= scrollWidth - clientWidth - threshold;
    
    setIsAtStart(atStart);
    setIsAtEnd(atEnd);
  }, []);

  React.useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Initial check
    checkScrollPosition();

    // Add scroll event listener for position tracking only
    scroller.addEventListener('scroll', checkScrollPosition);

    // Cleanup
    return () => {
      scroller.removeEventListener('scroll', checkScrollPosition);
    };
  }, [checkScrollPosition]);

  return (
    <section className="relative w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 font-medium tracking-tight bg-white border border-gray-200 px-4 py-2 rounded-full text-[16px] text-gray-700 mb-6">
          <img src="usryl.svg" alt="" />
          What our partners say
        </div>

        {/* Heading + Arrows */}
        <div className=" flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-[40px]  font-medium tracking-tight leading-tight max-w-3xl">
            Trusted by farmers &
            <br />
            businesses worldwide.
          </h2>

        {/* Nav Buttons */}
          <div className="absolute bottom-0 md:bottom-[63%] md:right-[8%] flex items-center gap-3 ml-auto">
            <button
              aria-label="Previous"
              onClick={() => scrollByAmount(-400)}
              className="w-12 h-12 rounded-full border border-gray-200 grid place-items-center hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollByAmount(400)}
              className="w-12 h-12 rounded-full border border-gray-200 grid place-items-center hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Row */}
        <div
          ref={scrollerRef}
          className="mt-12 flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-px-4"
        >
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className={`snap-start ${i==0?"lg:w-[50%] w-[50%] md:w-[70%]":"w-[30%]"} shrink-0 rounded-2xl p-8 border border-gray-100 min-h-[260px] flex ${i==0?"flex-col-reverse":"flex-col"} ${i==0?"justify-between":"justify-between"}`}
              style={{ backgroundColor: t.bg, color: t.color, minWidth: "360px" }}
            >
              <p className="text-xl leading-tight font-medium tracking-tight" style={{ color: t.color }}>
                “{t.quote}”
              </p>
              <div className="mt-8 flex items-center gap-3">
                <img src={t.avatar} alt="avatar" className="w-12 h-12 rounded-full object-cover" />
                <span className="text-sm font-medium" style={{ color: t.color }}>
                  {t.name}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Hide scrollbar utility for this component */}
      <style jsx>{`
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default Testimoni;
