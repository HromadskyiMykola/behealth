import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

import { AlertTriangleIcon } from "lucide-react";
import { TPatientPersonalData, phoneNumberFormatter } from "~/common";

export const ContactInfo = ({ patientPersonalData }: { patientPersonalData: TPatientPersonalData | null}) => (
  <TableContainer
    sx={{
      width: "auto",
      "& td": { borderBottom: "none" },
    }}
  >
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Stack direction="row" gap={2}>
              <AlertTriangleIcon color="red" />
              <Typography variant="caption" color="red">
                Медкарта не підключена до eHealth
              </Typography>
            </Stack>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography variant="body2">Номер телефону</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">
              {phoneNumberFormatter(patientPersonalData?.mobileNum) || "не вказано"}
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">Електронна пошта</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">
              {patientPersonalData?.email || "не вказано"}
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
