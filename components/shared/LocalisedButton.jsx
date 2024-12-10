"use client";
import { Button } from "../ui/button";
import { useLanguageContext } from "@/contexts/LanguageContext";

export default function LocalisedButton({
  labelEnglish,
  labelArabic,
  styles = "",
}) {
  const { lang, setLang } = useLanguageContext();
  function handleLangClick() {
    setLang((language) => (language === "en" ? "ar" : "en"));
  }
  return (
    <Button
      onClick={handleLangClick}
      className={` ${styles} inline-flex px-5 leading-5 text-[14px] 2xl:text-[22px] font-poppins font-semibold 2xl:leading-[33px] bg-gradient-to-r from-[#2A3676] to-[#00A445] text-white 2xl:px-6 py-2 rounded-md shadow-md hover:opacity-90`}
    >
      {lang === "en" ? labelEnglish : labelArabic}
    </Button>
  );
}
