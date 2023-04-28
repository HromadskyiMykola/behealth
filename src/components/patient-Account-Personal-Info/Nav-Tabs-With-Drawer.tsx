import { useState } from "react";

import {
  Typography,
  Stack,
  IconButton,
  SwipeableDrawer,
  Button,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { NavTabs } from "~/components/patient-Account-Personal-Info";

export const NavTabsWithDrawer = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = () => {
    setState(!state);
  };

  return (
    <>
      <Button
        sx={{ width: "328px", alignSelf: "center" }}
        variant="outlined"
        onClick={toggleDrawer}
      >
        Особистий кабінет
      </Button>

      <SwipeableDrawer
        anchor="left"
        open={state}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <Stack
            sx={{ width: "360px" }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <Stack
            height="60px"
            p="0px 22px 0px 16px"
            color="white"
            sx={{ backgroundColor: "#3ABD98" }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle2">Особистий кабінет</Typography>

            <IconButton color="inherit">
              <CloseIcon />
            </IconButton>
          </Stack>

          <NavTabs />
        </Stack>
      </SwipeableDrawer>
    </>
  );
};
