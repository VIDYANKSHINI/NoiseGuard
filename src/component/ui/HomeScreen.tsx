import { motion } from 'motion/react';
import { AlertCircle, FileText, MapPin, TrendingUp, Shield, Bell, Activity } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gradient-to-b from-[#F5F5F5] to-white pb-8"
    >
      {/* Header */}
      <div className="relative bg-gradient-to-br from-[#4A90E2] via-[#4A90E2] to-[#357ABD] px-6 pt-12 pb-12 rounded-b-[2.5rem] shadow-xl overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
        
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-between mb-6 relative z-10"
        >
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white rounded-[1.25rem] flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-[#4A90E2]" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold text-shadow-sm">NoiseGuard</h1>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/80 text-xs">Active monitoring</span>
              </div>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center relative"
          >
            <Bell className="w-5 h-5 text-white" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6B6B] rounded-full text-[10px] text-white flex items-center justify-center font-semibold">3</div>
          </motion.button>
        </motion.div>
        
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="relative z-10"
        >
          <p className="text-white/90 text-sm mb-4">Monitor and report noise pollution</p>
          
          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <Activity className="w-4 h-4 text-white/80" />
                <span className="text-white/70 text-xs">This Month</span>
              </div>
              <div className="text-white text-xl font-bold">24</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-white/80" />
                <span className="text-white/70 text-xs">Area Reports</span>
              </div>
              <div className="text-white text-xl font-bold">156</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="px-6 mt-6 space-y-4">
        {/* Primary Action Button */}
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => onNavigate('report')}
          className="w-full bg-gradient-to-br from-[#4A90E2] to-[#357ABD] text-white rounded-[1.5rem] p-6 relative overflow-hidden group"
          style={{
            boxShadow: '0 8px 24px rgba(74, 144, 226, 0.4)'
          }}
        >
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ scale: 0, opacity: 0.3 }}
            whileTap={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: 'easeInOut'
            }}
          />
          <div className="flex items-center justify-between relative z-10">
            <div className="text-left">
              <div className="text-2xl font-bold mb-1 text-shadow-sm">Report Noise</div>
              <div className="text-blue-100 text-sm">Make a new complaint</div>
            </div>
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <AlertCircle className="w-7 h-7" strokeWidth={2.5} />
            </div>
          </div>
        </motion.button>

        {/* Secondary Action Button */}
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => onNavigate('status')}
          className="w-full bg-white text-gray-800 rounded-[1.5rem] p-6 relative overflow-hidden group"
          style={{
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}
        >
          <motion.div
            className="absolute inset-0 bg-[#4A90E2]/5"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="flex items-center justify-between relative z-10">
            <div className="text-left">
              <div className="text-xl font-semibold mb-1">Complaint Status</div>
              <div className="text-gray-500 text-sm">View your reports</div>
            </div>
            <div className="w-12 h-12 bg-[#4A90E2]/10 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-[#4A90E2]" strokeWidth={2.5} />
            </div>
          </div>
        </motion.button>

        {/* Map Preview Card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-[1.5rem] overflow-hidden"
          style={{
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}
        >
          <div className="p-5 pb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">Noise Hotspots</h3>
              <div className="flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-orange-700">Live</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              Real-time complaint density in your area
            </p>
          </div>
          
          {/* Mock Map Preview */}
          <div className="relative h-48 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50 overflow-hidden">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #4A90E2 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }} />
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="w-10 h-10 text-[#4A90E2] opacity-30" />
            </div>
            
            {/* Hotspot indicators with pulse */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: 'spring' }}
              className="absolute top-1/4 left-1/3"
            >
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 w-16 h-16 bg-[#FF6B6B] rounded-full -translate-x-1/2 -translate-y-1/2"
              />
              <div className="relative w-12 h-12 bg-[#FF6B6B] rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: 'spring' }}
              className="absolute top-1/2 right-1/4"
            >
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
                className="absolute inset-0 w-20 h-20 bg-orange-400 rounded-full -translate-x-1/2 -translate-y-1/2"
              />
              <div className="relative w-16 h-16 bg-orange-400 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="absolute bottom-1/4 left-1/2"
            >
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
                className="absolute inset-0 w-14 h-14 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2"
              />
              <div className="relative w-10 h-10 bg-yellow-400 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
          </div>
          
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('map')}
            className="w-full p-4 bg-gradient-to-r from-[#4A90E2]/5 to-[#357ABD]/5 text-[#4A90E2] font-semibold text-center hover:from-[#4A90E2]/10 hover:to-[#357ABD]/10 transition-all"
          >
            View Full Map →
          </motion.button>
        </motion.div>
      </div>

      {/* Safe area padding */}
      <div className="h-8" />
    </motion.div>
  );
}