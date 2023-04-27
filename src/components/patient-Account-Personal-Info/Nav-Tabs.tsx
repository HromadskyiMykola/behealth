import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { Divider, Paper, Tabs } from "@mui/material";

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

const WrapperDivider = () => <Divider sx={{ mb: "16px" }} />;

export const NavTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { singOutProvider } = useAuthProvider();

  const handleLogout = useCallback(() => {
    navigate(ERouteNames.HOME);
    singOutProvider();
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
    <Paper sx={{ borderRadius: "12px" }}>
      <Tabs
        sx={{
          p: "24px 24px 8px 24px",
          "& .MuiTab-root": { marginBottom: "16px" },
          "& .MuiTabs-indicator": { display: "none" },
        }}
        value={value}
        onChange={handleChange}
        orientation="vertical"
      >
        <TabLink
          icon={<ClockIcon style={{ flexShrink: 0 }} size={22} />}
          value={ERouteNames.PATIENT_ACCOUNT_APPOINTMENTS}
          label="Записи"
        />
        <TabLink
          icon={<HelpCircleIcon style={{ flexShrink: 0 }} size={22} />}
          value={ERouteNames.PATIENT_ACCOUNT_HELP}
          label="Допомога"
        />

        <WrapperDivider />

        <TabLink
          icon={<UserCogIcon style={{ flexShrink: 0 }} size={22} />}
          value={ERouteNames.PATIENT_ACCOUNT_PERSONAL_INFO}
          label="Особиста інформація"
        />
        <TabLink
          icon={<FolderClosedIcon style={{ flexShrink: 0 }} size={22} />}
          value={ERouteNames.PATIENT_ACCOUNT_ADDITIONAL_DATA}
          label="Додаткові дані"
        />
        <TabLink
          icon={<LockIcon style={{ flexShrink: 0 }} size={22} />}
          value={ERouteNames.PATIENT_ACCOUNT_PASSWORD_N_SECURITY}
          label="Пароль та безпека"
        />

        <WrapperDivider />

        <TabLink
          icon={<LogOutIcon style={{ flexShrink: 0 }} size={22} />}
          value=""
          label="Вихід"
          onClick={handleLogout}
        />
      </Tabs>
    </Paper>
  );
};
