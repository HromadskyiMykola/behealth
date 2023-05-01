import { SyntheticEvent, useEffect, useMemo, useState } from "react";

import {
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  SelectChangeEvent,
  Stack,
  useTheme,
} from "@mui/material";
import { SearchIcon } from "lucide-react";

import {
  CustomizedInput,
  CustomizedPaper,
  SelectWithPlaceholder,
} from "../atomic";
import { TDoctor, useDeviceType } from "~/common";

interface ISearchBar {
  doctors: TDoctor[];
  setFilteredDoctors: (value: React.SetStateAction<TDoctor[]>) => void;
}

const specialties = (doctors: TDoctor[]) =>
  doctors.reduce((acc: string[], doc) => {
    if (!acc.includes(doc.specialty)) {
      acc.push(doc.specialty);
    }
    return acc;
  }, []);

const namesList = (selectedSpec: string, doctors: TDoctor[]) =>
  doctors
    .filter((doc) => selectedSpec === "" || doc.specialty === selectedSpec)
    .map((doc) => doc.name);

export const SearchBar = ({ doctors, setFilteredDoctors }: ISearchBar) => {
  const [selectedSpec, setSelectedSpec] = useState("");
  const [searchString, setSearchString] = useState("");
  const { custom } = useTheme().palette;
  const { isSmDown } = useDeviceType();

  // const [value, setValue] = useState(null);

  const filteredDoctors = useMemo(
    () => namesList(selectedSpec, doctors),
    [selectedSpec, doctors]
  );

  const handleSelectChange = (e: SelectChangeEvent<any>) => {
    setSelectedSpec(e.target.value as string);
  };

  const onSubmitSearch = () => {
    const filteredList = doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    );
    console.log("!!!", searchString, "list >>", filteredList);

    setFilteredDoctors(filteredList);
  };

  const onChangeSearch = (
    event: SyntheticEvent<Element, Event>,
    value: string | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<string> | undefined
  ) => {
    setSearchString(value || "");

    // if (reason === "selectOption" || reason === "createOption") {
    //   onSubmitSearch();
    // }

    console.log(event.target, "val>>", value, "reas>>", reason, "det", details);
  };

  useEffect(() => {
    searchString && onSubmitSearch();
  }, [searchString]);

  return (
    <CustomizedPaper
      sx={{ p: isSmDown ? "24px 16px 28px 16px" : "32px 32px 40px 32px" }}
    >
      <Stack
        direction={isSmDown ? "column" : "row"}
        gap="24px"
        alignItems={isSmDown ? "stretch" : "flex-end"}
        justifyItems="center"
      >
        <SelectWithPlaceholder
          sx={{ display: "flex", flexBasis: "40%", minWidth: "150px" }}
          label="Спеціальність"
          placeholder="Обрати"
          value={selectedSpec}
          onChange={handleSelectChange}
        >
          {specialties(doctors).map((spec) => (
            <MenuItem key={spec} value={spec}>
              {spec}
            </MenuItem>
          ))}
        </SelectWithPlaceholder>

        <Autocomplete
          freeSolo
          loading
          loadingText="Завантаження..."
          fullWidth
          options={filteredDoctors}
          onChange={onChangeSearch}
          renderInput={(params) => (
            <CustomizedInput
              {...params}
              label="ПІБ лікаря"
              placeholder="Введіть імʼя лікаря"
              InputProps={{
                ref: params.InputProps.ref,
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon color={custom.neutral70} />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: params.InputProps.endAdornment,
              }}
              // onChange={onChangeSearch}
            />
          )}
        />

        <Button sx={{ minWidth: "175px" }} variant="contained">
          Знайти
        </Button>
      </Stack>
    </CustomizedPaper>
  );
};
