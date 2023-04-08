import { forwardRef, Ref } from "react";
import InputMask, { Props } from "react-input-mask";

import { CustomizedInput, CustomizedInputProps } from "./CustomizedInput";

function InputWithMask(props: any, ref: Ref<HTMLDivElement>) {
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
