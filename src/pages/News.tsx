import React, { useState } from 'react';
import { Calendar, Clock, Mail, ArrowRight } from 'lucide-react';
import { newsArticles, events, categories } from './DataNews';
import CategoryFilterNew from './CategoryFilterNew';
import HeroCarousel from './HeroCarousel';

const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredByCategory =
    selectedCategory === 'all'
      ? newsArticles
      : newsArticles.filter((article) => article.category === selectedCategory);

  const filteredArticles = filteredByCategory.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 border-b border-gray-200 pb-6">
          <h1 className="text-5xl font-extrabold text-gray-900">Today's Headlines</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Breaking news, latest stories, and expert insights from Cambodia
          </p>
        </header>

        {/* Featured Image Section */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-16 shadow-lg">
          <HeroCarousel />
        </div>

        {/* Filter & Search Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 max-w-5xl mx-auto">
          <div className="w-full md:w-[340px]">
            <input
              type="search"
              placeholder="Search news articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              aria-label="Search news articles"
            />
          </div>
          <div className="w-full md:w-auto">
            <CategoryFilterNew
              categories={categories}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
        </div>

        {/* Main Content */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Articles Section */}
          <section className="lg:col-span-2 space-y-8">
            {filteredArticles.length === 0 && (
              <p className="text-center text-gray-500 mt-20 text-lg">No articles found.</p>
            )}

            {filteredArticles.map((article) => (
              <a
                key={article.id}
                href={article.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <article
                  className="bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                      {article.category}
                    </span>
                    <h2 className="mt-2 text-2xl font-bold text-gray-900 leading-tight">
                      {article.title}
                    </h2>
                    <div className="mt-2 text-sm text-gray-500 flex gap-4 items-center">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                    <p className="mt-4 text-gray-700 text-base line-clamp-3">
                      {article.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center text-red-600 hover:underline text-sm font-semibold">
                      View on Facebook <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </article>
              </a>
            ))}
          </section>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-24">
            <div className="bg-white p-6 shadow-md rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Upcoming Events</h3>
              <ul className="space-y-4">
                {events.map((event, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="text-red-600 font-bold whitespace-nowrap">{event.date}</div>
                    <div className="text-gray-800 leading-snug">{event.title}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 shadow-md rounded-xl text-center">
              <Mail className="w-10 h-10 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-sm opacity-90 mb-4">
                Get breaking news and in-depth analysis in your inbox every week.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border-none text-black mb-3"
              />
              <button className="w-full py-2 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition-all">
                Subscribe
              </button>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default NewsPage;
