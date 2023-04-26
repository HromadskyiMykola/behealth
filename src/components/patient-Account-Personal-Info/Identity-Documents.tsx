import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

import { TPatientPersonalData } from "~/common";

export const IdentityDocuments = ({
  patientPersonalData,
}: {
  patientPersonalData: TPatientPersonalData | null;
}) => (
  <TableContainer
    sx={{
      display: "inline-block",
      width: "auto",
      "& td": { borderBottom: "none" },
    }}
  >
    <Typography
      variant="body2"
      pl="16px"
      mb={2} // temp
    >
      Документи, що засвідчують особу не додані.
    </Typography>

    <Table size="small">
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography variant="body2">Тип документа</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">Паспорт</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">Серія</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">KRJKD</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">Ким видано</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">4 цифри на задній стороні</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">Дата видачі</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">не вказано</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">Номер</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">не вказано</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
