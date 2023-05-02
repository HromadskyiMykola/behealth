import { Skeleton, Stack } from "@mui/material";

import { CustomizedPaper } from "~/components/atomic";

export const SkeletonInfoCards = () => (
  <>
    {[...Array(3)].map((_, i) => (
      <CustomizedPaper key={"skeleton" + i}>
        <Stack direction="row" gap={2}>
          <Skeleton variant="rounded" sx={{ height: 132, width: 168 }} />
          <Skeleton variant="rounded" sx={{ height: 300, width: "100%" }} />
        </Stack>
      </CustomizedPaper>
    ))}
  </>
);
