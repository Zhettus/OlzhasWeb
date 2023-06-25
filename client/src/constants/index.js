import { people01, people02, people03, facebook, instagram, linkedin, first, second, third  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Главная",
  },
  {
    id: "features",
    title: "Информация",
  },
  {
    id: "product",
    title: "Описание",
  },
  {
    id: "clients",
    title: "Клиенты",
  },
  {
    id:"registration",
    title: "Регистрация",
  }
];

export const features = [
  {
    id: "feature-1",
    icon: first,
    title: "Новичкам",
    content:
      "Тем, кто еще не разбирается в инвестициях, но очень хочет создать свой пассивный доход, приносящий столько же сколько приносит активный бизнес. При этом инвестициям достаточно уделить всего 1 час в неделю, тогда как собственный бизнес требует полного погружения и внимания 24/7. ",
  },
  {
    id: "feature-2",
    icon: second,
    title: "Действующим инвесторам",
    content:
      "Тем, кто хочет знать все об инвестициях, кто желает самостоятельно создавать инвестиционные портфели, анализировать, синтезировать их без посторонней помощи. В ходе программы Вы получите пошаговый план по разработке инвестиционной стратегии и приемов тактики в разных циклах экономических реалий.",
  },
  {
    id: "feature-3",
    icon: third,
    title: "Активным предпринимателям",
    content:
      "Тем, у кого есть любимый активный бизнес, приносящий хорошую прибыль, но отнимающий много времени и внимания. Используйте это золотое время, чтобы сформировать пассивный доход, который со временем будет приносить больше денег, чем Ваш активный бизнес",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Отзыв 1",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Отзыв 2",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Отзыв 3.",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Вебинара",
    value: "3",
  },
  {
    id: "stats-2",
    title: "Основные темы",
    value: "3",
  },
  {
    id: "stats-3",
    title: "Продолжительных курса",
    value: "3",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "////////////",
      },
      {
        name: "How it Works",
        link: "////////",
      },
      {
        name: "Create",
        link: "///////",
      },
      {
        name: "Explore",
        link: "//////////",
      },
      {
        name: "Terms & Services",
        link: "////////",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Partners",
        link: "/////////////",
      },
      {
        name: "Suggestions",
        link: "////////",
      },
      {
        name: "Blog",
        link: "///////",
      },
      {
        name: "Newsletters",
        link: "///////",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "////",
      },
      {
        name: "Become a Partner",
        link: "/////////",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/olzhas_invest/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },

  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];
