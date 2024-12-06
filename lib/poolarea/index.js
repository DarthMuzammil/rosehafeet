import { services as servicesEN, pricings as pricingsEN } from "./english";
import { services as servicesAR, pricings as pricingsAR } from "./arabic";

const mapping = {
  saltcave: {
    ar: { services: servicesAR, pricings: pricingsAR },
    en: { services: servicesEN, pricings: pricingsEN },
  },
};

export const getLocalizedContent = (lang, page) => mapping[page][lang];
