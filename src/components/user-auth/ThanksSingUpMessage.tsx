import { Typography } from "@mui/material";

import { AlertTriangleIcon } from "lucide-react";

import { ButtonTimer } from "../atomic";

export function ThanksSingUpMessage() {
  return (
    <>
      <Typography variant="h5" mb="16px">
        Дякуємо за реєстрацію!
      </Typography>
      <Typography
        sx={{ display: "flex", alignItems: "center", color: "#7D968B" }}
      >
        <AlertTriangleIcon
          style={{ marginRight: "16px", flexShrink: 0 }}
          size={22}
        />
        Перевірте свою електронну пошту та папку “Спам”
      </Typography>
      <Typography textAlign="center">
        Натисніть на посилання, яке ми відправили Вам у листі на вказану
        електронну пошту tarshevchenko@gmail.com
      </Typography>

      <ButtonTimer
        onClick={() => {}}
        fullWidth
        variant="contained"
        sx={{ mt: "16px" }}
      >
        Відправити повторний лист
      </ButtonTimer>
    </>
  );
}
