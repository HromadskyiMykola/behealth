import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export interface GoogleMapLinkProps {
  address: string;
  children: React.ReactNode;
}

export const GoogleMapLink: FC<GoogleMapLinkProps> = ({
  address,
  children,
}) => {
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}`;

  return (
    <Link
      to={mapUrl}
      target="_blank"
      style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
    >
      {children}
      {/*<Typography color="#3DBF9A" variant="captionS">*/}
      {/*  {text}*/}
      {/*</Typography>*/}
    </Link>
  );
};
