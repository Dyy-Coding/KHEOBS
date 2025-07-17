import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, MapPin, ExternalLink, X } from 'lucide-react';

const Research = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Climate Change Adaptation in Rural Cambodia",
      description: "Developing sustainable solutions for agricultural communities facing climate challenges through innovative farming techniques and water management systems.",
      image: "https://images.pexels.com/photos/2886938/pexels-photo-2886938.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Ongoing",
      year: "2023-2025",
      location: "Kampong Thom Province",
      team: ["Dr. Sophea Chan", "Dr. Ratha Pich", "Ms. Srey Leak"],
      funding: "World Bank",
      tags: ["Climate", "Agriculture", "Community"]
    },
    {
      id: 2,
      title: "Water Resource Management in Mekong Basin",
      description: "Monitoring and preserving water quality in the Mekong River basin through advanced sensor networks and predictive modeling.",
      image: "https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Published",
      year: "2021-2023",
      location: "Mekong River Basin",
      team: ["Dr. Ratha Pich", "Dr. Virak Nhem"],
      funding: "ASEAN Climate Fund",
      tags: ["Water", "Monitoring", "Technology"]
    },
    {
      id: 3,
      title: "Biodiversity Conservation in National Parks",
      description: "Protecting endangered species and ecosystems in Cambodia's national parks through innovative conservation strategies.",
      image: "https://images.pexels.com/photos/1534609/pexels-photo-1534609.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Ongoing",
      year: "2022-2024",
      location: "Virachey National Park",
      team: ["Dr. Sophea Chan", "Ms. Srey Leak"],
      funding: "WWF Cambodia",
      tags: ["Biodiversity", "Conservation", "Wildlife"]
    },
    {
      id: 4,
      title: "Urban Heat Island Mitigation",
      description: "Studying urban heat effects in Phnom Penh and developing green infrastructure solutions for temperature regulation.",
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Completed",
      year: "2020-2022",
      location: "Phnom Penh",
      team: ["Dr. Virak Nhem", "Dr. Sophea Chan"],
      funding: "Ministry of Environment",
      tags: ["Urban", "Climate", "Infrastructure"]
    },
    {
      id: 5,
      title: "Renewable Energy Assessment",
      description: "Evaluating solar and wind energy potential across Cambodia for sustainable energy transition planning.",
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Ongoing",
      year: "2023-2025",
      location: "Nationwide",
      team: ["Dr. Virak Nhem", "Dr. Ratha Pich"],
      funding: "ADB Energy Initiative",
      tags: ["Energy", "Renewable", "Assessment"]
    },
    {
      id: 6,
      title: "Coastal Erosion Monitoring",
      description: "Assessing coastal erosion patterns and developing protection strategies for vulnerable coastal communities.",
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Published",
      year: "2019-2021",
      location: "Koh Kong Province",
      team: ["Dr. Ratha Pich", "Ms. Srey Leak"],
      funding: "GEF Small Grants",
      tags: ["Coastal", "Erosion", "Protection"]
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = filterStatus === 'all' || project.status.toLowerCase() === filterStatus.toLowerCase();
    
    return matchesSearch && matchesFilter;
  });

  const Modal = ({ project, onClose }: { project: any, onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="h-64 bg-gray-200 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                project.status === 'Ongoing' ? 'bg-green-100 text-green-800' :
                project.status === 'Published' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {project.status}
              </span>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="text-sm">{project.year}</span>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{project.location}</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Funding</h3>
                <p className="text-gray-600">{project.funding}</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Team Members</h3>
              <div className="flex flex-wrap gap-2">
                {project.team.map((member: string, index: number) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {member}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string, index: number) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="flex items-center px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Details
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Download Report
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Projects</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our comprehensive research initiatives addressing critical environmental 
              challenges in Cambodia through innovative solutions and community partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="ongoing">Ongoing</option>
                <option value="published">Published</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Ongoing' ? 'bg-green-100 text-green-800' :
                      project.status === 'Published' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{project.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-gray-500 text-xs">+{project.tags.length - 3} more</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default Research;