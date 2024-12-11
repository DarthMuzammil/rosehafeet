"use client";
import AddressCards from "@/components/custom/contact/AddressCards";
import HeroSection from "@/components/custom/landing/HeroSection";
import { Input } from "@/components/ui/input";
import { addressCards, slides } from "@/lib/contact/contact";
import LocalisedButton from "@/components/shared/LocalisedButton";

export default function Contact() {
  return (
    <>
      <HeroSection slides={slides} />
      <section
        id="contact"
        className="flex flex-col items-center gap-6 py-12 px-4"
      >
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <div className="flex flex-col gap-20 w-full lg:px-24 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-full">
            {addressCards.map((card, index) => (
              <AddressCards key={index} card={card} />
            ))}
          </div>
          <div className="flex flex-col w-full shadow-slate-500 mt-4 p-4 gap-4 rounded-lg shadow-lg">
            <div className="flex flex-col">
              <p>First Name</p>
              <Input
                className=" text-black border-[#D9D9D9] border-2"
                placeholder="Enter your first name"
              />
            </div>
            <div className="flex flex-col">
              <p>Last Name</p>
              <Input
                className=" text-black border-[#D9D9D9] border-2"
                placeholder="Enter your last name"
              />
            </div>
            <div className="flex flex-col">
              <p>Email</p>
              <Input
                type="email"
                className=" text-black border-[#D9D9D9] border-2"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <p>Phone</p>
              <Input
                type="mobile"
                className=" text-black border-[#D9D9D9] border-2"
                placeholder="Enter phone number"
              />
            </div>
            <div className="flex flex-col">
              <p>Message</p>
              <Input
                type="text"
                className=" text-black border-[#D9D9D9] border-2"
                placeholder="How can we help you?"
              />
            </div>
            <LocalisedButton labelArabic={"SUBMIT"} labelEnglish={"SUBMIT"} />
           </div>
        </div>

        <div className="w-full max-w-4xl">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.932030583913!2d55.74488419183351!3d24.103885619508855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8abb5dbbddd6f9%3A0x4120b2bb24933a99!2sRose%20Hafeet!5e0!3m2!1sen!2sin!4v1733831502628!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
