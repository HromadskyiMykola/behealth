import { SyntheticEvent, useEffect, useMemo, useState } from "react";

import {
  Autocomplete,
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
  AutocompleteRenderInputParams,
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

import { TDoctor } from "~/common";
import { useDeviceType } from "~/hooks";
import { useDataContext } from "~/providers";

const filterNamesBySpec = (doctors: TDoctor[], selectedSpec: string) => {
  if (selectedSpec === "") return doctors.map((doc) => doc.name);

  return doctors
    .filter((doc) => doc.speciality === selectedSpec)
    .map((doc) => doc.name);
};

const filterDoctors = (doctors: TDoctor[], str: string) =>
  doctors.filter(
    (doc) => doc.name.toLowerCase().indexOf(str.toLowerCase()) !== -1
  );

export const SearchBarDocPage = () => {
  const { doctors, optionsData, setFilteredDoctors } = useDataContext();
  const [selectedSpec, setSelectedSpec] = useState("");
  const [searchStr, setSearchStr] = useState("");
  const { custom } = useTheme().palette;
  const { isSmDown } = useDeviceType();

  useEffect(() => {
    selectedSpec && setSearchStr("");
  }, [selectedSpec]);

  const filteredNamesBySpec = useMemo(
    () => filterNamesBySpec(doctors, selectedSpec),
    [selectedSpec, doctors]
  );

  const handleSelectChange = (e: SelectChangeEvent<any>) => {
    setSelectedSpec(e.target.value as string);
  };

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
      setSearchStr(value || "");
      onSubmitSearch(value || "");
    }
  };

  const onInputChangeSearch = (
    event: SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => {
    if (reason === "input") {
      setSearchStr(value);
    } else if (reason === "clear") {
      setFilteredDoctors(doctors);
      setSelectedSpec("");
    }
  };

  const RenderInput = (params: AutocompleteRenderInputParams) => (
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
  );

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
          {optionsData.specs.map((spec, i) => (
            <MenuItem key={spec + i} value={spec}>
              {spec}
            </MenuItem>
          ))}
        </SelectWithPlaceholder>

        <Autocomplete
          clearOnEscape
          blurOnSelect
          autoHighlight
          freeSolo
          fullWidth
          value={searchStr}
          options={filteredNamesBySpec}
          onChange={onChangeSearch}
          onInputChange={onInputChangeSearch}
          renderInput={RenderInput}
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
