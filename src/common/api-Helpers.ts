// Unfortunately, back-end developers don't understand that the names of the parameters should be correct,
// so i had to make the function to transform the output data.

// transform response data
const _transformKey = (key: string): string => {
  const keyMap: { [key: string]: string } = {
    user_type: "userType",
    name: "firstName",
    second_name: "middleName",
    surname: "lastName",
    phone: "mobileNum",
    series: "docSeries",
    number: "docNum",
    issued_by: "issuedBy",
    birthday: "birthDate",
    contact_info: "contactInfo",
    main_info: "personalData",
    document: "identityDocuments",
    address_type: "settlementType",
    settlement: "settlementAndStr",
    house: "houseNum",
    apartments: "apartmentNum",
    work_type: "employmentStatus",
    place: "workplace",
    position: "jobTitle",
    "eligible-cat": "eligibleCat",
  };

  return keyMap[key] || key;
};

const transformRequestData = (data: any) => {
  const transformedData: { [key: string]: any } = {};

  for (const key in data) {
    const modKey = _transformKey(key);

    if (key === "passwordNew" || key === "passwordCurrent") {
      transformedData["password"] = data[key];
    } else {
      transformedData[modKey] = data[key];
    }
  }

  return transformedData;
};

const transformResponseData = (data: any) => {
  if (data?.status) return data.status;
  if (data?.token) return data.token;

  const keyFinder = () => {
    if (data === null || typeof data !== "object") return data;

    const modData: { [key: string]: any } = {};

    for (const key in data) {
      const modKey = _transformKey(key);
      modData[modKey] = transformResponseData(data[key]);

      // assign undefined, since null is not a valid value as the defaultValue for <Input/>
      if (modData[modKey] === null) modData[modKey] = undefined;
    }

    return modData;
  };

  return keyFinder();
};

// error
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
