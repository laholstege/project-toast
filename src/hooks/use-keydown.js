import React from 'react';

export function useKeyDown(key, func) {
  console.log('useKeyDown');
  React.useEffect(() => {
    console.log('useEffect');
    const handleKeyDown = (e) => {
      if (e.key === key) {
        func();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, func]);
}
