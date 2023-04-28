import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Tab, TabProps, styled } from "@mui/material";

const StyledTab = styled(Tab)(
  ({
    theme: {
      palette: { custom },
      breakpoints,
    },
  }) => ({
    justifyContent: "flex-start",
    whiteSpace: "nowrap",
    padding: "18px 12px",
    minHeight: "60px !important",
    borderRadius: "8px",
    color: custom.primary20,
    "&:hover": {
      background: custom.primary99,
    },
    "&.Mui-selected": {
      background: [breakpoints.down("md")] ? "transparent" : "#DCF7EA",
      color: custom.primary20,
    },
  })
) as typeof Tab;

export const TabLink = (props: TabProps) => {
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    navigate(props.value);
  };

  return <StyledTab onClick={handleClick} {...props} iconPosition="start" />;
};
