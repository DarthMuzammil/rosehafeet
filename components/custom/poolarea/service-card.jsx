import LocalisedButton from "@/components/shared/LocalisedButton";
import { useLanguageContext } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";

export function ServiceCard({ service, reverse = false }) {
  const { lang } = useLanguageContext();
  return (
    <div className="flex flex-col md:flex-row text-white w-full max-w-[1240px] mx-auto h-[740px] md:h-[360px]">
      <div
        className={`w-full md:w-[620px] h-[360px] md:h-full ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <img
          alt={service.title}
          className="object-cover w-full h-full rounded-[20px]"
          src={service.image}
        />
      </div>
      <div
        className={`flex flex-col justify-center p-6 md:p-8 w-full md:w-[620px] ${
          reverse ? "md:order-1" : ""
        }`}
      >
        <div
          className={`space-y-4 md:space-y-6 max-w-[500px] ${
            lang === "ar" ? " flex flex-col items-end " : ""
          }`}
        >
          {lang === "en" ? (
            <div className="space-y-2">
              <h2 className="text-black text-lg md:text-xl font-medium tracking-wide uppercase">
                {service.category}
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-[#2A3676] to-[#00A445] bg-clip-text text-transparent">
                {service.title}
              </h3>
            </div>
          ) : (
            <>
              <h2 className="text-black text-lg md:text-xl font-medium tracking-wide uppercase">
                {service.category}
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-[#2A3676] to-[#00A445] bg-clip-text text-transparent">
              <span dir="rtl">{service.title}</span>
              </h3>
            </>
          )}
          <ul className="space-y-2 md:space-y-3">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 shrink-0 text-teal-400" />
                <span className="text-black text-sm md:text-base h-[21px]">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
          <LocalisedButton labelArabic={"احجز الآن"} labelEnglish={"Book Now"} />
        </div>
      </div>
    </div>
  );
}
