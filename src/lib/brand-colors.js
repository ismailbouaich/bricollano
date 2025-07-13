// Brand colors based on the new Bricollano logo
export const brandColors = {
  // Primary blue (main brand color)
  primary: '#2563eb',      // Replaces #e0710d
  primaryHover: '#1d4ed8', // Replaces #bb6a48
  primaryDark: '#1e40af',  // Replaces #9a1118
  
  // Supporting colors
  neutral: '#292927',      // Keep the same
  background: '#f8fafc',   // Light blue-gray background
  muted: '#e2e8f0',       // Blue-gray muted (replaces #e2dacd)
  
  // Semantic colors
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
}

// Color mapping for easy replacement
export const colorMapping = {
  '#e0710d': brandColors.primary,
  '#bb6a48': brandColors.primaryHover,
  '#9a1118': brandColors.primaryDark,
  '#e2dacd': brandColors.muted,
}

export default brandColors
