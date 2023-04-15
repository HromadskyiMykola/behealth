import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AlertCircle, ShieldAlert } from "lucide-react";
import {
  CONCLUSION_DECLARATION,
  CONCLUSION_DECLARATION_TEXT,
  IMPORTANT_INFORMATION,
  IMPORTANT_INFORMATION_TEXT,
} from "~/components/Main-section-doctor/constant-main-section-doctor";
import { TelegramIcon, ViberIcon } from "~/assets/CustomIcon/index";
import { useTheme } from "@mui/material";
import { styled } from "@mui/system";

const BoxWithBorder = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  padding: "32px 24px",
  border: `1px solid ${theme.palette.custom.neutral90}`,
  borderRadius: "10px",
  // height: "258px",
  "@media (min-width: 1408px)": {
    height: "258px",
  },
}));
const BoxWithIcon = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "12px",
  color: theme.palette.custom.neutral40,
}));
const BoxSocialMedia = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  color: theme.palette.custom.secondary40,
}));

const AdmissionRulesDoctor = () => {
  const { custom } = useTheme().palette;
  return (
    <Box display="flex" flexDirection="column" gap="32px">
      <Typography variant="h5">Правила прийому</Typography>
      <Grid container spacing={4}>
        <Grid item lg={6} width="100%">
          <BoxWithBorder>
            <BoxWithIcon>
              <AlertCircle size="24px" />
              <Typography variant="body1" component="p">
                {IMPORTANT_INFORMATION}
              </Typography>
            </BoxWithIcon>
            <Typography
              variant="body2"
              component="p"
              pl="36px"
              color={custom.neutralVariant20}
              // sx={{maxWith: "572px",}}
            >
              {IMPORTANT_INFORMATION_TEXT}
            </Typography>
          </BoxWithBorder>
        </Grid>
        <Grid item lg={6} width="100%">
          <BoxWithBorder>
            <BoxWithIcon>
              <ShieldAlert size="24px" />
              <Typography variant="body1" component="p">
                {CONCLUSION_DECLARATION}
              </Typography>
            </BoxWithIcon>
            <Typography
              variant="body2"
              component="p"
              pl="36px"
              color={custom.neutralVariant20}
            >
              {CONCLUSION_DECLARATION_TEXT}
            </Typography>
            <Box
              pt={1}
              pl="36px"
              display="flex"
              flexDirection="column"
              gap="16px"
            >
              <BoxSocialMedia>
                <TelegramIcon />
                <Typography variant="caption" component="p">
                  Telegram
                </Typography>
              </BoxSocialMedia>
              <BoxSocialMedia>
                <ViberIcon />
                <Typography variant="caption" component="p">
                  Viber
                </Typography>
              </BoxSocialMedia>
            </Box>
          </BoxWithBorder>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdmissionRulesDoctor;
