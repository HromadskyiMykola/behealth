import React, { FC, useState } from "react";
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
  Autocomplete,
  TextField,
  Paper,
  InputAdornment,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MenuIcon, XIcon, UserIcon, Search as SearchIcon } from "lucide-react";

import { DataProvider, useAuthProvider, useDataContext } from "~/providers";
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
  CITY,
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
  display: { xs: "none", md: "inline-flex" },
};

const Header: FC = (props) => {
  const { palette } = useTheme();
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);
  const [value, setValue] = useState<string | null>(CITY[0].title);
  const { optionsData, selectedCity, setSelectedCity, handleFilterChange } =
    useDataContext();

  const handleChange = (event: SelectChangeEvent) => {
    handleFilterChange("city", event.target.value);
    setSelectedCity(event.target.value as string);
  };

  const setToggleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  // const onClickUserAccountButton = ()=> {
  //   setOpenMenu(false)
  // }

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
              value={selectedCity}
              onChange={handleChange}
              IconComponent={KeyboardArrowDownIcon}
              sx={selectStyle}
            >
              {optionsData.city?.length > 0 &&
                optionsData.city.map((city: string) => (
                  <MenuItem value={city} key={`Select-item-${city}`}>
                    <Typography variant="caption">{city}</Typography>
                  </MenuItem>
                ))}
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
            borderBottom={`1px solid ${palette.custom.secondary90}`}
            p={2}
          >
            <Link
              to={ERouteNames.HOME}
              style={{ flexGrow: 1, textAlign: "start" }}
              onClick={() => setOpenMenu(false)}
            >
              <Logo />
            </Link>
            <Stack
              direction="row"
              gap="12px"
              onClick={() => setOpenMenu(false)}
            >
              <AuthButton />

              <IconButton aria-label="menu">
                <XIcon color={palette.text.primary} />
              </IconButton>
            </Stack>
          </Stack>
          <Stack direction="column" m="24px 18px">
            <Stack
              direction="column"
              borderBottom={`1px solid ${palette.custom.secondary90}`}
              gap="16px"
            >
              <Autocomplete
                freeSolo
                sx={{
                  "&.MuiAutocomplete-root .MuiOutlinedInput-root": {
                    padding: 0,
                  },
                }}
                options={CITY.map((option) => option.title)}
                onChange={(event: any, newValue: string | null) => {
                  setValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Search input"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: null,
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon style={{ marginLeft: "12px" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
                PaperComponent={({ children }) => (
                  <Paper
                    sx={{
                      maxHeight: "300px",
                      overflow: "auto",
                      scrollbarColor: "#000",
                      "&::-webkit-scrollbar": {
                        width: "8px",
                        height: "32px",
                      },
                      "&::-webkit-scrollbar-track": {
                        backgroundColor: "#BFC9C3",
                        padding: "16px 4px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#3ABD98",
                        borderRadius: "100px",
                      },
                      "&::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#5bbea3",
                      },
                      scrollbarWidth: "thin",
                      "& *::-webkit-scrollbar": {
                        width: "8px",
                        height: "32px",
                      },
                      "& *::-webkit-scrollbar-track": {
                        backgroundColor: "#BFC9C3",
                      },
                      "& *::-webkit-scrollbar-thumb": {
                        backgroundColor: "#3ABD98",
                        borderRadius: "100px",
                      },
                      "& *::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#5bbea3",
                      },
                    }}
                  >
                    {children}
                  </Paper>
                )}
              />
              <Typography variant="body2" mb={2} pl={1}>
                {value}
              </Typography>
            </Stack>
            <Stack direction="column" gap="24px" mt={3}>
              {LINKS.map(({ name, path }) => (
                <Link
                  to={path}
                  style={{ textDecoration: "none" }}
                  key={`label-${name}`}
                >
                  <Typography
                    variant="body2"
                    color={palette.text.primary}
                    onClick={() => setOpenMenu(false)}
                  >
                    {name}
                  </Typography>
                </Link>
              ))}
              <ButtonM
                variant="contained"
                onClick={() => {
                  navigate(ERouteNames.DOCTORS);
                  setOpenMenu(false);
                }}
              >
                {MAKE_TO_APPOINTMENT}
              </ButtonM>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </AppBar>
  );
};

export default Header;
