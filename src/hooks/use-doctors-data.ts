import { TDoctor, useApiService } from "~/common";
import { useEffect, useState } from "react";
import { optionsExtractor, optionsTemplate } from "~/helper-function";

const filterOptionsTemplate = {
  stateClinic: false,
  privateClinic: false,
  doctorAcceptsDeclarations: false,
  doctorWorksWithEHR: false,
  onlineConsultation: false,
  admissionOfChildren: false,
  admissionByReferral: false,
  admissionByNHSU: false,
  rangePrice: [0, 0],
  male: false,
  female: false,
  rangeExperience: 0,
  evaluationNo: false,
  evaluationNormally: false,
  evaluationGood: false,
  evaluationVeryGood: false,
  //
  qualification: "",
  district: "",
  specialty: "",
  // unnecessary
  medicalFacilityType: "",
  additionalOptions: "",
  servicePayment: "",
  priceRangeFrom: "",
  priceRangeTo: "",
  gender: "",
  experience: 0,
  patientRating: "",
};
type TFilterOptions = typeof filterOptionsTemplate;

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

  // filter
  const [selectedFilters, setSelectedFilters] = useState(filterOptionsTemplate);

  type IHandleFilterChange = (key: keyof TFilterOptions, value: any) => void;
  const handleFilterChange = (key: keyof TFilterOptions, value: any) => {
    setSelectedFilters((prevOptions) => ({
      ...prevOptions,
      [key]: value,
    }));
  };

  //   useEffect(() => {
  //   // Вызываем onChange с массивом отфильтрованных докторов каждый раз, когда фильтр меняется
  //   const filteredDoctors = doctors.filter((doctor) => {
  //     if (filter.specialty && doctor.specialty !== filter.specialty) return false;
  //     if (filter.district && doctor.district !== filter.district) return false;
  //     if (filter.medicalFacilityType && doctor.medicalFacilityType !== filter.medicalFacilityType) return false;
  //     if (filter.additionalOptions && doctor.additionalOptions !== filter.additionalOptions) return false;
  //     if (filter.servicePayment && doctor.servicePayment !== filter.servicePayment) return false;
  //     if (filter.priceRangeFrom && doctor.price < filter.priceRangeFrom) return false;
  //     if (filter.priceRangeTo && doctor.price > filter.priceRangeTo) return false;
  //     if (filter.gender && doctor.gender !== filter.gender) return false;
  //     if (filter.experience && doctor.experience !== filter.experience) return false;
  //     if (filter.patientRating && doctor.patientRating !== filter.patientRating) return false;
  //     if (filter.qualification && doctor.qualification !== filter.qualification) return false;
  //     return true;
  //   });
  //   onChange(filteredDoctors);
  // }, [doctors, filter, onChange]);

  return {
    optionsData,
    doctors,
    filteredDoctors,
    setFilteredDoctors,
    selectedFilters,
    setSelectedFilters,
  };
};
