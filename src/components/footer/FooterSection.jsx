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
    <div className="flex flex-col footer-bg-mb lg:footer-bg-dk  bg-very-light-gray bg-local items-center">
      <div className="w-full p-28">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:w-full">
          <img src={logo} alt="" className="mt-20 w-36 lg:m-0" />
          <div className="flex flex-row m-4 pt-2 lg:m-0 lg:items-center">
            <img
              src={facebook}
              alt="instagram"
              className="m-2 w-8 hover:violet-icons-hover"
            />
            <img
              src={twitter}
              alt="facebook"
              className="m-2 w-8 hover:violet-icons-hover"
            />
            <img
              src={pinterest}
              alt="facebook"
              className="m-2 w-8 hover:violet-icons-hover"
            />
            <img
              src={instagram}
              alt="facebook"
              className="m-2 w-8 hover:violet-icons-hover"
            />
          </div>
        </div>

        <hr className="border-1 border-dark-grayish-violet mb-4 mt-10" />
        {/* <span className="bg-dark-grayish-violet w-11/12 h-px my-5"></span> */}

        <div className="text-center lg:flex lg:justify-between lg:w-full lg:text-left">
          {MenuItems.map((item) => (
            <FooterMenu
              key={item.id}
              MenuItems={item.menuItems}
              MenuTitle={item.menuTitle}
            />
          ))}
        </div>
      </div>
      <p className="my-4 text-center">
        Copyright &copy; Coded by |{" "}
        <a
          className="text-dark-violet inline-block font-bold hover:scale-x-110 transition-all"
          href="https://www.linkedin.com/in/kelvin-f-baez-rodriguez-frontend-developer/"
          target="_blank"
        >
          Kelvin F.
        </a>{" "}
        |{" "}
        <a
          className="text-dark-violet inline-block font-bold hover:scale-x-110 transition-all"
          href="https://www.linkedin.com/in/cristian-perez-425ab2237/"
          target="_blank"
        >
          Critian P.
        </a>
      </p>
    </div>
  );
};
