import logo from './images/logo.svg';

import arrowDownIcon from './images/icon-arrow-down.svg';
import arrowUpIcon from './images/icon-arrow-up.svg';

import closeIcon from './images/icon-close-menu.svg';
import menuIcon from './images/icon-menu.svg';

import todoIcon from './images/icon-todo.svg';
import calendarIcon from './images/icon-calendar.svg';
import reminderIcon from './images/icon-reminders.svg';
import planningIcon from './images/icon-planning.svg';

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

const App = () => {
  const [openFeature, setOpenFeature] = useState(false);
  const [openCompanyLinks, setOpenCompanyLinks] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="min-h-screen relative p-5">
      <img src={logo} alt="Snap Logo" />
      {isMenuOpen && (
        <div
          className={`after:bg-snape-black after:bg-opacity-60 after:absolute after:w-full after:h-full after:top-0 after:right-0 after:bottom-0`}
        ></div>
      )}
      <nav
        className={`text-snape-gray h-full z-10 absolute top-0 right-0 left-1/3 pt-20 px-5 bg-snape-white overflow-y-auto pb-2 sidebar-menu-close ${
          isMenuOpen ? 'sidebar-menu-open' : ''
        }`}
      >
        <img
          className="absolute right-0 mr-5 top-6"
          src={isMenuOpen ? closeIcon : menuIcon}
          alt=""
        />
        <div className="flex flex-col gap-6 mb-9">
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
              className={`flex flex-col gap-6 px-6 my-2 ${
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
              className={`flex flex-col gap-6 px-6 my-2 ${
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
        <div className="flex flex-col text-center justify-center gap-4">
          <a href="/">Login</a>
          <a
            className="inline-block py-3 px-5 border border-snape-gray rounded-[15px]"
            href="/"
          >
            Register
          </a>
        </div>
      </nav>
    </header>
  );
};

export default App;
