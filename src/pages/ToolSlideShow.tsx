import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Map, Globe } from "lucide-react";

const storyMaps = [
  {
    id: 1,
    title: "Mekong River Conservation Story",
    subtitle: "Mekong River Conservation",
    description: "Follow the journey of conservation efforts along the Mekong River basin",
    colorFrom: "from-green-400",
    colorTo: "to-blue-500",
    icon: Map,
  },
  {
    id: 2,
    title: "Climate Change in Cambodia",
    subtitle: "Climate Change Impacts",
    description: "Visualize the impacts of climate change on Cambodian communities",
    colorFrom: "from-yellow-400",
    colorTo: "to-orange-500",
    icon: Globe,
  },
];

const cardVariants = {
  enter: { opacity: 0, scale: 0.95 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

const SlideShowStoryMaps: React.FC = () => {
  const [page, setPage] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prevPage) => (prevPage + 1) % storyMaps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = storyMaps[page];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Story Maps</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover environmental stories through interactive maps and multimedia content
          </p>
        </motion.div>

        <div className="relative w-full overflow-hidden flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0"
              style={{
                width: "80vw",
                maxWidth: "700px",
                height: "70vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className={`h-[60%] flex items-center justify-center bg-gradient-to-r ${current.colorFrom} ${current.colorTo}`}
              >
                <div className="text-center text-white">
                  <current.icon className="w-16 h-16 mx-auto mb-2" />
                  <p className="font-semibold text-lg">{current.subtitle}</p>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{current.title}</h3>
                  <p className="text-gray-600 mb-6">{current.description}</p>
                </div>
                <button
                  className={`flex items-center px-5 py-3 rounded-lg text-white font-semibold transition-colors self-start ${
                    current.id === 1 ? "bg-green-600 hover:bg-green-700" : "bg-orange-600 hover:bg-orange-700"
                  }`}
                >
                  Explore Story
                  <ExternalLink className="ml-3 w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SlideShowStoryMaps;
