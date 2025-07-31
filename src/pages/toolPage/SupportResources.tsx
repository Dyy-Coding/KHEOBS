import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Mail, FileText, HelpCircle, MessageCircle } from 'lucide-react';
interface Resource {
  name: string;
  description: string;
  type: 'pdf' | 'link' | 'email';
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}
interface SupportResourcesProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportResources: React.FC<SupportResourcesProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const supportResources: Resource[] = [
    {
      name: 'Complete User Guide',
      description: 'Comprehensive documentation covering all tools and features.',
      type: 'pdf',
      url: '/files/user-guide.pdf',
      icon: FileText
    },
    {
      name: 'Video Tutorials',
      description: 'Step-by-step video guides for getting started.',
      type: 'link',
      url: 'https://tutorials.kheobs.org',
      icon: ExternalLink
    },
    {
      name: 'Technical Support',
      description: 'Get help from our technical support team.',
      type: 'email',
      url: 'mailto:support@kheobs.org',
      icon: Mail
    },
    {
      name: 'FAQ Center',
      description: 'Find answers to commonly asked questions.',
      type: 'link',
      url: 'https://help.kheobs.org/faq',
      icon: HelpCircle
    },
    {
      name: 'Community Forum',
      description: 'Connect with other researchers and share experiences.',
      type: 'link',
      url: 'https://community.kheobs.org',
      icon: MessageCircle
    }
  ];

  const handleResourceClick = (resource: Resource) => {
    if (resource.type === 'pdf') {
      // Create a download link
      const link = document.createElement('a');
      link.href = resource.url;
      link.download = resource.name;
      link.click();
    } else if (resource.type === 'link') {
      window.open(resource.url, '_blank');
    } else if (resource.type === 'email') {
      window.location.href = resource.url;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Support Resources</h2>
              <p className="text-green-100">Find help and guidance for using our tools</p>
            </div>
            <button
              onClick={onClose}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors"
            >
              <span className="sr-only">Close</span>
              ×
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleResourceClick(resource)}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gray-100 rounded-full group-hover:bg-green-100 transition-colors">
                    <resource.icon className="w-6 h-6 text-gray-600 group-hover:text-green-600" />
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    {resource.type === 'pdf' && <Download className="w-4 h-4" />}
                    {resource.type === 'link' && <ExternalLink className="w-4 h-4" />}
                    {resource.type === 'email' && <Mail className="w-4 h-4" />}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {resource.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {resource.description}
                </p>

                <div className="mt-4 flex items-center text-sm text-green-600 group-hover:text-green-700">
                  {resource.type === 'pdf' && 'Download Resource'}
                  {resource.type === 'link' && 'Visit Resource'}
                  {resource.type === 'email' && 'Contact Support'}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Need More Help?</h3>
            <p className="text-blue-700 mb-4">
              If you can't find what you're looking for, our support team is here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-blue-900">Email Response:</span>
                <span className="text-blue-700 ml-2">Within 24 hours</span>
              </div>
              <div>
                <span className="font-medium text-blue-900">Office Hours:</span>
                <span className="text-blue-700 ml-2">Mon-Fri 8AM-5PM (UTC+7)</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SupportResources;