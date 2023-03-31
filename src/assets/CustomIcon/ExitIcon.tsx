import { SvgIcon, SvgIconProps } from "@mui/material";

export function ExitIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} fontSize="small" viewBox="0 0 22 22">
      <path
        d="M7 20H3C1.346 20 0 18.654 0 17V3C0 1.346 1.346 0 3 0H7C7.552 0 8 0.448 8 1C8 1.552 7.552 2 7 2H3C2.449 2 2 2.449 2 3V17C2 17.552 2.449 18 3 18H7C7.552 18 8 18.447 8 19C8 19.553 7.552 20 7 20Z"
        fill="#00382A"
      />
      <path
        d="M14 16C13.744 16 13.488 15.902 13.293 15.707C12.902 15.316 12.902 14.684 13.293 14.293L16.586 11H7C6.448 11 6 10.552 6 10C6 9.448 6.448 9 7 9H16.586L13.293 5.70701C12.902 5.31601 12.902 4.68401 13.293 4.29301C13.684 3.90201 14.316 3.90201 14.707 4.29301L19.6906 9.27663C19.7694 9.35189 19.8359 9.4399 19.8868 9.53734C20.0399 9.83006 20.038 10.1822 19.8811 10.4734C19.831 10.5665 19.7667 10.6507 19.6909 10.7231L14.707 15.707C14.512 15.902 14.256 16 14 16Z"
        fill="#00382A"
      />
    </SvgIcon>
  );
}
