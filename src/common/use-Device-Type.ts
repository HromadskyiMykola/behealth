import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";

export const useDeviceType = () => {
  const [isMobileAgent, setIsMobileAgent] = useState(false);
  const isWidth600 = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobile = /Mobi|Android/i.test(userAgent);

    setIsMobileAgent(mobile);
  }, []);

  const isMobileDevice = isMobileAgent || isWidth600;

  return isMobileDevice;
};
