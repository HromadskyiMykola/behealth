import React, { useState } from "react";
import background from "../../assets/images/hero-background.png";
import image from "../../assets/images/hero-image.png";
import {
  Container,
  Box,
  Typography,
  styled,
  Autocomplete,
  TextField,
  InputAdornment,
  Paper,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { RoomOutlined } from "@mui/icons-material";
import { Search as SearchIcon } from "lucide-react";
import { searchOptions } from "~/components/Main/main.constants";

const styledContainer = {
  display: "flex",
  justifyContent: "space-between",
};

const styledBox = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "708px",
  borderBottom: "1px solid #CEE9DC;",
  display: "flex",
};

const Search = styled("div")(({ theme }) => ({
  width: "100%",
  background: "#fff",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0px 1px 20px 1px rgba(255, 255, 255, 0.2)",
  borderRadius: "12px",
  padding: "8px 0",
}));

const searchOptionsSpreading = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  maxWidth: "392px",
};

export const Hero = () => {
  const [city, setCity] = useState("Уся Україна");

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  return (
    <Box sx={styledBox}>
      <Container sx={styledContainer}>
        <Box sx={{ maxWidth: "807px", mt: "188px" }}>
          <Typography variant={"h1"} sx={{ color: "#00382A", mb: "24px" }}>
            Шукайте{" "}
            <Typography
              variant={"h1"}
              component="span"
              sx={{ color: "#006C53" }}
            >
              лікарів та клініки
            </Typography>{" "}
            не виходячи з дому
          </Typography>
          <Typography variant={"body1"} sx={{ mb: "40px" }}>
            Завдяки інноваційній медичній реформі та системі eHealth, у вас є
            можливість зручно планувати свої походи до лікарні онлайн
          </Typography>
          <Search>
            <Autocomplete
              sx={{ pl: "24px", width: "100%" }}
              options={searchOptions}
              getOptionLabel={(option) => option.name + " " + option.speciality}
              filterOptions={(options, state) =>
                options.filter(
                  (option) =>
                    option.name
                      .toLowerCase()
                      .indexOf(state.inputValue.toLowerCase()) !== -1 ||
                    option.speciality
                      .toLowerCase()
                      .indexOf(state.inputValue.toLowerCase()) !== -1
                )
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Пошук лікарів та клінік"
                  sx={{
                    "& fieldset": {
                      display: "none",
                    },
                  }}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: null,
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon style={{ marginRight: "16px" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
              PaperComponent={({ children }) => (
                <Paper sx={{ maxHeight: "480px", overflow: "auto" }}>
                  {children}
                </Paper>
              )}
              renderOption={(props, option) => (
                <MenuItem
                  key={option.name}
                  sx={{
                    borderBottom: "1px solid #BFC9C3",
                    p: "12px 0",
                  }}
                  {...props}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <Typography
                      sx={searchOptionsSpreading}
                      color="#212121"
                      variant="body2"
                    >
                      {option.name}
                    </Typography>
                    <Typography
                      sx={searchOptionsSpreading}
                      color="#8E918F"
                      variant="caption"
                    >
                      {option.speciality}
                    </Typography>
                  </Box>
                </MenuItem>
              )}
            />
            <Select
              labelId="select-city"
              id="select-city"
              value={city}
              label="City"
              onChange={handleChange}
              IconComponent={() => <RoomOutlined sx={{ color: "#999" }} />}
              sx={{
                fontSize: "16px",
                p: "0 112px 0 16px",
                borderLeft: "1px solid #999",
                borderRadius: 0,
                fontWeight: "500",
                fontFamily: "Inter",
                color: "#999",
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
                "&.MuiInputBase-root": {
                  display: "flex!important",
                  flexDirection: "row-reverse!important",
                  gap: "16px",
                },
              }}
            >
              <MenuItem value={"Уся Україна"}>
                <Typography
                  fontSize={"16px"}
                  sx={{ color: "#999" }}
                  variant="caption"
                >
                  Уся Україна
                </Typography>
              </MenuItem>
              <MenuItem value={"Cherkasy"}>
                <Typography
                  fontSize={"16px"}
                  sx={{ color: "#999" }}
                  variant="caption"
                >
                  Черкаси
                </Typography>
              </MenuItem>
              <MenuItem value={"Kyiv"}>
                <Typography
                  fontSize={"16px"}
                  sx={{ color: "#999" }}
                  variant="caption"
                >
                  Київ
                </Typography>
              </MenuItem>
              <MenuItem value={"Termopil"}>
                <Typography
                  fontSize={"16px"}
                  sx={{ color: "#999" }}
                  variant="caption"
                >
                  Тернопіль
                </Typography>
              </MenuItem>
            </Select>
          </Search>
        </Box>
        <Box sx={{ mt: "82px" }}>
          <img src={image} alt="image" width={568} height={568} />
        </Box>
      </Container>
    </Box>
  );
};
