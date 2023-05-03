import { TDoctor, TOptionsData } from "~/common";

export const optionsTemplate = {
  districts: [] as string[],
  specs: [] as string[],
  qualifications: [] as string[],
  rangePrice: [0, 0] as [number, number],
  maxExperience: 0,
};

export const optionsExtractor = (
  doctors: TDoctor[],
  optionsData: TOptionsData
): TOptionsData => {
  doctors.forEach((doc) => {
    if (!optionsData.specs.includes(doc.specialty)) {
      optionsData.specs.push(doc.specialty);
    }
    if (!optionsData.districts.includes(doc.district)) {
      optionsData.districts.push(doc.district);
    }
    if (!optionsData.qualifications.includes(doc.qualification)) {
      optionsData.qualifications.push(doc.qualification);
    }
    if (doc.servicePayment.paidAppointment) {
      const price = doc.servicePayment.paidAppointment;
      const [min, max] = optionsData.rangePrice;

      (min === 0 || price < min) && (optionsData.rangePrice[0] = price);
      (max === 0 || price > max) && (optionsData.rangePrice[1] = price);
    }
    if (doc.experience) {
      const years = doc.experience;
      const max = optionsData.maxExperience;

      years > max && (optionsData.maxExperience = years);
    }
  });

  return optionsData;
};
