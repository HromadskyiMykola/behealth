import { SvgIcon, SvgIconProps } from "@mui/material";

export function FolderIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} fontSize="small" viewBox="0 0 22 22">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 19H19C20.654 19 22 17.654 22 16V6C22 4.346 20.654 3 19 3H11.075C10.74 2.999 10.43 2.83 10.236 2.536L9.425 1.35C8.872 0.51 7.941 0.00500011 6.93 0H3C1.346 0 0 1.346 0 3V16C0 17.654 1.346 19 3 19ZM2 7V3C2 2.449 2.449 2 3 2H6.925C7.26 2.001 7.57 2.17 7.764 2.464L8.575 3.65C9.128 4.49 10.059 4.995 11.07 5H19C19.552 5 20 5.449 20 6V7H2ZM2 9H20V16C20 16.552 19.552 17 19 17H3C2.449 17 2 16.552 2 16V9Z"
        fill="#00382A"
      />
    </SvgIcon>
  );
}
