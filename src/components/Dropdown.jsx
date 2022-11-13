import React from "react";
import { arrowDownIcon, arrowUpIcon } from "../images";

const Dropdown = ({
  isDropdownOpen,
  setIsDropdownOpen,
  name,
  list,
  position,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={setIsDropdownOpen}
          className="hover:text-snape-black"
        >
          {name}
        </button>
        <img src={isDropdownOpen ? arrowUpIcon : arrowDownIcon} alt="" />
      </div>
      <div
        className={`flex flex-col gap-6 lg:gap-[0.7rem] px-6 my-2 lg:absolute ${position} lg:bg-white lg:shadow-2xl lg:rounded-xl lg:p-6 ${
          !isDropdownOpen ? "m-fadeOut" : "m-fadeIn"
        }`}
      >
        {list.map((feature) => {
          return (
            <div
              className="flex items-center gap-3"
              key={feature.name || feature}
            >
              {feature.icon && (
                <img className="w-5" src={feature.icon} alt="" />
              )}
              {feature.name || feature}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
