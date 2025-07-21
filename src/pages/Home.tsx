import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Users, BookOpen, MapPin, TrendingUp } from 'lucide-react';
import Slideshow from "./SlidesShow";
import LatestUpdate from "./LatestUpdate";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeInOut" },
};

interface AnimatedCounterProps {
  value: number;
  label: string;
  icon: IconType;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, label, icon: Icon }) => (
  <motion.div
    variants={itemVariants}
    className="text-center"
    whileHover={{ scale: 1.05 }}
  >
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow cursor-default">
      <Icon className="w-10 h-10 text-blue-800 mx-auto mb-4" />
      <motion.div
        className="text-4xl font-extrabold text-gray-900 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        {value}+
      </motion.div>
      <p className="text-gray-600 font-semibold tracking-wide">{label}</p>
    </div>
  </motion.div>
);

interface Stats {
  projects: number;
  publications: number;
  team: number;
  impact: number;
}

interface Project {
  title: string;
  description: string;
  image: string;
  status: "Ongoing" | "Published";
}

const Home: React.FC = () => {
  const [stats, setStats] = useState<Stats>({
    projects: 0,
    publications: 0,
    team: 0,
    impact: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        projects: 25,
        publications: 45,
        team: 12,
        impact: 1000,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const featuredProjects: Project[] = [
    {
      title: "Climate Change Adaptation in Rural Cambodia",
      description: "Developing sustainable solutions for agricultural communities facing climate challenges.",
      image: "https://i.pinimg.com/736x/a3/61/8a/a3618acd1654089a3103edbb4a1a2ff1.jpg",
      status: "Ongoing",
    },
    {
      title: "Water Resource Management",
      description: "Monitoring and preserving water quality in the Mekong River basin.",
      image:
        "https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Published",
    },
    {
      title: "Biodiversity Conservation",
      description:
        "Protecting endangered species and ecosystems in Cambodia's national parks.",
      image:
        "https://images.pexels.com/photos/1534609/pexels-photo-1534609.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Ongoing",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
<section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-red-700 text-white min-h-screen flex items-center overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 blur-sm"
    style={{
      backgroundImage:
        "url(https://i.pinimg.com/1200x/63/d9/31/63d9312343bc6d160e597b25c2abd43f.jpg)",
    }}
  ></div>

  {/* Overlay Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-900/70 to-red-900/70"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg leading-tight">
        <span className="block">Climate & Environment</span>
        <span className="block text-red-400">Research Lab Cambodia</span>
      </h1>
      <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200 drop-shadow">
        Empowering Cambodia through sustainable research, technology, and environmental advocacy.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <motion.a
          href="/research"
          className="bg-white text-blue-900 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all inline-flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Research
          <ChevronRight className="ml-2 w-5 h-5" />
        </motion.a>
        <motion.a
          href="/about"
          className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all inline-flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
      </div>
    </motion.div>
  </div>
</section>


      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-4 gap-10"
          >
            <AnimatedCounter value={stats.projects} label="Research Projects" icon={MapPin} />
            <AnimatedCounter value={stats.publications} label="Publications" icon={BookOpen} />
            <AnimatedCounter value={stats.team} label="Team Members" icon={Users} />
            <AnimatedCounter value={stats.impact} label="Community Impact" icon={TrendingUp} />
          </motion.div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Featured Research</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover our latest research initiatives addressing critical environmental challenges in Cambodia.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, boxShadow: "0 20px 25px rgba(0,0,0,0.15)" }}
                className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-shadow"
              >
                <div className="h-52 bg-gray-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Ongoing"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                  <Link
                    to="/research"
                    className="text-blue-800 hover:text-blue-600 font-semibold inline-flex items-center transition-colors"
                  >
                    Learn More
                    <ChevronRight className="ml-1 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
  className="sticky top-0 h-screen w-full flex items-center justify-center bg-black z-0"
  initial={{ scale: 1, filter: "brightness(0.8)" }}
  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
>
  <iframe
    className="w-[98%] h-[100%] border-none rounded-lg shadow-xl"
    src="https://data.opendevelopmentmekong.net/odm-short-url/496ba301-2c7d-470e-9b88-924530c4cdd6"
    allowFullScreen
  />
</motion.section>

      {/* Fullscreen Slideshow Section */}
      <section className="relative w-screen h-screen z-20">
        <Slideshow />
      </section>

      <section className="relative z-20">
        <LatestUpdate />
      </section>

      {/* Call to Action */}
      <motion.section
        className="py-20 bg-gradient-to-r from-blue-800 to-red-600 text-white relative z-20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Collaborate with us to create sustainable solutions for Cambodia's environmental challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.Link
                to="/contact"
                className="bg-white text-blue-900 px-10 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl transition-shadow inline-flex items-center justify-center"
                whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(255,255,255,0.8)" }}
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: ["0 0 0 rgba(255,255,255,0)", "0 0 15px rgba(255,255,255,0.9)", "0 0 0 rgba(255,255,255,0)"]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                Get Involved
              </motion.Link>
              <motion.Link
                to="/publications"
                className="border-2 border-white text-white px-10 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center shadow-md"
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
              >
                View Publications
              </motion.Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
