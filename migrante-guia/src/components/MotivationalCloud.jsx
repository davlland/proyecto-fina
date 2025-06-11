import { useEffect, useState } from 'react';
import phrases from '../utils/phrases';

export default function MotivationalCloud() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cloud">
      {phrases[index]}
    </div>
  );
}
