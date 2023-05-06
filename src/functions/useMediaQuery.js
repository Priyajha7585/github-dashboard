import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    function handleMediaQueryChange(event) {
      setMatches(event.matches);
    }

    // Add the event listener to the MediaQueryList object
    mediaQueryList.addEventListener('change', handleMediaQueryChange);

    // Remove the event listener on unmount
    return () => {
      mediaQueryList.removeEventListener('change', handleMediaQueryChange);
    };
  }, [query]);

  return matches;
}
