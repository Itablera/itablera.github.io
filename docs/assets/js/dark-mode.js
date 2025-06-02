// Dark mode toggle functionality
(function() {
  'use strict';

  const STORAGE_KEY = 'darkMode';
  const LIGHT_CLASS = 'light';
  const DARK_CLASS = 'dark';

  // Get stored preference or detect system preference
  function getInitialMode() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return stored;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  }

  // Apply the mode to the document
  function applyMode(mode) {
    const root = document.documentElement;
    
    // Remove existing classes
    root.classList.remove(LIGHT_CLASS, DARK_CLASS);
    
    // Add the appropriate class
    if (mode === 'dark') {
      root.classList.add(DARK_CLASS);
    } else if (mode === 'light') {
      root.classList.add(LIGHT_CLASS);
    }
    // If mode is 'auto', don't add any class - let CSS media query handle it
  }

  // Toggle between modes
  function toggleMode() {
    const root = document.documentElement;
    const currentMode = getCurrentMode();
    
    let newMode;
    if (currentMode === 'dark') {
      newMode = 'light';
    } else {
      newMode = 'dark';
    }
    
    applyMode(newMode);
    localStorage.setItem(STORAGE_KEY, newMode);
  }

  // Get current mode based on classes and system preference
  function getCurrentMode() {
    const root = document.documentElement;
    
    if (root.classList.contains(DARK_CLASS)) {
      return 'dark';
    } else if (root.classList.contains(LIGHT_CLASS)) {
      return 'light';
    } else {
      // No manual override, check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      return 'light';
    }
  }

  // Initialize dark mode
  function init() {
    const initialMode = getInitialMode();
    applyMode(initialMode);

    // Set up toggle button
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleMode);
    }

    // Listen for system preference changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', function(e) {
        // Only respond to system changes if no manual preference is stored
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
          applyMode(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Apply initial mode immediately to prevent flash
  const quickMode = getInitialMode();
  applyMode(quickMode);

})();