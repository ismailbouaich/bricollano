"use client";

import { useEffect } from 'react';

export default function HydrationHandler() {
  useEffect(() => {
    // This runs only on the client after hydration
    // If the hydrated class is being added by something external,
    // we should manage it properly here to avoid hydration errors
    if (typeof document !== 'undefined') {
      // Remove any existing hydrated class first to ensure consistent state
      document.documentElement.classList.remove('hydrated');
      
      // Now we can safely add it back if needed
      document.documentElement.classList.add('hydrated');
    }
  }, []);

  return null;
}
