import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

import { TPatientPersonalData } from "~/common";

const formatFullName = (
  lastName: string | undefined,
  firstName: string | undefined,
  middleName: string | undefined
) => {
  return `${lastName} ${firstName} ${middleName}`.trim();
};

export const PersonalData = ({
  patientPersonalData,
}: {
  patientPersonalData: TPatientPersonalData | null;
}) => {
  const { lastName, firstName, middleName, birthDate, tin, sex } =
    patientPersonalData || {};

  return (
    <TableContainer
      sx={{
        display: "inline-block",
        width: "auto",
        "& td": { borderBottom: "none" },
      }}
    >
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="body2">ПІБ</Typography>
            </TableCell>

            <TableCell>
              <Typography variant="body2">
                {formatFullName(lastName, firstName, middleName) ||
                  "не вказано"}
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Typography variant="body2">Дата народження</Typography>
            </TableCell>

            <TableCell>
              <Typography variant="body2">
                {birthDate || "не вказано"}
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Typography variant="body2">ІПН</Typography>
            </TableCell>

            <TableCell>
              <Typography variant="body2">{tin || "не вказано"}</Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Typography variant="body2">Стать</Typography>
            </TableCell>

            <TableCell>
              <Typography variant="body2">{sex || "не вказано"}</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
