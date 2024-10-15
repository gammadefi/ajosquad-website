import React, { useEffect, useState } from 'react';

const TawkToIntegration = () => {
  const [isVisible, setIsVisible] = useState(true); // Track widget visibility
  const [isScrolling, setIsScrolling] = useState(false); // Track scrolling state

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Hide when scrolling down, show when scrolling up or stopped
      if (scrollTop > lastScrollTop) {
        setIsScrolling(true);
        setIsVisible(false);
      } else {
        setIsScrolling(false);
        setIsVisible(true);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

      // Clear any existing timeout
      clearTimeout(scrollTimeout);

      // Set a timeout to detect when scrolling has stopped
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setIsVisible(true); // Show the widget after scrolling stops
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    const tawkScriptId = "tawkScript";

    // Add Tawk.to script if it's not already present
    if (!document.getElementById(tawkScriptId)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://embed.tawk.to/656dd054bfb79148e599e4eb/1hgqfbjmp";
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      script.id = tawkScriptId;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const tawkWidget = document.querySelector("#tawkScript"); // Access Tawk.to element

    console.log(tawkWidget)
    // Apply visibility styles based on scrolling
    if (tawkWidget) {
      tawkWidget.className = isVisible ? 'opacity-100' : 'opacity-0'
    }
  }, [isVisible]);

  return null; // No visible UI
};

export default TawkToIntegration;
