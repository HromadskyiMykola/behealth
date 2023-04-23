import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomizedPaper } from "~/components/atomic";

export function AboutPage() {
  return (
         <Container maxWidth="md">
      <CustomizedPaper>
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          BeHealth - Медичний портал
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Link to="http://geekhub.ck.ua/">
          <img
            src="http://geekhub.ck.ua/wp-content/uploads/2016/08/logo-1_zoeein.png"
            alt="GeekHub Logo"
          />
        </Link>
      </Box>
      </CustomizedPaper>
   </Container>
  );
}
