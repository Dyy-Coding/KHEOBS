import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Monitor,
  Map,
  BarChart3,
  Database,
  Globe,
  Settings,
} from 'lucide-react';

import ToolSlideShow from "./ToolSlideShow";

const Tools = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tools = [
    {
      id: 1,
      title: "Climate Data Dashboard",
      description:
        "Interactive dashboard for monitoring real-time climate data from weather stations across Cambodia.",
      image:
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "dashboard",
      url: "#",
      features: ["Real-time data", "Historical analysis", "Export capabilities"],
      icon: BarChart3,
    },
    {
      id: 2,
      title: "Environmental StoryMap",
      description:
        "Interactive story map showcasing environmental changes and conservation efforts in Cambodia.",
      image:
        "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "storymap",
      url: "#",
      features: ["Interactive maps", "Story narratives", "Media integration"],
      icon: Map,
    },
    {
      id: 3,
      title: "Water Quality Monitoring System",
      description:
        "Comprehensive system for tracking water quality parameters in rivers and lakes.",
      image:
        "https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "monitoring",
      url: "#",
      features: ["Sensor integration", "Alert system", "Data visualization"],
      icon: Monitor,
    },
    {
      id: 4,
      title: "Biodiversity Assessment Tool",
      description:
        "GIS-based tool for assessing biodiversity patterns and conservation priorities.",
      image:
        "https://images.pexels.com/photos/1534609/pexels-photo-1534609.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "gis",
      url: "#",
      features: ["Species mapping", "Habitat analysis", "Conservation planning"],
      icon: Globe,
    },
    {
      id: 5,
      title: "Agricultural Climate Advisor",
      description:
        "Decision support tool for farmers to adapt to climate change impacts.",
      image:
        "https://images.pexels.com/photos/2886938/pexels-photo-2886938.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "advisor",
      url: "#",
      features: ["Crop recommendations", "Weather forecasts", "Risk assessment"],
      icon: Settings,
    },
    {
      id: 6,
      title: "Research Data Repository",
      description:
        "Centralized repository for sharing and accessing environmental research data.",
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "database",
      url: "#",
      features: ["Data sharing", "Version control", "Access management"],
      icon: Database,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Tools', count: tools.length },
    {
      id: 'dashboard',
      label: 'Dashboards',
      count: tools.filter((t) => t.category === 'dashboard').length,
    },
    {
      id: 'storymap',
      label: 'Story Maps',
      count: tools.filter((t) => t.category === 'storymap').length,
    },
    {
      id: 'monitoring',
      label: 'Monitoring',
      count: tools.filter((t) => t.category === 'monitoring').length,
    },
    {
      id: 'gis',
      label: 'GIS Tools',
      count: tools.filter((t) => t.category === 'gis').length,
    },
    {
      id: 'advisor',
      label: 'Advisors',
      count: tools.filter((t) => t.category === 'advisor').length,
    },
    {
      id: 'database',
      label: 'Databases',
      count: tools.filter((t) => t.category === 'database').length,
    },
  ];

  const filteredTools =
    activeTab === 'all'
      ? tools
      : tools.filter((tool) => tool.category === activeTab);

  // Keyboard navigation for tabs
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const currentIndex = categories.findIndex((c) => c.id === activeTab);
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % categories.length;
        setActiveTab(categories[nextIndex].id);
      } else if (e.key === 'ArrowLeft') {
        const prevIndex =
          (currentIndex - 1 + categories.length) % categories.length;
        setActiveTab(categories[prevIndex].id);
      }
    },
    [activeTab, categories]
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Tools</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Access our comprehensive suite of environmental monitoring tools,
              interactive dashboards, and data visualization platforms designed
              for researchers, policymakers, and the public.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section
        className="py-8 bg-white border-b"
        role="tablist"
        aria-label="Tool Categories"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                aria-pressed={activeTab === category.id}
                role="tab"
                tabIndex={activeTab === category.id ? 0 : -1}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === category.id
                    ? 'bg-blue-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="h-48 bg-gray-200 overflow-hidden relative">
                    <img
                      src={tool.image}
                      alt={tool.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{tool.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Key Features:
                      </h4>
                      <ul className="text-sm text-gray-600">
                        {tool.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center mb-1">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Access Tool
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Tool Embed */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured: Climate Data Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore real-time climate data from weather stations across Cambodia
            </p>
          </motion.div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center h-96 border-2 border-dashed border-gray-300 rounded-lg">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  Interactive Dashboard Embed
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Real-time climate monitoring interface would be embedded here
                </p>
                <button className="mt-4 px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Launch Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ArcGIS StoryMap Section */}
      <section>
        <ToolSlideShow/>
      </section>

      {/* Tool Usage Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-800">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Access & Registration
                </h3>
                <p className="text-gray-600">
                  Register for an account to access advanced features and save your work
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-800">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Explore & Analyze
                </h3>
                <p className="text-gray-600">
                  Use our interactive tools to explore data and perform your analysis
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-800">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Share & Collaborate
                </h3>
                <p className="text-gray-600">
                  Share your findings and collaborate with other researchers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
