import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye, 
  Gauge, 
  MapPin, 
  Calendar,
  TrendingUp,
  TrendingDown,
  Activity,
  X
} from 'lucide-react';

interface WeatherStation {
  id: string;
  name: string;
  location: string;
  coordinates: [number, number];
  temperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  pressure: number;
  visibility: number;
  lastUpdate: string;
  trend: 'up' | 'down' | 'stable';
}

interface ClimateDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const ClimateDashboard: React.FC<ClimateDashboardProps> = ({ isOpen, onClose }) => {
  const [selectedStation, setSelectedStation] = useState<string>('phnom-penh');
  const [timeRange, setTimeRange] = useState<string>('24h');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock weather stations data
  const weatherStations: WeatherStation[] = [
    {
      id: 'phnom-penh',
      name: 'Phnom Penh Central',
      location: 'Phnom Penh',
      coordinates: [11.5564, 104.9282],
      temperature: 32.5,
      humidity: 68,
      windSpeed: 12.3,
      windDirection: 'SW',
      pressure: 1013.2,
      visibility: 8.5,
      lastUpdate: '2 minutes ago',
      trend: 'up'
    },
    {
      id: 'siem-reap',
      name: 'Siem Reap Station',
      location: 'Siem Reap',
      coordinates: [13.3671, 103.8448],
      temperature: 29.8,
      humidity: 72,
      windSpeed: 8.7,
      windDirection: 'NE',
      pressure: 1015.8,
      visibility: 9.2,
      lastUpdate: '5 minutes ago',
      trend: 'stable'
    },
    {
      id: 'kampong-thom',
      name: 'Kampong Thom Research',
      location: 'Kampong Thom',
      coordinates: [12.7111, 104.8889],
      temperature: 31.2,
      humidity: 65,
      windSpeed: 15.1,
      windDirection: 'W',
      pressure: 1012.5,
      visibility: 7.8,
      lastUpdate: '1 minute ago',
      trend: 'down'
    },
    {
      id: 'koh-kong',
      name: 'Koh Kong Coastal',
      location: 'Koh Kong',
      coordinates: [11.6158, 102.9839],
      temperature: 28.9,
      humidity: 78,
      windSpeed: 18.5,
      windDirection: 'S',
      pressure: 1011.8,
      visibility: 6.5,
      lastUpdate: '3 minutes ago',
      trend: 'up'
    }
  ];

  // Mock historical data for charts
  const generateMockData = (hours: number) => {
    const data = [];
    const now = new Date();
    for (let i = hours; i >= 0; i--) {
      const time = new Date(now.getTime() - i * 60 * 60 * 1000);
      data.push({
        time: time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        temperature: 28 + Math.random() * 8,
        humidity: 60 + Math.random() * 20,
        pressure: 1010 + Math.random() * 10
      });
    }
    return data;
  };

  const [chartData, setChartData] = useState(generateMockData(24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hours = timeRange === '24h' ? 24 : timeRange === '7d' ? 168 : 720;
    setChartData(generateMockData(hours));
  }, [timeRange]);

  const currentStation = weatherStations.find(station => station.id === selectedStation);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg max-w-7xl w-full max-h-[100vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-6 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Climate Data Dashboard</h2>
              <p className="text-blue-100">Real-time monitoring from weather stations across Cambodia</p>
            </div>
            <button
              onClick={onClose}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="mt-4 flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              <span>Live Data</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{currentTime.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Weather Station</label>
              <select
                value={selectedStation}
                onChange={(e) => setSelectedStation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {weatherStations.map(station => (
                  <option key={station.id} value={station.id}>
                    {station.name} - {station.location}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Range</label>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
              </select>
            </div>
          </div>

          {/* Current Conditions */}
          {currentStation && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">{currentStation.name}</h3>
                <span className="text-sm text-gray-500">Updated {currentStation.lastUpdate}</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-lg border border-red-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Thermometer className="w-5 h-5 text-red-600" />
                    <span className="text-sm font-medium text-gray-700">Temperature</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">{currentStation.temperature}°C</span>
                    {currentStation.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    ) : currentStation.trend === 'down' ? (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    ) : (
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                    )}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Humidity</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{currentStation.humidity}%</div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Wind className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">Wind</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{currentStation.windSpeed} km/h</div>
                  <div className="text-sm text-gray-600">{currentStation.windDirection}</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Gauge className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700">Pressure</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{currentStation.pressure}</div>
                  <div className="text-sm text-gray-600">hPa</div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-lg border border-yellow-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-5 h-5 text-yellow-600" />
                    <span className="text-sm font-medium text-gray-700">Visibility</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{currentStation.visibility}</div>
                  <div className="text-sm text-gray-600">km</div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Coordinates</span>
                  </div>
                  <div className="text-sm font-bold text-gray-900">
                    {currentStation.coordinates[0].toFixed(4)}°N
                  </div>
                  <div className="text-sm font-bold text-gray-900">
                    {currentStation.coordinates[1].toFixed(4)}°E
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Temperature Chart */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Temperature Trend</h4>
              <div className="h-64 flex items-end justify-between gap-1">
                {chartData.slice(-12).map((point, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="bg-gradient-to-t from-red-500 to-orange-400 rounded-t w-6"
                      style={{ height: `${(point.temperature / 40) * 200}px` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-2 transform -rotate-45">
                      {point.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Humidity Chart */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Humidity Levels</h4>
              <div className="h-64 flex items-end justify-between gap-1">
                {chartData.slice(-12).map((point, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t w-6"
                      style={{ height: `${(point.humidity / 100) * 200}px` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-2 transform -rotate-45">
                      {point.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Station Map */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Weather Station Locations</h4>
            <div className="h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  {/* Cambodia outline approximation */}
                  <path
                    d="M50 150 Q100 100 150 120 Q200 110 250 130 Q300 140 350 160 Q340 200 300 220 Q250 240 200 230 Q150 220 100 200 Q60 180 50 150"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              
              {/* Station markers */}
              {weatherStations.map((station, index) => (
                <div
                  key={station.id}
                  className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all ${
                    station.id === selectedStation
                      ? 'bg-red-600 ring-4 ring-red-200'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                  style={{
                    left: `${20 + index * 20}%`,
                    top: `${30 + (index % 2) * 40}%`
                  }}
                  onClick={() => setSelectedStation(station.id)}
                  title={station.name}
                ></div>
              ))}
              
              <div className="text-center">
                <p className="text-gray-600 text-lg font-medium">Interactive Station Map</p>
                <p className="text-gray-500 text-sm">Click on markers to view station data</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-600">
                <p>Data provided by KHEOBS Climate Monitoring Network</p>
                <p>Last system update: {currentTime.toLocaleString()}</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Export Data
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ClimateDashboard;