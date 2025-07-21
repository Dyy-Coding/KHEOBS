import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Play } from 'lucide-react';

const ToolSlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const slides = [
    {
      title: "Environmental StoryMap: Tonle Sap Lake",
      description: "Explore the changing ecosystem of Cambodia's largest lake through interactive maps and compelling narratives.",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Interactive Timeline", "Satellite Imagery", "Conservation Stories"],
      url: "#"
    },
    {
      title: "Mekong River Basin Analysis",
      description: "Comprehensive analysis of water flow patterns and their impact on local communities.",
      image: "https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Flow Modeling", "Community Impact", "Policy Recommendations"],
      url: "#"
    },
    {
      title: "Forest Cover Change Detection",
      description: "Monitor deforestation and reforestation efforts across Cambodia using satellite data.",
      image: "https://images.pexels.com/photos/1534609/pexels-photo-1534609.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Time-lapse Analysis", "Change Detection", "Conservation Planning"],
      url: "#"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleExploreStoryMap = (slide: any) => {
    setIsLoading(true);
    
    // Create a realistic StoryMap URL based on the slide title
    const storyMapId = slide.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const storyMapUrl = `https://storymaps.arcgis.com/stories/${storyMapId}`;
    
    // Simulate loading time for better UX
    setTimeout(() => {
      // Open the StoryMap in a new window
      const newWindow = window.open(storyMapUrl, '_blank', 'noopener,noreferrer');
      
      if (!newWindow) {
        // Fallback if popup blocked
        alert(`Opening StoryMap: ${slide.title}\n\nURL: ${storyMapUrl}\n\nNote: Please allow popups for the best experience.`);
      }
      
      setIsLoading(false);
    }, 1000);
  };

  const handleLearnMore = (slide: any) => {
    // Create a detailed information modal or redirect to more info
    const infoUrl = `https://kheobs.org/research/${slide.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
    
    // Show detailed information
    const detailsMessage = `
${slide.title}

${slide.description}

Featured Elements:
${slide.features.map((feature: string) => `• ${feature}`).join('\n')}

Research Focus Areas:
• Environmental Impact Assessment
• Community Engagement Studies  
• Conservation Strategy Development
• Data-Driven Policy Recommendations

For more detailed information, visit: ${infoUrl}

Would you like to visit the full research page?`;

    if (confirm(detailsMessage)) {
      window.open(infoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Story Maps</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover environmental stories through immersive, data-driven narratives
        </p>
      </motion.div>

      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative h-96 lg:h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden"></div>
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition-all lg:hidden">
                    <Play 
                      className={`w-8 h-8 text-blue-600 ${isLoading ? 'animate-spin' : ''}`} 
                      onClick={() => handleExploreStoryMap(slides[currentSlide])}
                    />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-white">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {slides[currentSlide].description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Featured Elements:</h4>
                      <ul className="space-y-2">
                        {slides[currentSlide].features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center space-x-4">
                      <button 
                        onClick={() => handleExploreStoryMap(slides[currentSlide])}
                        disabled={isLoading}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Loading...
                          </>
                        ) : (
                          <>
                            <ExternalLink className="w-5 h-5 mr-2" />
                            Explore StoryMap
                          </>
                        )}
                      </button>
                      <button 
                        onClick={() => handleLearnMore(slides[currentSlide])}
                        disabled={isLoading}
                        className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-600' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolSlideShow;