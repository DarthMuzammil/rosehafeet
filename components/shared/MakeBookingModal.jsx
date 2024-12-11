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

export default function MakeBookingModal({ isOpen, closeModal }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedActivities, setSelectedActivities] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ name, phone, email, selectedActivities });
    closeModal();
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
                      Activities
                    </label>
                    <Listbox
                      value={selectedActivities}
                      onChange={setSelectedActivities}
                      multiple
                    >
                      <div className="relative mt-1">
                        <ListboxButton className="relative flex-row gap-2 flex w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <ChevronDown />
                          <span className="block font-mono truncate">
                            {selectedActivities.length > 0
                              ? selectedActivities
                                  .map((activity) => activity.name)
                                  .join(", ")
                              : "Select an activity"}
                          </span>
                        </ListboxButton>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {activities.map((activity) => (
                              <Listbox.Option
                                key={activity.id}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? "bg-amber-100 text-amber-900"
                                      : "text-gray-900"
                                  }`
                                }
                                value={activity}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
                                      }`}
                                    >
                                      {activity.name}
                                    </span>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
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
                      onClick={() => closeModal()}
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
