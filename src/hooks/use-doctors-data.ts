import { TDoctor, useApiService } from "~/common";
import { useEffect, useState } from "react";

// TODO: is it necessary??

export const useDoctorsData = () => {
  const { getDoctors } = useApiService();
  const [doctors, setDoctors] = useState([] as TDoctor[]);
  const [filteredDoctors, setFilteredDoctors] = useState([] as TDoctor[]);

  useEffect(() => {
    getDoctors().then((res) => {
      setDoctors(res);
      setFilteredDoctors(res);
    });
  }, []);

  const [filter, setFilter] = useState({
    specialty: "",
    district: "",
    medicalFacilityType: "",
    additionalOptions: "",
    servicePayment: "",
    priceRangeFrom: "",
    priceRangeTo: "",
    gender: "",
    experience: "",
    patientRating: "",
    qualification: "",
  });

 const handleFilterChange = (key: any, value: any) => {
   setFilter((prevFilter) => ({
     ...prevFilter,
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
    doctors,
    filteredDoctors,
    setFilteredDoctors,
    filter,
    setFilter,
  };
};
