import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import avatar from "~/assets/images/doctor-avatar.png";
import { Share2, Map, MapPin } from "lucide-react";
import Chips from "~/components/Header-card-doctor/Chips";
import { Link } from "react-router-dom";
import { IContactPhoneWithIcon } from "~/common";
import ContactPhoneWithIcon from "~/components/atomic/Contact-phone-with-icon";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const chipsMOCKdata = [
  "Приймає декларації",
  "Платний прийом",
  "Діти",
  "Дорослі",
];

const contactMOCKdata = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.1632 4.67683C17.4305 3.52118 16.5429 2.57463 15.505 1.83935C14.4676 1.10408 13.2803 0.579342 11.9487 0.267343C9.76281 -0.245392 7.6377 -0.0137582 5.58823 0.90334C4.45622 1.40989 3.45367 2.1088 2.59148 2.99718C1.51401 4.10737 0.735832 5.36483 0.261645 6.76884C0.257273 6.78194 0.253641 6.7943 0.249281 6.80703C0.232545 6.85648 0.217643 6.90667 0.202 6.95649C-0.283822 8.58014 0.170726 9.47687 0.885643 8.72559C0.91365 8.69323 0.942738 8.66159 0.971097 8.62959C0.982015 8.6165 0.992557 8.6045 1.00346 8.59104C1.83983 7.5394 3.17076 6.66267 3.17076 6.66267L3.17112 6.66339C3.50967 6.42739 3.86204 6.20667 4.22785 6.00157C4.64604 5.75684 5.0835 5.53174 5.49114 5.38011C5.49114 5.38011 5.87041 5.20702 5.97187 4.67938C5.97369 4.66955 5.97514 4.6601 5.97733 4.65029C5.97805 4.64483 5.97951 4.6401 5.98024 4.63465C6.04859 4.19573 6.51878 2.98881 7.85007 2.90954C8.26716 2.85209 8.68062 2.92664 9.04572 3.10009C9.68754 3.40519 10.1799 4.0161 10.2795 4.75247C10.3592 5.33793 10.2195 5.88957 9.92026 6.3263C9.90427 6.35102 9.88572 6.37648 9.86572 6.40194C9.8599 6.40958 9.85408 6.41757 9.84827 6.42521C9.59809 6.74812 9.2559 6.9983 8.8479 7.13903C8.60316 7.22994 8.35444 7.27576 8.11661 7.28231C8.11589 7.28231 8.11517 7.28267 8.11517 7.28267C7.96571 7.30195 7.80025 7.28267 7.63407 7.24157C7.44643 7.2034 7.27442 7.14049 7.12679 7.05721C6.8697 6.93685 6.66097 6.80085 6.58424 6.73031C6.52351 6.67431 6.45842 6.64376 6.39478 6.62848C6.25406 6.60558 6.13915 6.63213 6.0555 6.66849L6.05297 6.66957C6.00641 6.68994 5.97005 6.71321 5.94423 6.73212C5.62532 6.99794 5.32241 7.27649 5.03513 7.56812C4.28022 8.36159 3.6464 9.26232 3.3493 9.70742C3.19185 9.95942 3.04203 10.2176 2.90094 10.4834C2.77039 10.7292 2.6493 10.978 2.5362 11.2296C2.35984 11.6271 2.1933 12.0551 2.0442 12.5147C2.03729 12.5354 2.03038 12.5565 2.02383 12.5776C2.01438 12.6067 2.00529 12.6358 1.99657 12.6645C1.9882 12.6933 1.97948 12.7224 1.97111 12.7507C1.05547 15.8871 2.70385 17.6977 4.0853 15.806C4.16058 15.686 4.23804 15.5675 4.31695 15.4496C4.31768 15.4486 4.31841 15.4475 4.31912 15.446C5.76641 12.9405 8.73663 11.1322 8.73663 11.1322L8.73807 11.1318C8.9199 11.0165 9.10353 10.9049 9.28935 10.798L9.29045 10.7969C9.29045 10.7969 9.30318 10.79 9.32462 10.7776C9.83372 10.486 10.357 10.2249 10.8963 9.99651C11.3752 9.78341 11.8839 9.58415 12.3065 9.4816C12.3065 9.4816 12.8014 9.35286 12.9341 8.74413V8.74377C13.0297 8.30704 13.3454 7.66849 14.061 7.32522C14.229 7.23903 14.4047 7.17467 14.5821 7.1354C14.7749 7.09285 14.9661 7.07721 15.1534 7.08594L15.1549 7.08558C15.2767 7.08376 15.3789 7.09721 15.4661 7.12304C16.3738 7.29794 17.1174 8.04267 17.2251 9.02414C17.356 10.214 16.5294 11.2882 15.3465 11.4365C14.7567 11.5107 14.2225 11.3816 13.7668 11.0369C13.2559 10.8238 12.8628 10.9605 12.721 11.0267C12.2756 11.27 11.8479 11.5398 11.4385 11.8358C10.677 12.4013 10.0719 12.9911 9.83227 13.2344C9.30644 13.7802 8.84026 14.3587 8.43626 14.9715C8.4148 15.0049 8.39335 15.038 8.37153 15.0722C8.36607 15.0813 8.36062 15.09 8.3548 15.0991C7.93952 15.762 7.49697 16.6104 7.13224 17.6366C7.10497 17.7166 7.07733 17.7962 7.05152 17.8769C6.66206 19.1937 7.50607 19.7184 8.48244 19.909C8.48244 19.909 9.24717 20.0566 10.3494 19.9759C10.4134 19.9704 10.4715 19.965 10.5206 19.9595C10.7988 19.9253 11.0781 19.8959 11.3537 19.8486C13.2548 19.525 14.9349 18.7315 16.3698 17.442C18.1763 15.8187 19.2643 13.7962 19.6025 11.3936C19.9411 8.98741 19.4662 6.73175 18.1632 4.67683Z"
          fill="#3F4944"
        />
      </svg>
    ),
    phone: "(073) 35 337 27",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.9982 10C19.9982 15.5227 15.5227 20 10 20C4.4773 20 0 15.5227 0 10C0 4.47732 4.4773 0 10 0C15.5227 0 19.9982 4.47732 19.9982 10ZM10.079 15.5759C13.4705 15.5649 15.4767 12.7797 15.4693 10.237C15.4602 7.6961 14.0786 5.85887 11.0343 5.11664C11.027 5.08538 11.0215 5.01739 11.0215 4.95313C11.016 3.03322 12.4637 1.3393 14.2826 0.962669C14.1117 0.903877 13.8306 0.881872 13.5624 0.881872C11.4826 0.889219 9.18794 1.78027 7.5124 3.16553C5.79643 4.58755 4.45158 6.98512 4.46078 9.47456C4.47363 13.2409 7.33232 15.5853 10.079 15.5759Z"
          fill="#3F4944"
        />
      </svg>
    ),
    phone: "(095) 35 337 27",
  },
  {
    icon: (
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.7463 0C9.98241 0 9.3637 0.600926 9.3637 1.34252V6.2685C9.3637 7.01045 9.98241 7.61204 10.7463 7.61204C11.5098 7.61204 12.1279 7.01045 12.1279 6.2685V1.34252C12.1279 0.600926 11.5098 0 10.7463 0ZM1.2644 6.61493C0.727685 6.65966 0.244718 7.00861 0.0678651 7.53804C-0.167543 8.24392 0.229024 9.00192 0.954993 9.23108L5.77509 10.7535C6.50109 10.9826 7.28132 10.5966 7.51748 9.89103C7.75332 9.18551 7.35612 8.42713 6.62933 8.19798L1.80922 6.67661C1.62773 6.61922 1.44331 6.60001 1.2644 6.61493ZM20.2282 6.61598C20.0493 6.60098 19.865 6.61913 19.6834 6.67663L14.8633 8.19903C14.1373 8.42819 13.7404 9.18656 13.9762 9.89208C14.2124 10.5976 14.9915 10.983 15.7175 10.7535L20.5376 9.23214C21.2636 9.00297 21.661 8.24461 21.4248 7.53909C21.2482 7.00998 20.7649 6.66098 20.2282 6.61598ZM7.98316 13.3285C7.53983 13.3138 7.09659 13.5063 6.81643 13.8816L3.83842 17.867C3.38973 18.4677 3.52702 19.3083 4.14476 19.744C4.76172 20.1797 5.62695 20.0455 6.07526 19.4459L9.05327 15.4595C9.50238 14.8595 9.36401 14.0206 8.7459 13.5845C8.51455 13.421 8.24916 13.3373 7.98316 13.3285ZM13.5105 13.3285C13.2444 13.3373 12.9784 13.421 12.7467 13.5845C12.1294 14.0206 11.9917 14.8595 12.4404 15.4595L15.4184 19.4459C15.8667 20.0455 16.732 20.1797 17.3489 19.744C17.9666 19.3083 18.1039 18.4677 17.6552 17.867L14.6772 13.8816C14.397 13.5063 13.954 13.3139 13.5105 13.3285Z"
          fill="#3F4944"
        />
      </svg>
    ),
    phone: "(067) 35 337 27",
  },
];

const HeaderCardDoctor = () => {
  return (
    <Paper>
      <Box
        display="flex"
        gap="24px"
        p={4}
        sx={{
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        }}
      >
        <Box>
          <img //todo add photo with rest api
            src={avatar}
            //todo add description with rest api
            alt={"1"}
            width="296px"
            height="296px"
            style={{ borderRadius: "19px" }}
          />
        </Box>
        <Box flexDirection="column" display="flex" gap="24px" width="100%">
          <Box>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" gap="4px" flexDirection="column">
                {/*//todo add rest data*/}
                <Typography variant="body2" component="p" color="#09A480">
                  Сімейний лікар
                </Typography>
                <Typography variant="h5" component="p">
                  Князєва Ольга Станіславівна
                </Typography>
                <Box>
                  <Typography variant="body2" component="span" color="#8E918F">
                    Стаж:
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="span"
                    color="#5C5F5D"
                    ml={0.5}
                  >
                    4 роки
                  </Typography>
                </Box>
              </Box>
              <Share2 color="#757875" />
            </Box>
          </Box>
          <Grid container display="flex" spacing={2}>
            {/*//todo add data from rest api */}
            {chipsMOCKdata.map((text: string) => {
              return (
                <Grid item>
                  <Chips text={text} />
                </Grid>
              );
            })}
          </Grid>
          <Grid container spacing={3}>
            <Grid item lg={6} md={12} width="100%">
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
                <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
                  <Box
                    flex="1 1 280px"
                    display="flex"
                    alignItems="center"
                    gap="8px"
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
                  <Box flex="1 1 112px">
                    <Link to={""} style={{ textDecoration: "none" }}>
                      <Typography
                        variant="captionS"
                        component="span"
                        color="#3DBF9A"
                      >
                        Відкрити на карті
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6} md={12} width="100%">
              <Box
                display="flex"
                flexDirection="column"
                gap="26px"
                border=" 1px solid #E1E3E0"
                borderRadius="10px"
                padding="16px 24px"
              >
                <Typography variant="caption" component="p">
                  Контакти лікаря:
                </Typography>
                <Box display="flex" flexWrap="wrap" gap="16px">
                  {contactMOCKdata.map(
                    (item: IContactPhoneWithIcon, index: number) => {
                      return (
                        <ContactPhoneWithIcon
                          icon={item.icon}
                          phone={item.phone}
                          order={index}
                        />
                      );
                    }
                  )}
                  <Typography
                    variant="caption"
                    component="p"
                    flex="1 1 150px"
                    order="4"
                    lineHeight="15px"
                  >
                    olgastan@onmedu.ua
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
};

export default HeaderCardDoctor;
