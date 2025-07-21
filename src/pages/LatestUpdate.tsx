// NewsLayout.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { newsArticles } from "./DataNews";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

const generateSlides = () => {
  const slides = [];

  for (let i = 0; i < newsArticles.length; i += 3) {
    const main = newsArticles[i];
    const small = newsArticles.slice(i + 1, i + 3);

    if (main) {
      slides.push({
        main: {
          id: main.id,
          title: main.title,
          image: main.image,
          meta: `${main.category} · ${main.date} · ${main.readTime}`,
        },
        small: small.map((item) => ({
          id: item.id,
          title: item.title,
          image: item.image,
          meta: `${item.category} · ${item.date} · ${item.readTime}`,
        })),
      });
    }
  }

  return slides;
};

const NewsLayout: React.FC = () => {
  const slides = generateSlides();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const current = slides[currentSlide];

  return (
    <div className="w-full min-h-screen bg-none bg-neutral-900 text-white p-6 flex flex-col items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <Link to={`/news/${current.main.id}`}>
          <motion.div
            key={currentSlide}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="w-full max-w-5xl rounded-3xl bg-neutral-800 overflow-hidden shadow-2xl mb-8 cursor-pointer hover:scale-[1.02] transition-transform"
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
        </Link>
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full mb-8">
        {current.small.map((item) => (
          <Link to={`/news/${item.id}`} key={item.id}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="rounded-2xl bg-neutral-800 overflow-hidden shadow-lg cursor-pointer hover:scale-[1.02] transition-transform"
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsLayout;
