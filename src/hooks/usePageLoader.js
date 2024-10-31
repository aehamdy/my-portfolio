import { useState, useEffect } from "react";

const usePageLoader = (duration = 3800) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return loading;
};

export default usePageLoader;
