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
  `Від ${val} ${val % 10 === 1 && val !== 11 ? "року" : "років"}`;
