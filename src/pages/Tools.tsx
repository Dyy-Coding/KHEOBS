import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Monitor, 
  Map, 
  BarChart3, 
  Database, 
  Globe, 
  Settings, 
  Lock,
  Filter,
  Search,
  HelpCircle
} from 'lucide-react';
import ClimateDashboard from './ClimateDashboard';
import ToolsAccess from './ToolsAccess';
import ToolSlideShow from './ToolSlideShow';
import SupportResources from './SupportResources';
import { Tool } from '../types';

const Tools = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState({ name: '', type: '' });

  const tools: Tool[] = [
    {
      id: 1,
      title: "Climate Data Dashboard",
      description: "Interactive dashboard for monitoring real-time climate data from weather stations across Cambodia with advanced analytics and forecasting capabilities.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "dashboard",
      url: "#",
      features: ["Real-time data", "Historical analysis", "Export capabilities", "Forecasting models"],
      icon: BarChart3,
      status: 'active'
    },
    {
      id: 2,
      title: "Environmental StoryMap",
      description: "Interactive story map showcasing environmental changes and conservation efforts in Cambodia through compelling visual narratives.",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "storymap",
      url: "#",
      features: ["Interactive maps", "Story narratives", "Media integration", "Timeline views"],
      icon: Map,
      requiresAccess: true,
      status: 'active'
    },
    {
      id: 3,
      title: "Water Quality Monitoring System",
      description: "Comprehensive system for tracking water quality parameters in rivers and lakes with sensor integration and automated alerts.",
      image: "https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "monitoring",
      url: "#",
      features: ["Sensor integration", "Alert system", "Data visualization", "Trend analysis"],
      icon: Monitor,
      requiresAccess: true,
      status: 'active'
    },
    {
      id: 4,
      title: "Biodiversity Assessment Tool",
      description: "GIS-based tool for assessing biodiversity patterns and conservation priorities using advanced spatial analysis techniques.",
      image: "https://images.pexels.com/photos/1534609/pexels-photo-1534609.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "gis",
      url: "#",
      features: ["Species mapping", "Habitat analysis", "Conservation planning", "Threat assessment"],
      icon: Globe,
      requiresAccess: true,
      status: 'active'
    },
    {
      id: 5,
      title: "Agricultural Climate Advisor",
      description: "Decision support tool for farmers to adapt to climate change impacts with personalized recommendations and risk assessments.",
      image: "https://images.pexels.com/photos/2886938/pexels-photo-2886938.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "advisor",
      url: "#",
      features: ["Crop recommendations", "Weather forecasts", "Risk assessment", "Market insights"],
      icon: Settings,
      requiresAccess: true,
      status: 'coming-soon'
    },
    {
      id: 6,
      title: "Research Data Repository",
      description: "Centralized repository for sharing and accessing environmental research data with version control and collaboration features.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "database",
      url: "#",
      features: ["Data sharing", "Version control", "Access management", "API endpoints"],
      icon: Database,
      requiresAccess: true,
      status: 'active'
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

  const handleToolAccess = (tool: Tool) => {
    if (tool.status === 'coming-soon') {
      alert('This tool is coming soon! Stay tuned for updates.');
      return;
    }
    
    if (tool.id === 1) {
      setIsDashboardOpen(true);
    } else if (tool.requiresAccess) {
      setSelectedTool({ name: tool.title, type: tool.category });
      setIsAccessModalOpen(true);
    } else {
      window.open(tool.url, '_blank');
    }
  };

  const filteredTools = tools.filter(tool => {
    const matchesCategory = activeTab === 'all' || tool.category === activeTab;
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return { color: 'bg-green-100 text-green-800', text: 'Active' };
      case 'maintenance':
        return { color: 'bg-yellow-100 text-yellow-800', text: 'Maintenance' };
      case 'coming-soon':
        return { color: 'bg-blue-100 text-blue-800', text: 'Coming Soon' };
      default:
        return { color: 'bg-gray-100 text-gray-800', text: 'Unknown' };
    }
  };

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Research Tools
            </h1>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Access our comprehensive suite of environmental monitoring tools, 
              interactive dashboards, and data visualization platforms designed 
              for researchers, policymakers, and the public.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4">
              <button
                onClick={() => setIsSupportModalOpen(true)}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg transition-colors flex items-center"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                Need Help?
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Access Process Info */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Lock className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Secure Tool Access</h3>
                  <p className="text-gray-600 text-sm">Some tools require authentication and access approval for data security</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Public Access</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Requires Login</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === category.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTools.length === 0 ? (
            <div className="text-center py-12">
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No tools found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTools.map((tool, index) => {
                const statusBadge = getStatusBadge(tool.status || 'active');
                
                return (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200"
                  >
                    <div className="h-52 bg-gray-200 overflow-hidden relative">
                      <img
                        src={tool.image}
                        alt={tool.title}
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                          e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Image+Unavailable';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/50 transition-all duration-300"></div>
                      
                      <div className="absolute top-3 left-3 flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusBadge.color}`}>
                          {statusBadge.text}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        {tool.requiresAccess && (
                          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Lock className="w-3 h-3 mr-1" />
                            Login Required
                          </div>
                        )}
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white bg-opacity-90 p-4 rounded-full">
                          <tool.icon className="w-8 h-8 text-blue-600" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {tool.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {tool.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button
                        onClick={() => handleToolAccess(tool)}
                        disabled={tool.status === 'maintenance'}
                        className={`inline-flex items-center px-4 py-3 rounded-lg transition-all w-full justify-center font-medium ${
                          tool.status === 'maintenance'
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : tool.status === 'coming-soon'
                            ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                            : tool.requiresAccess 
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg' 
                            : 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg'
                        }`}
                      >
                        {tool.status === 'maintenance' ? (
                          'Under Maintenance'
                        ) : tool.status === 'coming-soon' ? (
                          'Coming Soon'
                        ) : tool.requiresAccess ? (
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
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Tool Access Process Guide */}
      <section className="py-16 bg-white">
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
          
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: 'Authentication', desc: 'Login with existing account or register as a new user', color: 'blue' },
                { step: 2, title: 'Access Level', desc: 'Select your user type: Researcher, Student, or Public', color: 'green' },
                { step: 3, title: 'Agreement', desc: 'Review and accept terms and conditions for tool usage', color: 'purple' },
                { step: 4, title: 'Tool Access', desc: 'Launch the tool and start your research work', color: 'red' }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}>
                    <span className={`text-2xl font-bold text-${item.color}-600`}>{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured: Climate Data Dashboard</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore real-time climate data from weather stations across Cambodia
            </p>
          </motion.div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="flex items-center justify-center h-96 border-2 border-dashed border-gray-300 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="text-center">
                <div className="bg-blue-100 p-6 rounded-full mb-6 mx-auto w-24 h-24 flex items-center justify-center">
                  <BarChart3 className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Climate Data Dashboard</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">Real-time climate monitoring interface with advanced analytics</p>
                <div className="bg-white rounded-xl p-6 mb-6 max-w-lg mx-auto shadow-sm border border-gray-200">
                  <div className="grid grid-cols-2 gap-6 text-sm">
                    {[
                      { label: 'Stations', value: '4', color: 'blue' },
                      { label: 'Data', value: 'Live', color: 'green' },
                      { label: 'Current', value: '32°C', color: 'red' },
                      { label: 'Monitoring', value: '24/7', color: 'purple' }
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className={`text-xl font-bold text-${stat.color}-600 mb-1`}>{stat.value}</div>
                        <div className="text-gray-600 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => setIsDashboardOpen(true)}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
                >
                  Launch Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ArcGIS StoryMap Section */}
      <section className="py-16 bg-white">
        <ToolSlideShow />
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

      {/* Support Resources Modal */}
      <SupportResources
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />
    </div>
  );
};

export default Tools;