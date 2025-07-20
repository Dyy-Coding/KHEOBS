import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Map, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { easeInOut } from "framer-motion";
import ClimateDashboard from './ClimateDashboard';
import ToolsAccess from './ToolsAccess';

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
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const SlideShowStoryMaps: React.FC = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  // ✅ Added state for modals
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState({ name: "", type: "" });

  const current = storyMaps[page];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const paginate = (dir: number) => {
    setPage(([prev]) => {
      const newIndex = (prev + dir + storyMaps.length) % storyMaps.length;
      return [newIndex, dir];
    });
  };

  return (
    <section className="min-h-[130vh] bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeInOut }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Interactive Story Maps</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Discover environmental stories through interactive maps and multimedia content
        </p>
      </motion.div>

      {/* Slideshow */}
      <div
        className="relative flex items-center justify-center w-full max-w-[80vw] h-[75vh]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Arrow */}
        <button
          aria-label="Previous Slide"
          onClick={() => paginate(-1)}
          className="absolute -left-14 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg p-2 rounded-full cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Right Arrow */}
        <button
          aria-label="Next Slide"
          onClick={() => paginate(1)}
          className="absolute -right-14 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg p-2 rounded-full cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Slide Content */}
        <div className="relative w-full h-full overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: easeInOut }}
              className="absolute top-0 left-0 w-full h-full bg-white rounded-xl shadow-xl flex flex-col overflow-hidden"
            >
              {/* Gradient Section */}
              <div
                className={`h-[60%] flex items-center justify-center bg-gradient-to-r ${current.colorFrom} ${current.colorTo}`}
              >
                <div className="text-center text-white">
                  <current.icon className="w-16 h-16 mx-auto mb-2" />
                  <p className="font-semibold text-lg">{current.subtitle}</p>
                </div>
              </div>

              {/* Description Section */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{current.title}</h3>
                  <p className="text-gray-600 mb-6">{current.description}</p>
                </div>
                <button
                  className={`flex items-center px-5 py-3 rounded-lg text-white font-semibold transition-colors self-start ${
                    current.id === 1
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-orange-600 hover:bg-orange-700"
                  }`}
                  onClick={() => {
                    if (current.id === 1) {
                      setIsDashboardOpen(true);
                    } else {
                      setSelectedTool({ name: current.title, type: "Story Map" });
                      setIsAccessModalOpen(true);
                    }
                  }}
                >
                  Explore Story
                  <ExternalLink className="ml-3 w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Climate Dashboard Modal */}
      <ClimateDashboard
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
      />

      {/* Tools Access Modal */}
      <ToolsAccess
        isOpen={isAccessModalOpen}
        onClose={() => setIsAccessModalOpen(false)}
        toolName={selectedTool.name}
        toolType={selectedTool.type}
      />
    </section>
  );
};

export default SlideShowStoryMaps;
