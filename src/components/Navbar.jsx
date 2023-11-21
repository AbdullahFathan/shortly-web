import { navbarText } from "../constants/navbar";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className=" relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          {/*Image Logo */}
          <img src="/images/logo.svg" alt="logo" />
          <div className=" hidden space-x-8 font-bold lg:flex">
            {navbarText.map((item, index) => (
              <a
                href="#"
                key={index}
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        {/* Button */}
        <div className="hidden items-center space-x-6 font-bold  lg:flex">
          <button
            type="button"
            className="text-grayishViolet hover:text-veryDarkViolet"
          >
            Login
          </button>
          <button className=" px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">
            Sign Up
          </button>
        </div>
        {/*hamburger menu */}
        <div
          className="lg:hidden hover:cursor-pointer "
          onClick={() => toggleMobileMenu()}
        >
          <button
            id="menu-btn"
            type="button"
            className={`z-40 mb-4 block hamburger lg:hidden focus:outline-none ${
              isMobileMenuOpen ? "open" : ""
            }`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
      {/* menu mobile */}
      {isMobileMenuOpen && (
        <div className="absolute  p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100 ">
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm ">
            {navbarText.map((item, index) => (
              <a
                key={index}
                href="#"
                className="w-full text-center hover:text-cyanLight"
              >
                {item}
              </a>
            ))}
          </div>
          <div id="line" className="w-full bg-white h-1 px-4 my-4" />
          {/* Button */}
          <div className=" flex flex-col mt-5 items-center space-y-6 font-bold ">
            <button type="button" className="text-white hover:text-cyanLight">
              Login
            </button>
            <button className=" px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
