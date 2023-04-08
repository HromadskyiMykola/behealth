import { forwardRef, Ref } from "react";
import InputMask, { Props } from "react-input-mask";

import { CustomizedInput } from "./CustomizedInput";
import { TextFieldProps } from "@mui/material";

function InputWithMask(props: Props & TextFieldProps, ref: Ref<HTMLDivElement & InputMask>) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedValue = event.target.value.replace(/\D+/g, "");
    
    if (props.onChange) {
      props.onChange({
        ...event,
        target: { ...event.target, value: cleanedValue },
      });
    }
  };

  return (
    <InputMask
      {...props}
      mask="+38 (999) 999 99 99"
      maskPlaceholder="X"
      value={props.value}
      onChange={handleChange}
      ref={ref}
    >
      <CustomizedInput />
    </InputMask>
  );
}

export const InputMobileNumber = forwardRef(InputWithMask);
