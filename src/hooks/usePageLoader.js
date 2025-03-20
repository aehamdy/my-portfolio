/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const usePageLoader = (duration) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, []);

  return loading;
};

export default usePageLoader;
