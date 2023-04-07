import { useState, useEffect } from "react";
import { Button, CircularProgress, ButtonProps } from "@mui/material";

type Props = ButtonProps & {
  onClick: () => void;
  timer?: number;
};

export const ButtonTimer60s = ({ onClick, timer = 60, ...otherProps }: Props) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  const handleClick = () => {
    setRemainingTime(timer);
    onClick();
  };

  useEffect(() => {
    if (remainingTime > 0) {
      const t = setInterval(() => {
        setRemainingTime((prevT) => prevT - 1);
      }, 1000);
      return () => clearInterval(t);
    }
  }, [remainingTime]);

  return (
    <Button
      {...otherProps}
      onClick={handleClick}
      disabled={remainingTime > 0}
      startIcon={
        <CircularProgress
          color="inherit"
          variant="determinate"
          value={(0 + remainingTime) * (100 / timer)}
          size={22}
        />
      }
    />
  );
};
