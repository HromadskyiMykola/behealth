// this function takes a string with a phone number in the form +XXXXXXXXXXXX
// and returns in the format +XX (XXX) XXX XX XX

export const phoneNumberFormatter = (phoneNumber: string | undefined) => {
  if (typeof phoneNumber !== "string") return phoneNumber;

  return phoneNumber.replace(
    /(\+\d{2})(\d{3})(\d{2})(\d{2})(\d{2})/,
    "$1 ($2) $3 $4 $5"
  );
};

export const yearsFormatter = (val: number): string =>
  val ? `${val % 10 === 1 && val !== 11 ? "року" : "років"}` : "";

export const numberToWord = (
  val: number,
  type: "doctor" | "clinic"
): string => {
  if (!val) {
    return "";
  }

  const options = {
    doctor: ["лікар", "лікаря", "лікарів"],
    clinic: ["клініка", "клініки", "клінік"],
  };

  const mod10 = val % 10;
  const mod100 = val % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return options[type][0];
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
    return options[type][1];
  }

  return options[type][2];
};
