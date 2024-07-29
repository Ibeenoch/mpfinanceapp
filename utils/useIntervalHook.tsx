import { useEffect } from 'react';

const useInterval = (callback: () => void, delay: number | undefined) => {
  useEffect(() => {
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  }, [callback, delay]);
};

export default useInterval;