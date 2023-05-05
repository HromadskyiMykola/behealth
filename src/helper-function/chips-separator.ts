import { ChipData, TFilterOptions } from "~/common";
import { yearsFormatter } from "./formatters";

const updateState = (
  state: ChipData,
  key: keyof TFilterOptions,
  label: string
) => {
  state[key] = {
    key,
    label,
  };
};

const deleteStateKey = (state: ChipData, key: string) => {
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
    ? updateState(state, "admissionPaid", `${rangePrice.val.join("-")}грн`)
    : deleteStateKey(state, "admissionPaid");

  stateClinic.val
    ? updateState(state, "stateClinic", stateClinic.title)
    : deleteStateKey(state, "stateClinic");

  privateClinic.val
    ? updateState(state, "privateClinic", privateClinic.title)
    : deleteStateKey(state, "privateClinic");

  doctorAcceptsDeclarations.val
    ? updateState(
        state,
        "doctorAcceptsDeclarations",
        doctorAcceptsDeclarations.title
      )
    : deleteStateKey(state, "doctorAcceptsDeclarations");

  doctorWorksWithEHR.val
    ? updateState(state, "doctorWorksWithEHR", doctorWorksWithEHR.title)
    : deleteStateKey(state, "doctorWorksWithEHR");

  onlineConsultation.val
    ? updateState(state, "onlineConsultation", onlineConsultation.title)
    : deleteStateKey(state, "onlineConsultation");

  admissionOfChildren.val
    ? updateState(state, "admissionOfChildren", admissionOfChildren.title)
    : deleteStateKey(state, "admissionOfChildren");

  admissionByNHSU.val
    ? updateState(state, "admissionByNHSU", admissionByNHSU.title)
    : deleteStateKey(state, "admissionByNHSU");

  admissionByReferral.val
    ? updateState(state, "admissionByReferral", admissionByReferral.title)
    : deleteStateKey(state, "admissionByReferral");

  female.val
    ? updateState(state, "female", female.title)
    : deleteStateKey(state, "female");

  male.val
    ? updateState(state, "male", male.title)
    : deleteStateKey(state, "male");

  evaluationNo.val
    ? updateState(state, "evaluationNo", evaluationNo.title)
    : deleteStateKey(state, "evaluationNo");

  evaluationNormally.val
    ? updateState(state, "evaluationNormally", evaluationNormally.title)
    : deleteStateKey(state, "evaluationNormally");

  evaluationGood.val
    ? updateState(state, "evaluationGood", evaluationGood.title)
    : deleteStateKey(state, "evaluationGood");

  evaluationVeryGood.val
    ? updateState(state, "evaluationVeryGood", evaluationVeryGood.title)
    : deleteStateKey(state, "evaluationVeryGood");

  if (rangeExperience.val) {
    const { val } = rangeExperience;
    updateState(state, "rangeExperience", `Від ${val} ${yearsFormatter(val)}`);
  } else {
    deleteStateKey(state, "rangeExperience");
  }

  qualification.val
    ? updateState(state, "qualification", qualification.val)
    : deleteStateKey(state, "qualification");

  parking.val
    ? updateState(state, "parking", parking.title)
    : deleteStateKey(state, "parking");

  kidsRoom.val
    ? updateState(state, "kidsRoom", kidsRoom.title)
    : deleteStateKey(state, "kidsRoom");

  paymentByCard.val
    ? updateState(state, "paymentByCard", paymentByCard.title)
    : deleteStateKey(state, "paymentByCard");

  zoneWiFi.val
    ? updateState(state, "zoneWiFi", zoneWiFi.title)
    : deleteStateKey(state, "zoneWiFi");

  pharmacy.val
    ? updateState(state, "pharmacy", pharmacy.title)
    : deleteStateKey(state, "pharmacy");

  return state;
};
