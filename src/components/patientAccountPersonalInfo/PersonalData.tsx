import {
    Button,
    Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { CustomizedInput } from "../atomic";
import { TAuthFormValues, validationRules } from "~/common";

export const PersonalData = () => (
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
            <Typography variant="body2">Шевченко Тарас</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">Дата народження</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">09.03.1814</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">ІПН</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">не вказано</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">Стать</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">не вказано</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

export const PersonalDataEdit = () => (<></>)