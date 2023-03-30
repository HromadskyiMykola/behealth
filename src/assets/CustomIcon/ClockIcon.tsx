import { SvgIcon, SvgIconProps } from "@mui/material";

export function ClockIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} fontSize="small" viewBox="0 0 22 22">
      <path
        d="M14.553 13.895C14.696 13.966 14.849 14 14.999 14C15.366 14 15.719 13.798 15.894 13.448C16.141 12.954 15.941 12.353 15.447 12.106L12 10.382V5C12 4.448 11.552 4 11 4C10.448 4 10 4.448 10 5V11C10 11.379 10.214 11.725 10.553 11.895L14.553 13.895Z"
        fill="#00382A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 11C0 17.065 4.935 22 11 22C17.065 22 22 17.065 22 11C22 4.935 17.065 0 11 0C4.935 0 0 4.935 0 11ZM2 11C2 6.038 6.038 2 11 2C15.963 2 20 6.038 20 11C20 15.963 15.963 20 11 20C6.038 20 2 15.963 2 11Z"
        fill="#00382A"
      />
    </SvgIcon>
  );
}
