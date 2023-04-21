import React, { useState } from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { GetDateNextWeek } from "~/helper-function";
import { Button } from "@mui/material";
import { getHourIntervals } from "~/helper-function/get-hourses-work-doctor";
import Grid from "@mui/material/Grid";

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
  // height: "212px",
  maxWidth: "68px",
  minWidth: "68px",
  justifyContent: "flex-start",
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export const Calendar = () => {
  const [value, setValue] = React.useState(0);
  const [dateAppointment, setDateAppointment] = useState("");
  const [dayAppointment, setDayAppointment] = useState(
    GetDateNextWeek()[0].formattedDate
  );

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  console.log(dateAppointment, dayAppointment);
  return (
    <Box>
      <StyledTabs
        value={value}
        onChange={handleChangeTabs}
        variant="scrollable"
        scrollButtons
        aria-label="scrollable days of appointment to the doctor"
      >
        {GetDateNextWeek().map((date: any, index: number) => {
          const { dayOfWeek, dayOfMonth, month, formattedDate } = date;
          return (
            <StyledTab
              key={index}
              onClick={() => setDayAppointment(formattedDate)}
              {...a11yProps(index)}
              label={
                <Box display="flex" flexDirection="column">
                  <Typography variant="caption">{dayOfWeek}</Typography>
                  <Typography variant="caption">{`${dayOfMonth} ${month}`}</Typography>
                </Box>
              }
            />
          );
        })}
      </StyledTabs>
      {GetDateNextWeek().map((item: any, index: number) => {
        return (
          <TabPanel value={value} index={index} key={`tab-panel-${index}`}>
            <Grid container>
              {getHourIntervals("9.00").map((time: string) => {
                return (
                  <Grid item xs={4} key={`choose-time-${time}`}>
                    <Button
                      variant="text"
                      onClick={() => setDateAppointment(time)}
                    >
                      {time}
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </TabPanel>
        );
      })}
    </Box>
  );
};

/*<Box display="flex" flexDirection="column" gap="8px">*/

/*  <React.Fragment>*/
/*    <Button*/

/*      variant="text"*/
/*      sx={{ borderRadius: "8px", p: "0", color: "#212121" }}*/

/*    >*/

/*      9:00*/

/*    </Button>*/

/*  </React.Fragment>*/

/*  <React.Fragment>*/

/*    <Button*/

/*      variant="text"*/

/*      sx={{ borderRadius: "8px", p: "0", color: "#212121" }}*/

/*    >*/

/*      9:00*/

/*    </Button>*/

/*  </React.Fragment>*/

/*  <React.Fragment>*/

/*    <Button*/

/*      variant="text"*/

/*      sx={{ borderRadius: "8px", p: "0", color: "#212121" }}*/

/*    >*/

/*      9:00*/

/*    </Button>*/

/*  </React.Fragment>*/

/*</Box>*/
