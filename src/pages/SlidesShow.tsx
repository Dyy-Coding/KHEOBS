import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SlideshowItem {
  title: string;
  description: string;
  image: string;
}

const slideshowItems: SlideshowItem[] = [
  {
    title: "Climate Data Dashboard",
    description: "Interactive platform for visualizing climate patterns in Cambodia.",
    image:
      "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Water Quality Monitor",
    description: "Real-time tracking and alerts for water quality in key river basins.",
    image:
      "https://i.pinimg.com/1200x/71/a3/5f/71a35f2310b61bc6ec3539013cd2f87b.jpg",
  },
  {
    title: "Biodiversity Tracker",
    description: "Mobile app for reporting and tracking endangered species sightings.",
    image:
      "https://i.pinimg.com/1200x/73/61/76/736176e41d6fd80e45b4d0de2180cb1c.jpg",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    scale: 0.98,
  }),
};

const Slideshow: React.FC = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(([prevIndex]) => [(prevIndex + 1) % slideshowItems.length, 1]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const paginate = (newIndex: number) => {
    if (newIndex === currentIndex) return;
    const dir = newIndex > currentIndex ? 1 : -1;
    setCurrentIndex([newIndex, dir]);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slideshowItems.length) % slideshowItems.length;
    setCurrentIndex([newIndex, -1]);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slideshowItems.length;
    setCurrentIndex([newIndex, 1]);
  };

  return (
    <div
      className="relative mx-auto"
      style={{ width: '80vw', height: '80vh' }}
      aria-label="Image slideshow"
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="absolute inset-0 rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={slideshowItems[currentIndex].image}
            alt={slideshowItems[currentIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-6 md:px-12">
            <h3 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              {slideshowItems[currentIndex].title}
            </h3>
            <p className="text-white text-base md:text-lg max-w-3xl drop-shadow-md">
              {slideshowItems[currentIndex].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left / Right Navigation Buttons */}
      <button
        aria-label="Previous Slide"
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-60 text-white rounded-full p-3 shadow-lg transition"
        style={{ backdropFilter: 'blur(4px)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        aria-label="Next Slide"
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-60 text-white rounded-full p-3 shadow-lg transition"
        style={{ backdropFilter: 'blur(4px)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
        {slideshowItems.map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-white scale-125" : "bg-gray-400"
            }`}
            onClick={() => paginate(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
