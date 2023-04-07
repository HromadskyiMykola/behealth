import { useState, useEffect } from "react";
import { Button, CircularProgress, ButtonProps } from "@mui/material";

type Props = ButtonProps & { onClick: () => void };

export const ButtonTimer60s = (props: Props) => {
  const [remainingTime, setRemainingTime] = useState(60);

  const handleClick = () => {
    setRemainingTime(60);
    props.onClick();
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
      {...props}
      onClick={handleClick}
      disabled={remainingTime > 0}
      startIcon={
        <CircularProgress
          color="inherit"
          variant="determinate"
          value={(0 + remainingTime) * (100 / 60)}
          size={22}
        />
      }
    />
  );
};
