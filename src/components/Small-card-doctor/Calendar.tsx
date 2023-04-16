import React from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { GetDateNextWeek } from "~/helper-function";
import { Button } from "@mui/material";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  [`& .${tabsClasses.scrollButtons}`]: {
    height: "48px",
    // marginTop: "10px",
    justifyContent: "center",
    "&.Mui-disabled": {
      opacity: 0.3,
      color: theme.palette.custom.neutral80,
      height: "48px",
    },
  },
}));
const StyledTab = styled(Tab)(({ theme }) => ({
  padding: "0",
  color: theme.palette.text.primary,
  height: "212px",
  maxWidth: "68px",
  minWidth: "68px",
  justifyContent: "flex-start",
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
        {GetDateNextWeek().map((item: any, index: number) => {
          const { dayOfWeek, dayOfMonth, month } = item;
          return (
            <StyledTab
              key={index}
              label={
                <Box display="flex" flexDirection="column" gap="16px">
                  <Box display="flex" flexDirection="column">
                    <Typography variant="caption">{dayOfWeek}</Typography>
                    <Typography variant="caption">{`${dayOfMonth} ${month}`}</Typography>
                  </Box>
                  <Box display="flex" flexDirection="column" gap="8px">
                    <Button
                      variant="text"
                      sx={{ borderRadius: "8px", p: "0", color: "#212121" }}
                    >
                      9:00
                    </Button>
                    <Button
                      variant="text"
                      sx={{ borderRadius: "8px", p: "0", color: "#212121" }}
                    >
                      9:00
                    </Button>
                    <Button
                      variant="text"
                      sx={{ borderRadius: "8px", p: "0", color: "#212121" }}
                    >
                      9:00
                    </Button>
                  </Box>
                </Box>
              }
            />
          );
        })}
      </StyledTabs>
    </Box>
  );
};
