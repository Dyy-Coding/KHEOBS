import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  FolderOpen,
  BookOpen,
  Users,
  Globe,
} from 'lucide-react';
import LatestUpdate from './LatestUpdate';
import HeroSection from './HeroSection';

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
} as const;

interface AnimatedCounterProps {
  value: number;
  label: string;
  icon: IconType;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  label,
  icon: Icon,
}) => (
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
  status: 'Ongoing' | 'Published';
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
      title: 'Climate Change Adaptation in Rural Cambodia',
      description:
        'Developing sustainable solutions for agricultural communities facing climate challenges.',
      image:
        'https://i.pinimg.com/736x/a3/61/8a/a3618acd1654089a3103edbb4a1a2ff1.jpg',
      status: 'Ongoing',
    },
    {
      title: 'Water Resource Management',
      description:
        'Monitoring and preserving water quality in the Mekong River basin.',
      image:
        'https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'Published',
    },
    {
      title: 'Biodiversity Conservation',
      description:
        "Protecting endangered species and ecosystems in Cambodia's national parks.",
      image:
        'https://images.pexels.com/photos/1534609/pexels-photo-1534609.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'Ongoing',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section>
        <HeroSection />
      </section>

      {/* Animated Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            <AnimatedCounter
              value={stats.projects}
              label="Projects"
              icon={FolderOpen}
            />
            <AnimatedCounter
              value={stats.publications}
              label="Publications"
              icon={BookOpen}
            />
            <AnimatedCounter
              value={stats.team}
              label="Team Members"
              icon={Users}
            />
            <AnimatedCounter
              value={stats.impact}
              label="People Impacted"
              icon={Globe}
            />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured Research
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover our latest research initiatives addressing critical
              environmental challenges in Cambodia.
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
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 20px 25px rgba(0,0,0,0.15)',
                }}
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
                        project.status === 'Ongoing'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>
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

      {/* Latest Update */}
      <section className="relative z-20">
        <LatestUpdate />
      </section>
    </div>
  );
};

export default Home;
