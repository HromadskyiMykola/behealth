import {
  Baby,
  Ear,
  Hand,
  HeartPulse,
  Stethoscope,
  Syringe,
  Tablets,
} from "lucide-react";
import { Gynecologist } from "~/assets/CustomIcon/Gynecologist";
import { Gastroenterologist } from "~/assets/CustomIcon/Gastroenterologist";
import { IChooseDoctor } from "~/common";
import { MUILink } from "~/components/Main/MUILink";
import { Laptop } from "~/assets/CustomIcon/Laptop";
import { Heart } from "~/assets/CustomIcon/Heart";
import { Shield } from "~/assets/CustomIcon/Shield";
import { HeadPhones } from "~/assets/CustomIcon/HeadPhones";
import howItWorks1 from "~/assets/images/how-it-work-1.png";
import howItWorks2 from "~/assets/images/how-it-work-2.png";
import howItWorks3 from "~/assets/images/how-it-work-3.png";
import ain from "~/assets/images/ain-chanel.png";
import ictv from "~/assets/images/ictv-chanel.png";
import twentyFourth from "~/assets/images/24-chanel.png";
import onePlusOne from "~/assets/images/1+1-chanel.png";

export const CHOOSE_DOCTORS_LIST: IChooseDoctor[] = [
  {
    id: 1,
    icon: <Ear color={"#F4FFF8"} width={36} height={36} />,
    name: "Отоларинголог",
    count: 125,
  },
  {
    id: 2,
    icon: <Baby color={"#F4FFF8"} width={36} height={36} />,
    name: "Лікар Педіатр",
    count: 40,
  },
  {
    id: 3,
    icon: (
      <Gynecologist
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      />
    ),
    name: "Гінеколог",
    count: 286,
  },
  {
    id: 4,
    icon: <Stethoscope color={"#F4FFF8"} width={36} height={36} />,
    name: "Сімейний лікар",
    count: 286,
  },
  {
    id: 5,
    icon: <HeartPulse color={"#F4FFF8"} width={36} height={36} />,
    name: "Кардіолог",
    count: 141,
  },
  {
    id: 6,
    icon: <Hand color={"#F4FFF8"} width={36} height={36} />,
    name: "Дерматовенеролог",
    count: 148,
  },
  {
    id: 7,
    icon: <Syringe color={"#F4FFF8"} width={36} height={36} />,
    name: "Терапевт",
    count: 263,
  },
  {
    id: 8,
    icon: (
      <Gastroenterologist
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      />
    ),
    name: "Гастроентеролог",
    count: 113,
  },
  {
    id: 9,
    icon: <Tablets color={"#F4FFF8"} width={36} height={36} />,
    name: "Психіатр",
    count: 81,
  },
];

export const ADVANTAGES_LIST = [
  {
    title: "Зручність",
    description:
      "Отримайте медичну консультацію зручним для вас часом та місцем. Немає потреби витрачати час на поїздки до лікаря або чекати в черзі.",
  },
  {
    title: "Доступність",
    description:
      "Онлайн сервіси доступні для людей, які проживають в віддалених регіонах або мають обмежені можливості мобільності. Також, онлайн особливо корисний для людей, які потребують консультацій із спеціалістами, яких вони не можуть знайти у своєму районі.",
  },
  {
    title: "Ефективність",
    description:
      "Консультації які відбуваються онлайн дозволяють лікареві проводити їх більш ефективно. Також, вони зменшують час очікування для пацієнтів.",
  },
  {
    title: "Вартість",
    description:
      "Пацієнт з легкістю обирає та підраховує бюджет на медичні витрати, також онлайн консультації та прийоми не потребують додаткових витрат на поїздки та тимчасове перебування або проживання у незнайомому місті.",
  },
];

export const WHY_PEOPLE_CHOOSE_BEHEALTH = {
  title: "Чому люди обирають beHealth",
  description:
    "Світ навколо нас активно діджиталізується і стає доступним на відстані одного натиску. beHealth доступний у вашому смартфоні чи компʼютері у будь-якому браузері. З ним медицина для українців стане більш доступною, зрозумілою та зручною.",
  link: <MUILink text="Дізнатися більше" path="/" />,
  arrayItems: [
    {
      icon: (
        <Laptop
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        />
      ),
      title: "Доступно усюди",
      description:
        "Усе, що вам потрібно, це будь який технічний пристрій з доступом до інтернету.",
    },
    {
      icon: (
        <Heart
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        />
      ),
      title: "Безкоштовно",
      description:
        "Повний функціонал нашого онлайн сервісу є повністю безкоштовним для пацієнтів.",
    },
    {
      icon: (
        <Shield
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        />
      ),
      title: "Конфіденційно",
      description:
        "Піклуємося та гарантуємо Вам конфіденційність даних. Ваші  медичні дані у повній безпеці.",
    },
    {
      icon: (
        <HeadPhones
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        />
      ),
      title: "Підтримка 24/7",
      description:
        "Наш центр підтримки працює без вихідних, двадцять чотири години на добу.",
    },
  ],
};

export const searchOptions = [
  {
    name: "Мусіхін Валентин Олегович",
    speciality: "Стоматолог",
  },
  {
    name: "Полтавська обласна клінічна лікарня імені М.В.О.",
    speciality: "Медичний заклад",
  },
  {
    name: "Стоматолог",
    speciality: "Пошук по спеціальності",
  },
  {
    name: "Мусіхін Валентин Баранович",
    speciality: "Стоматолог",
  },
  {
    name: "Черкаська обласна клінічна лікарня імені М.В.О.",
    speciality: "Медичний заклад",
  },
  {
    name: "Психолог",
    speciality: "Пошук по спеціальності",
  },
  {
    name: "Мусіхін Валентин Бабайкович",
    speciality: "Стоматолог",
  },
  {
    name: "Чигиринська обласна клінічна лікарня імені М.В.О.",
    speciality: "Медичний заклад",
  },
  {
    name: "Уролог",
    speciality: "Пошук по спеціальності",
  },
];

export const HOW_IT_WORKS_CARD_LIST = [
  {
    id: 1,
    image: howItWorks1,
    title: "Оберіть лікаря",
    text: "Оберіть лікаря та запишіться на зручний час Оберіть лікаря та запишіться на зручний час",
  },
  {
    id: 2,
    image: howItWorks2,
    title: "Прийдіть на прийом",
    text: "Оберіть лікаря та запишіться на зручний час Оберіть лікаря та запишіться на зручний час",
  },
  {
    id: 3,
    image: howItWorks3,
    title: "Результати онлайн",
    text: "Оберіть лікаря та запишіться на зручний час Оберіть лікаря та запишіться на зручний час",
  },
];

export const newsList = [
  {
    icon: ain,
    description:
        "Битва з чергами: як сервіс beHealth за два роки виріс з 7 до 23 000 пацієентів на день",
  },
  {
    icon: ictv,
    description:
        "Медреформа: від класичних черг до запису онлайн за 2 хвилини, в сюжеті Вікна-новини.",
  },
  {
    icon: twentyFourth,
    description:
        "До електронного реєстру підключили перший центр медико-санітарної допомоги.",
  },
  {
    icon: onePlusOne,
    description:
        "Старт медичної реформи надав можливість онлайн запису до лікарів первинної ланки.",
  },
];
