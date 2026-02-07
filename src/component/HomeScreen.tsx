import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { AlertCircle, FileText, MapPin, TrendingUp, Shield, Bell, Activity } from 'lucide-react';
import { getStats } from '../utils/api';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const [stats, setStats] = useState({
    totalReports: 0,
    thisWeekReports: 0,
    activeComplaints: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);