import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Instagram from "../../assets/CustomIcon/Instagram";
import Facebook from "../../assets/CustomIcon/Facebook";
import { Logo } from "~/assets/CustomIcon";
import FooterInfoBlock from "../FooterInfoBlock/FooterInfoBlock";
import {
  ABOUT_FOOTER_TEXT,
  ADVANTAGES_FOOTER_TEXT,
  BEHEALTH_FOOTER_LINK,
  PATIENTS_LINK_FOOTER_LINK,
  FOOTER_COMPANY_INFO,
} from "./footer.constant";
import FooterHelpLine from "../FooterHelpLine/FooterHelpLine";
import FooterColumNavigateLinks from "../FooterColumNavigateLinks/FooterColumNavigateLinks";
import { ERouteNames } from "~/routes/routeNames";
import { NavLink } from "react-router-dom";
import LogoFooter from "../../assets/CustomIcon/Logo.footer";
import { Stack } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ background: "#B2CCC0" }}>
      <Container>
        <FooterHelpLine />
        <Box
          sx={{
            py: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            borderBottom: "1px solid #97B1A5",
            borderTop: "1px solid #97B1A5",
          }}
        >
          <FooterInfoBlock
            title={ABOUT_FOOTER_TEXT.title}
            text={ABOUT_FOOTER_TEXT.text}
          />
          <FooterInfoBlock
            title={ADVANTAGES_FOOTER_TEXT.title}
            text={ADVANTAGES_FOOTER_TEXT.text}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: "64px",
          }}
        >
          <Box>
            <Box>
              <NavLink to={ERouteNames.HOME}>
                {/*<Logo*/}
                {/*    width="116"*/}
                {/*    height="21"*/}
                {/*/>*/}
                <LogoFooter
                  width="116"
                  height="21"
                  viewBox="0 0 116 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                />
              </NavLink>
              <Box sx={{ mt: "32px", display: "flex", gap: "12px" }}>
                <Instagram
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                />
                <Facebook
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                />
              </Box>
              <Typography
                variant="caption"
                sx={{ display: "block", mt: "8px", color: "#647C72" }}
              >
                support@behealth.ua
              </Typography>
            </Box>
          </Box>

          <Stack direction={{ xs: "column", sm: "row" }} gap="80px" mb="40px">
            <FooterColumNavigateLinks
              title="beHealth"
              links={BEHEALTH_FOOTER_LINK}
            />
            <FooterColumNavigateLinks
              title="Пацієнтам"
              links={PATIENTS_LINK_FOOTER_LINK}
            />
            <FooterColumNavigateLinks
              title="Company"
              links={FOOTER_COMPANY_INFO}
              itIsLink={false}
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
