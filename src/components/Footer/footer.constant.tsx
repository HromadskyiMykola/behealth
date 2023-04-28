import React, { ReactNode } from "react";
import Kyivstar from "../../assets/CustomIcon/Kyivstar";
import Life from "../../assets/CustomIcon/Life";
import Vodafon from "../../assets/CustomIcon/Vodafon";
import { ERouteNames } from "~/routes/routeNames";

export const ABOUT_FOOTER_TEXT = {
  title: "Коротко про beHealth",
  text: [
    `beHealth це медичний онлайн-сервіс, який спрощує доступ до всіх
              медичних послуг в режимі реального часу. З нашою допомогою
              пацієнти можуть знайти лікаря онлайн і записатися до нього в
              клініку на прийом. Нашим користувачам доступна база з більш ніж
              12000 фахівців і 1800 медичних установ по всій Україні.`,
  ],
};

export const ADVANTAGES_FOOTER_TEXT = {
  title: "Можливості сервісу",
  text: [
    `На сайті behealth.ua ви можете швидко записатися до лікаря, який
                проведе консультацію і підбере ефективний спосіб лікування
                захворювання.Якщо приїхати на прийом в клініку для вас важко, ви
                можете скористатися послугою «Виклик лікаря додому» чи
                «Онлайн-консультація з лікарем».`,
    `Після отримання вашого звернення оператори колл-центру
                behealth.ua зв'яжуться з вами найближчим часом і запропонують
                фахівців, які можуть приїхати до вас додому або проконсультувати
                вас по телефону. На нашому порталі ви знайдете перевірені
                відгуки пацієнтів, які раніше побували на прийомі у лікаря.
                Кожен відгук, залишений користувачем порталу, враховується при
                формуванні рейтингу. Чим вище рейтинг фахівця, тим вище його
                професіоналізм. beHealth відрізняється величезним каталогом
                діагностичних центрів в будь-якому місті України - Київ, Одеса,
                Харків, Львів, Дніпро та ін. Діагностичні центри пропонують
                широкий спектр досліджень: МРТ,, КТ,, УЗІ,, ендоскопічні методи
                дослідження та інші.`,
    `Для швидкого пошуку центру діагностики в вашому місті
                використовуйте фільтри, які дозволяють відсортувати список
                установ за кількома параметрами: рейтингу, популярності, а також
                кількості відгуків та місцерозташуванням. Записуйтеся на прийом
                до лікаря, на аналізи або діагностику через behealth.ua, адже
                разом з нами медицина стає простою, зручною та доступною.`,
  ],
};

export const CONTACT_PHONES_KYIVSTAR: { icon: JSX.Element; phone: string } = {
  icon: (
    <Kyivstar
      width="26"
      height="24"
      viewBox="0 0 28 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    />
  ),
  phone: "(067) 35 337 27",
};
export const CONTACT_PHONES_LIFE: { icon: JSX.Element; phone: string } = {
  icon: (
    <Life
      width="30"
      height="29"
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    />
  ),
  phone: "(073) 35 337 27",
};
export const CONTACT_PHONES_VODAFON: { icon: JSX.Element; phone: string } = {
  icon: (
    <Vodafon
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    />
  ),
  phone: "(095) 35 337 27",
};

export const BEHEALTH_FOOTER_LINK: { name: string; path: string }[] = [
  {
    name: "Про Нас",
    path: ERouteNames.ABOUT,
  },
  {
    name: "Партнерам",
    path: "/",
  },
  {
    name: "Медична реформа",
    path: "/",
  },
  {
    name: "Правила сервісу",
    path: "/",
  },
  {
    name: "Підключення медзакладу",
    path: "/",
  },
];
export const PATIENTS_LINK_FOOTER_LINK: { name: string; path: string }[] = [
  {
    name: "Послуги",
    path: "/",
  },
  {
    name: "Лікарі",
    path: ERouteNames.DOCTORS,
  },
  {
    name: "Медичні заклади",
    path: ERouteNames.CLINICS,
  },
  {
    name: "Угода користувача",
    path: "/",
  },
  {
    name: "Політика конфіденційності",
    path: "/",
  },
];
export const FOOTER_COMPANY_INFO = {
  title: "Company",
  path: "м. Київ, вул. Гмирі Бориса, 14 Б",
  text: ["ТОВ «БІХЕЛС ЮА» бул.", "Дружби Народів,", "14 Київ 01103 Україна"],
};
