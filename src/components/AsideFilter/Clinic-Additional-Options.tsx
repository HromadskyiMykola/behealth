import { useDataContext } from "~/providers";

import { OptionsWrapper } from ".";
import { CheckBoxOption } from "./Check-Box-Option";

export const ClinicAdditionalOptions = () => {
  const { selectedFilters, handleFilterChange } = useDataContext();

  const { parking, kidsRoom, paymentByCard, zoneWiFi, pharmacy } =
    selectedFilters;

  return (
    <OptionsWrapper label="Додаткові опції">
      <CheckBoxOption
        label={parking.title}
        checked={parking.val}
        onChange={(e, checked) => handleFilterChange("parking", checked)}
      />

      <CheckBoxOption
        label={kidsRoom.title}
        checked={kidsRoom.val}
        onChange={(e, checked) => handleFilterChange("kidsRoom", checked)}
      />

      <CheckBoxOption
        label={paymentByCard.title}
        checked={paymentByCard.val}
        onChange={(e, checked) => handleFilterChange("paymentByCard", checked)}
      />

      <CheckBoxOption
        label={zoneWiFi.title}
        checked={zoneWiFi.val}
        onChange={(e, checked) => handleFilterChange("zoneWiFi", checked)}
      />

      <CheckBoxOption
        label={pharmacy.title}
        checked={pharmacy.val}
        onChange={(e, checked) => handleFilterChange("pharmacy", checked)}
      />
    </OptionsWrapper>
  );
};
