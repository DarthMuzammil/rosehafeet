"use client"
import { Button } from "../ui/button";
import { useLanguageContext } from "@/contexts/LanguageContext";

export default function LocalisedButton({labelEnglish, labelArabic}) {
    const {lang, setLang} = useLanguageContext();
    function handleLangClick() {
      setLang((language) =>  language === "en" ? "ar" : "en")
    }
    return (
      <Button onClick={handleLangClick} className="hidden 2xl:inline-flex text-[22px] font-poppins font-semibold leading-[33px] bg-gradient-to-r from-[#2A3676] to-[#00A445] text-white px-6 py-2 rounded-md shadow-md hover:opacity-90">
        {lang === "en" ? labelEnglish : labelArabic}
      </Button>
    );
  }
  