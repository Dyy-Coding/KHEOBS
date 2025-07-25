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
  Shield,
  ExternalLink,
  Play,
  Clock,
  Globe
} from 'lucide-react';
import { ToolsAccessProps, UserType, FormData } from '../types';

const ToolsAccess: React.FC<ToolsAccessProps> = ({ isOpen, onClose, toolName, toolType }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'guest' | 'researcher' | 'student' | 'public'>('guest');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
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
    { id: 3, title: 'Resource Agreement', description: 'Terms & Conditions' },
    { id: 4, title: 'Resource Access', description: 'Launch Resource' }
  ];

  const userTypes: UserType[] = [
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoggedIn(true);
      setCurrentStep(2);
      setIsLoading(false);
    }, 1500);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoggedIn(true);
      setCurrentStep(2);
      setIsLoading(false);
    }, 1500);
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
    setIsLoading(true);
    // Simulate tool launch with realistic delay
    setTimeout(() => {
      setIsLoading(false);
      // Open tool in new window/tab
      const toolUrl = `https://tools.kheobs.org/${toolType}/${toolName.toLowerCase().replace(/\s+/g, '-')}`;
      window.open(toolUrl, '_blank', 'noopener,noreferrer');
      onClose();
    }, 2000);
  };

  const handleDownloadUserManual = () => {
    // Create a blob with sample PDF content
    const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
>>
endobj

4 0 obj
<<
/Length 44
>>
stream
BT
/F1 12 Tf
100 700 Td
(${toolName} User Manual) Tj
ET
endstream
endobj

xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000206 00000 n 
trailer
<<
/Size 5
/Root 1 0 R
>>
startxref
299
%%EOF`;

    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${toolName.replace(/\s+/g, '_')}_User_Manual.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleVideoTutorial = (type: 'getting-started' | 'advanced') => {
    const videoUrls = {
      'getting-started': `https://tutorials.kheobs.org/${toolType}/getting-started`,
      'advanced': `https://tutorials.kheobs.org/${toolType}/advanced-features`
    };
    
    window.open(videoUrls[type], '_blank', 'noopener,noreferrer');
  };

  const handleSupportEmail = () => {
    const subject = encodeURIComponent(`Support Request: ${toolName}`);
    const body = encodeURIComponent(`Hello KHEOBS Support Team,

I need assistance with the ${toolName} tool.

User Type: ${userType}
Tool Category: ${toolType}

Issue Description:
[Please describe your issue here]

System Information:
- Browser: ${navigator.userAgent}
- Timestamp: ${new Date().toISOString()}

Thank you for your assistance.

Best regards`);
    
    const mailtoUrl = `mailto:${toolType}-support@kheobs.org?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Resource Access Portal</h2>
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
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                  currentStep >= step.id 
                    ? 'bg-blue-600 text-white' 
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
                  <ArrowRight className="w-5 h-5 text-gray-400 mx-6" />
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
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Authentication Required</h3>
                <p className="text-gray-600">Please login or register to access research resources</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Login Form */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Existing User</h4>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="password"
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                    >
                      {isLoading ? 'Signing In...' : 'Sign In'}
                    </button>
                  </form>
                </div>

                {/* Registration Form */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">New User</h4>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({...formData, organization: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="University, Research Institute, etc."
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                    >
                      {isLoading ? 'Creating Account...' : 'Create Account'}
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
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Select Access Level</h3>
                <p className="text-gray-600">Choose the access level that best describes your use case</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {userTypes.map((type) => (
                  <motion.div
                    key={type.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => handleUserTypeSelection(type.id)}
                    className={`p-6 border-2 rounded-xl cursor-pointer transition-all hover:shadow-lg ${
                      userType === type.id 
                        ? `border-${type.color}-500 bg-${type.color}-50 shadow-md` 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-${type.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <type.icon className={`w-8 h-8 text-${type.color}-600`} />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h4>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{type.description}</p>
                      <ul className="text-sm text-gray-500 space-y-2">
                        {type.features.map((feature, index) => (
                          <li key={index} className="flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
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
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Terms & Conditions</h3>
                <p className="text-gray-600">Please review and accept the terms for using {toolName}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl max-h-80 overflow-y-auto border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">Data Usage Agreement</h4>
                <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                  <p>By accessing this tool, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use the data for research and educational purposes only</li>
                    <li>Properly cite KHEOBS Lab in any publications or presentations</li>
                    <li>Not redistribute raw data without explicit permission</li>
                    <li>Respect intellectual property rights of the research team</li>
                    <li>Report any technical issues or data inconsistencies</li>
                  </ul>
                  
                  <h5 className="font-semibold mt-6 mb-2">Data Privacy</h5>
                  <p>Your usage data may be collected for improving tool performance and understanding user needs. Personal information will not be shared with third parties.</p>
                  
                  <h5 className="font-semibold mt-6 mb-2">Disclaimer</h5>
                  <p>While we strive for accuracy, KHEOBS Lab makes no warranties about the completeness or reliability of the data provided through this tool.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="agreeTerms" className="text-sm text-gray-700 font-medium">
                  I have read and agree to the terms and conditions
                </label>
              </div>

              <button
                onClick={handleAgreement}
                disabled={!formData.agreeToTerms}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
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
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Access Granted</h3>
                <p className="text-gray-600">You now have access to {toolName}</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">
                      Access Level: {userType.charAt(0).toUpperCase() + userType.slice(1)}
                    </h4>
                    <p className="text-green-700 text-sm">
                      You have been granted {userType} level access to this resource. 
                      Your session will remain active for 24 hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Quick Start Guide */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Quick Start Guide</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Navigate using the resource bar at the top
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Use filters to refine your data view
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Export data using the download button
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Contact support for technical assistance
                    </li>
                  </ul>
                </div>

                {/* User Manual */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <Download className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-900 mb-2">User Manual</h4>
                      <p className="text-blue-700 text-sm mb-4 leading-relaxed">
                        Comprehensive guide covering all features and setup instructions for {toolName}.
                      </p>
                      <button 
                        onClick={handleDownloadUserManual}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>

                {/* Tutorial Videos */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <Play className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-green-900 mb-2">Tutorial Videos</h4>
                      <p className="text-green-700 text-sm mb-4 leading-relaxed">
                        Step-by-step video tutorials covering basic usage and advanced features.
                      </p>
                      <div className="space-y-2">
                        <button 
                          onClick={() => handleVideoTutorial('getting-started')}
                          className="flex items-center text-green-600 hover:text-green-800 text-sm transition-colors"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Getting Started (15 min)
                        </button>
                        <button 
                          onClick={() => handleVideoTutorial('advanced')}
                          className="flex items-center text-green-600 hover:text-green-800 text-sm transition-colors"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Advanced Features (25 min)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Support Section */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-purple-900 mb-3">Need Help? Contact Support</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <Mail className="w-4 h-4 text-purple-600 mr-2" />
                          <span className="text-purple-700 text-sm">
                            <span className="font-medium">Email:</span> {toolType}-support@kheobs.org
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-purple-600 mr-2" />
                          <span className="text-purple-700 text-sm">
                            <span className="font-medium">Response time:</span> 24-48 hours
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <Clock className="w-4 h-4 text-purple-600 mr-2" />
                          <span className="text-purple-700 text-sm">
                            <span className="font-medium">Office Hours:</span> Mon-Fri 8AM-5PM
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Globe className="w-4 h-4 text-purple-600 mr-2" />
                          <span className="text-purple-700 text-sm">
                            <span className="font-medium">Time Zone:</span> Cambodia Time (UTC+7)
                          </span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={handleSupportEmail}
                      className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Support Email
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleToolLaunch}
                  disabled={isLoading}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Launching...
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Launch {toolName}
                    </>
                  )}
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