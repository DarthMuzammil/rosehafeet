import { services as servicesEN, pricings as pricingsEN, PricingSectionInfo as PricingSectionInfoEN } from "./english";
import { services as servicesAR, pricings as pricingsAR, PricingSectionInfo as PricingSectionInfoAR } from "./arabic";
import { 
  images as imagesEN, 
  saltCaveCards as saltCaveCardsEN, 
  poolCards as poolCardsEN, 
  gameAreaCards as gameAreaCardsEN, 
  ourProjects as ourProjectsEN, 
  newsImages as newsImagesEN, 
  facilities as facilitiesEN, 
  aboutUs as aboutUsEN, 
  navigationTabs as navigationTabsEN, 
  heroSectionSlides as heroSectionSlidesEN 
} from "@/lib/homepage/homepage";
import { 
  images as imagesAR, 
  saltCaveCards as saltCaveCardsAR, 
  poolCards as poolCardsAR, 
  gameAreaCards as gameAreaCardsAR, 
  ourProjects as ourProjectsAR, 
  newsImages as newsImagesAR, 
  facilities as facilitiesAR, 
  aboutUs as aboutUsAR, 
  navigationTabs as navigationTabsAR, 
  heroSectionSlides as heroSectionSlidesAR 
} from "@/lib/homepage/homepagear";
import { 
  heroSectionImages as heroSectionImagesENSaltCave, 
  benefits as benefitsEN, 
  pricing as pricingEN, 
  products as productsEN, 
  heroSectionSlides as heroSectionSlidesENSaltCave 
} from "@/lib/saltcave/saltcave";

import { 
  heroSectionImages as heroSectionImagesARSaltCave, 
  benefits as benefitsAR, 
  pricing as pricingAR, 
  products as productsAR, 
  heroSectionSlides as heroSectionSlidesARSaltCave
} from "@/lib/saltcave/saltcavear";
import { 
  services as servicesENGameArea, 
  pricings as pricingsENGameArea, 
  heroSectionSlides as heroSectionSlidesENGameArea
} from "@/lib/gamearea/gamearea";

import { 
  services as servicesARGameArea, 
  pricings as pricingsARGameArea, 
  heroSectionSlides as heroSectionSlidesARGameArea
} from "@/lib/gamearea/gameareaar";

const mapping = {
  poolarea: {
    ar: { services: servicesAR, pricings: pricingsAR, info: PricingSectionInfoAR },
    en: { services: servicesEN, pricings: pricingsEN, info: PricingSectionInfoEN },
  },
  homepage: {
    ar: { 
      images: imagesAR, 
      saltCaveCards: saltCaveCardsAR, 
      poolCards: poolCardsAR, 
      gameAreaCards: gameAreaCardsAR, 
      ourProjects: ourProjectsAR, 
      newsImages: newsImagesAR, 
      facilities: facilitiesAR, 
      aboutUs: aboutUsAR, 
      navigationTabs: navigationTabsAR, 
      heroSectionSlides: heroSectionSlidesAR 
    },
    en: { 
      images: imagesEN, 
      saltCaveCards: saltCaveCardsEN, 
      poolCards: poolCardsEN, 
      gameAreaCards: gameAreaCardsEN, 
      ourProjects: ourProjectsEN, 
      newsImages: newsImagesEN, 
      facilities: facilitiesEN, 
      aboutUs: aboutUsEN, 
      navigationTabs: navigationTabsEN, 
      heroSectionSlides: heroSectionSlidesEN 
    },
  },
  saltcave: {
    ar: { 
      heroSectionImages: heroSectionImagesARSaltCave, 
      benefits: benefitsAR, 
      pricing: pricingAR, 
      products: productsAR, 
      heroSectionSlides: heroSectionSlidesARSaltCave 
    },
    en: { 
      heroSectionImages: heroSectionImagesENSaltCave, 
      benefits: benefitsEN, 
      pricing: pricingEN, 
      products: productsEN, 
      heroSectionSlides: heroSectionSlidesENSaltCave 
    },
  },
  gamearea: {
    ar: { 
      services: servicesARGameArea, 
      pricings: pricingsARGameArea, 
      heroSectionSlides: heroSectionSlidesARGameArea 
    },
    en: { 
      services: servicesENGameArea, 
      pricings: pricingsENGameArea, 
      heroSectionSlides: heroSectionSlidesENGameArea 
    },
  }
};


export const getLocalizedContent = (lang, page) => mapping[page][lang];
