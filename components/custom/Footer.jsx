"use client";
import {
  Facebook,
  Instagram,
  Mail,
  Map,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Image from "next/image";
export const quicklinks = ["About", "Services", "Events", "News"];

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1D] flex flex-row justify-center items-center text-white p-12">
      <div className="flex ml-20 flex-row gap-40">
        <Image
          src={"/footerlogo.svg"}
          width={100}
          height={100}
          alt="footerlogo"
        />
        <div className="flex flex-col gap-2">
          <h3>Quick Links</h3>
          {quicklinks.map((item, index) => (
            <p key={item + index}>{item}</p>
          ))}
        </div>
        <div className="flex flex-col w-72 gap-2">
          <h3 className=" justify-start items-center flex">Contact Us</h3>
          <div className="flex flex-row gap-2">
            <Phone />
            <p>+971566105041</p>
          </div>
          <div className="flex flex-row gap-2">
            <Mail />
            <p>info@rosehafeet.ae</p>
          </div>
          <div className="flex  flex-row gap-2">
            <MapPin />
            <p>
              Green Mubazzarah 2, Mubazzarah Al Khadra, Al Ain, Abu Dhabi
              Emirate
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Follow Us</h3>
          <div className="flex flex-row gap-2">
            <Instagram />
            <Facebook />
            <Youtube />
          </div>
        </div>
      </div>
    </footer>
  );
}
