"use client";

import { useState, useEffect } from 'react';

export function usePageRefresh() {
  const [isRefreshing, setIsRefreshing] = useState(true); // Start with true for initial load

  useEffect(() => {
    // Always show loading on mount (first visit or refresh)
    setIsRefreshing(true);
    
    // Hide loading after 2 seconds
    const timer = setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this only runs once on mount

  return isRefreshing;
}
