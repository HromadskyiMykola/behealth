import {
  TDoctor,
  TFilterOptions,
  THandleFilterChange,
  useApiService,
} from "~/common";
import { SyntheticEvent, useEffect, useState } from "react";
import {
  optionsComparator,
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
  // unnecessary
  // medicalFacilityType: "",
  // additionalOptions: "",
};

export const useDoctorsData = () => {
  const { getDoctors } = useApiService();
  const [doctors, setDoctors] = useState([] as TDoctor[]);
  const [filteredDoctors, setFilteredDoctors] = useState([] as TDoctor[]);
  const [optionsData, setOptionsData] = useState(optionsTemplate);

  useEffect(() => {
    getDoctors().then((res) => {
      setDoctors(res);
      setFilteredDoctors(res);
      setOptionsData((prev) => optionsExtractor(res, prev));
    });
  }, []);

  // chip labels



  type ChipData = {
    key: number;
    label: string;
  };
  const [chipData, setChipData] = useState<ChipData[]>([]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  // filter

  // `${range.join("-")}грн`;

  const [selectedFilters, setSelectedFilters] = useState(filterOptions);

  const handleFilterChange: THandleFilterChange = (key, value) => {
    if (key === "resetFilter") {
      setFilteredDoctors(doctors);
      setSelectedFilters(filterOptions);
      return;
    }

    setSelectedFilters((prevOptions) => {
      const updatedOptions = { ...prevOptions };
      updatedOptions[key].val = value;

      return updatedOptions;
    });
  };

  const handleCheck = (e: SyntheticEvent<Element, Event>, checked: boolean) => {
    const input = e.target as HTMLInputElement;
    const { name } = input;
    const key = name as keyof TFilterOptions;

    handleFilterChange(key, checked);
  };

  useEffect(() => {
    const newFilteredDoctors = doctors.filter((doctor) =>
      optionsComparator(doctor, selectedFilters)
    );

    setFilteredDoctors(newFilteredDoctors);
  }, [selectedFilters]);

  return {
    handleCheck,
    optionsData,
    doctors,
    filteredDoctors,
    setFilteredDoctors,
    filterOptions,
    setSelectedFilters,
    handleFilterChange,
  };
};
