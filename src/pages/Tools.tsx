import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Monitor, Map, BarChart3, Database, Globe, Settings, Lock } from 'lucide-react';
import ClimateDashboard from './ClimateDashboard';
import ToolsAccess from './ToolsAccess';
import ToolSlideShow from "./ToolSlideShow";

const Tools = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState({ name: '', type: '' });

  const tools = [
    {
      id: 1,
      title: "Climate Data Dashboard",
      description: "Interactive dashboard for monitoring real-time climate data from weather stations across Cambodia.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "dashboard",
      url: "#",
      features: ["Real-time data", "Historical analysis", "Export capabilities"],
      icon: BarChart3
    },
    {
      id: 2,
      title: "Environmental StoryMap",
      description: "Interactive story map showcasing environmental changes and conservation efforts in Cambodia.",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "storymap",
      url: "#",
      features: ["Interactive maps", "Story narratives", "Media integration"],
      icon: Map,
      requiresAccess: true
    },
    {
      id: 3,
      title: "Water Quality Monitoring System",
      description: "Comprehensive system for tracking water quality parameters in rivers and lakes.",
      image: "https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "monitoring",
      url: "#",
      features: ["Sensor integration", "Alert system", "Data visualization"],
      icon: Monitor,
      requiresAccess: true
    },
    {
      id: 4,
      title: "Biodiversity Assessment Tool",
      description: "GIS-based tool for assessing biodiversity patterns and conservation priorities.",
      image: "https://images.pexels.com/photos/1534609/pexels-photo-1534609.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "gis",
      url: "#",
      features: ["Species mapping", "Habitat analysis", "Conservation planning"],
      icon: Globe,
      requiresAccess: true
    },
    {
      id: 5,
      title: "Agricultural Climate Advisor",
      description: "Decision support tool for farmers to adapt to climate change impacts.",
      image: "https://images.pexels.com/photos/2886938/pexels-photo-2886938.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "advisor",
      url: "#",
      features: ["Crop recommendations", "Weather forecasts", "Risk assessment"],
      icon: Settings,
      requiresAccess: true
    },
    {
      id: 6,
      title: "Research Data Repository",
      description: "Centralized repository for sharing and accessing environmental research data.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "database",
      url: "#",
      features: ["Data sharing", "Version control", "Access management"],
      icon: Database,
      requiresAccess: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Tools', count: tools.length },
    { id: 'dashboard', label: 'Dashboards', count: tools.filter(t => t.category === 'dashboard').length },
    { id: 'storymap', label: 'Story Maps', count: tools.filter(t => t.category === 'storymap').length },
    { id: 'monitoring', label: 'Monitoring', count: tools.filter(t => t.category === 'monitoring').length },
    { id: 'gis', label: 'GIS Tools', count: tools.filter(t => t.category === 'gis').length },
    { id: 'advisor', label: 'Advisors', count: tools.filter(t => t.category === 'advisor').length },
    { id: 'database', label: 'Databases', count: tools.filter(t => t.category === 'database').length }
  ];

  const handleToolAccess = (tool: any) => {
    if (tool.id === 1) {
      // Climate Dashboard - direct access
      setIsDashboardOpen(true);
    } else if (tool.requiresAccess) {
      // Other tools - require access process
      setSelectedTool({ name: tool.title, type: tool.category });
      setIsAccessModalOpen(true);
    } else {
      // Direct link tools
      window.open(tool.url, '_blank');
    }
  };

  const filteredTools = activeTab === 'all' ? tools : tools.filter(tool => tool.category === activeTab);

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

      {/* Access Process Info */}
      <section className="py-8 bg-blue-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Lock className="w-6 h-6 text-blue-600 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Secure Tool Access</h3>
                  <p className="text-gray-600 text-sm">Some tools require authentication and access approval for data security</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Public Access</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Requires Login</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
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
            {filteredTools.map((tool, index) => (
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <tool.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  {tool.requiresAccess && (
                    <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Lock className="w-3 h-3 mr-1" />
                      Login Required
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.title}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center mb-1">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button
                    onClick={() => handleToolAccess(tool)}
                    className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors w-full justify-center ${
                      tool.requiresAccess 
                        ? 'bg-blue-800 text-white hover:bg-blue-700' 
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {tool.requiresAccess ? (
                      <>
                        <Lock className="mr-2 w-4 h-4" />
                        Request Access
                      </>
                    ) : (
                      <>
                        Access Tool
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Access Process Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tool Access Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to access our research tools
            </p>
          </motion.div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-800">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Authentication</h3>
                <p className="text-gray-600 text-sm">
                  Login with existing account or register as a new user
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-800">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Access Level</h3>
                <p className="text-gray-600 text-sm">
                  Select your user type: Researcher, Student, or Public
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-800">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Agreement</h3>
                <p className="text-gray-600 text-sm">
                  Review and accept terms and conditions for tool usage
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-800">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tool Access</h3>
                <p className="text-gray-600 text-sm">
                  Launch the tool and start your research work
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tool Embed */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured: Climate Data Dashboard</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore real-time climate data from weather stations across Cambodia
            </p>
          </motion.div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center h-96 border-2 border-dashed border-gray-300 rounded-lg">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Climate Data Dashboard</h3>
                <p className="text-gray-600 mb-4">Real-time climate monitoring interface</p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4 max-w-md mx-auto">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">4</div>
                      <div className="text-gray-600">Stations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">Live</div>
                      <div className="text-gray-600">Data</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-600">32°C</div>
                      <div className="text-gray-600">Current</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">24/7</div>
                      <div className="text-gray-600">Monitoring</div>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsDashboardOpen(true)}
                  className="mt-4 px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Launch Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ArcGIS StoryMap Section */}
       <section className="py-16 bg-gray-50">
          <ToolSlideShow/>
       </section>
     

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
    </div>
  );
};

export default Tools;