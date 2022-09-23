import { NavLink } from "react-router-dom";

export const NavBarMenuDesk = () => {
  return (
    <div className="flex text-center items-center ">
      <ul className="flex flex-row">
        <NavLink
          to="/how-we-work"
          className={({ isActive }) =>
            `transition-all ml-3 mr-3 cursor-pointer hover:font-bold ${
              isActive ? "font-bold" : ""
            }`
          }
        >
          how we work
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `transition-all ml-3 mr-3 cursor-pointer hover:font-bold ${
              isActive ? "font-bold" : ""
            }`
          }
        >
          blog
        </NavLink>
        <NavLink
          to="/account"
          className={({ isActive }) =>
            `transition-all ml-3 mr-3 cursor-pointer hover:font-bold ${
              isActive ? "font-bold" : ""
            }`
          }
        >
          Account
        </NavLink>
      </ul>
      <NavLink
        to="/viewplans"
        className={({ isActive }) =>
          `transition-all border border-solid px-8 py-2 uppercase ml-3 cursor-pointer hover:bg-very-dark-violet hover:text-very-light-gray ${
            isActive ? "bg-very-dark-violet text-very-light-gray" : ""
          }`
        }
      >
        view plans
      </NavLink>
    </div>
  );
};
