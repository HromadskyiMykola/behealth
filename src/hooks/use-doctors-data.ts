import { TDoctor, TFilterOptions, useApiService } from "~/common";
import { useEffect, useState } from "react";
import { optionsExtractor, optionsTemplate } from "~/helper-function";

export const filterOptionsTemplate = {
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


  const handleFilterChange = (key: keyof TFilterOptions, value: any) => {
    setSelectedFilters((prevOptions) => ({
      ...prevOptions,
      [key]: value,
    }));
  };

    useEffect(() => {
      // Вызываем onChange с массивом отфильтрованных докторов каждый раз, когда фильтр меняется
      const filteredDoctors = doctors.filter((doctor) => {
        if (
          selectedFilters.specialty &&
          doctor.specialty !== selectedFilters.specialty
        )
          return false;
        if (
          selectedFilters.district &&
          doctor.district !== selectedFilters.district
        )
          return false;
        // if (
        //   selectedFilters.medicalFacilityType &&
        //   doctor.medicalFacilityType !== selectedFilters.medicalFacilityType
        // )
        //   return false;
        // if (
        //   selectedFilters.additionalOptions &&
        //   doctor.additionalOptions !== selectedFilters.additionalOptions
        // )
        //   return false;
        // if (
        //   selectedFilters.servicePayment &&
        //   doctor.servicePayment !== selectedFilters.servicePayment
        // )
        //   return false;
        // if (
        //   selectedFilters.priceRangeFrom &&
        //   doctor.price < selectedFilters.priceRangeFrom
        // )
        //   return false;
        // if (
        //   selectedFilters.priceRangeTo &&
        //   doctor.price > selectedFilters.priceRangeTo
        // )
        //   return false;
        // if (selectedFilters.gender && doctor.gender !== selectedFilters.gender)
        //   return false;
        // if (
        //   selectedFilters.experience &&
        //   doctor.experience !== selectedFilters.experience
        // )
        //   return false;
        // if (
        //   selectedFilters.patientRating &&
        //   doctor.patientRating !== selectedFilters.patientRating
        // )
        //   return false;
        // if (
        //   selectedFilters.qualification &&
        //   doctor.qualification !== selectedFilters.qualification
        // )
        //   return false;
        return true;
      });
      // handleFilterChange(filteredDoctors);
    }, [selectedFilters]);

  
  
  
  
  
  return {
    optionsData,
    doctors,
    filteredDoctors,
    setFilteredDoctors,
    selectedFilters,
    setSelectedFilters,
  };
};
