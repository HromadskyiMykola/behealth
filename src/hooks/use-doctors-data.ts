import {
  TDoctor,
  TFilterOptions,
  THandleFilterChange,
  useApiService,
} from "~/common";
import { useEffect, useState } from "react";
import { optionsExtractor, optionsTemplate } from "~/helper-function";

export const filterOptionsTemplate = {
  city: "",
  district: "",
  stateClinic: false,
  privateClinic: false,
  doctorAcceptsDeclarations: false,
  doctorWorksWithEHR: false,
  onlineConsultation: false,
  admissionOfChildren: false,
  admissionByReferral: false,
  admissionByNHSU: false,
  admissionPaid: false,
  rangePrice: [0, 5000],
  male: false,
  female: false,
  rangeExperience: 0,
  evaluationNo: false,
  evaluationNormally: false,
  evaluationGood: false,
  evaluationVeryGood: false,
  //
  qualification: "",
  speciality: "",
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

  const handleFilterChange: THandleFilterChange = (key, value, chipName) => {
    if (key === "resetFilter") {
      setFilteredDoctors(doctors);
      setSelectedFilters(filterOptionsTemplate);
      return;
    }

    // console.log("val>>", value);
    setSelectedFilters((prevOptions) => ({
      ...prevOptions,
      [key]: value,
    }));
  };

  useEffect(() => {
    // Вызываем onChange с массивом отфильтрованных докторов каждый раз, когда фильтр меняется
    const newFilteredDoctors = doctors.filter((doctor) => {
      if (
        selectedFilters.city !== "Вся Україна" &&
        selectedFilters.city &&
        doctor.city !== selectedFilters.city
      )
        return false;

      if (
        selectedFilters.district &&
        doctor.district !== selectedFilters.district
      )
        return false;

      if (
        selectedFilters.qualification &&
        doctor.qualification !== selectedFilters.qualification
      )
        return false;

      //  console.log("doc>>", doctor.qualification , "filt>>", selectedFilters.qualification);
      if (
        selectedFilters.stateClinic &&
        doctor.clinicType !== "Державна клініка"
      )
        return false;

      if (
        selectedFilters.privateClinic &&
        doctor.clinicType !== "Приватна клініка"
      )
        return false;

      if (
        selectedFilters.doctorAcceptsDeclarations &&
        doctor.doctorAcceptsDeclarations !==
          selectedFilters.doctorAcceptsDeclarations
      )
        return false;

      if (
        selectedFilters.doctorWorksWithEHR &&
        doctor.doctorWorksWithEHR !== selectedFilters.doctorWorksWithEHR
      )
        return false;

      if (
        selectedFilters.onlineConsultation &&
        doctor.onlineConsultation !== selectedFilters.onlineConsultation
      )
        return false;

      if (
        selectedFilters.admissionOfChildren &&
        doctor.admissionOfChildren !== selectedFilters.admissionOfChildren
      )
        return false;

      if (
        selectedFilters.admissionByReferral &&
        doctor.admissionByReferral !== selectedFilters.admissionByReferral
      )
        return false;

      if (
        selectedFilters.admissionByNHSU &&
        doctor.admissionByNHSU !== selectedFilters.admissionByNHSU
      )
        return false;

 

      if (
        selectedFilters.admissionPaid &&
        (!doctor.paidAppointment ||
          doctor.paidAppointment < selectedFilters.rangePrice[0] ||
          doctor.paidAppointment > selectedFilters.rangePrice[1])
      )
        return false;

      
            if (
              selectedFilters.admissionByNHSU &&
              doctor.admissionByNHSU !== selectedFilters.admissionByNHSU
            )
              return false;
      //

      //

      // else if ( )

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
    setFilteredDoctors(newFilteredDoctors);
  }, [selectedFilters]);

  return {
    optionsData,
    doctors,
    filteredDoctors,
    setFilteredDoctors,
    selectedFilters,
    setSelectedFilters,
    handleFilterChange,
  };
};
