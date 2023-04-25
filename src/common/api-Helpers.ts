// Unfortunately, back-end developers don't understand that the names of the parameters should be correct,
// so i had to make the function to transform the output data.

const keyMap: { [key: string]: string } = {
  userType: "user_type",
  firstName: "name",
  middleName: "second_name",
  lastName: "surname",
  mobileNum: "phone",
  docSeries: "series",
  docNum: "number",
  issuedBy: "issued_by",
  birthDate: "birthday",
  contactInfo: "contact_info",
  personalData: "main_info",
  settlementType: "address_type",
  settlementAndStr: "settlement",
  houseNum: "house",
  apartmentNum: "apartments",
  employmentStatus: "work_type",
  workplace: "place",
  jobTitle: "position",
  eligibleCat: "eligible-cat",
  passwordCurrent: "password",
  passwordNew: "password",
};

const reverseKeyMap: { [key: string]: string } = {};
for (const key in keyMap) {
  reverseKeyMap[keyMap[key]] = key;
}


const transformRequestData = (data: any) => {
  if (data === null || typeof data !== "object") return data;

  const modData: { [key: string]: string } = {};

  for (const key in data) {
    const modKey = keyMap[key] || key;
    modData[modKey] = data[key];
  }

  return modData;
};


const transformResponseData = (data: any) => {
  if (data?.status) return data.status;
  if (data?.token) return data.token;

  const keyFinder = () => {
    if (data === null || typeof data !== "object") return data;

    const modData: { [key: string]: string | undefined } = {};

    for (const key in data) {
      const modKey = reverseKeyMap[key] || key;
      modData[modKey] = transformResponseData(data[key]);

      // assign undefined, since null is not a valid value as the defaultValue for <Input/>
      if (modData[modKey] === null) modData[modKey] = undefined;
    }

    return modData;
  };

  return keyFinder();
};


const errorHandler = (error: any): any => {
  const { name, response, request, message, code } = error;

  if (typeof response?.data === "string" && response.data.includes("DOCTYPE")) {
    response.data =
      "The response contains HTML markup. See the full error instance.";
  }

  const log = (name: string, data: any) =>
    console.warn(
      `%c${name}`,
      "color: lightgrey; background-color: black; padding: 4px",
      data
    );

  log("Debugging " + name + " >>", code);
  log("request status >>", request?.status);
  log("response status >>", response?.status);
  log("err message >>", message);
  log("request err data >>", request);
  log("response err data >>", response?.data);
  log("response err headers >>", response?.headers);

  console.log("Full error instance >>", error);

  return (
    JSON.stringify(response?.data?.error) ||
    response?.statusText + " " + message ||
    code ||
    name ||
    "Unknown error"
  );
};

export { errorHandler, transformResponseData, transformRequestData };
