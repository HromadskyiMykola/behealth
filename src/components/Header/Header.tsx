import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import Container from "@mui/material/Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";
import { RouteNames } from "../../routes";

const links: string[] = ["Лікарі", "Клініки", "Про beHealth"];
const styledBox = {
  display: "flex",
  gap: "24px",
  alignItems: "center",
};

const Header: React.FC = (props) => {
  const [city, setCity] = React.useState("Cherkasy");

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };
  return (
    <AppBar className="appBar">
      <Container className="_containerHeader">
        <Box sx={styledBox}>
          <NavLink to={RouteNames.HOME}>
            <Typography className="_logo" width="180px" height="32px">
              beHealth
            </Typography>
          </NavLink>
          <Select
            // disableUnderline
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
            // class doesnt work wtf !!!
            className="_selectChooseCity"
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
            {links.map((link) => {
              return (
                <Link key={link} variant="body2" className="_headerNavLink">
                  {link}
                </Link>
              );
            })}
          </Box>
          <Button variant="contained" className="_headerAppointmentButton">
            <Typography variant="button">Записатися</Typography>
          </Button>
          <Button variant="outlined" className="_headerSingInButton">
            <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <PersonIcon fontSize="small" />
              <Typography variant="button">Увійти</Typography>
            </Box>
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
