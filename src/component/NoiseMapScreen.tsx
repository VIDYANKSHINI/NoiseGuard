import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, TrendingUp, AlertTriangle, Waves } from 'lucide-react';
import { getHotspots } from '../utils/api';

interface NoiseMapScreenProps {
  onNavigate: (screen: string) => void;
}

const getHotspotColor = (intensity: string) => {
  switch (intensity) {
    case 'high':
      return 'bg-[#FF6B6B]';
    case 'medium':
      return 'bg-orange-400';
    case 'low':
      return 'bg-yellow-400';
    default:
      return 'bg-gray-400';
  }
};

const getHotspotSize = (size: string) => {
  switch (size) {
    case 'large':
      return 'w-24 h-24';
    case 'medium':
      return 'w-20 h-20';
    case 'small':
      return 'w-16 h-16';
    default:
      return 'w-16 h-16';
  }
};