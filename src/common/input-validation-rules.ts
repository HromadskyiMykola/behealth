const maxFieldLength = (num: number) => `Має бути не більше ${num} символів`;

const passwordValidation = {
  required: "Будь ласка, введіть пароль",
  minLength: {
    value: 8,
    message: "Мінімальна довжина поля 8 символів",
  },
  maxLength: {
    value: 15,
    message: maxFieldLength(15),
  },
};

const validationRules = {
  firstName: {
    required: "Будь ласка, вкажіть ім’я",
    minLength: {
      value: 2,
      message: "Мінімальна довжина поля 2 символи",
    },
    maxLength: {
      value: 80,
      message: maxFieldLength(80),
    },
  },

  middleName: {
    minLength: {
      value: 2,
      message: "Мінімальна довжина поля 2 символи",
    },
    maxLength: {
      value: 80,
      message: maxFieldLength(80),
    },
  },

  lastName: {
    required: "Будь ласка, вкажіть прізвище",
    minLength: {
      value: 2,
      message: "Мінімальна довжина поля 2 символи",
    },
    maxLength: {
      value: 80,
      message: maxFieldLength(80),
    },
  },

  email: {
    required: "Будь ласка, введіть e-mail адресу",
    maxLength: {
      value: 128,
      message: maxFieldLength(128),
    },
    pattern: {
      value:
        /^([a-z0-9&'*+._%-]+(\.[a-z0-9&'*+._%-]+)*)@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/i,
      message: "Будь ласка, введіть коректну e-mail адресу",
    },
  },

  passwordCurrent: passwordValidation,

  passwordNew: {
    ...passwordValidation,
    pattern: {
      value:
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[`~!@#$%^&*()\-_=+[\]{}\\|;:'",./<>?]).+$/,
      message:
        "Пароль повинен містити велику і маленьку літери, 1 цифру та 1 спец.символ",
    },
  },

  passwordConfirm: (password: string) => ({
    required: "Будь ласка, введіть пароль ще раз.",
    validate: (value: string) => value === password || "Паролі не збігаються",
  }),

  mobileNum: {
    required: "Будь ласка, введіть номер телефону.",
    pattern: {
      value: /^380(?:[679]3|6[78]|9[1245678]|50|66|39)\d{7}$/,
      message: "Будь ласка, введіть коректний номер",
    },
  },

  tin: {
    required: "Будь ласка, введіть ІПН.",
    pattern: {
      value: /^\d{10}$/,
      message: "ІПН складається з 10 цифр.",
    },
  },

  settlementAndStr: {
    required: "Поле не може бути пустим",
    maxLength: { value: 100, message: maxFieldLength(100) },
    pattern: {
      value: /^[А-Яа-яЄєІіЇїҐґ,.\-();\s]+$/,
      message: "Дозволенна тільки кирилиця і спецсимволи -()",
    },
  },

  houseNum: {
    required: "Поле не може бути пустим",
    maxLength: { value: 5, message: maxFieldLength(5) },
    pattern: {
      value: /^\d+(\/\d+)?$/,
      message: "Можуть бути використані тільки цифри і /",
    },
  },

  apartmentNum: {
    required: "Поле не може бути пустим",
    maxLength: { value: 5, message: maxFieldLength(5) },
    pattern: {
      value: /^\d+(\/\d+)?$/,
      message: "Можуть бути використані тільки цифри і /",
    },
  },

  workplace: {
    required: "Поле не може бути пустим",
    maxLength: { value: 100, message: maxFieldLength(100) },
    pattern: {
      value: /^[А-Яа-яЄєІіЇїҐґ,.\-();\s]+$/,
      message: "Дозволенна тільки кирилиця і спецсимволи -()",
    },
  },

  jobTitle: {
    required: "Поле не може бути пустим",
    maxLength: { value: 15, message: maxFieldLength(15) },
    pattern: {
      value: /^[А-Яа-яЄєІіЇїҐґ\s]+$/,
      message: "Дозволенна тільки кирилиця",
    },
  },
};

export { validationRules };
