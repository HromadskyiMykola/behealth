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
  const {
    simpleModalMessage,
    simpleModalLoading,
    setSimpleModalMessage,
    setSimpleModalLoading,
  } = useModalState();

  const handlerIsClose = () => {
    setSimpleModalMessage(false);
    setOpenModal(false);
    setSimpleModalLoading(false);
  };

  useEffect(() => {
    if (children || apiError || loading) {
      setOpenModal(true);
    } else {
      handlerIsClose();
    }
  }, [children, apiError, loading]);

  return (
    <Dialog
      open={!!simpleModalMessage || openModal || simpleModalLoading}
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "12px",
        },
      }}
      onClose={handlerIsClose}
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

        {(loading || simpleModalLoading) && (
          <LinearProgress color="success" sx={{ width: "100%" }} />
        )}
      </Stack>
    </Dialog>
  );
}
