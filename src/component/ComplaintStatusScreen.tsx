import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronDown, Clock, CheckCircle, AlertCircle, Music, Hammer, Users, Calendar, MapPin as MapPinIcon, MoreHorizontal, RefreshCw } from 'lucide-react';
import { getComplaints } from '../utils/api';

interface ComplaintStatusScreenProps {
  onNavigate: (screen: string) => void;
}