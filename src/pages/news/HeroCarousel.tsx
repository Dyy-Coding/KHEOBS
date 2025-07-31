import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Cambodia’s Tech Boom: Youth Innovation in the Digital Era",
    description:
      "From startups to smart city projects, young Cambodian tech leaders are reshaping the country’s future.",
    image:
      "https://theaseanmagazine.asean.org/files/media/2023/03/AFF_7636.jpg",
  },
  {
    title: "Rural Healthcare Gets Smart With Mobile Clinics",
    description:
      "Tech-enabled health services are reaching Cambodia’s remote areas faster than ever.",
    image: "https://images.pexels.com/photos/8513189/pexels-photo-8513189.jpeg",
  },
  {
    title: "Siem Reap Goes Green: Air Quality Project Launches",
    description:
      "Environmental sensors now track pollution levels to inform city planning and community health.",
    image: "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg",
  },
];

const HeroCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length;
    setCurrentSlide(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(prev);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.scrollTo({
        left: scrollEl.clientWidth * currentSlide,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  return (
    <div className="relative w-full overflow-hidden mb-16 rounded-xl shadow-lg">
      {/* Scroll Row Container */}
      <div
        ref={scrollRef}
        className="flex w-full h-[400px] overflow-x-hidden scroll-smooth"
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="w-full flex-shrink-0 relative"
            style={{ minWidth: "100%" }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
              <h2 className="text-white text-3xl font-bold mb-2">{slide.title}</h2>
              <p className="text-white/90 text-sm max-w-xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HeroCarousel;
