import { FC } from "react";

import { ButtonProps } from "@mui/material";
import { EditIcon } from "lucide-react";
import { ButtonM } from "./Button-M";

export const ButtonEditIcon: FC<ButtonProps> = (props) => (
  <ButtonM
    {...props}
    startIcon={<EditIcon style={{ flexShrink: 0 }} size={22} />}
  >
    Змінити
  </ButtonM>
);
