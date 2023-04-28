import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { Divider, Tabs, useTheme, useMediaQuery } from "@mui/material";

import {
  ClockIcon,
  HelpCircleIcon,
  UserCogIcon,
  FolderClosedIcon,
  LockIcon,
  LogOutIcon,
} from "lucide-react";

import { TabLink } from "~/components/atomic/index";

import { ERouteNames } from "~/routes/routeNames";
import { useAuthProvider } from "~/providers";

const iconStyle = { style: { flexShrink: 0 }, size: 22 };

const LineMB = () => <Divider sx={{ mb: "16px" }} />;
const Line = () => <Divider />;

export const NavTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOutProvider } = useAuthProvider();
  const {
    breakpoints,
    palette: { custom },
  } = useTheme();
  const isDownSm = useMediaQuery(breakpoints.down("md"));

  const handleLogout = useCallback(() => {
    navigate(ERouteNames.HOME);
    signOutProvider();
  }, []);

  const matchPath = useMemo(() => {
    const tabsValues = [
      ERouteNames.PATIENT_ACCOUNT_APPOINTMENTS,
      ERouteNames.PATIENT_ACCOUNT_HELP,
      ERouteNames.PATIENT_ACCOUNT_PERSONAL_INFO,
      ERouteNames.PATIENT_ACCOUNT_ADDITIONAL_DATA,
      ERouteNames.PATIENT_ACCOUNT_PASSWORD_N_SECURITY,
    ];
    const pathNames = location.pathname.split("/");

    return tabsValues.find((p) => pathNames.includes(p));
  }, [location]);

  const [value, setValue] = useState(
    matchPath || ERouteNames.PATIENT_ACCOUNT_APPOINTMENTS
  );

  useEffect(() => {
    if (matchPath !== value) {
      setValue(matchPath || ERouteNames.PATIENT_ACCOUNT_APPOINTMENTS);
    }
  }, [matchPath, value]);

  const handleChange = (event: SyntheticEvent, newValue: ERouteNames) => {
    setValue(newValue);
  };

  return (
    <Tabs
      sx={{
        p: isDownSm ? 0 : "24px 24px 8px 24px",
        "& .MuiTab-root": { marginBottom: isDownSm ? 0 : "16px" },
        "& .MuiTabs-indicator": { display: "none" },
      }}
      value={value}
      onChange={handleChange}
      orientation="vertical"
    >
      <TabLink
        icon={<ClockIcon {...iconStyle} />}
        value={ERouteNames.PATIENT_ACCOUNT_APPOINTMENTS}
        label="Записи"
      />

      {isDownSm && <Line />}

      <TabLink
        icon={<HelpCircleIcon {...iconStyle} />}
        value={ERouteNames.PATIENT_ACCOUNT_HELP}
        label="Допомога"
      />

      {isDownSm ? <Line /> : <LineMB />}

      <TabLink
        icon={<UserCogIcon {...iconStyle} />}
        value={ERouteNames.PATIENT_ACCOUNT_PERSONAL_INFO}
        label="Особиста інформація"
      />

      {isDownSm && <Line />}

      <TabLink
        icon={<FolderClosedIcon {...iconStyle} />}
        value={ERouteNames.PATIENT_ACCOUNT_ADDITIONAL_DATA}
        label="Додаткові дані"
      />

      {isDownSm && <Line />}

      <TabLink
        icon={<LockIcon {...iconStyle} />}
        value={ERouteNames.PATIENT_ACCOUNT_PASSWORD_N_SECURITY}
        label="Пароль та безпека"
      />

      {!isDownSm && <LineMB />}

      <TabLink
        sx={isDownSm ? { color: custom.error40, mt: "64px" } : undefined}
        icon={<LogOutIcon {...iconStyle} />}
        value=""
        label="Вихід"
        onClick={handleLogout}
      />
    </Tabs>
  );
};
