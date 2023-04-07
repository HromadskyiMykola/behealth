import { FC } from "react";

import { Button, ButtonProps } from "@mui/material";
import { EditIcon } from "lucide-react";

export const ButtonEditIcon: FC<ButtonProps> = (props) => (
  <Button
    {...props}
    startIcon={<EditIcon style={{ flexShrink: 0 }} size={22} />}
  >
    Змінити
  </Button>
);
