import React, { useState } from "react";
import sandwith from "/icon-hamburger.svg";
import close from "/icon-close.svg";
import logo from "/logo.svg";
import { NavBarMenuMobile } from "./NavBarMenuMobile";
import { NavBarMenuDesk } from "./NavBarMenuDesk";
import { useIsDektop } from "../../hooks/useIsDektop";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const [isActive, setActive] = useState(false);
  const { isDesktop } = useIsDektop();

  const toggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="flex flex-row justify-around fixed top-0 z-50 w-full lg:justify-between items-center bg-transparent">
      <div className="flex flex-row justify-around relative z-50 lg:justify-between py-12 items-center w-full bg-very-light-gray">
        <NavLink to="/">
          <img src={logo} className="h-6 lg:h-5 m-0" />
        </NavLink>
        <img
          src={!isActive ? sandwith : close}
          className="block scale-150 lg:hidden"
          onClick={toggle}
        />
      </div>

      {isDesktop ? (
        <NavBarMenuDesk />
      ) : (
        <NavBarMenuMobile isActive={isActive} />
      )}
    </div>
  );
};
