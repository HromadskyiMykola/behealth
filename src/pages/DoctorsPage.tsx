import React from "react";
import { MainSectionDoctor } from "~/components/Main-section-doctor";
import HeaderCardDoctor from "~/components/Header-card-doctor/Header-card-doctor";

export function DoctorsPage() {
  return (
    <div>
      <HeaderCardDoctor />
      <MainSectionDoctor />
    </div>
  );
}
