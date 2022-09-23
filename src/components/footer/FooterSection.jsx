import logo from "../../../public/logo.svg";
import instagram from "../../../public/icon-instagram.svg";
import facebook from "../../../public/icon-facebook.svg";
import twitter from "../../../public/icon-twitter.svg";
import pinterest from "../../../public/icon-pinterest.svg";

import { FooterMenu } from "./FooterMenu";
import { data } from "../../data/data";

export const FooterSection = () => {
  const MenuItems = data.footerItems;

  return (
    <div className="flex flex-col footer-bg-mb lg:footer-bg-dk  bg-very-light-gray bg-local items-center w-screen">
      <div className="lg:px-14 flex flex-col items-center lg:flex-row lg:justify-between lg:w-11/12 lg:mt-10 mb-3">
        <img src={logo} alt="" className="mt-20 w-36 lg:m-0" />
        <div className="flex flex-row m-4 pt-2 lg:m-0 lg:items-center">
          <img src={facebook} alt="instagram" className="m-2 w-8" />
          <img src={twitter} alt="facebook" className="m-2 w-8" />
          <img src={pinterest} alt="facebook" className="m-2 w-8" />
          <img src={instagram} alt="facebook" className="m-2 w-8" />
        </div>
      </div>

      <span className="lg:px-14 bg-dark-grayish-violet w-10/12 h-1px my-5"></span>

      <div className="lg:px-14 text-center lg:flex lg:justify-between lg:w-11/12 lg:text-left">
        {MenuItems.map((item) => (
          <FooterMenu
            key={item.id}
            MenuItems={item.menuItems}
            MenuTitle={item.menuTitle}
          />
        ))}
      </div>
    </div>
  );
};
