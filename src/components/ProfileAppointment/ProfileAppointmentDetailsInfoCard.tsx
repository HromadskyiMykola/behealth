import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { ProfileAppointmentDetailsInfoDefaultCardProps } from "~/common/types-and-interfaces";

export const ProfileAppointmentDetailsInfoCard: FC<
  ProfileAppointmentDetailsInfoDefaultCardProps
> = ({ title, subtitle, code, details }) => {
  const isException = title === "Послуги" || !details.length;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Typography variant="h5" sx={{ color: "#00382A" }}>
        {title}
      </Typography>
      <Box
        sx={{
          bgcolor: isException ? "none" : "#FBFDF9",
          border: isException ? "none" : "1px solid #DBE5DF",
          borderRadius: "10px",
          p: isException ? "0" : "16px 32px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {subtitle && (
          <Box sx={{ display: "flex" }}>
            {code && (
              <Typography
                variant="subtitle1"
                sx={{ color: "#7D968B", width: "80px" }}
              >
                {code}
              </Typography>
            )}
            <Typography variant="subtitle1" sx={{ color: "#4C635A" }}>
              {subtitle}
            </Typography>
          </Box>
        )}
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: title === "Послуги" ? "row" : "column",
              gap: title === "Послуги" ? "16px" : "8px",
            }}
          >
            {details.length ? (
              details.map(({ title: cardTitle, text }) => (
                <Box sx={{ display: "flex" }} key={cardTitle || text}>
                  {title === "Послуги" ? (
                    <>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#4C635A",
                          p: "8px 16px",
                          border: "1px solid #BFC9C3",
                          borderRadius: "10px",
                        }}
                      >
                        {cardTitle}
                      </Typography>
                    </>
                  ) : (
                    <>
                      {cardTitle && (
                        <Typography
                          variant="caption"
                          sx={{ color: "#7D968B", width: "210px" }}
                        >
                          {cardTitle}
                        </Typography>
                      )}
                      {text && (
                        <Typography variant="caption" sx={{ color: "#00382A" }}>
                          {text}
                        </Typography>
                      )}
                    </>
                  )}
                </Box>
              ))
            ) : (
              <Typography variant="body2" sx={{ color: "#7D968B" }}>
                {title} відсутні.
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
