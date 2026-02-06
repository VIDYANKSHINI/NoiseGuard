import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { SplashScreen } from './components/SplashScreen';
import { HomeScreen } from './components/HomeScreen';
import { ReportNoiseScreen } from './components/ReportNoiseScreen';
import { SuccessScreen } from './components/SuccessScreen';
import { ComplaintStatusScreen } from './components/ComplaintStatusScreen';
import { NoiseMapScreen } from './components/NoiseMapScreen';

type Screen = 'splash' | 'home' | 'report' | 'success' | 'status' | 'map';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Update time immediately
    updateTime();
    
    // Update time every minute
    const interval = setInterval(updateTime, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const updateTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')}`;
    setCurrentTime(formattedTime);
  };

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const handleReportSubmit = () => {
    setCurrentScreen('success');
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 overflow-hidden flex items-center justify-center p-4 md:p-8">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      {/* Phone Frame */}
      <div className="relative w-full max-w-[375px] aspect-[9/19.5] bg-gradient-to-b from-gray-900 to-black rounded-[3.5rem] p-3 z-10" style={{
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.1)'
      }}>
        {/* Phone Notch - more realistic */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20 flex items-center justify-center" style={{
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
        }}>
          {/* Camera and speaker */}
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
            <div className="w-10 h-1 bg-gray-900 rounded-full" />
            <div className="w-2 h-2 bg-gray-800 rounded-full border border-gray-700" />
          </div>
        </div>
        
        {/* Screen with subtle border */}
        <div className="relative w-full h-full bg-white rounded-[3rem] overflow-hidden border border-gray-800/20" style={{
          boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)'
        }}>
          {/* Status Bar - Enhanced */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-transparent z-10 flex items-center justify-between px-8 pt-2">
            <div className="text-[15px] font-semibold text-gray-900">{currentTime || '9:41'}</div>
            <div className="flex items-center gap-1.5">
              {/* Cellular signal */}
              <div className="flex items-end gap-[2px]">
                <div className="w-1 h-1 bg-gray-900 rounded-sm" />
                <div className="w-1 h-1.5 bg-gray-900 rounded-sm" />
                <div className="w-1 h-2 bg-gray-900 rounded-sm" />
                <div className="w-1 h-2.5 bg-gray-900 rounded-sm" />
              </div>
              {/* WiFi */}
              <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.364 3.636a.75.75 0 0 0-1.06 1.06 7.5 7.5 0 0 1 0 10.607.75.75 0 0 0 1.06 1.061 9 9 0 0 0 0-12.728zM4.697 4.697a.75.75 0 0 0-1.061-1.061 9 9 0 0 0 0 12.728.75.75 0 1 0 1.06-1.06 7.5 7.5 0 0 1 0-10.607zM12.475 6.464a.75.75 0 1 0-1.06 1.061 3.5 3.5 0 0 1 0 4.95.75.75 0 0 0 1.06 1.06 5 5 0 0 0 0-7.07zM7.525 7.525a.75.75 0 1 0-1.061-1.06 5 5 0 0 0 0 7.07.75.75 0 0 0 1.06-1.061 3.5 3.5 0 0 1 0-4.95zM10 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
              {/* Battery */}
              <div className="flex items-center">
                <div className="w-6 h-3 border-2 border-gray-900 rounded-sm flex items-center px-[1px]">
                  <div className="w-full h-full bg-gray-900 rounded-[1px]" />
                </div>
                <div className="w-[2px] h-1.5 bg-gray-900 rounded-r-sm -ml-[1px]" />
              </div>
            </div>
          </div>

          {/* App Content */}
          <div className="w-full h-full overflow-y-auto overflow-x-hidden hide-scrollbar">
            <AnimatePresence mode="wait">
              {currentScreen === 'splash' && (
                <SplashScreen
                  key="splash"
                  onComplete={() => setCurrentScreen('home')}
                />
              )}
              
              {currentScreen === 'home' && (
                <HomeScreen
                  key="home"
                  onNavigate={handleNavigate}
                />
              )}
              
              {currentScreen === 'report' && (
                <ReportNoiseScreen
                  key="report"
                  onNavigate={handleNavigate}
                  onSubmit={handleReportSubmit}
                />
              )}
              
              {currentScreen === 'success' && (
                <SuccessScreen
                  key="success"
                  onNavigate={handleNavigate}
                />
              )}
              
              {currentScreen === 'status' && (
                <ComplaintStatusScreen
                  key="status"
                  onNavigate={handleNavigate}
                />
              )}
              
              {currentScreen === 'map' && (
                <NoiseMapScreen
                  key="map"
                  onNavigate={handleNavigate}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Phone Bottom Bar (Home Indicator) - Enhanced */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white rounded-full opacity-90 shadow-sm" />
      </div>
    </div>
  );
}