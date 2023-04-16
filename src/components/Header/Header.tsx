import React, { FC, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ButtonM } from "../atomic";
import Container from "@mui/material/Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";
import { ERouteNames } from "~/routes/routeNames";

import { AuthorizationButton } from "~/components/user-auth";
import Logo from "../../assets/CustomIcon/Logo";

const links = [
  {
    name: "Лікарі",
    path: ERouteNames.DOCTORS,
  },
  {
    name: "Клініки",
    path: ERouteNames.CLINICS,
  },
  {
    name: "Про beHealth",
    path: ERouteNames.ABOUT,
  },
];

const styledBox = {
  display: "flex",
  gap: "24px",
  alignItems: "center",
};

const Header: FC = (props) => {
  const [city, setCity] = useState("Cherkasy");


  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };
  return (
    <AppBar className="appBar" position="static">
      <Container className="_containerHeader">
        <Box sx={styledBox}>
          <NavLink to={ERouteNames.HOME}>
            <Logo
                width="180" height="33" viewBox="0 0 180 33" fill="none" xmlns="http://www.w3.org/2000/svg"
            />
          </NavLink>
          <Select
            labelId="select-city"
            id="select-city"
            value={city}
            label="City"
            onChange={handleChange}
            IconComponent={() => <KeyboardArrowDownIcon fontSize="small" />}
            sx={{
              p: 0,
              "& .MuiOutlinedInput-input": { p: 0 },
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
            }}
          >
            <MenuItem value={"Cherkasy"}>
              <Typography variant="caption">Черкаси</Typography>
            </MenuItem>
            <MenuItem value={"Kyiv"}>
              <Typography variant="caption">Київ</Typography>
            </MenuItem>
            <MenuItem value={"Termopil"}>
              <Typography variant="caption">Тернопіль</Typography>
            </MenuItem>
          </Select>
        </Box>
        <Box sx={styledBox}>
          <Box sx={styledBox}>
            {links.map(({ name, path }) => {
              return (
                // <NavLink to={path} key={name}>
                //   <Link variant="body2" className="_headerNavLink">
                //     {name}
                //   </Link>
                // </NavLink>
                <NavLink
                  to={path}
                  key={name}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="body2"
                    sx={{ textDecoration: "none", }}

                  >
                    {name}
                  </Typography>
                </NavLink>
              );
            })}
          </Box>

          <ButtonM variant="contained" >
            <Typography variant="button">Записатися</Typography>
          </ButtonM>

         <AuthorizationButton/>
 
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
