import logo from './images/logo.svg';

import arrowDownIcon from './images/icon-arrow-down.svg';
import arrowUpIcon from './images/icon-arrow-up.svg';

import closeIcon from './images/icon-close-menu.svg';
import menuIcon from './images/icon-menu.svg';

import todoIcon from './images/icon-todo.svg';
import calendarIcon from './images/icon-calendar.svg';
import reminderIcon from './images/icon-reminders.svg';
import planningIcon from './images/icon-planning.svg';

import databizLogo from './images/client-databiz.svg';
import audiophileLogo from './images/client-audiophile.svg';
import meetLogo from './images/client-meet.svg';
import makerLogo from './images/client-maker.svg';

import { useState } from 'react';

const features = [
  {
    icon: todoIcon,
    name: 'Todo List',
  },
  {
    icon: calendarIcon,
    name: 'Calendar',
  },
  {
    icon: reminderIcon,
    name: 'Reminders',
  },
  {
    icon: planningIcon,
    name: 'Planning',
  },
];

const company = ['History', 'Our Team', 'Blog'];

const clients = [databizLogo, audiophileLogo, meetLogo, makerLogo];

const App = () => {
  const [openFeature, setOpenFeature] = useState(false);
  const [openCompanyLinks, setOpenCompanyLinks] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen && (
        <div
          className={`after:bg-snape-black lg:hidden after:bg-opacity-60 after:fixed after:w-full after:h-full after:top-0 after:right-0 after:bottom-0`}
        ></div>
      )}
      <header className="relative p-5 flex items-center justify-between max-w-[1360px] m-auto lg:gap-14">
        <img src={logo} alt="Snap Logo" />

        <nav
          className={`lg:static lg:p-0 lg:flex lg:flex-1 items-center lg:justify-between text-snape-gray h-full z-10 fixed top-0 right-0 left-1/3 pt-20 px-5 bg-snape-white lg:bg-white overflow-y-auto pb-2 sidebar-menu-close ${
            isMenuOpen ? 'sidebar-menu-open' : ''
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
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setOpenFeature((prevState) => !prevState)}
                >
                  Features
                </button>
                <img src={openFeature ? arrowUpIcon : arrowDownIcon} alt="" />
              </div>
              <div
                className={`flex flex-col gap-6 lg:gap-[0.7rem] px-6 my-2 lg:absolute lg:top-[60px] lg:left-28 lg:bg-white lg:shadow-2xl lg:rounded-xl lg:p-6 ${
                  !openFeature ? 'hidden' : 'visible cool-transition'
                }`}
              >
                {features.map((feature) => {
                  return (
                    <div className="flex items-center gap-3" key={feature.name}>
                      <img className="w-5" src={feature.icon} alt="" />
                      {feature.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setOpenCompanyLinks((prevState) => !prevState)}
                >
                  Company
                </button>
                <img
                  src={openCompanyLinks ? arrowUpIcon : arrowDownIcon}
                  alt=""
                />
              </div>
              <div
                className={`flex flex-col gap-6 lg:gap-[0.7rem] px-6 my-2 lg:absolute lg:top-[60px] lg:left-[302px] lg:bg-white lg:shadow-2xl lg:rounded-xl lg:p-6 ${
                  !openCompanyLinks ? 'hidden' : 'visible cool-transition'
                }`}
              >
                {company.map((link) => {
                  return (
                    <div className="flex items-center gap-3" key={link}>
                      {link}
                    </div>
                  );
                })}
              </div>
            </div>
            <a href="/">Careers</a>
            <a href="/">About</a>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end lg:flex-1 text-center justify-center gap-4">
            <a href="/">Login</a>
            <a
              className="inline-block py-3 px-5 border border-snape-gray rounded-[15px]"
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
          <div className="flex items-center justify-center lg:justify-start gap-5 pb-4 sm:pb-0">
            {clients.map((clientLogo, i) => {
              return (
                <img
                  className="w-16 md:w-36 lg:w-[90px]"
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
