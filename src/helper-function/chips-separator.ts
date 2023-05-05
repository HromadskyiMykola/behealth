import { ChipData, TFilterOptions } from "~/common";
import { yearsFormatter } from "./formatters";

const addStateKey = (
  state: ChipData,
  key: keyof TFilterOptions,
  label: string
) => {
  state[key] = {
    key,
    label,
  };
};

const delStateKey = (state: ChipData, key: string) => {
  delete state[key];
};

export const chipsSeparator = (
  state: ChipData,
  selectedFilters: TFilterOptions
) => {
  const {
    stateClinic,
    privateClinic,
    doctorAcceptsDeclarations,
    doctorWorksWithEHR,
    onlineConsultation,
    admissionOfChildren,
    admissionByReferral,
    admissionByNHSU,
    admissionPaid,
    rangePrice,
    male,
    female,
    rangeExperience,
    evaluationNo,
    evaluationNormally,
    evaluationGood,
    evaluationVeryGood,
    qualification,
    parking,
    kidsRoom,
    paymentByCard,
    zoneWiFi,
    pharmacy,
  } = selectedFilters;

  admissionPaid.val
    ? addStateKey(state, "admissionPaid", `${rangePrice.val.join("-")}грн`)
    : delStateKey(state, "admissionPaid");

  stateClinic.val
    ? addStateKey(state, "stateClinic", stateClinic.title)
    : delStateKey(state, "stateClinic");

  privateClinic.val
    ? addStateKey(state, "privateClinic", privateClinic.title)
    : delStateKey(state, "privateClinic");

  doctorAcceptsDeclarations.val
    ? addStateKey(
        state,
        "doctorAcceptsDeclarations",
        doctorAcceptsDeclarations.title
      )
    : delStateKey(state, "doctorAcceptsDeclarations");

  doctorWorksWithEHR.val
    ? addStateKey(state, "doctorWorksWithEHR", doctorWorksWithEHR.title)
    : delStateKey(state, "doctorWorksWithEHR");

  onlineConsultation.val
    ? addStateKey(state, "onlineConsultation", onlineConsultation.title)
    : delStateKey(state, "onlineConsultation");

  admissionOfChildren.val
    ? addStateKey(state, "admissionOfChildren", admissionOfChildren.title)
    : delStateKey(state, "admissionOfChildren");

  admissionByNHSU.val
    ? addStateKey(state, "admissionByNHSU", admissionByNHSU.title)
    : delStateKey(state, "admissionByNHSU");

  admissionByReferral.val
    ? addStateKey(state, "admissionByReferral", admissionByReferral.title)
    : delStateKey(state, "admissionByReferral");

  female.val
    ? addStateKey(state, "female", female.title)
    : delStateKey(state, "female");

  male.val
    ? addStateKey(state, "male", male.title)
    : delStateKey(state, "male");

  evaluationNo.val
    ? addStateKey(state, "evaluationNo", evaluationNo.title)
    : delStateKey(state, "evaluationNo");

  evaluationNormally.val
    ? addStateKey(state, "evaluationNormally", evaluationNormally.title)
    : delStateKey(state, "evaluationNormally");

  evaluationGood.val
    ? addStateKey(state, "evaluationGood", evaluationGood.title)
    : delStateKey(state, "evaluationGood");

  evaluationVeryGood.val
    ? addStateKey(state, "evaluationVeryGood", evaluationVeryGood.title)
    : delStateKey(state, "evaluationVeryGood");

  if (rangeExperience.val) {
    const { val } = rangeExperience;
    addStateKey(state, "rangeExperience", `Від ${val} ${yearsFormatter(val)}`);
  } else {
    delStateKey(state, "rangeExperience");
  }

  qualification.val
    ? addStateKey(state, "qualification", qualification.val)
    : delStateKey(state, "qualification");

  parking.val
    ? addStateKey(state, "parking", parking.title)
    : delStateKey(state, "parking");

  kidsRoom.val
    ? addStateKey(state, "kidsRoom", kidsRoom.title)
    : delStateKey(state, "kidsRoom");

  paymentByCard.val
    ? addStateKey(state, "paymentByCard", paymentByCard.title)
    : delStateKey(state, "paymentByCard");

  zoneWiFi.val
    ? addStateKey(state, "zoneWiFi", zoneWiFi.title)
    : delStateKey(state, "zoneWiFi");

  pharmacy.val
    ? addStateKey(state, "pharmacy", pharmacy.title)
    : delStateKey(state, "pharmacy");

  return state;
};
