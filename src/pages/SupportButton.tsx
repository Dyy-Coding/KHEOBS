// components/SupportButton.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

const SupportButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about', { state: { scrollToContact: true } });
  };

  return (
    <motion.button
      onClick={handleClick}
      className="group border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Heart className="mr-2 w-5 h-5 group-hover:text-red-500 transition-colors" />
      Support Our Mission
    </motion.button>
  );
};

export default SupportButton;
