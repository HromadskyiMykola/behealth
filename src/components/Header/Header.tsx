import React, { FC, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink, useNavigate } from "react-router-dom";
import { ERouteNames } from "~/routes/routeNames";
import { AuthorizationButton, FormModal } from "~/components/user-auth";
import Logo from "../../assets/CustomIcon/Logo";
import { ButtonM } from "../atomic/ButtonM";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  HEADER_SELECT_ITEM_VALUE,
  LINKS,
  SING_UP,
} from "~/components/Header/constant-header";
import { EUserType, ISelectItemHeaderValue } from "~/common";
import { Menu as MenuIcon, UserIcon, X } from "lucide-react";
import { useAuthProvider, useModalState } from "~/providers";

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

const BoxFlex = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "24px",
  alignItems: "center",
  // "@media (min-width: 1408px)": {
  //   display: "none",
  // },
}));

const Header: FC = (props) => {
  const { palette } = useTheme();
  const { authenticatedUser } = useAuthProvider();
  const { setOpenMainModal } = useModalState();

  const [city, setCity] = useState(HEADER_SELECT_ITEM_VALUE[0].value);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };
  const setToggleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <AppBar className="appBar" position="static">
      <Container className="_containerHeader">
        <BoxFlex>
          <NavLink to={ERouteNames.HOME}>
            <Logo
              width="180"
              height="33"
              viewBox="0 0 180 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            />
          </NavLink>
          <Select
            value={city}
            onChange={handleChange}
            IconComponent={KeyboardArrowDownIcon}
            sx={selectStyle}
          >
            {HEADER_SELECT_ITEM_VALUE.map((city: ISelectItemHeaderValue) => {
              const { value, text } = city;
              return (
                <MenuItem value={value} key={`Select-item-${value}`}>
                  <Typography variant="caption">{text}</Typography>
                </MenuItem>
              );
            })}
          </Select>
        </BoxFlex>
        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            gap: "24px",
            alignItems: "center",
          }}
        >
          <BoxFlex>
            {LINKS.map(({ name, path }) => {
              return (
                <NavLink
                  to={path}
                  key={`label-${name}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography variant="body2" color={palette.text.primary}>
                    {name}
                  </Typography>
                </NavLink>
              );
            })}
          </BoxFlex>
          <ButtonM variant="contained">
            <Typography variant="button">{SING_UP}</Typography>
          </ButtonM>
          <AuthorizationButton />
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            gap: "24px",
            alignItems: "center",
          }}
        >
          <IconButton aria-label="menu" onClick={setToggleOpenMenu}>
            {!openMenu ? (
              <MenuIcon color={palette.text.secondary} />
            ) : (
              <X color={palette.text.secondary} />
            )}
          </IconButton>
          <Dialog open={openMenu} fullScreen>
            <DialogContent sx={{ p: 0 }}>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                borderBottom={`1px solid ${palette.text.secondary}`}
                p={2}
              >
                <Box width="100%" display="flex" justifyContent="center">
                  <NavLink to={ERouteNames.HOME}>
                    <Logo
                      width="180"
                      height="33"
                      viewBox="0 0 180 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    />
                  </NavLink>
                </Box>
                <Box>
                  <IconButton
                    aria-label="menu"
                    onClick={() => setOpenMenu(false)}
                  >
                    <X color={palette.text.secondary} />
                  </IconButton>
                </Box>
              </Box>
              {LINKS.map(({ name, path }) => {
                return (
                  <Box
                    key={`label-${name}`}
                    p="24px 18px"
                    borderBottom={`1px solid ${palette.text.secondary}`}
                    onClick={() => setOpenMenu(false)}
                  >
                    <NavLink to={path} style={{ textDecoration: "none" }}>
                      <Typography variant="body2" color={palette.text.primary}>
                        {name}
                      </Typography>
                    </NavLink>
                  </Box>
                );
              })}
              <Box
                p="24px 18px"
                borderBottom={`1px solid ${palette.text.secondary}`}
                onClick={() => setOpenMenu(false)}
              >
                <NavLink
                  to={ERouteNames.DOCTORS}
                  style={{ textDecoration: "none" }}
                >
                  <Typography variant="body2" color={palette.text.primary}>
                    {SING_UP}
                  </Typography>
                </NavLink>
              </Box>
              <Box
                p="24px 18px"
                borderBottom={`1px solid ${palette.text.secondary}`}
                onClick={() => {
                  setOpenMenu(false);
                  !authenticatedUser && setOpenMainModal(true);
                }}
              >
                <NavLink
                  to={
                    authenticatedUser?.type === EUserType.PATIENT
                      ? ERouteNames.PATIENT_ACCOUNT
                      : ERouteNames.DOCTOR_ACCOUNT
                  }
                  style={{ textDecoration: "none" }}
                >
                  <Typography variant="body2" color={palette.text.primary}>
                    {!authenticatedUser ? "Увійти" : "Особистий кабінет"}
                  </Typography>
                </NavLink>
                <FormModal />
              </Box>
            </DialogContent>
          </Dialog>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
