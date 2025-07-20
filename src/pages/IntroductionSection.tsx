import React from 'react';
import { motion } from 'framer-motion';

const IntroductionSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-extrabold mb-6">Welcome to KHEOBS Research Laboratory</h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          At KHEOBS Lab, we are committed to advancing climate science and environmental research in Cambodia.
          Our multidisciplinary team works on innovative projects focused on monitoring climate patterns,
          developing sustainable solutions, and engaging with communities to promote resilience against
          environmental challenges.
        </p>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Join us as we explore new frontiers in environmental monitoring, support informed policymaking,
          and contribute to the global effort to safeguard our planet’s future.
        </p>
      </motion.div>
    </section>
  );
};

export default IntroductionSection;
