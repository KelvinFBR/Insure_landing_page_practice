import { NavLink } from "react-router-dom";
import wave from "/bg-pattern-mobile-nav.svg";

export const NavBarMenuMobile = ({ isActive }) => {
  return (
    <div
      className={`${
        isActive
          ? "overflow-y-hidden center absolute bg-very-dark-violet text-very-light-gray text-center p-4 z-50 top-28 left-0 w-screen h-screen text-xl font-medium"
          : "hidden"
      }`}
    >
      <ul className="flex flex-col items-center justify-center">
        <NavLink
          to="/how-we-work"
          className={({ isActive }) =>
            `m-10 transition-all hover:scale-110 ${
              isActive ? "border-solid border-b-2 border-very-light-gray" : ""
            }`
          }
        >
          how we work
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `m-10 transition-all hover:scale-110 ${
              isActive ? "border-solid border-b-2 border-very-light-gray" : ""
            }`
          }
        >
          blog
        </NavLink>
        <NavLink
          to="/account"
          className={({ isActive }) =>
            `m-10 transition-all hover:scale-110 ${
              isActive ? "border-solid border-b-2 border-very-light-gray" : ""
            }`
          }
        >
          account
        </NavLink>
      </ul>
      <NavLink
        to="/viewplans"
        className={({ isActive }) =>
          `inline-block border border-solid px-10 py-4 uppercase mt-10 transition-all hover:bg-very-light-gray hover:text-dark-violet ${
            isActive ? "bg-very-light-gray text-dark-violet" : ""
          }`
        }
      >
        view plans
      </NavLink>
      <img
        src={wave}
        alt="wave"
        className="absolute bottom-0 left-0 w-screen -z-10"
      />
    </div>
  );
};
