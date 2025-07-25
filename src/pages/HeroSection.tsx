import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Users, Leaf, Award, Heart } from 'lucide-react';

import SupportButton from './SupportButton';
import ImpactStatsSection from './ImpactStatsSection'; // ✅ Imported here

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://i.pinimg.com/1200x/63/d9/31/63d9312343bc6d160e597b25c2abd43f.jpg",
    "https://cdn.pixabay.com/photo/2020/03/20/03/31/visiting-4949379_1280.jpg",
    "https://i.pinimg.com/736x/95/f3/98/95f398a9985d4add82987b6e85cd3dd5.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/09/03/cambodia-1071824_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/10/15/05/41/khmer-water-festival-4550646_1280.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <>
      <section className="relative text-white min-h-screen flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-green-900/70"></div>

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, -100, 0], opacity: [1, 1.5, 1.8] }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 text-sm font-medium"
              >
                <Leaf className="w-4 h-4 mr-2 text-green-400" />
                Leading Climate Research in Cambodia
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Climate & Environment
                </span>
                <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Research Lab
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl text-yellow-400 font-light mt-2">
                  កម្ពុជា Cambodia
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
                Advancing sustainable solutions through cutting-edge research, community engagement, and environmental advocacy across Cambodia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/research"
                  className="group bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all inline-flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Explore Our Research</span>
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.a>

                {/* <SupportButton /> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 text-green-400">Our Mission</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  To drive environmental sustainability in Cambodia through innovative research, 
                  community partnerships, and evidence-based policy advocacy.
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    href="/about"
                    className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg border border-green-400/30 rounded-3xl p-6 shadow-2xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Latest Achievement</h4>
                    <p className="text-gray-200 text-sm">
                      Received UNESCO Recognition for Outstanding Climate Research in Southeast Asia
                    </p>
                    <p className="text-green-400 text-xs mt-2">December 2024</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex space-x-2">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 right-8 z-30"
        >
          <div className="flex flex-col items-center text-white/70">
            <span className="text-xs mb-2">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ✅ Inserted new section */}
      <ImpactStatsSection />
    </>
  );
};

export default HeroSection;
