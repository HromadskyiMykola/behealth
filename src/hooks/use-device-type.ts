import { useState, useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

export const useDeviceType = () => {
  const [isSmDown, setIsSmDown] = useState(false);
  const [isMdDown, setIsMdDown] = useState(false);
  const [isWidth600, setIsWidth600] = useState(false);
  const [isWidth380, setIsWidth380] = useState(false);

  const { breakpoints } = useTheme();

  const isMob = useMediaQuery(breakpoints.down("mobile")); // 380
  const isSm = useMediaQuery(breakpoints.down("sm")); // 768
  const isMd = useMediaQuery(breakpoints.down("md")); // 1024
  const is600 = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    setIsSmDown(isSm);
    setIsMdDown(isMd);
    setIsWidth600(is600);
    setIsWidth380(isMob);
  }, [isSm, isMd, is600, isMob]);

  return { isSmDown, isMdDown, isWidth600, isWidth380 };
};
