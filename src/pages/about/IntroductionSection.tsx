import React from 'react';
import { motion } from 'framer-motion';

const IntroductionSection: React.FC = () => {
  return (
    <section className="h-screen relative overflow-hidden text-white flex items-center justify-center px-6">
      {/* Fullscreen Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/736x/17/67/70/176770680efd99b24ad416c48aabaf1e.jpg"
          alt="Environmental Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-red-900 opacity-70" />
      </div>

      {/* Content */}
      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Header with Emoji */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className="mb-8"
        >
          <span className="text-6xl mb-4 block">🌍</span>
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent mb-4">
            KHEOBS LAB
          </h1>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
            Where <span className="text-blue-400">Science</span> Meets{' '}
            <span className="text-red-400">Action</span> for Cambodia's Future
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-4xl mx-auto">
            We're not just another research lab. We're a squad of passionate scientists, data nerds, 
            and climate warriors working 24/7 to tackle Cambodia's biggest environmental challenges. 
            From monitoring rising temperatures to developing game-changing sustainable solutions – 
            we're making science accessible, relevant, and impactful.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IntroductionSection;
