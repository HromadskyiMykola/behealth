import { useState, useEffect } from "react";

export const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobile = /Mobi|Android/i.test(userAgent);
    setIsMobile(mobile);
  }, []);

  return isMobile;
};
