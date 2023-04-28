import { FC, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import {
  AppBar,
  Box,
  Typography,
  Select,
  SelectChangeEvent,
  MenuItem,
  Dialog,
  DialogContent,
  IconButton,
  Container,
  useTheme,
  Stack,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MenuIcon, XIcon, UserIcon } from "lucide-react";

import { useAuthProvider } from "~/providers";
import { ISelectItemHeaderValue } from "~/common";
import { ERouteNames } from "~/routes/routeNames";
import { AuthButton } from "~/components/user-auth";
import { Logo } from "~/assets/CustomIcon";
import { ButtonM } from "../atomic";

import {
  HEADER_SELECT_ITEM_VALUE,
  LINKS,
  PERSONAL_CABINET,
  SING_IN,
  MAKE_TO_APPOINTMENT,
} from "~/components/Header/constant-header";

const selectStyle = {
  padding: 0,
  ".MuiSvgIcon-root ": {
    color: "#000",
    fontSize: "21px",
  },
  "& .MuiOutlinedInput-input": { p: 0 },
  boxShadow: "none",
  ".MuiOutlinedInput-notchedOutline": { border: 0 },
  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
};

const Header: FC = (props) => {
  const { palette } = useTheme();
  const { authenticatedUser } = useAuthProvider();

  const [city, setCity] = useState(HEADER_SELECT_ITEM_VALUE[0].value);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };
  const setToggleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <AppBar position="static">
      <Container>
        <Stack
          direction="row"
          height="80px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" gap="24px" alignItems="center">
            <Link to={ERouteNames.HOME}>
              <Logo />
            </Link>

            <Select
              value={city}
              onChange={handleChange}
              IconComponent={KeyboardArrowDownIcon}
              sx={selectStyle}
            >
              {HEADER_SELECT_ITEM_VALUE.map(
                ({ value, text }: ISelectItemHeaderValue) => (
                  <MenuItem value={value} key={`Select-item-${value}`}>
                    <Typography variant="caption">{text}</Typography>
                  </MenuItem>
                )
              )}
            </Select>
          </Stack>

          <Stack
            component="nav"
            direction="row"
            spacing="24px"
            alignItems="center"
            sx={{ display: { md: "flex", xs: "none" } }}
          >
            <Stack direction="row" gap="24px">
              {LINKS.map(({ name, path }) => (
                <NavLink
                  to={path}
                  key={`label-${name}`}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    color: isActive
                      ? palette.custom.primary40
                      : palette.text.primary,
                  })}
                >
                  <Typography variant="body2">{name}</Typography>
                </NavLink>
              ))}
            </Stack>

            <ButtonM variant="contained">
              <Typography variant="button">{MAKE_TO_APPOINTMENT}</Typography>
            </ButtonM>

            <AuthButton />
          </Stack>

          <Stack
            direction="row"
            gap="12px"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <AuthButton />

            <IconButton aria-label="menu" onClick={setToggleOpenMenu}>
              <MenuIcon size={26} color="#212121" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>

      <Dialog open={openMenu} fullScreen>
        <DialogContent sx={{ p: 0 }}>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            borderBottom={`1px solid ${palette.text.secondary}`}
            p={2}
          >
            <Link
              to={ERouteNames.HOME}
              style={{ flexGrow: 1, textAlign: "center" }}
              onClick={() => setOpenMenu(false)}
            >
              <Logo />
            </Link>

            <IconButton aria-label="menu" onClick={() => setOpenMenu(false)}>
              <XIcon color={palette.text.secondary} />
            </IconButton>
          </Stack>

          {LINKS.map(({ name, path }) => (
            <Box
              key={`label-${name}`}
              p="24px 18px"
              borderBottom={`1px solid ${palette.text.secondary}`}
              onClick={() => setOpenMenu(false)}
            >
              <Link to={path} style={{ textDecoration: "none" }}>
                <Typography variant="body2" color={palette.text.primary}>
                  {name}
                </Typography>
              </Link>
            </Box>
          ))}

          <Box
            p="24px 18px"
            borderBottom={`1px solid ${palette.text.secondary}`}
            onClick={() => setOpenMenu(false)}
          >
            <Link to={ERouteNames.DOCTORS} style={{ textDecoration: "none" }}>
              <Typography variant="body2" color={palette.text.primary}>
                {MAKE_TO_APPOINTMENT}
              </Typography>
            </Link>
          </Box>
        </DialogContent>
      </Dialog>
    </AppBar>
  );
};

export default Header;
