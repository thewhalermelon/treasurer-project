// hooks/useWindowWidth.ts
import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  // State to store the window width
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    // Handler to set the current window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call the handler right away to set the initial window width
    handleResize();

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

export default useWindowWidth;
