import { useState, useEffect } from 'react';

export function useAnimationPause() {
  const [paused, setPaused] = useState<boolean>(() => {
    return localStorage.getItem('kitchenwatch_animations_paused') === 'true';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (paused) {
      root.classList.add('animations-paused');
      localStorage.setItem('kitchenwatch_animations_paused', 'true');
    } else {
      root.classList.remove('animations-paused');
      localStorage.setItem('kitchenwatch_animations_paused', 'false');
    }
  }, [paused]);

  const toggle = () => setPaused((p) => !p);

  return { paused, toggle };
}
