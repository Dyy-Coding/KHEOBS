import React from 'react';
import { motion } from 'framer-motion';
import { X, Thermometer, Droplets, Wind, Sun, Activity, TrendingUp } from 'lucide-react';

interface ClimateDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const ClimateDashboard: React.FC<ClimateDashboardProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const climateData = [
    { label: 'Temperature', value: '32°C', change: '+2.3°C', icon: Thermometer, color: 'red' },
    { label: 'Humidity', value: '78%', change: '+5%', icon: Droplets, color: 'blue' },
    { label: 'Wind Speed', value: '12 km/h', change: '-3 km/h', icon: Wind, color: 'gray' },
    { label: 'UV Index', value: '8', change: '+1', icon: Sun, color: 'yellow' }
  ];

  const stations = [
    { name: 'Phnom Penh Central', status: 'online', temp: '32°C', humidity: '75%' },
    { name: 'Siem Reap North', status: 'online', temp: '29°C', humidity: '82%' },
    { name: 'Battambang West', status: 'maintenance', temp: '--', humidity: '--' },
    { name: 'Kampong Cham East', status: 'online', temp: '31°C', humidity: '79%' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Climate Data Dashboard</h2>
              <p className="text-blue-100">Real-time environmental monitoring across Cambodia</p>
            </div>
            <button
              onClick={onClose}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Current Conditions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {climateData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full bg-${item.color}-100`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {item.change}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.value}</h3>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Station Status */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Activity className="w-6 h-6 mr-2 text-blue-600" />
              Weather Stations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stations.map((station, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{station.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      station.status === 'online' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {station.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Temperature:</span>
                      <span className="font-medium ml-2">{station.temp}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Humidity:</span>
                      <span className="font-medium ml-2">{station.humidity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Temperature Trends (Last 7 Days)</h3>
            <div className="h-64 bg-gradient-to-t from-blue-50 to-transparent rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Activity className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive chart would be displayed here</p>
                <p className="text-sm text-gray-500 mt-2">Real-time data visualization</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ClimateDashboard;