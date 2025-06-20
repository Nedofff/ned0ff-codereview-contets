import { type Channel } from "../about-us-types";
import youngAndJuniorImg from "../assets/young-junior.png";
import junjobsImg from "../assets/junjobs.png";
import bigtechImg from "../assets/bigtech.png";
import maxImg from "../assets/max.png";
import itImg from "../assets/it.png";
import juniorDesignerImg from "../assets/junior-designer.png";
import youngTraineeImg from "../assets/young-trainee.png";

export const channelsDataLeft: Channel[] = [
  {
    title: "Young & Junior - вакансии IT",
    iconUrl: youngAndJuniorImg,
    tagTelegram: "young_june",
    subscribersThousands: "50",
  },
  {
    title: "junojobs → junior вакансии и стажировки в IT",
    tagTelegram: "juno_jobs",
    subscribersThousands: "20",
    iconUrl: junjobsImg,
  },
  {
    title: "Макс из < codereview />",
    tagTelegram: "YourCodeReview",
    subscribersThousands: "11",
    iconUrl: maxImg,
  },
  {
    title: "БИГТЕХ - вакансии и стажировки",
    tagTelegram: "bigtechjobs",
    subscribersThousands: "7",
    iconUrl: bigtechImg,
  },
];

export const channelsDataRight: Channel[] = [
  {
    title: "IT - стажировки и обучение",
    tagTelegram: "it_interns",
    subscribersThousands: "25",
    iconUrl: itImg,
  },
  {
    title: "Young Стажёр - стажировки ИТ",
    tagTelegram: "young_intern",
    subscribersThousands: "20",
    iconUrl: youngTraineeImg,
  },
  {
    title: "Джун Дизайнер - вакансии",
    tagTelegram: "junior_designers",
    subscribersThousands: "12",
    iconUrl: juniorDesignerImg,
  },
];
