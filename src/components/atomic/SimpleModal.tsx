import { ReactNode, isValidElement } from "react";
import { Dialog, Stack } from "@mui/material";

import { useModalState } from "../providers";

export function SimpleModal({ children }: { children?: ReactNode }) {
  const { simpleModalMessage, setSimpleModalMessage } = useModalState();

  return (
    <Dialog
      open={!!simpleModalMessage}
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "12px",
        },
      }}
      onClose={() => setSimpleModalMessage(false)}
    >
      <Stack padding="32px" gap="16px" direction="column" alignItems="center">
        <span>{children}</span>

        {isValidElement(simpleModalMessage) ? (
          simpleModalMessage
        ) : (
          <span>{simpleModalMessage}</span>
        )}
      </Stack>
    </Dialog>
  );
}
