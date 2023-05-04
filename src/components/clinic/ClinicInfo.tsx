import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SearchDocs } from "~/components/clinic/SearchDocs";
import { CLINIC_CARD } from "~/components/clinic/clinic-card-constants";
import { MainClinicCard } from "~/components/clinic/MainClinicCard";
import { SmallClinicCard } from "~/components/clinic/SmallClinicCard";
import { ClinicInfoAboutBlock } from "~/components/clinic/ClinicInfoAboutBlock";
import { ClinicMedicine } from "~/components/clinic/ClinicMedicine";
import { Chips } from "~/components/clinic/Chips";
import { IconsSocialList } from "~/components/clinic/IconsSocialList";
import { TClinic, useApiService } from "~/common";
import { useParams } from "react-router-dom";

export const ClinicInfo = () => {
  const [clinic, setClinic] = useState<TClinic | null>(null);
  const { getClinics } = useApiService();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    (async () => {
      const clinics = await getClinics();
      await clinics.map((item: TClinic) => {
        if (String(item.id) === id) {
          setClinic(item);
        }
      });
    })();
  }, []);

  useEffect(() => {
    console.log(clinic);
  }, [clinic]);

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
