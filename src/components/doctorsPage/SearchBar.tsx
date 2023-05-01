import {
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Autocomplete,
  AutocompleteChangeDetails,
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

// don`t touch
const specialtiesList = (doctors: TDoctor[]) =>
  doctors.reduce((acc: string[], doc) => {
    if (!acc.includes(doc.specialty)) {
      acc.push(doc.specialty);
    }
    return acc;
  }, []);
// don`t touch

// don`t touch
const filterNamesBySpec = (doctors: TDoctor[], selectedSpec: string) => {
  if (selectedSpec === "") return doctors.map((doc) => doc.name);

  return doctors
    .filter((doc) => doc.specialty === selectedSpec)
    .map((doc) => doc.name);
};
// don`t touch

// don`t touch
const filterDoctors = (doctors: TDoctor[], str: string) =>
  // doctors.filter((doc) => doc.name === str);
  doctors.filter(
    (doc) => doc.name.toLowerCase().indexOf(str.toLowerCase()) !== -1
  );
// don`t touch

export const SearchBar = ({ doctors, setFilteredDoctors }: ISearchBar) => {
  const [selectedSpec, setSelectedSpec] = useState(""); // don`t touch
  const [searchStr, setSearchStr] = useState("");
  const { custom } = useTheme().palette;
  const { isSmDown } = useDeviceType();

  // const [value, setValue] = useState(null);

  //   useEffect(() => {
  //     if (selectedSpec) {

  //   }
  // },[selectedSpec])

  // don`t touch
  const filteredNamesBySpec = useMemo(
    () => filterNamesBySpec(doctors, selectedSpec),
    [selectedSpec, doctors]
  );
  // don`t touch

  // don`t touch
  const handleSelectChange = (e: SelectChangeEvent<any>) => {
    setSelectedSpec(e.target.value as string);
  };
  // don`t touch

  
  const onSubmitSearch = (str: string = searchStr) => {
    const filteredList = filterDoctors(doctors, str);
    // console.log("!!!", searchString, "list >>", filteredList);

    setFilteredDoctors(filteredList);
  };

  const onChangeSearch = (
    event: SyntheticEvent<Element, Event>,
    value: string | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<string> | undefined
  ) => {
    // if (!value) {
    //   setFilteredDoctors(doctors);
    //   return;
    // }
    // if (event. === 13) {
    // }

    // setSearchString(value || "");

    if (
      reason === "selectOption"
      || reason === "createOption"
    ) {
      onSubmitSearch(value || ""); // don`t touch
    }

    // const filteredList = doctors.filter(
    //   (doc) => doc.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    // );
    // // console.log("!!!", searchString, "list >>", filteredList);

    // setFilteredDoctors(filteredList);

    console.log(
      "ev onCh>>",
      event,
      "val>>",
      value,
      "reas>>",
      reason,
      "det",
      details
    );
  };

  // useEffect(() => {
  //   searchString && onSubmitSearch();
  // }, [searchString]);
  const onInputChangeSearch = (
    event: SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => {
    // don`t touch
    if (reason === "clear") {
      setFilteredDoctors(doctors);
      setSelectedSpec("");
    }
    // don`t touch
    
    if (reason === "input") {
      setSearchStr(value);
    }



    // if (!value) {
    //   setFilteredDoctors(doctors);
    //   return;
    // }

    // setSearchString(value || "");

    // const filteredList = doctors.filter(
    //   (doc) => doc.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    // );
    // // console.log("!!!", searchString, "list >>", filteredList);

    // setFilteredDoctors(filteredList);

    console.log("ev onIn>>", event, "val>>", value, "reas>>", reason);
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
          //
          // autoSelect
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
