/**
 * Beautiful animated lamp component for theme switching
 * 
 * Features:
 * - Smooth animations with Framer Motion
 * - Perfect for light/dark theme switching
 * - Responsive design
 * - TypeScript support
 * - Customizable size and position
 * 
 * Dependencies: framer-motion, react
 * 
 * @author Ozhan Gebesoglu
 * @license MIT
 */

"use client";

import React from "react";
import { motion } from "framer-motion";

export interface LampToggleProps {
  /** Current theme state - true for dark, false for light */
  isDark: boolean;
  /** Callback function when lamp is clicked */
  onToggle: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Size variants */
  size?: 'small' | 'medium' | 'large';
  /** Animation duration in seconds */
  animationDuration?: number;
}

const sizeConfig = {
  small: { width: 'w-32', height: 'h-6', cable: 20 },
  medium: { width: 'w-56', height: 'h-10', cable: 30 },
  large: { width: 'w-80', height: 'h-14', cable: 40 }
};

export default function LampToggle({ 
  isDark,
  onToggle,
  className = "",
  size = 'medium',
  animationDuration = 0.3
}: LampToggleProps) {
  const isOn = !isDark; // Light theme = lamp on, Dark theme = lamp off
  const config = sizeConfig[size];

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-10 ${className}`}>
      {/* Lamp Container */}
      <div className="relative flex flex-col items-center">
        {/* Hanging Cable */}
        <motion.div 
          className={`w-1 transition-all duration-500 ${
            isDark 
              ? 'bg-gradient-to-b from-slate-600 to-slate-700' 
              : 'bg-gradient-to-b from-amber-800 to-amber-900'
          }`}
          style={{ height: `${config.cable}px` }}
          animate={{
            scaleY: isOn ? 1 : 0.9
          }}
          transition={{ duration: animationDuration }}
        />
        
        {/* Lamp Body */}
        <motion.div
          className={`relative ${config.width} ${config.height} cursor-pointer`}
          onClick={onToggle}
          animate={{
            scale: isOn ? 1 : 0.98,
          }}
          transition={{ duration: animationDuration }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
        >
          {/* Light Halo */}
          <motion.div
            className="absolute inset-0 z-0"
            animate={{ 
              opacity: isOn ? 1 : 0,
              scale: isOn ? 1 : 0.9
            }}
            transition={{ duration: animationDuration + 0.1 }}
          >
            {/* Glow Effects */}
            <div className="absolute -inset-8 bg-gradient-radial from-yellow-400/30 via-orange-300/20 to-transparent rounded-full blur-xl"></div>
            <div className="absolute -inset-4 bg-gradient-radial from-yellow-300/40 via-orange-200/30 to-transparent rounded-full blur-lg"></div>
          </motion.div>

          {/* Main Lamp Body */}
          <motion.div
            className={`relative z-10 w-full h-full transition-all duration-500 ${
              isOn 
                ? 'bg-gradient-to-b from-yellow-300 to-orange-500 shadow-orange-400/50 shadow-lg' 
                : 'bg-gradient-to-b from-slate-600 to-slate-800 shadow-slate-600/30 shadow-md'
            }`}
            style={{
              clipPath: 'polygon(8% 0%, 92% 0%, 88% 100%, 12% 100%)', // Trapezoid shape
            }}
            animate={{
              boxShadow: isOn 
                ? "0 0 30px rgba(251, 146, 60, 0.6), 0 0 60px rgba(251, 146, 60, 0.3)" 
                : "0 4px 15px rgba(0, 0, 0, 0.3)"
            }}
            transition={{ duration: animationDuration + 0.2 }}
          >
            {/* Inner Light */}
            <motion.div
              className="absolute inset-1 bg-gradient-to-b from-white/80 to-yellow-200/60 rounded-sm"
              style={{
                clipPath: 'polygon(0% 0%, 94% 0%, 91% 50%, 9% 50%)',
              }}
              animate={{ 
                opacity: isOn ? [0.8, 1, 0.8] : 0
              }}
              transition={{ 
                duration: isOn ? 3 : 0.5, 
                repeat: isOn ? Infinity : 0, 
                ease: "easeInOut" 
              }}
            />

            {/* Lamp Details */}
            <div className={`absolute top-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 transition-colors duration-500 ${
              isOn ? 'bg-yellow-200/80' : 'bg-slate-400/60'
            }`}></div>
            <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-0.5 transition-colors duration-500 ${
              isOn ? 'bg-yellow-200/60' : 'bg-slate-400/40'
            }`}></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// Example usage for 21st.dev
export function Example() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    document.body.className = isDark 
      ? 'bg-gray-900 text-white min-h-screen transition-all duration-500' 
      : 'bg-white text-gray-900 min-h-screen transition-all duration-500';
  }, [isDark]);

  return (
    <div className="relative min-h-screen p-8">
      <LampToggle 
        isDark={isDark}
        onToggle={() => setIsDark(!isDark)}
      />
      
      <div className="pt-20 text-center">
        <h1 className="text-4xl font-bold mb-4">🏮 Lamp Toggle</h1>
        <p className="text-lg opacity-80 mb-8">
          Click the lamp above to toggle theme!
        </p>
        
        <div className="space-y-4">
          <p>Current theme: <strong>{isDark ? 'Dark' : 'Light'}</strong></p>
          
          <div className="flex justify-center gap-4">
            <LampToggle 
              isDark={isDark}
              onToggle={() => setIsDark(!isDark)}
              size="small"
              className="relative top-0 left-0 transform-none"
            />
            <LampToggle 
              isDark={isDark}
              onToggle={() => setIsDark(!isDark)}
              size="medium"
              className="relative top-0 left-0 transform-none"
            />
            <LampToggle 
              isDark={isDark}
              onToggle={() => setIsDark(!isDark)}
              size="large"
              className="relative top-0 left-0 transform-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
