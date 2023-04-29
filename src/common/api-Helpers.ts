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
  eligibleCat: "preferenceCategories",
  passwordCurrent: "password",
  passwordNew: "password",
  typeOfDoc: "document_type",
  dateOfIssue: "date",
};

const reverseKeyMap: { [key: string]: string } = {};
for (const key in keyMap) {
  reverseKeyMap[keyMap[key]] = key;
}

const transformRequestData = (data: any) => {
  if (data === null || typeof data !== "object") return data;

  const modData: { [key: string]: string } = {};

  for (const key in data) {
    if (!data[key]) continue;

    const modKey = keyMap[key] || key;
    modData[modKey] = data[key];
  }

  return modData;
};

const transformResponseData = (data: any) => {
  if (data?.status) return data.status;
  if (data?.token) return data.token;

  const modData: { [key: string]: string | undefined } = {};

  const keyFinder = (nestedData: any) => {
    if (nestedData === null || typeof nestedData !== "object") return;

    for (const key in nestedData) {
      const modKey = reverseKeyMap[key] || key;
      const value = nestedData[key];

      if (value !== null && typeof value === "object") {
        keyFinder(value);
      } else {
        modData[modKey] = value;

        // assign undefined, since null is not a valid value as the defaultValue for <Input/>
        if (modData[modKey] === null) modData[modKey] = undefined;
      }
    }
  };

  keyFinder(data);
  return modData;
};

// error handler
const errorMessagesUk: { [key: number]: string } = {
  400: "Помилковий запит",
  401: "Не авторизований",
  402: "Потрібна оплата",
  403: "Доступ заборонено",
  404: "Сторінку не знайдено",
  405: "Метод не дозволений",
  406: "Неприйнятно",
  407: "Необхідна аутентифікація проксі",
  408: "Час запиту вичерпано",
  409: "Конфлікт",
  410: "Вилучено",
  411: "Необхідна довжина",
  412: "Попередня умова не виконана",
  413: "Розмір запиту завеликий",
  414: "URI запиту завеликий",
  415: "Тип медіа не підтримується",
  416: "Запитаний діапазон не задовольняється",
  417: "Попередня умова не виконана",
  421: "Некоректний запит",
  422: "Непередбачена сутність",
  423: "Заблоковано",
  424: "Помилка залежності",
  425: "Недостатньо захищено",
  426: "Необхідна оновлена версія",
  428: "Необхідна попередня умова",
  429: "Забагато запитів",
  431: "Занадто великі заголовки запиту",
  451: "Недоступно через обмеження законодавства",
  500: "Внутрішня помилка сервера",
  501: "Не реалізовано",
  502: "Поганий шлюз",
  503: "Сервіс недоступний",
  504: "Час шлюзу вичерпано",
  505: "Версія HTTP не підтримується",
  506: "Варіант також проводиться перемовини",
  507: "Перевищено межу зберігання",
  508: "Виявлено петлю посилань",
  510: "Не розширено",
  511: "Необхідна аутентифікація мережі",
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
    (response?.status && errorMessagesUk[response.status]) ||
    JSON.stringify(response?.data?.error) ||
    response?.statusText + " " + message ||
    code ||
    name ||
    "Unknown error"
  );
};

const coloredLog = (name: string, data: any) =>
  console.log(
    `%c${name}`,
    "color: lightgrey; background-color: #00513E; padding: 4px",
    data
  );

export {
  errorHandler,
  transformResponseData,
  transformRequestData,
  coloredLog,
};
