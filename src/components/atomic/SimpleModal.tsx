import { ReactNode } from "react";
import { Dialog, Stack } from "@mui/material";

import { useModalState } from "../providers";

export function SimpleModal({ children }: { children: ReactNode }) {
  const { openSimpleModal, handleSimpleModalOpen } = useModalState();

  return (
    <Dialog
      open={openSimpleModal}
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiPaper-root": {
          borderRadius:
            // mobileDevice ? 0 :
            "12px",
        },
      }}
      onClose={() => handleSimpleModalOpen(false)}
    >
      <Stack padding="32px" gap="16px" direction="column" alignItems="center">
        {children}
      </Stack>
    </Dialog>
  );
}
