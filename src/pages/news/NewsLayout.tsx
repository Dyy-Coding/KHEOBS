// Updated NewsLayout.tsx to support external integration and data reuse
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const slides = [
  {
    main: {
      title: "Kyiv mayor Vitali Klitschko: 'Putin only understands force'",
      image: "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg",
      meta: "DW · 13h · 48 comments",
    },
    small: [
      {
        title: "South Korean actress Kang Seo Ha dies at 31",
        image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg",
        meta: "eINExpress · 2d · 1k likes",
      },
      {
        title: "11 Beautiful Homes Built Around Nature",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        meta: "loveMONEY · 740 shares",
      },
    ],
  },
  {
    main: {
      title: "NASA discovers signs of water on Europa moon",
      image: "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
      meta: "NASA · 1d · 352 reactions",
    },
    small: [
      {
        title: "Cambodia’s forests from above: drone revolution",
        image: "https://images.pexels.com/photos/242246/pexels-photo-242246.jpeg",
        meta: "EcoAsia · 4h ago",
      },
      {
        title: "Top 10 Electric Cars in 2025",
        image: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg",
        meta: "TechTimes · 1.2k shares",
      },
    ],
  },
  {
    main: {
      title: "New tech transforms flood prediction in Phnom Penh",
      image: "https://images.pexels.com/photos/1036854/pexels-photo-1036854.jpeg",
      meta: "KHEOBS Lab · 10h ago",
    },
    small: [
      {
        title: "5 startups disrupting climate action",
        image: "https://images.pexels.com/photos/386148/pexels-photo-386148.jpeg",
        meta: "GreenNow · 3k views",
      },
      {
        title: "The rise of AI in education across ASEAN",
        image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg",
        meta: "EduTech · 9h ago",
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

const NewsLayout: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[currentSlide];

  return (
    <div className="w-screen min-h-screen bg-neutral-900 text-white p-6 flex flex-col items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="w-full max-w-5xl rounded-3xl bg-neutral-800 overflow-hidden shadow-2xl mb-8"
        >
          <img
            src={current.main.image}
            alt="Main News"
            className="w-full h-[480px] object-cover"
          />
          <div className="p-6">
            <h2 className="text-3xl font-extrabold mb-2">{current.main.title}</h2>
            <p className="text-base text-gray-400">{current.main.meta}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full mb-8">
        {current.small.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="rounded-2xl bg-neutral-800 overflow-hidden shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.meta}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsLayout;
