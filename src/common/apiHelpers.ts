// Unfortunately, back-end developers don't understand that the names of the parameters should be correct,
// so i had to make the function to transform the output data.
export const transformRequestData = (data: any) => {
  const {
    userType,
    firstName,
    middleName,
    lastName,
    mobileNumber,
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
    ...(mobileNumber ? { phone: mobileNumber } : {}),
    ...(addressType ? { address_type: addressType } : {}),
    ...(workType ? { work_type: workType } : {}),
    ...(docSerialNum ? { series: docSerialNum } : {}),
    ...(issuedBy ? { issued_by: issuedBy } : {}),
    ...rest,
  };
};

export const transformResponseData = (data: any) => {
  if (data?.status) return data.status;
  if (data?.token) return data.token;

  const {
    user_type,
    name,
    second_name,
    surname,
    phone,
    series,
    issued_by,
    address_type,
    birthday,
    work_type,
    ...rest
  } = data;

  return {
    ...(user_type ? { userType: user_type } : {}),
    ...(name ? { firstName: name } : {}),
    ...(second_name ? { middleName: second_name } : {}),
    ...(surname ? { lastName: surname } : {}),
    ...(birthday ? { birthDate: birthday } : {}),
    ...(phone ? { mobileNumber: phone } : {}),
    ...(address_type ? { addressType: address_type } : {}),
    ...(work_type ? { workType: work_type } : {}),
    ...(series ? { docSerialNum: series } : {}),
    ...(issued_by ? { issuedBy: issued_by } : {}),
    ...rest,
  };
};

export const errorHandler = (error: any): any => {
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
