import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Tab, TabProps, styled } from "@mui/material";

type TabLinkProps = TabProps & { to: string };

const StyledTab = styled(Tab)({
  justifyContent: "flex-start",
  whiteSpace: "nowrap",
  // padding: "18px 12px",
  // maxWidth: "280px",
  // height: "60px",
  borderRadius: "8px",
  "&:hover": {
    background: "#F4FFF8",
  },
  "&:active": {
    background: "#DCF7EA",
  },
  "&.Mui-selected": {
    background: "#DCF7EA",
  },
}) as typeof Tab;

export const TabLink = ({ to, ...tabProps }: TabLinkProps) => {
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    navigate(to);
  };

  return <StyledTab onClick={handleClick} {...tabProps} iconPosition="start" />;
};
