import React from "react";
import { Button, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { styled } from "@mui/material/styles";
import { UsePaginationItem } from "@mui/material/usePagination/usePagination";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const PaginationItems = ({ items }: any) => {
  return (
    <List>
      {items.map(
        (
          { page, type, selected, ...item }: UsePaginationItem,
          index: number
        ) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <Button
                type="button"
                sx={{
                  bgcolor: selected ? "#3ABD98" : undefined,
                  color: selected ? "#fff" : "#1E352D",
                  border: selected ? "none" : "1px solid #B2CCC0",
                  minWidth: "36px",
                  maxWidth: "36px",
                  height: "36px",
                  borderRadius: "6px",
                }}
                {...item}
              >
                {page}
              </Button>
            );
          } else {
            children = (
              <IconButton {...item}>
                {type === "next" ? (
                  <ChevronRight
                    style={{ color: item.disabled ? "#d4d4d4" : "#3ABD98" }}
                  />
                ) : (
                  <ChevronLeft
                    style={{ color: item.disabled ? "#d4d4d4" : "#3ABD98" }}
                  />
                )}
              </IconButton>
            );
          }

          return (
            <li style={{ display: "flex", alignItems: "center" }} key={index}>
              {children}
            </li>
          );
        }
      )}
    </List>
  );
};
