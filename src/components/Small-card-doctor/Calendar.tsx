import React from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { makeStyles, styled } from "@mui/material/styles";

const useTabStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
  scroller: {
    flexGrow: "0",
  },
});

const StyledTabs = styled(Tabs)(({ theme }) => ({
  "&.MuiButtonBase": {
    color: "red",
    root: {
      color: "red",
    },
  },
  [`& .${tabsClasses.scrollButtons}`]: {
    "&.Mui-disabled": { opacity: 0.3, color: theme.palette.custom.neutral80 },
  },
}));
export const Calendar = () => {
  const [value, setValue] = React.useState(0);

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <StyledTabs
        value={value}
        onChange={handleChangeTabs}
        variant="scrollable"
        scrollButtons
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Mo" />
        <Tab label="Th" />
        <Tab label="We" />
      </StyledTabs>
    </Box>
  );
};
