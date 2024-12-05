"use client";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Image from "next/image";

export const quicklinks = ["About", "Services", "Events", "News"];

function Container({ children }) {
  return (
    <footer className="bg-[#1D1D1D] text-white p-6 md:p-12">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-20">
        {children}
      </div>
    </footer>
  );
}
function LogoSection() {
  return (
    <div className="flex justify-center md:justify-start">
      <Image
        src={"/footerlogo.svg"}
        width={100}
        height={100}
        alt="footerlogo"
      />
    </div>
  );
}

function QuickLinks() {
  return (
    <div className="flex flex-col gap-2 text-center md:text-left">
      <h3 className="font-semibold">Quick Links</h3>
      {quicklinks.map((item, index) => (
        <p key={item + index} className="hover:underline">
          {item}
        </p>
      ))}
    </div>
  );
}

function ContactUs() {
  return (
    <div className="flex flex-col gap-2 w-full md:w-72 text-center md:text-left">
      <h3 className="font-semibold">Contact Us</h3>
      <div className="flex flex-row items-center gap-2 justify-center md:justify-start">
        <Phone />
        <p>+971566105041</p>
      </div>
      <div className="flex flex-row items-center gap-2 justify-center md:justify-start">
        <Mail />
        <p>info@rosehafeet.ae</p>
      </div>
      <div className="flex flex-row items-start gap-2 justify-center md:justify-start">
        <MapPin />
        <p>
          Green Mubazzarah 2, Mubazzarah Al Khadra, Al Ain, Abu Dhabi Emirate
        </p>
      </div>
    </div>
  );
}

function FollowUs() {
  return (
    <div className="flex flex-col gap-2 text-center md:text-left">
      <h3 className="font-semibold">Follow Us</h3>
      <div className="flex flex-row justify-center md:justify-start gap-4">
        <Instagram className="hover:text-gray-400" />
        <Facebook className="hover:text-gray-400" />
        <Youtube className="hover:text-gray-400" />
      </div>
    </div>
  );
}
export default function Footer() {
  return (
    <Container>
      <LogoSection />
      <QuickLinks />
      <ContactUs />
      <FollowUs />
    </Container>
  );
}
