import { useState, forwardRef, Ref } from "react";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material/";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { CustomizedInput, CustomizedInputProps } from ".";

function Input(props: CustomizedInputProps, ref: Ref<HTMLDivElement>) {
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
