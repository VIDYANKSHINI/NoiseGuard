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

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const handleReportSubmit = () => {
    setCurrentScreen('success');
  };