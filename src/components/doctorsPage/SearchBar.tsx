import { SetStateAction, SyntheticEvent, useMemo, useState } from "react";

import {
  Autocomplete,
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
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
  setFilteredDoctors: (value: SetStateAction<TDoctor[]>) => void;
}

// done !
const specialtiesList = (doctors: TDoctor[]) =>
  doctors.reduce((acc: string[], doc) => {
    if (!acc.includes(doc.specialty)) {
      acc.push(doc.specialty);
    }
    return acc;
  }, []);
// done !

// done !
const filterNamesBySpec = (doctors: TDoctor[], selectedSpec: string) => {
  if (selectedSpec === "") return doctors.map((doc) => doc.name);

  return doctors
    .filter((doc) => doc.specialty === selectedSpec)
    .map((doc) => doc.name);
};
// done !

// done !
const filterDoctors = (doctors: TDoctor[], str: string) =>
  doctors.filter(
    (doc) => doc.name.toLowerCase().indexOf(str.toLowerCase()) !== -1
  );
// done !

export const SearchBar = ({ doctors, setFilteredDoctors }: ISearchBar) => {
  const [selectedSpec, setSelectedSpec] = useState(""); // done !
  const [searchStr, setSearchStr] = useState("");
  const { custom } = useTheme().palette;
  const { isSmDown } = useDeviceType();

  // done !
  const filteredNamesBySpec = useMemo(
    () => filterNamesBySpec(doctors, selectedSpec),
    [selectedSpec, doctors]
  );
  // done !

  // done !
  const handleSelectChange = (e: SelectChangeEvent<any>) => {
    setSelectedSpec(e.target.value as string);
  };
  // done !

  const onSubmitSearch = (str: string = searchStr) => {
    const filteredList = filterDoctors(doctors, str);
    setFilteredDoctors(filteredList);
  };

  const onChangeSearch = (
    event: SyntheticEvent<Element, Event>,
    value: string | null,
    reason: AutocompleteChangeReason
  ) => {
    if (reason === "selectOption" || reason === "createOption") {
      onSubmitSearch(value || ""); // done !
    }
  };

  const onInputChangeSearch = (
    event: SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => {
    // done !
    if (reason === "input") {
      setSearchStr(value);
    } else if (reason === "clear") {
      setFilteredDoctors(doctors);
      setSelectedSpec("");
    }
    // done !
  };

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
          {specialtiesList(doctors).map((spec) => (
            <MenuItem key={spec} value={spec}>
              {spec}
            </MenuItem>
          ))}
        </SelectWithPlaceholder>

        <Autocomplete
          clearOnEscape
          blurOnSelect
          freeSolo
          fullWidth
          options={filteredNamesBySpec}
          onChange={onChangeSearch}
          onInputChange={onInputChangeSearch}
          renderInput={(params) => (
            <CustomizedInput
              {...params}
              label="ПІБ лікаря"
              placeholder="Введіть імʼя лікаря"
              InputProps={{
                ref: params.InputProps.ref,
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={() => onSubmitSearch()}>
                      <SearchIcon color={custom.neutral70} />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: params.InputProps.endAdornment,
              }}
            />
          )}
        />

        <Button
          sx={{ minWidth: "175px" }}
          variant="contained"
          onClick={() => onSubmitSearch()}
        >
          Знайти
        </Button>
      </Stack>
    </CustomizedPaper>
  );
};
