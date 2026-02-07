import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, TrendingUp, AlertTriangle, Waves } from 'lucide-react';
import { getHotspots } from '../utils/api';

interface NoiseMapScreenProps {
  onNavigate: (screen: string) => void;
}