import * as React from "react";
import { FC, useState } from "react";
import usePagination from "@mui/material/usePagination";
import { Box, Button, Typography } from "@mui/material";
import { RefreshCw } from "lucide-react";
import { PaginationItems } from "./PaginationItems";

export interface IPaginationProps {
  count: number;
  state?: number;
  setState: (page: number) => void;
}

export const Pagination: FC<IPaginationProps> = ({ count, setState }) => {
  const { items } = usePagination({
    count: count,
    onChange: (event, page) => {
      setState(page);
    },
  });

  const firstHalf = items.slice(0, Math.ceil(items.length / 2));
  const secondHalf = items.slice(Math.ceil(items.length / 2));

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <PaginationItems items={firstHalf} />
      {/*<Button variant="text" sx={{ display: "flex", gap: "14px" }}>*/}
      {/*  <RefreshCw />*/}
      {/*  <Typography variant="button">Показати ще 10</Typography>*/}
      {/*</Button>*/}
      <PaginationItems items={secondHalf} />
    </Box>
  );
};
