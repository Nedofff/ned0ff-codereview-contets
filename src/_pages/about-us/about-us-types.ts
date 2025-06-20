import { StaticImageData } from "next/image";

export type Channel = {
  title: string;
  tagTelegram: string;
  iconUrl: string | StaticImageData;
  subscribersThousands: string;
  color: string;
};

export type Audience = {
  title: string;
  percentage: number;
  barClassName: string;
};
