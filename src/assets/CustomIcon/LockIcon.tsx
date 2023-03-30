import { SvgIcon, SvgIconProps } from "@mui/material";

export function LockIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} fontSize="small" viewBox="0 0 22 22">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 9V6C4 2.691 6.691 0 10 0C13.309 0 16 2.691 16 6V9H17C18.654 9 20 10.346 20 12V19C20 20.654 18.654 22 17 22H3C1.346 22 0 20.654 0 19V12C0 10.346 1.346 9 3 9H4ZM3 11C2.449 11 2 11.449 2 12V19C2 19.552 2.449 20 3 20H17C17.552 20 18 19.552 18 19V12C18 11.449 17.552 11 17 11H3ZM14 6V9H6V6C6 3.794 7.794 2 10 2C12.206 2 14 3.794 14 6Z"
        fill="#00382A"
      />
    </SvgIcon>
  );
}
