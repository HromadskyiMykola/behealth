import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";

import { TPatientPersonalData } from "~/common";

export const IdentityDocuments = ({
  patientPersonalData,
}: {
  patientPersonalData: TPatientPersonalData | null;
}) => {
  const { custom } = useTheme().palette;

  const { typeOfDoc, docSeries, issuedBy, dateOfIssue, docNum } =
    patientPersonalData || {};

  const isAddedDocument = !!(
    typeOfDoc ||
    docSeries ||
    issuedBy ||
    dateOfIssue ||
    docNum
  );

  const Edit = () => (
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
              <Typography variant="body2">Тип документа</Typography>
            </TableCell>

            <TableCell>
              <Typography variant="body2">{typeOfDoc}</Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Typography variant="body2">Серія</Typography>
            </TableCell>

            <TableCell>
              <Typography variant="body2">
                {docSeries || "не вказано"}
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Typography variant="body2">Ким видано</Typography>
            </TableCell>

            <TableCell>
              <Typography variant="body2">{issuedBy}</Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Typography variant="body2">Дата видачі</Typography>
            </TableCell>

            <TableCell>
              <Typography variant="body2">{dateOfIssue}</Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Typography variant="body2">Номер</Typography>
            </TableCell>

            <TableCell>
              <Typography variant="body2">{docNum}</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );

  return isAddedDocument ? (
    <Edit />
  ) : (
    <Typography pl="16px" mb={2} variant="body2" color={custom.secondary60}>
      Документи, що засвідчують особу не додані.
    </Typography>
  );
};
