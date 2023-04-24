import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

export const PersonalData = ({ personalData }: { personalData: any }) => (
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
              {personalData?.lastName || "не вказано"}{" "}
              {personalData?.firsName || "не вказано"}{" "}
              {personalData?.middleName || "не вказано"}
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">Дата народження</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">
              {personalData?.birthDate || "не вказано"}
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">ІПН</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">
              {personalData?.tin || "не вказано"}
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">Стать</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">
              {personalData?.sex || "не вказано"}
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
