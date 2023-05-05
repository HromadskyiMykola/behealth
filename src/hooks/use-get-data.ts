import { TClinic, TDoctor, THandleFilterChange, useApiService } from "~/common";
import { useEffect, useState } from "react";
import {
  doctorOptionsComparator,
  clinicOptionsComparator,
  optionsExtractor,
  optionsTemplate,
} from "~/helper-function";

export const filterOptions = {
  city: { val: "", title: "" },
  district: { val: "", title: "" },
  stateClinic: { val: false, title: "Державна клініка" },
  privateClinic: { val: false, title: "Приватна клініка" },
  doctorAcceptsDeclarations: { val: false, title: "Лікар приймає декларації" },
  doctorWorksWithEHR: { val: false, title: "Лікар працює з eHealth (ЕСОЗ)" },
  onlineConsultation: { val: false, title: "Онлайн консультація" },
  admissionOfChildren: { val: false, title: "Прийом дітей" },
  admissionByReferral: { val: false, title: "Безкоштовно за направленням" },
  admissionByNHSU: { val: false, title: "Безкоштовно за декларацією НСЗУ" },
  admissionPaid: { val: false, title: "Платний прийом" },
  rangePrice: { val: [0, 0], title: "" },
  male: { val: false, title: "Чоловік" },
  female: { val: false, title: "Жінка" },
  rangeExperience: { val: 0, title: "" },
  evaluationNo: { val: false, title: "Без оцінювань" },
  evaluationNormally: { val: false, title: "Нормально" },
  evaluationGood: { val: false, title: "Добре" },
  evaluationVeryGood: { val: false, title: "Дуже добре" },
  qualification: { val: "", title: "" },
  speciality: { val: "", title: "" },
  // clinic options
  parking: { val: false, title: "Паркінг" },
  kidsRoom: { val: false, title: "Дитяча кімната" },
  paymentByCard: { val: false, title: "Оплата картою" },
  zoneWiFi: { val: false, title: "Wi-Fi зона" },
  pharmacy: { val: false, title: "Аптека" },
};

export const useGetData = () => {
  const { getDoctors, getClinics } = useApiService();
  const [doctors, setDoctors] = useState([] as TDoctor[]);
  const [clinics, setClinics] = useState([] as TClinic[]);
  const [filteredDoctors, setFilteredDoctors] = useState([] as TDoctor[]);
  const [filteredClinics, setFilteredClinics] = useState([] as TClinic[]);
  const [optionsData, setOptionsData] = useState(optionsTemplate);
  const [selectedFilters, setSelectedFilters] = useState(filterOptions);

  useEffect(() => {
    getDoctors().then((res) => {
      setDoctors(res);
      setFilteredDoctors(res);
      setOptionsData((prev) => optionsExtractor(res, prev));
    });

    getClinics().then((res) => {
      setClinics(res);
      setFilteredClinics(res);
      setOptionsData((prev) => optionsExtractor(res, prev));
    });
  }, []);

  const handleFilterChange: THandleFilterChange = (key, value) => {
    setSelectedFilters((prevOptions) => {
      const updatedOptions = { ...prevOptions };
      updatedOptions[key].val = value;

      return updatedOptions;
    });
  };

  useEffect(() => {
    const newFilteredDoctors = doctors.filter((doctor) =>
      doctorOptionsComparator(doctor, selectedFilters)
    );

    const newFilteredClinics = clinics.filter((clinic) =>
      clinicOptionsComparator(clinic, selectedFilters)
    );

    setFilteredDoctors(newFilteredDoctors);
    setFilteredClinics(newFilteredClinics);
  }, [selectedFilters]);

  return {
    optionsData,
    doctors,
    filteredDoctors,
    clinics,
    filteredClinics,
    setFilteredDoctors,
    setFilteredClinics,
    filterOptions,
    selectedFilters,
    setSelectedFilters,
    handleFilterChange,
  };
};
