import { Button, CircularProgress, ButtonProps } from "@mui/material";
import { useState, useEffect } from "react";

type Props = ButtonProps & { onClick?: () => void };

export const TimerButton = (props: Props) => {
  const [timer, setTimer] = useState(60);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    let t: NodeJS.Timeout | undefined;

    if (isTimerActive && timer > 0) {
      t = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(t);
      setIsTimerActive(false);
      setTimer(60);
    }

    return () => clearInterval(t);
  }, [isTimerActive, timer]);

  const handleClick = () => {
    if (!isTimerActive) {
      setIsTimerActive(true);
      props.onClick && props.onClick();
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      disabled={isTimerActive || timer > 0}
      sx={{ position: "relative" }}
    >
      {timer > 0 ? (
        <CircularProgress
          variant="determinate"
          value={(60 - timer) * (100 / 60)}
          size={24}
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            marginTop: -12,
            marginLeft: -12,
          }}
        />
      ) : null}
      {timer > 0 ? `Wait ${timer}s` : "Start timer"}
    </Button>
  );
};
