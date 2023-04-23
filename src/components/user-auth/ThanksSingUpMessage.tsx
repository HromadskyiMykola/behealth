import { Box, Typography, useTheme } from "@mui/material";
import { AlertTriangleIcon } from "lucide-react";

import { ButtonTimer } from "../atomic";

export function ThanksSingUpMessage({ email }: { email: string }) {
  const { custom } = useTheme().palette;

  return (
    <Box maxWidth="589px">
      <Typography variant="h5" textAlign="center" mb="32px">
        Дякуємо за реєстрацію!
      </Typography>
      <Typography textAlign="center" color={custom.secondary60} mb="25px">
        <AlertTriangleIcon
          style={{ marginRight: "16px", flexShrink: 0 }}
          size={22}
        />
        Перевірте свою електронну пошту та папку “Спам”
      </Typography>
      <Typography variant="subtitle2" textAlign="center" mb="32px">
        Натисніть на посилання, яке ми відправили Вам у листі на вказану
        електронну пошту{" "}
        <span>
          <Typography variant="subtitle2" display="inline" color="primary">
            {email}
          </Typography>
        </span>
      </Typography>

      <ButtonTimer onClick={() => {}} fullWidth variant="contained">
        Відправити повторний лист
      </ButtonTimer>
    </Box>
  );
}
