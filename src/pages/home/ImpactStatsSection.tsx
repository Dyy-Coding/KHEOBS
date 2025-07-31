import { motion } from 'framer-motion';
import { Leaf, Users, Heart, Award } from 'lucide-react';

const impactStats = [
  { number: "15+", label: "Research Projects", icon: Leaf },
  { number: "500+", label: "Communities Helped", icon: Users },
  { number: "25K+", label: "Trees Planted", icon: Heart },
  { number: "8", label: "Awards Received", icon: Award },
];

const ImpactStatsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative w-full h-[45vh] flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Stats Content */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 w-full max-w-7xl">
        {impactStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center text-center space-y-3 bg-gray-100 hover:bg-gray-200 rounded-3xl px-8 py-10 shadow-md transition-all"
          >
            <stat.icon className="w-10 h-10 text-green-600" />
            <div className="text-4xl font-bold text-gray-900">{stat.number}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ImpactStatsSection;
