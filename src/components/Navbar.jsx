import { navbarText } from "../constants/navbar";

const Navbar = () => {
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
        {/*TODO: hamburger menu */}
      </div>
      {/*TODO: display menu mobile */}
    </nav>
  );
};
export default Navbar;
