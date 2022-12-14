import React, { useState } from "react";

import { clients } from "./dev-data/clients";
import { company } from "./dev-data/company";
import { features } from "./dev-data/features";

import { logo, closeIcon, menuIcon } from "./images";

import { Dropdown } from "./components";

const App = () => {
  const [isFeatureOpen, setOpenFeature] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen && (
        <div className="bg-snape-black lg:hidden bg-opacity-60 fixed w-full h-full top-0 right-0 bottom-0"></div>
      )}
      <header className="relative p-5 flex items-center justify-between max-w-[1360px] m-auto lg:gap-16">
        <img src={logo} alt="Snap Logo" />

        <nav
          className={`lg:static lg:p-0 lg:flex lg:flex-1 items-center lg:justify-between text-snape-gray h-full z-10 fixed top-0 right-0 left-1/3 pt-20 px-5 bg-snape-white lg:bg-white overflow-y-auto pb-2 sidebar-menu-close ${
            isMenuOpen ? "sidebar-menu-open" : ""
          }`}
        >
          <button
            type="button"
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
          >
            <img
              className="lg:hidden absolute right-0 mr-5 top-6"
              src={closeIcon}
              alt=""
            />
          </button>
          <div className="lg:flex-row lg:gap-10 lg:items-start lg:flex-grow-1 lg:mb-0 flex flex-col gap-6 mb-9">
            <Dropdown
              name="Features"
              list={features}
              position="lg:top-[60px] lg:left-28"
              isDropdownOpen={isFeatureOpen}
              setIsDropdownOpen={() =>
                setOpenFeature((prevState) => !prevState)
              }
            />
            <Dropdown
              name="Company"
              list={company}
              position="lg:top-[60px] lg:left-[302px]"
              isDropdownOpen={isCompanyOpen}
              setIsDropdownOpen={() =>
                setIsCompanyOpen((prevState) => !prevState)
              }
            />
            <a className="hover:text-snape-black" href="/">
              Careers
            </a>
            <a className="hover:text-snape-black" href="/">
              About
            </a>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end lg:flex-1 text-center justify-center gap-4 lg:gap-[40px]">
            <a className="hover:text-snape-black" href="/">
              Login
            </a>
            <a
              className="inline-block py-3 px-5 border border-snape-gray rounded-[15px] hover:text-snape-black hover:border-snape-black"
              href="/"
            >
              Register
            </a>
          </div>
        </nav>
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        >
          <img src={menuIcon} alt="" />
        </button>
      </header>
      <main className="max-w-[1156px] text-center m-auto lg:flex lg:flex-row-reverse lg:px-3 lg:m-auto lg:pt-12">
        <div className="lg:bg-hero-desktop bg-hero-mobile h-[300px] m-auto md:m-auto max-w-md mb-8 w-full bg-no-repeat bg-center bg-contain lg:h-[643px] md:h-[450px]"></div>
        <div className="max-w-[334px] md:max-w-[42%] lg:self-end lg:text-left m-auto">
          <div className="lg:pt-[56px]">
            <h1 className="font-bold text-4xl lg:leading-tight mb-7 whitespace-nowrap md:mt-12 lg:text-7xl lg:whitespace-normal">
              Make remote work
            </h1>
            <p className="text-snape-gray mb-7 lg:mb-12 lg:pr-[6rem] md:max-w-lg md:mx-auto lg:w-fit lg:mx-0">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <a
              className="hover:bg-snape-white hover:text-snape-black hover:outline hover:outline-snape-black hover:outline-1 hover:font-bold inline-block py-4 px-8 mb-12 lg:w-fit bg-snape-black text-snape-white rounded-2xl lg:mb-24"
              href="/"
            >
              Learn More
            </a>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-5 lg:gap-9 pb-4 sm:pb-0">
            {clients.map((clientLogo, i) => {
              return (
                <img
                  className="w-16 md:w-36 lg:w-[80px]"
                  src={clientLogo}
                  alt=""
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
