import React from 'react';
import { Calendar, Clock, Tag, ArrowRight, Bell, Users, MapPin } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      title: "New Air Quality Monitoring Station Launched in Siem Reap",
      category: "Environment",
      date: "January 18, 2025",
      readTime: "3 min read",
      author: "Environmental Health Team",
      excerpt: "Advanced monitoring equipment will track PM2.5, ozone, and other pollutants to better understand air quality patterns affecting tourist areas and local communities.",
      image: "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg",
      featured: true,
      tags: ["Air Quality", "Siem Reap", "Environmental Monitoring"]
    },
    {
      title: "Traditional Medicine Research Receives International Recognition",
      category: "Health",
      date: "January 15, 2025", 
      readTime: "5 min read",
      author: "Dr. Sophea Chan",
      excerpt: "Cambodian researchers' work on traditional herbal remedies published in leading international journal, highlighting the potential of indigenous medicine.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
      featured: false,
      tags: ["Traditional Medicine", "Research", "International Recognition"]
    },
    {
      title: "Community Garden Initiative Expands to 50 Villages",
      category: "Community",
      date: "January 12, 2025",
      readTime: "4 min read", 
      author: "Kong Sreypov",
      excerpt: "Successful pilot program promoting food security and community health through sustainable gardening practices now reaches thousands of families.",
      image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg",
      featured: false,
      tags: ["Community Health", "Food Security", "Rural Development"]
    },
    {
      title: "Mobile Health Clinics Report 40% Increase in Rural Access",
      category: "Health",
      date: "January 10, 2025",
      readTime: "6 min read",
      author: "Mobile Health Team",
      excerpt: "Strategic placement of mobile clinics using GIS data has significantly improved healthcare access in remote areas of Cambodia.",
      image: "https://images.pexels.com/photos/8513189/pexels-photo-8513189.jpeg",
      featured: false,
      tags: ["Mobile Health", "Rural Access", "GIS Technology"]
    },
    {
      title: "Student Research Competition Winners Announced",
      category: "Education",
      date: "January 8, 2025",
      readTime: "4 min read",
      author: "Academic Affairs",
      excerpt: "Outstanding student projects on environmental health and community wellness receive recognition and funding for expansion.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
      featured: false,
      tags: ["Student Research", "Competition", "Awards"]
    }
  ];

  const events = [
    {
      title: "Cambodia Health Research Conference 2025",
      date: "March 15-17, 2025",
      location: "Phnom Penh",
      type: "Conference",
      description: "Annual gathering of health researchers, policymakers, and community leaders to discuss latest findings and future directions.",
      registrationOpen: true
    },
    {
      title: "GIS Workshop: Spatial Analysis for Health Data",
      date: "February 20, 2025",
      location: "Siem Reap University",
      type: "Workshop",
      description: "Hands-on training workshop for students and researchers on using GIS tools for health data analysis and visualization.",
      registrationOpen: true
    },
    {
      title: "Community Health Fair",
      date: "February 5, 2025",
      location: "Battambang Province",
      type: "Community Event",
      description: "Free health screenings, educational sessions, and traditional medicine demonstrations for rural communities.",
      registrationOpen: false
    }
  ];

  const categories = ["All", "Health", "Environment", "Community", "Education", "Research"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredArticles = selectedCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Health': return 'bg-red-100 text-red-800';
      case 'Environment': return 'bg-green-100 text-green-800';
      case 'Community': return 'bg-blue-100 text-blue-800';
      case 'Education': return 'bg-purple-100 text-purple-800';
      case 'Research': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEventTypeColor = (type: string) => {
    switch(type) {
      case 'Conference': return 'bg-indigo-100 text-indigo-800';
      case 'Workshop': return 'bg-green-100 text-green-800';
      case 'Community Event': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              News & Events
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay updated with the latest developments in Cambodia's health and environmental research, 
              community initiatives, and upcoming events.
            </p>
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-2">
                <Bell className="w-6 h-6 text-indigo-600" />
                <span className="text-gray-700 font-medium">Weekly Updates</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-indigo-600" />
                <span className="text-gray-700 font-medium">Upcoming Events</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Article */}
            {filteredArticles.length > 0 && filteredArticles[0].featured && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Story</h2>
                <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src={filteredArticles[0].image}
                    alt={filteredArticles[0].title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getCategoryColor(filteredArticles[0].category)}`}>
                        {filteredArticles[0].category}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{filteredArticles[0].date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{filteredArticles[0].readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {filteredArticles[0].title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {filteredArticles[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">By {filteredArticles[0].author}</span>
                      <button className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center">
                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            )}

            {/* News Articles */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest News</h2>
              <div className="space-y-8">
                {filteredArticles.slice(filteredArticles[0]?.featured ? 1 : 0).map((article, index) => (
                  <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getCategoryColor(article.category)}`}>
                            {article.category}
                          </span>
                          <div className="flex items-center space-x-2 text-gray-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{article.date}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-indigo-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center space-x-2 text-gray-500 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-5 h-5 text-indigo-600 mr-2" />
                Upcoming Events
              </h3>
              <div className="space-y-6">
                {events.map((event, index) => (
                  <div key={index} className="border-l-4 border-indigo-400 pl-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getEventTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                      {event.registrationOpen && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                          Registration Open
                        </span>
                      )}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                    {event.registrationOpen && (
                      <button className="text-indigo-600 font-medium text-sm hover:text-indigo-700">
                        Register Now →
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Stay Informed
              </h3>
              <p className="text-indigo-100 mb-4 text-sm">
                Get weekly updates on health research, community initiatives, and upcoming events.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg placeholder-white/70 text-white focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
                <button className="w-full bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg hover:bg-indigo-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Tag className="w-5 h-5 text-indigo-600 mr-2" />
                Popular Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Public Health", "Environmental Monitoring", "Community Health",
                  "Traditional Medicine", "GIS Technology", "Rural Development",
                  "Air Quality", "Water Safety", "Student Research"
                ].map((tag, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;