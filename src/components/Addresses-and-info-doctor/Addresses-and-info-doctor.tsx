import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Map, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const AddressesAndInfoDoctor = (data: any) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="16px"
      border=" 1px solid #E1E3E0"
      borderRadius="10px"
      padding="16px 24px"
    >
      <Box>
        <Typography variant="caption" component="span">
          ФОП Князєва О.С.
        </Typography>
        <Typography variant="caption" component="span" ml={1}>
          Приватна клініка
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap="8px">
        <Map
          size="24px"
          style={{
            border: "1px solid #8E918F",
            borderRadius: "6px",
            padding: "4px",
          }}
        />
        <Typography variant="caption" component="p">
          Дніпровський район
        </Typography>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        gap="16px"
      >
        <Box
          flexWrap="nowrap"
          display="flex"
          alignItems="center"
          gap="8px"
          justifyContent="flex-start"
        >
          <MapPin
            size="24px"
            style={{
              border: "1px solid #8E918F",
              borderRadius: "6px",
              padding: "4px",
            }}
          />
          <Typography variant="caption" component="span">
            м. Київ, вул. Попудренка, 7, каб. 2
          </Typography>
        </Box>
        <Box flexWrap="nowrap">
          <Link to={""} style={{ textDecoration: "none" }}>
            <Typography variant="captionS" component="span" color="#3DBF9A">
              Відкрити на карті
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
