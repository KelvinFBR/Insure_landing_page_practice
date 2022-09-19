import logo from "/logo.svg";
import instagram from "/icon-instagram.svg"
import facebook from "/icon-facebook.svg"
import twitter from "/icon-twitter.svg"
import pinterest from "/icon-pinterest.svg"
import { FooterMenu } from "./footer/FooterMenu";
import { data } from './../data/data';

export const Footer = () => {


  const MenuItems = data.footerItems;

  

  return (
    <div className="flex flex-col  footer-bg  bg-very-light-gray bg-local items-center w-screen">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:w-11/12 lg:mt-10 mb-3">
        <img src={logo} alt="" className="mt-20 w-36 lg:m-0" />
        <div className="flex flex-row m-4 pt-2 lg:m-0 lg:items-center">
          <img src={facebook} alt="instagram" className="m-2 w-8" />
          <img src={twitter} alt="facebook" className="m-2 w-8" />
          <img src={pinterest} alt="facebook" className="m-2 w-8" />
          <img src={instagram} alt="facebook" className="m-2 w-8" />
        </div>
      </div>

      <span className=" bg-dark-grayish-violet w-11/12 h-1px my-5"></span>
      
      <div className="text-center lg:flex lg:justify-between lg:w-11/12 lg:text-left">
        {MenuItems.map(item=>(<FooterMenu key={item.id} MenuItems={item.menuItems} keys={item.id} MenuTitle={item.menuTitle}/>))}
      </div>
    </div>
  );
};
