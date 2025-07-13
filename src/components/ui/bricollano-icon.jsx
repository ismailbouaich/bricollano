import React from 'react'

const BricollanoIcon = ({ className = "", size = 24 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle segments */}
      <path 
        d="M50 5 A45 45 0 0 1 78.54 21.46 L72.33 27.67 A35 35 0 0 0 50 15 Z" 
        fill="currentColor" 
        fillOpacity="0.9"
      />
      <path 
        d="M78.54 21.46 A45 45 0 0 1 95 50 L85 50 A35 35 0 0 0 72.33 27.67 Z" 
        fill="currentColor" 
        fillOpacity="0.7"
      />
      <path 
        d="M95 50 A45 45 0 0 1 78.54 78.54 L72.33 72.33 A35 35 0 0 0 85 50 Z" 
        fill="currentColor" 
        fillOpacity="0.5"
      />
      
      {/* Middle circle segments */}
      <path 
        d="M50 15 A35 35 0 0 1 72.33 27.67 L67.68 32.32 A27 27 0 0 0 50 23 Z" 
        fill="currentColor" 
        fillOpacity="0.8"
      />
      <path 
        d="M72.33 27.67 A35 35 0 0 1 85 50 L77 50 A27 27 0 0 0 67.68 32.32 Z" 
        fill="currentColor" 
        fillOpacity="0.6"
      />
      <path 
        d="M85 50 A35 35 0 0 1 72.33 72.33 L67.68 67.68 A27 27 0 0 0 77 50 Z" 
        fill="currentColor" 
        fillOpacity="0.4"
      />
      
      {/* Inner circle segments */}
      <path 
        d="M50 23 A27 27 0 0 1 67.68 32.32 L63.64 36.36 A20 20 0 0 0 50 30 Z" 
        fill="currentColor" 
        fillOpacity="0.9"
      />
      <path 
        d="M67.68 32.32 A27 27 0 0 1 77 50 L70 50 A20 20 0 0 0 63.64 36.36 Z" 
        fill="currentColor" 
        fillOpacity="0.7"
      />
      
      {/* Central diamond */}
      <path 
        d="M50 30 L63.64 36.36 L70 50 L63.64 63.64 L50 70 L36.36 63.64 L30 50 L36.36 36.36 Z" 
        fill="currentColor" 
        fillOpacity="0.3"
      />
      
      {/* Diamond center */}
      <path 
        d="M50 40 L56.36 43.64 L60 50 L56.36 56.36 L50 60 L43.64 56.36 L40 50 L43.64 43.64 Z" 
        fill="currentColor" 
        fillOpacity="1"
      />
      
      {/* Left side segments */}
      <path 
        d="M5 50 A45 45 0 0 1 21.46 21.46 L27.67 27.67 A35 35 0 0 0 15 50 Z" 
        fill="currentColor" 
        fillOpacity="0.6"
      />
      <path 
        d="M21.46 78.54 A45 45 0 0 1 5 50 L15 50 A35 35 0 0 0 27.67 72.33 Z" 
        fill="currentColor" 
        fillOpacity="0.8"
      />
      
      {/* Bottom segments */}
      <path 
        d="M21.46 78.54 A45 45 0 0 1 50 95 L50 85 A35 35 0 0 0 27.67 72.33 Z" 
        fill="currentColor" 
        fillOpacity="0.7"
      />
      <path 
        d="M50 95 A45 45 0 0 1 78.54 78.54 L72.33 72.33 A35 35 0 0 0 50 85 Z" 
        fill="currentColor" 
        fillOpacity="0.5"
      />
    </svg>
  )
}

export default BricollanoIcon
