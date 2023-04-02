import React from "react";
import { SvgIconsProps } from "../../common/types-and-interfaces";
import SvgIcon from "@mui/material/SvgIcon";

const Facebook = (props: SvgIconsProps) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.9997 6.75671V17.2433C23.9997 20.9724 20.9721 24 17.243 24H6.75671C3.02758 24 0 20.9724 0 17.2433V6.75671C0 3.02758 3.02758 0 6.75671 0H17.243C20.9721 0 23.9997 3.02758 23.9997 6.75671ZM13.3485 7.80576L15.4276 7.80575V5.31064H13.3485C11.7436 5.31064 10.4378 6.61641 10.4378 8.22129V9.46883H8.77426V11.9642H10.4373V18.6178H12.9327V11.9642H15.0118L15.4276 9.46886H12.9327V8.22129C12.9327 7.99584 13.123 7.80552 13.3485 7.80552L13.3485 7.80576Z"
        fill="#4C635A"
      />
    </SvgIcon>
  );
};

export default Facebook;
