import { ReactNode, isValidElement, useEffect, useState } from "react";
import { Dialog, LinearProgress, Stack } from "@mui/material";

import { useModalState } from "~/providers";

type TProps = {
  children?: ReactNode;
  apiError?: string | null;
  loading?: boolean;
};

export function SimpleModal({ children, apiError, loading }: TProps) {
  const [openModal, setOpenModal] = useState(false);
  const { simpleModalMessage, setSimpleModalMessage } = useModalState();
  const { loading: simpleModalMessageLoading } = (simpleModalMessage || {}) as {
    loading: boolean;
  };

  useEffect(() => {
    if (children || apiError || loading) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  }, [children, apiError, loading]);

  return (
    <Dialog
      open={!!simpleModalMessage || openModal}
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "12px",
        },
      }}
      onClose={() => {
        setSimpleModalMessage(false);
        setOpenModal(false);
      }}
    >
      <Stack padding="32px" gap="16px" direction="column" alignItems="center">
        {children && <span>{children}</span>}
        {apiError && <span>{apiError}</span>}

        {simpleModalMessage &&
          isValidElement(simpleModalMessage) &&
          simpleModalMessage}

        {simpleModalMessage && typeof simpleModalMessage === "string" && (
          <span>{simpleModalMessage}</span>
        )}

        {(loading || simpleModalMessageLoading) && (
          <LinearProgress color="success" sx={{ width: "100%" }} />
        )}
      </Stack>
    </Dialog>
  );
}
