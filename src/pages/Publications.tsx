import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Download, ExternalLink, Calendar, Users } from 'lucide-react';
import { publications } from './publicationsData';

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('all');
  const [filterType, setFilterType] = useState('all');

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesYear = filterYear === 'all' || pub.year.toString() === filterYear;
    const matchesType = filterType === 'all' || pub.type === filterType;

    return matchesSearch && matchesYear && matchesType;
  });

  const years = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a);
  const types = [...new Set(publications.map(pub => pub.type))];

  const totalCitations = publications.reduce((acc, pub) => acc + pub.citations, 0);
  const thisYear = new Date().getFullYear();
  const publicationsThisYear = publications.filter(pub => pub.year === thisYear).length;
  const journalPartners = new Set(publications.map(pub => pub.journal)).size;

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Publications</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our research outputs and scientific contributions to climate science 
              and environmental monitoring in Cambodia and the region.
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
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredPublications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        publication.type === 'Journal Article' ? 'bg-blue-100 text-blue-800' :
                        publication.type === 'Conference Paper' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {publication.type}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{publication.year}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{publication.title}</h3>

                    <div className="flex items-center text-gray-600 mb-2">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-sm">{publication.authors.join(', ')}</span>
                    </div>

                    <p className="text-blue-700 font-medium mb-3">{publication.journal}</p>

                    <p className="text-gray-700 mb-4 line-clamp-3">{publication.abstract}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>DOI: {publication.doi}</span>
                        <span>Citations: {publication.citations}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <a href={publication.pdfUrl} target="_blank" rel="noopener noreferrer"
                          className="flex items-center px-3 py-1 text-blue-700 border border-blue-700 rounded hover:bg-blue-50 transition-colors">
                          <Download className="w-4 h-4 mr-1" />
                          PDF
                        </a>
                        <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer"
                          className="flex items-center px-3 py-1 text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Publication Statistics</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-800 mb-2">{publications.length}</div>
              <p className="text-gray-600">Total Publications</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">{publicationsThisYear}</div>
              <p className="text-gray-600">This Year</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{totalCitations}</div>
              <p className="text-gray-600">Total Citations</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{journalPartners}</div>
              <p className="text-gray-600">Journal Partners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;