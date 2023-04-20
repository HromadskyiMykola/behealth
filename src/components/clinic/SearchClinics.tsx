import { InputAdornment, Button, Stack, useTheme } from "@mui/material";
import { SearchIcon } from "lucide-react";
import { CustomizedInput, CustomizedPaper } from "~/components/atomic";

export const SearchClinics = () => {
  const { custom } = useTheme().palette;

  return (
    <CustomizedPaper sx={{ p: "32px 32px 40px 32px" }}>
      <Stack direction="row" gap="24px" alignItems="flex-end">
        <CustomizedInput
          placeholder="Введіть назву клініки"
          label="Назва клініки"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color={custom.neutral70} />
              </InputAdornment>
            ),
          }}
        />

        <Button sx={{ maxWidth: "208px", width: "100%" }} variant="contained">
          Знайти
        </Button>
      </Stack>
    </CustomizedPaper>
  );
};
