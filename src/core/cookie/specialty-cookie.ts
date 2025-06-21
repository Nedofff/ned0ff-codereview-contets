import { COOKIE_SPECIALTY, specialtyDict } from "../consts";
import { cookieService } from "./cookie-service-client";

type Specialty = keyof typeof specialtyDict;

export const getSpecialtyCookie = (): string | null => {
  const cookie = cookieService.getItem(COOKIE_SPECIALTY);

  if (!cookie) {
    return null;
  }

  return cookie as Specialty;
};

export const setSpecialtyCookie = (specialty: string) => {
  cookieService.setItem(COOKIE_SPECIALTY, specialty);
};
