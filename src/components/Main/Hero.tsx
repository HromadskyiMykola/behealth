import { SyntheticEvent, useEffect, useState } from "react";
import background from "../../assets/images/hero-background.png";
import image from "../../assets/images/hero-image.png";
import {
  Container,
  Box,
  Typography,
  Autocomplete,
  TextField,
  InputAdornment,
  useMediaQuery,
  useTheme,
  IconButton,
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { RoomOutlined } from "@mui/icons-material";
import { FilterIcon, Search as SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useGetData } from "~/hooks";
import { genKey } from "~/helper-function";

const searchOptionsSpreading = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  maxWidth: "392px",
};

export const Hero = () => {
  const [district, setDistrict] = useState<string>("");
  const [search, setSearch] = useState<any>([]);
  const [searchStr, setSearchStr] = useState<string>("");
  const { clinics, doctors } = useGetData();
  const navigate = useNavigate();
  const theme = useTheme();
  const laptopDevice = useMediaQuery(theme.breakpoints.down("laptop"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const names = [...doctors, ...clinics].map((item) => item.name);

    setSearch(names);
  }, [clinics, doctors]);

  const onSubmitSearch = (str: string = searchStr) => {
    const matched = [...doctors, ...clinics].find((item) => item.name === str);
    console.log(searchStr, matched);
    matched?.dataType === "doctor" && navigate(`/doctors/${matched.id}`);
    matched?.dataType === "clinic" && navigate(`/clinics/${matched.id}`);
  };

  const onChangeSearch = (
    event: SyntheticEvent<Element, Event>,
    value: string | null,
    reason: AutocompleteChangeReason
  ) => {
    reason === "selectOption" && onSubmitSearch(value || searchStr);
  };

  const onInputChangeSearch = (
    event: SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => {
    reason === "input" && setSearchStr(value);
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
              autoHighlight
              onChange={onChangeSearch}
              onInputChange={onInputChangeSearch}
              options={search}
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
                  onKeyDown={(e) => e.key === "Enter" && onSubmitSearch()}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: null,
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton>
                          <SearchIcon
                            aria-disabled={true}
                            onChange={() => onSubmitSearch()}
                            color="#A4ADA8"
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
              renderOption={(props, option) => (
                <MenuItem
                  key={genKey()}
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
                      {option}
                    </Typography>
                  </Box>
                </MenuItem>
              )}
            />

            {sm ? (
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
