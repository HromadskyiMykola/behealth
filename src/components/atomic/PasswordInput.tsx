import { useState, forwardRef, Ref } from "react";
import { InputAdornment, IconButton, TextFieldProps } from "@mui/material";

import { EyeIcon, EyeOffIcon } from "lucide-react";

import { CustomizedInput } from ".";

function Input(props: TextFieldProps, ref: Ref<HTMLDivElement>) {
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
              {showPassword ? <EyeIcon size={22} /> : <EyeOffIcon size={22} />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
      ref={ref}
    />
  );
}

export const PasswordInput = forwardRef(Input);
