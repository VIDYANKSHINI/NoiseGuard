import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronDown, Clock, CheckCircle, AlertCircle, Music, Hammer, Users, Calendar, MapPin as MapPinIcon, MoreHorizontal, RefreshCw } from 'lucide-react';
import { getComplaints } from '../utils/api';

interface ComplaintStatusScreenProps {
  onNavigate: (screen: string) => void;
}

const mockComplaints = [
  {
    id: 'NG7824',
    type: 'DJ/Music',
    icon: Music,
    location: '123 Main Street',
    date: 'Jan 17, 2026',
    status: 'investigating',
    statusLabel: 'Under Investigation',
    description: 'Loud music from nearby nightclub disturbing sleep.',
    progress: 60,
  },
  {
    id: 'NG7801',
    type: 'Construction',
    icon: Hammer,
    location: '456 Oak Avenue',
    date: 'Jan 15, 2026',
    status: 'resolved',
    statusLabel: 'Resolved',
    description: 'Early morning construction noise exceeding permitted hours.',
    progress: 100,
  },
  {
    id: 'NG7765',
    type: 'Party',
    icon: Users,
    location: '789 Pine Road',
    date: 'Jan 12, 2026',
    status: 'pending',
    statusLabel: 'Pending Review',
    description: 'Neighborhood party noise complaint.',
    progress: 20,
  },
];