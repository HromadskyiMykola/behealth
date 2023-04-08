import { forwardRef, Ref } from "react";
import ReactInputMask, { Props } from "react-input-mask";

import { CustomizedInput } from "./CustomizedInput";

function InputWithMask(props: any, ref: Ref<HTMLDivElement>) { // TODO choose props type
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
    <ReactInputMask
      {...props}
      mask="+38 (999) 999 99 99"
      maskPlaceholder="X"
      value={props.value}
      onChange={handleChange}
    >
      <CustomizedInput ref={ref} />
    </ReactInputMask>
  );
}

export const InputMobileNumber = forwardRef(InputWithMask);
