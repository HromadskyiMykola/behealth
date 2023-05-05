import { TClinic, TDoctor, TFilterOptions } from "~/common";

export const doctorOptionsComparator = (
  data: TDoctor,
  selectedFilters: TFilterOptions
) => {
  if (
    selectedFilters.city.val !== "Вся Україна" &&
    selectedFilters.city.val &&
    data.city !== selectedFilters.city.val
  )
    return false;

  if (
    selectedFilters.district.val &&
    data.district !== selectedFilters.district.val
  )
    return false;

  if (selectedFilters.stateClinic.val && data.clinicType !== "Державна клініка")
    return false;

  if (
    selectedFilters.privateClinic.val &&
    data.clinicType !== "Приватна клініка"
  )
    return false;

  if (
    selectedFilters.doctorAcceptsDeclarations.val &&
    data.doctorAcceptsDeclarations !==
      selectedFilters.doctorAcceptsDeclarations.val
  )
    return false;

  if (
    selectedFilters.doctorWorksWithEHR.val &&
    data.doctorWorksWithEHR !== selectedFilters.doctorWorksWithEHR.val
  )
    return false;

  if (
    selectedFilters.onlineConsultation.val &&
    data.onlineConsultation !== selectedFilters.onlineConsultation.val
  )
    return false;

  if (
    selectedFilters.admissionOfChildren.val &&
    data.admissionOfChildren !== selectedFilters.admissionOfChildren.val
  )
    return false;

  if (
    selectedFilters.admissionByReferral.val &&
    data.admissionByReferral !== selectedFilters.admissionByReferral.val
  )
    return false;

  if (
    selectedFilters.admissionByNHSU.val &&
    data.admissionByNHSU !== selectedFilters.admissionByNHSU.val
  )
    return false;

  if (
    selectedFilters.admissionPaid.val &&
    (!data.paidAppointment ||
      data.paidAppointment < selectedFilters.rangePrice.val[0] ||
      data.paidAppointment > selectedFilters.rangePrice.val[1])
  )
    return false;

  if (selectedFilters.male.val && data.sex !== "male") return false;

  if (selectedFilters.female.val && data.sex !== "female") return false;

  if (
    selectedFilters.rangeExperience.val &&
    data.experience < selectedFilters.rangeExperience.val
  )
    return false;

  if (selectedFilters.evaluationNo.val && data.grade) return false;

  if (selectedFilters.evaluationNormally.val && data.grade !== "Normally")
    return false;

  if (selectedFilters.evaluationGood.val && data.grade !== "Good") return false;

  if (selectedFilters.evaluationVeryGood.val && data.grade !== "Very good")
    return false;

  if (
    selectedFilters.qualification.val &&
    data.qualification !== selectedFilters.qualification.val
  )
    return false;

  return true;
};

export const clinicOptionsComparator = (
  data: TClinic,
  selectedFilters: TFilterOptions
) => {
  if (
    selectedFilters.city.val !== "Вся Україна" &&
    selectedFilters.city.val &&
    data.city !== selectedFilters.city.val
  )
    return false;

  if (
    selectedFilters.district.val &&
    data.district !== selectedFilters.district.val
  )
    return false;

  if (selectedFilters.stateClinic.val && data.clinicType !== "Державна клініка")
    return false;

  if (
    selectedFilters.privateClinic.val &&
    data.clinicType !== "Приватна клініка"
  )
    return false;

  if (
    selectedFilters.parking.val &&
    data.parking !== selectedFilters.parking.val
  )
    return false;

  if (
    selectedFilters.kidsRoom.val &&
    data.kidsRoom !== selectedFilters.kidsRoom.val
  )
    return false;

  if (
    selectedFilters.paymentByCard.val &&
    data.paymentByCard !== selectedFilters.paymentByCard.val
  )
    return false;

  if (
    selectedFilters.zoneWiFi.val &&
    data.zoneWiFi !== selectedFilters.zoneWiFi.val
  )
    return false;

  if (
    selectedFilters.pharmacy.val &&
    data.pharmacy !== selectedFilters.pharmacy.val
  )
    return false;

  // console.log(
  //   "doc>>",
  //   doctor.grade,
  //   "filt>>",
  //   selectedFilters.evaluationNo.val
  // );

  return true;
};
