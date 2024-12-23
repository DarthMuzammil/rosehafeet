"use client";

import { useState, Fragment } from "react";
import {
  Dialog,
  Transition,
  Listbox,
  ListboxButton,
  TransitionChild,
  DialogTitle,
  DialogPanel,
} from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon, ChevronDown, X } from "lucide-react";
import Button from "@/components/shared/Button";

const activities = [
  { id: 1, name: "Pool Area" },
  { id: 2, name: "Salt Cave" },
  { id: 3, name: "Game Area" },
];

export default function MakeBookingModalSingle({ isOpen, closeModal, activityName, price}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    console.log("hi")
    e.preventDefault();
  
    const bookingData = {
      name,
      phone,
      activityName,
      price,
      email,
    };
  
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });
  
      if (response.ok) {
        console.log("Booking successful");
        closeModal();
      } else {
        console.error("Failed to make booking");
      }
    } catch (error) {
      console.error("Error making booking:", error);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg flex flex-row justify-between font-medium leading-6 text-gray-900 mb-4"
                >
                  Book Your Activity
                  <div onClick={closeModal}>
                    <X />
                  </div>
                </DialogTitle>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      id="name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 p-4 font-mono focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 p-4 font-mono shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="activities"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Activity
                    </label>
                    <div>{activityName}</div>
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <div>{price}</div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="mt-1 block w-full font-mono rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mt-4">
                    <Button
                      label="Submit"
                      onClick={(e) => handleSubmit(e)}
                      isSelected
                      size="h-[45px] flex items-center justify-center w-full sm:w-[250px] sm:h-[50px]"
                    />
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
