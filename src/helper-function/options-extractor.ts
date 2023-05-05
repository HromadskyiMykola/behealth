import { TClinic, TDoctor, TOptionsData } from "~/common";

export const optionsTemplate = {
  city: ["Вся Україна"] as string[],
  districts: [] as string[],
  specs: [] as string[],
  qualifications: [] as string[],
  rangePrice: [0, 0] as [number, number],
  maxExperience: 0,
};

export const optionsExtractor = (
  data: any,
  optionsData: TOptionsData
): TOptionsData => {
  data.forEach((item: any) => {
    if (!optionsData.specs.includes(item.speciality)) {
      optionsData.specs.push(item.speciality);
    }
    if (!optionsData.city.includes(item.city)) {
      optionsData.city.push(item.city);
    }
    if (!optionsData.districts.includes(item.district)) {
      optionsData.districts.push(item.district);
    }
    if (!optionsData.qualifications.includes(item.qualification)) {
      optionsData.qualifications.push(item.qualification);
    }
    if (item.paidAppointment) {
      const price = item.paidAppointment;
      const [min, max] = optionsData.rangePrice;

      (min === 0 || price < min) && (optionsData.rangePrice[0] = price);
      (max === 0 || price > max) && (optionsData.rangePrice[1] = price);
    }
    if (item.experience) {
      const years = item.experience;
      const max = optionsData.maxExperience;

      years > max && (optionsData.maxExperience = years);
    }
  });

  return optionsData;
};
