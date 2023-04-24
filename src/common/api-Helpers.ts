// Unfortunately, back-end developers don't understand that the names of the parameters should be correct,
// so i had to make the function to transform the output data.
const transformRequestData = (data: any) => {
  const {
    userType,
    firstName,
    middleName,
    lastName,
    mobileNum,
    docSerialNum,
    issuedBy,
    addressType,
    birthDate,
    workType,
    ...rest
  } = data;

  return {
    ...(userType ? { user_type: userType } : {}),
    ...(firstName ? { name: firstName } : {}),
    ...(middleName ? { second_name: middleName } : {}),
    ...(lastName ? { surname: lastName } : {}),
    ...(birthDate ? { birthday: birthDate } : {}),
    ...(mobileNum ? { phone: mobileNum } : {}),
    ...(addressType ? { address_type: addressType } : {}),
    ...(workType ? { work_type: workType } : {}),
    ...(docSerialNum ? { series: docSerialNum } : {}),
    ...(issuedBy ? { issued_by: issuedBy } : {}),
    ...rest,
  };
};

// transform response data
const _transformKey = (key: string): string => {
  const keyMap: { [key: string]: string } = {
    user_type: "userType",
    name: "firstName",
    second_name: "middleName",
    surname: "lastName",
    fullname: "fullName",
    phone: "mobileNum",
    series: "docSerialNum",
    issued_by: "issuedBy",
    address_type: "addressType",
    birthday: "birthDate",
    work_type: "workType",
    contact_info: "contactInfo",
    main_info: "personalData",
    document: "identityDocuments",
  };

  return keyMap[key] || key;
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
