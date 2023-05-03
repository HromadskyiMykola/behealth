import React, { SyntheticEvent, useEffect, useState } from "react";
import background from "../../assets/images/hero-background.png";
import image from "../../assets/images/hero-image.png";
import {
  Container,
  Box,
  Typography,
  Autocomplete,
  TextField,
  InputAdornment,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { RoomOutlined } from "@mui/icons-material";
import { FilterIcon, Search as SearchIcon } from "lucide-react";
import { TClinic, TDoctor, useApiService } from "~/common";
import { useNavigate } from "react-router-dom";
import { useLocationContext } from "~/providers/LocationProvider";

const searchOptionsSpreading = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  maxWidth: "392px",
};

export const Hero = () => {
  const [district, setDistrict] = useState<string>("");
  const [doctors, setDoctors] = useState<TDoctor[]>([] as TDoctor[]);
  const [clinics, setClinics] = useState<TClinic[]>([] as TClinic[]);
  const [search, setSearch] = useState<any>([]);
  const [searchStr, setSearchStr] = useState<TDoctor | TClinic | null>(null);
  const { getClinics, getDoctors } = useApiService();
  const { city, setCity } = useLocationContext();
  const navigate = useNavigate();
  const theme = useTheme();
  const laptopDevice = useMediaQuery(theme.breakpoints.down("laptop"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    (async function fetchData() {
      const doctors = await getDoctors();
      const clinics = await getClinics();
      setSearch([...doctors, ...clinics]);
    })();
  }, []);

  useEffect(() => {
    console.log(city);
  }, [city]);

  const onChangeSearch = (
    event: SyntheticEvent<Element, Event>,
    value: any,
    reason: any
  ) => {
    if (reason === "selectOption" || reason === "createOption") {
      setSearchStr(value || "");
      console.log("onChange", value);
    }
  };

  const onInputChangeSearch = (
    event: SyntheticEvent<Element, Event>,
    value: any,
    reason: any
  ) => {
    console.log("onInput", value);
    // const filteredSearch = search.filter((item: any) => {
    //   return item.name.toLowerCase().includes(value.toLowerCase());
    // });
    // console.log(filteredSearch);
    // setSearch(filteredSearch);
  };

  const onSubmitSearch = () => {
    if (searchStr) {
      if (searchStr.dataType === "doctor") {
        navigate(`/doctors/${searchStr.id}`);
      } else {
        navigate(`/clinics/${searchStr.id}`);
      }
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingBottom: "58px",
        borderBottom: "1px solid #CEE9DC;",
        display: "flex",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            laptop: "space-between",
          },
        }}
      >
        <Box
          sx={{
            maxWidth: "807px",
            mt: {
              xs: "40px",
              sm: "188px",
            },
          }}
        >
          <Typography
            color="#00382A"
            sx={{
              typography: {
                xs: "h5",
                sm: "h1",
              },
              mb: "24px",
            }}
          >
            Шукайте{" "}
            <Typography
              color="#006C53"
              component="span"
              sx={{
                typography: {
                  xs: "h5",
                  sm: "h1",
                },
              }}
            >
              лікарів та клініки
            </Typography>{" "}
            не виходячи з дому
          </Typography>
          <Typography
            sx={{
              mb: "40px",
              typography: {
                xs: "body2",
                sm: "body1",
              },
            }}
          >
            Завдяки інноваційній медичній реформі та системі eHealth, у вас є
            можливість зручно планувати свої походи до лікарні онлайн
          </Typography>
          <Box
            sx={{
              width: "100%",
              background: "#fff",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0px 1px 20px 1px rgba(255, 255, 255, 0.2)",
              borderRadius: "12px",
              padding: "8px 0",
            }}
          >
            <Autocomplete
              sx={{
                pl: "24px",
                width: "100%",
                "&.MuiAutocomplete-root .MuiOutlinedInput-root": {
                  padding: 0,
                },
              }}
              clearOnEscape
              blurOnSelect
              // freeSolo
              // value={searchStr}
              onChange={onChangeSearch}
              onInputChange={onInputChangeSearch}
              options={search}
              getOptionLabel={(option) => option.name}
              filterOptions={(options, state) =>
                options.filter(
                  (option) =>
                    option.name
                      .toLowerCase()
                      .indexOf(state.inputValue.toLowerCase()) !== -1 &&
                    (city === "Вся Україна" ||
                      option.city.toLowerCase().indexOf(city.toLowerCase()) !==
                        -1) &&
                    (district === "" ||
                      option.district
                        .toLowerCase()
                        .indexOf(district.toLowerCase()) !== -1)
                )
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Пошук лікарів та клінік"
                  sx={{
                    "& input": {
                      fontSize: "16px",
                      weight: 500,
                    },
                    "& fieldset": {
                      display: "none",
                    },
                  }}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: null,
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon
                          aria-disabled={true}
                          onClick={onSubmitSearch}
                          color="#A4ADA8"
                          style={{ marginRight: "16px", cursor: "pointer" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
              PaperComponent={({ children }) => (
                <Paper
                  sx={{
                    maxHeight: "480px",
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
                      {option.speciality || "Медичний заклад"}
                    </Typography>
                  </Box>
                </MenuItem>
              )}
            />
            {sm ? (
              <>
                <Box
                  sx={{
                    p: "0 14px 0 16px",
                    borderLeft: "1px solid #A4ADA8",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FilterIcon color="#A4ADA8" fontSize={24} />
                </Box>
              </>
            ) : (
              <TextField
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="Введіть район"
                sx={{
                  pr: "23px",
                  "& input": {
                    fontSize: "16px",
                    weight: 500,
                  },
                  borderLeft: "1px solid #A4ADA8",
                  "& fieldset": { display: "none" },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <RoomOutlined
                        sx={{ color: "#A4ADA8" }}
                        fontSize="medium"
                      />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          </Box>
        </Box>
        {!laptopDevice && (
          <Box sx={{ mt: "82px" }}>
            <img src={image} alt="image" width={568} height={568} />
          </Box>
        )}
      </Container>
    </Box>
  );
};
