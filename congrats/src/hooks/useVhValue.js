import {useEffect} from 'react';

export default function useVhValue() {
  useEffect(() => {
    const setVhValue = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', setVhValue);

    setVhValue();
  }, []);
}
