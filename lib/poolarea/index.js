import { services as servicesEN, pricings as pricingsEN, PricingSectionInfo as PricingSectionInfoEN } from "./english";
import { services as servicesAR, pricings as pricingsAR, PricingSectionInfo as PricingSectionInfoAR } from "./arabic";

const mapping = {
  poolarea: {
    ar: { services: servicesAR, pricings: pricingsAR, info: PricingSectionInfoAR },
    en: { services: servicesEN, pricings: pricingsEN, info: PricingSectionInfoEN },
  },
};

export const getLocalizedContent = (lang, page) => mapping[page][lang];
