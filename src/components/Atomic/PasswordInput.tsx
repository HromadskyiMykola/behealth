import { useState, forwardRef, Ref } from "react";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material/";

import CustomizedInput, { CustomizedInputProps } from "./CustomizedInput";

function PasswordInput(props: CustomizedInputProps, ref: Ref<HTMLDivElement>) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <CustomizedInput
      sx={{ "input::-ms-reveal": { display: "none" } }}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePassword}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
      ref={ref}
    />
  );
}

export default forwardRef(PasswordInput);
