import React, { useEffect, useState } from "react";
import sandwith from "/icon-hamburger.svg";
import close from "/icon-close.svg";
import logo from "/logo.svg";
import { NavBarMenuMobile } from "./NavBarMenuMobile";
import { NavBarMenuDesk } from "./NavBarMenuDesk";
import { useIsDektop } from "../../hooks/useIsDektop";

export const NavBar = () => {
  const [isActive, setActive] = useState(false);
  const { isDesktop } = useIsDektop();

  const toggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="flex flex-row justify-between py-12 px-9 lg:p-6 items-center">
      <img src={logo} className="h-6 lg:h-5" />
      <div className={`uppercase`}>
        {isDesktop ? (
          <NavBarMenuDesk />
        ) : (
          <NavBarMenuMobile isActive={isActive} />
        )}
      </div>
      <img
        src={!isActive ? sandwith : close}
        className="block scale-150 lg:hidden"
        onClick={toggle}
      />
    </div>
  );
};
