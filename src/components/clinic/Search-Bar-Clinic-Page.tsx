import { SyntheticEvent, useEffect, useMemo, useState } from "react";

import {
  Autocomplete,
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
  AutocompleteRenderInputParams,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  useTheme,
} from "@mui/material";
import { SearchIcon } from "lucide-react";

import { CustomizedInput, CustomizedPaper } from "../atomic";

import { TClinic } from "~/common";
import { useDeviceType } from "~/hooks";
import { useDataContext } from "~/providers";

const filterClinics = (clinics: TClinic[], str: string) =>
  clinics.filter(
    (doc) => doc.name.toLowerCase().indexOf(str.toLowerCase()) !== -1
  );

export const SearchBarClinicsPage = () => {
  const { clinics, setFilteredClinics } = useDataContext();
  const [searchStr, setSearchStr] = useState("");
  const { custom } = useTheme().palette;
  const { isSmDown } = useDeviceType();

  const clinicsNames = useMemo(
    () => clinics.map((clinic) => clinic.name),
    [clinics]
  );

  const onSubmitSearch = (str: string = searchStr) => {
    const filteredList = filterClinics(clinics, str);
    setFilteredClinics(filteredList);
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
      setFilteredClinics(clinics);
    }
  };

  const RenderInput = (params: AutocompleteRenderInputParams) => (
    <CustomizedInput
      {...params}
      label="Назва клініки"
      placeholder="Введіть назву клініки"
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
        <Autocomplete
          clearOnEscape
          blurOnSelect
          autoHighlight
          freeSolo
          fullWidth
          value={searchStr}
          options={clinicsNames}
          onChange={onChangeSearch}
          onInputChange={onInputChangeSearch}
          renderInput={RenderInput}
        />

        <Button
          sx={{ minWidth: "208px" }}
          variant="contained"
          onClick={() => onSubmitSearch()}
        >
          Знайти
        </Button>
      </Stack>
    </CustomizedPaper>
  );
};
