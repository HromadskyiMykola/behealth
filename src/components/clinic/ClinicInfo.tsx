import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { SearchDocs } from "~/components/clinic/SearchDocs";
import { MainClinicCard } from "~/components/clinic/MainClinicCard";
import { ClinicInfoAboutBlock } from "~/components/clinic/ClinicInfoAboutBlock";
import { ClinicMedicine } from "~/components/clinic/ClinicMedicine";
import { Chips } from "~/components/clinic/Chips";
import { IconsSocialList } from "~/components/clinic/IconsSocialList";
import { TClinic } from "~/common";
import { useParams } from "react-router-dom";
import { useGetData } from "~/hooks";

export const ClinicInfo = () => {
  const { clinics } = useGetData();
  const [clinic, setClinic] = useState<TClinic | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const clinic = clinics.find(
      (item) => String(item.id) === id && item.dataType === "clinic"
    );

    clinic && setClinic(clinic);
  }, [clinics]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {clinic && <MainClinicCard clinic={clinic} />}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          p: "32px",
          bgcolor: "#fff",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.04)",
          borderRadius: "12px",
        }}
      >
        <SearchDocs />

        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <Typography variant="h5" color="#212121">
            Про клініку
          </Typography>

          {clinic && clinic.medicine && (
            <ClinicInfoAboutBlock
              title={"Напрямки роботи клініки"}
              block={<ClinicMedicine medicine={clinic.medicine} />}
            />
          )}

          {clinic && clinic.tags && (
            <ClinicInfoAboutBlock
              title={"Зручності в медзакладі"}
              block={<Chips chips={clinic.tags} />}
            />
          )}

          <ClinicInfoAboutBlock
            title={"Соціальні мережі"}
            block={<IconsSocialList />}
          />
        </Box>
      </Box>
    </Box>
  );
};
