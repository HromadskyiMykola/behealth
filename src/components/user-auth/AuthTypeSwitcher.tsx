import { useState, MouseEvent } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function AuthTypeSwitcher() {
  const [alignment, setAlignment] = useState("web");
  const [authType, setAuthType] = useState("doctor");

  const handleChange = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const handleAuthTypeChange = (
    event: MouseEvent<HTMLElement>,
    newAuthType: string
  ) => {
    if (newAuthType !== null) {
      setAuthType(newAuthType);
    }
  };

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="web">Web</ToggleButton>
        <ToggleButton value="android">Android</ToggleButton>
        <ToggleButton value="ios">iOS</ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        value={authType}
        exclusive
        onChange={handleAuthTypeChange}
        aria-label="authentication type"
      >
        <ToggleButton value="doctor" aria-label="doctor authentication">
          Доктор
        </ToggleButton>
        <ToggleButton value="patient" aria-label="patient authentication">
          Пацієнт
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
