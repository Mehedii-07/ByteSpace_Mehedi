import React from 'react';

// Neon Lime 3D Squiggle / Spring
export const NeonSquiggle = ({ className = '', style = {}, width = 110, height = 110 }) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <defs>
      <linearGradient id="neonSquiggleGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#eaff4d" />
        <stop offset="50%" stopColor="#ccff00" />
        <stop offset="100%" stopColor="#a3d900" />
      </linearGradient>
      <filter id="shadowSquiggle" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#082b8a" floodOpacity="0.35" />
      </filter>
    </defs>
    <path 
      d="M20 25 C 45 10, 85 20, 75 42 C 65 60, 25 50, 30 72 C 35 88, 75 85, 82 70" 
      stroke="url(#neonSquiggleGrad)" 
      strokeWidth="14" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      filter="url(#shadowSquiggle)"
    />
    <path 
      d="M22 23 C 45 10, 80 20, 72 40 C 65 56, 30 48, 33 68 C 36 82, 72 82, 79 68" 
      stroke="#ffffff" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      opacity="0.45"
    />
  </svg>
);

// White 3D Torus / Donut
export const Torus3D = ({ className = '', style = {}, size = 95 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <defs>
      <radialGradient id="torusOuter" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="65%" stopColor="#e2e8f0" />
        <stop offset="90%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#94a3b8" />
      </radialGradient>
      <radialGradient id="torusHole" cx="45%" cy="40%" r="55%">
        <stop offset="0%" stopColor="#1456fd" />
        <stop offset="70%" stopColor="#0f45cc" />
        <stop offset="100%" stopColor="#0a3299" />
      </radialGradient>
      <filter id="torusShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="4" dy="8" stdDeviation="6" floodColor="#082b8a" floodOpacity="0.4" />
      </filter>
    </defs>
    <ellipse cx="50" cy="50" rx="42" ry="42" fill="url(#torusOuter)" filter="url(#torusShadow)" />
    <ellipse cx="50" cy="50" rx="19" ry="19" fill="url(#torusHole)" />
    {/* Highlight shine */}
    <path 
      d="M32 20 A 35 35 0 0 1 68 20" 
      stroke="#ffffff" 
      strokeWidth="4" 
      strokeLinecap="round" 
      opacity="0.9" 
    />
  </svg>
);

// White 3D Tetrahedron / Pyramid / Triangle
export const Pyramid3D = ({ className = '', style = {}, size = 70 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <defs>
      <linearGradient id="pyrLight" x1="20" y1="20" x2="60" y2="80">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f1f5f9" />
      </linearGradient>
      <linearGradient id="pyrDark" x1="50" y1="50" x2="80" y2="90">
        <stop offset="0%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#94a3b8" />
      </linearGradient>
      <filter id="pyrShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="3" dy="6" stdDeviation="5" floodColor="#082b8a" floodOpacity="0.35" />
      </filter>
    </defs>
    <g filter="url(#pyrShadow)">
      {/* Left light facet */}
      <polygon points="50,15 15,82 55,88" fill="url(#pyrLight)" />
      {/* Right shaded facet */}
      <polygon points="50,15 55,88 88,68" fill="url(#pyrDark)" />
    </g>
  </svg>
);

// Neon 3D Cylinder / Capsule
export const Cylinder3D = ({ className = '', style = {}, width = 65, height = 90 }) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 70 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <defs>
      <linearGradient id="cylBody" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#eaff4d" />
        <stop offset="45%" stopColor="#ccff00" />
        <stop offset="85%" stopColor="#9ec900" />
        <stop offset="100%" stopColor="#7c9e00" />
      </linearGradient>
      <radialGradient id="cylTop" cx="40%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#ffff66" />
        <stop offset="80%" stopColor="#ccff00" />
        <stop offset="100%" stopColor="#b2e000" />
      </radialGradient>
      <filter id="cylShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="4" dy="8" stdDeviation="6" floodColor="#082b8a" floodOpacity="0.35" />
      </filter>
    </defs>
    <g filter="url(#cylShadow)" transform="rotate(18 35 50)">
      {/* Cylinder body */}
      <rect x="15" y="24" width="40" height="52" rx="0" fill="url(#cylBody)" />
      {/* Bottom cap */}
      <ellipse cx="35" cy="76" rx="20" ry="10" fill="url(#cylBody)" />
      {/* Top cap */}
      <ellipse cx="35" cy="24" rx="20" ry="10" fill="url(#cylTop)" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
    </g>
  </svg>
);

// White 3D Zigzag Ribbon / Spring Doodle matching Figma
export const ZigzagWhite = ({ className = '', style = {}, width = 90, height = 75 }) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 100 80" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <defs>
      <linearGradient id="zigWhiteGrad" x1="10" y1="10" x2="90" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="60%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>
      <filter id="zigShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="3" dy="6" stdDeviation="5" floodColor="#082b8a" floodOpacity="0.4" />
      </filter>
    </defs>
    <path 
      d="M20 18 L 72 28 C 80 30, 78 42, 68 44 L 28 52 C 18 54, 20 66, 32 68 L 84 74" 
      stroke="url(#zigWhiteGrad)" 
      strokeWidth="13" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      filter="url(#zigShadow)"
    />
  </svg>
);

// Floating Sparkles / Crosses
export const SparkleWhite = ({ className = '', style = {}, size = 28 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 30 30" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path 
      d="M15 2 L 15 28 M 2 15 L 28 15" 
      stroke="#ffffff" 
      strokeWidth="4" 
      strokeLinecap="round" 
      opacity="0.8"
    />
  </svg>
);

// Soft Neon Background Blur Blob
export const GlowBlob = ({ color = 'rgba(204, 255, 0, 0.25)', size = 350, style = {} }) => (
  <div 
    style={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      background: `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0) 70%)`,
      filter: 'blur(50px)',
      pointerEvents: 'none',
      zIndex: 0,
      ...style
    }}
  />
);
