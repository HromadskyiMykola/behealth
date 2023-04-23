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

export const ContactInfo = ({ contactInfo }: { contactInfo: any }) => (
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
              {contactInfo?.mobileNumber || "не вказано"}
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">Електронна пошта</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">
              {contactInfo?.email || "не вказано"}
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
