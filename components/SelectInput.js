import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
/*
 * items - Array<{name, unavailable, icon}>
 */

const items = [
  { name: "Durward Reynolds", unavailable: false },
  { name: "Kenton Towne", unavailable: false },
  { name: "Therese Wunsch", unavailable: false },
  { name: "Benedict Kessler", unavailable: true },
  { name: "Katelyn Rohan", unavailable: false },
];

function SelectInput({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="relative">
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <div className="relative">
          <Listbox.Button className="relative form-input w-full py-3 px-3 text-left bg-white rounded-md cursor-default">
            <span className="block truncate">
              {selectedItem?.name ?? " Select"}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none select-none">
              <span className={"transform rotate-90"}>
                <Image
                  className="ml-auto"
                  src="/caret-right.svg"
                  height={16}
                  width={16}
                />
              </span>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
              {(items ?? []).map((item, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `${active ? "text-amber-900 bg-gray-50" : "text-gray-900"}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {item.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-amber-600" : "text-amber-600"
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          !
                          {/* <CheckIcon className="w-5 h-5" aria-hidden="true" /> */}
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
  );
}

export default SelectInput;
