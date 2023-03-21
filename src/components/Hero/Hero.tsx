import React, { useState } from "react";
import background from "../../assets/images/hero-background.png";
import image from "../../assets/images/hero-image.png";
import { Container, Box, Typography, styled, InputBase } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { RoomOutlined } from "@mui/icons-material";
import { Search as SearchIcon } from "lucide-react";

const styledContainer = {
  display: "flex",
  gap: "75px",
  // alignItems: "center",
};

const styledBox = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "708px",
  borderBottom: "1px solid #CEE9DC;",
  display: "flex",
  // alignItems: "center",
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
  padding: "23px 0",
}));

export const Hero = () => {
  const [city, setCity] = useState("Уся Україна");

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };
  return (
    <Box sx={styledBox}>
      <Container maxWidth="xl" sx={styledContainer}>
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
            <InputBase
              placeholder={"Пошук лікарів та клінік"}
              sx={{ pl: "24px", width: "55%" }}
              startAdornment={
                <SearchIcon color={"#999"} style={{ marginRight: "16px" }} />
              }
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
              }}
            >
              <MenuItem value={"Уся Україна"}>
                <Typography variant="caption">Уся Україна</Typography>
              </MenuItem>
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
          </Search>
        </Box>
        <Box sx={{ mt: "82px" }}>
          <img src={image} alt="image" width={568} height={568} />
        </Box>
      </Container>
    </Box>
  );
};
