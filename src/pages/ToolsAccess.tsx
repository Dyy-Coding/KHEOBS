import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Lock, 
  Mail, 
  Building, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Download,
  Eye,
  X,
  AlertCircle,
  Shield
} from 'lucide-react';

interface ToolsAccessProps {
  isOpen: boolean;
  onClose: () => void;
  toolName: string;
  toolType: string;
}

const ToolsAccess: React.FC<ToolsAccessProps> = ({ isOpen, onClose, toolName, toolType }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'guest' | 'researcher' | 'student' | 'public'>('guest');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    organization: '',
    purpose: '',
    agreeToTerms: false
  });

  const steps = [
    { id: 1, title: 'Authentication', description: 'Login or Register' },
    { id: 2, title: 'Access Level', description: 'Select User Type' },
    { id: 3, title: 'Tool Agreement', description: 'Terms & Conditions' },
    { id: 4, title: 'Tool Access', description: 'Launch Tool' }
  ];

  const userTypes = [
    {
      id: 'researcher',
      title: 'Researcher/Academic',
      description: 'Full access to all tools and data export capabilities',
      features: ['Full data access', 'Export capabilities', 'API access', 'Collaboration tools'],
      icon: FileText,
      color: 'blue'
    },
    {
      id: 'student',
      title: 'Student/Intern',
      description: 'Educational access with guided tutorials',
      features: ['Educational content', 'Guided tutorials', 'Limited data access', 'Learning resources'],
      icon: User,
      color: 'green'
    },
    {
      id: 'public',
      title: 'Public User',
      description: 'Basic access to public datasets and visualizations',
      features: ['Public datasets', 'Basic visualizations', 'Educational content', 'News updates'],
      icon: Eye,
      color: 'purple'
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login process
    setTimeout(() => {
      setIsLoggedIn(true);
      setCurrentStep(2);
    }, 1000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration process
    setTimeout(() => {
      setIsLoggedIn(true);
      setCurrentStep(2);
    }, 1000);
  };

  const handleUserTypeSelection = (type: string) => {
    setUserType(type as any);
    setCurrentStep(3);
  };

  const handleAgreement = () => {
    if (formData.agreeToTerms) {
      setCurrentStep(4);
    }
  };

  const handleToolLaunch = () => {
    // Simulate tool launch
    alert(`Launching ${toolName}...`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-6 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Tool Access Portal</h2>
              <p className="text-blue-100">Accessing: {toolName}</p>
            </div>
            <button
              onClick={onClose}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step.id 
                    ? 'bg-blue-800 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <span className="font-semibold">{step.id}</span>
                  )}
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{step.title}</p>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-gray-400 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6">
          {/* Step 1: Authentication */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Authentication Required</h3>
                <p className="text-gray-600">Please login or register to access research tools</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Login Form */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Existing User</h4>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="password"
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Login
                    </button>
                  </form>
                </div>

                {/* Registration Form */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">New User</h4>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({...formData, organization: e.target.value})}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="University, Research Institute, etc."
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Access Level Selection */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Select Access Level</h3>
                <p className="text-gray-600">Choose the access level that best describes your use case</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {userTypes.map((type) => (
                  <div
                    key={type.id}
                    onClick={() => handleUserTypeSelection(type.id)}
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all hover:shadow-lg ${
                      userType === type.id 
                        ? `border-${type.color}-500 bg-${type.color}-50` 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-center">
                      <div className={`w-12 h-12 bg-${type.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <type.icon className={`w-6 h-6 text-${type.color}-600`} />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h4>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                      <ul className="text-sm text-gray-500 space-y-1">
                        {type.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Terms and Agreement */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Terms & Conditions</h3>
                <p className="text-gray-600">Please review and accept the terms for using {toolName}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg max-h-64 overflow-y-auto">
                <h4 className="font-semibold text-gray-900 mb-3">Data Usage Agreement</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>By accessing this tool, you agree to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Use the data for research and educational purposes only</li>
                    <li>Properly cite KHEOBS Lab in any publications or presentations</li>
                    <li>Not redistribute raw data without explicit permission</li>
                    <li>Respect intellectual property rights of the research team</li>
                    <li>Report any technical issues or data inconsistencies</li>
                  </ul>
                  
                  <h5 className="font-semibold mt-4">Data Privacy</h5>
                  <p>Your usage data may be collected for improving tool performance and understanding user needs. Personal information will not be shared with third parties.</p>
                  
                  <h5 className="font-semibold mt-4">Disclaimer</h5>
                  <p>While we strive for accuracy, KHEOBS Lab makes no warranties about the completeness or reliability of the data provided through this tool.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="agreeTerms" className="text-sm text-gray-700">
                  I have read and agree to the terms and conditions
                </label>
              </div>

              <button
                onClick={handleAgreement}
                disabled={!formData.agreeToTerms}
                className="w-full bg-blue-800 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Accept and Continue
              </button>
            </motion.div>
          )}

          {/* Step 4: Tool Access */}
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-6">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Access Granted</h3>
                <p className="text-gray-600">You now have access to {toolName}</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">Access Level: {userType.charAt(0).toUpperCase() + userType.slice(1)}</h4>
                    <p className="text-green-700 text-sm">
                      You have been granted {userType} level access to this tool. 
                      Your session will remain active for 24 hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Quick Start Guide</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Navigate using the toolbar at the top</li>
                    <li>• Use filters to refine your data view</li>
                    <li>• Export data using the download button</li>
                    <li>• Contact support for technical assistance</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Support Resources</h4>
                  <div className="space-y-2">
                    <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download User Manual
                    </button>
                    <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                      <FileText className="w-4 h-4 mr-2" />
                      View Tutorial Videos
                    </button>
                    <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleToolLaunch}
                  className="flex-1 bg-blue-800 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Launch {toolName}
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ToolsAccess;