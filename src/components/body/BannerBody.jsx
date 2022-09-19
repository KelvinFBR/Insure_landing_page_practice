import { Button } from "../header/Button";
import { BgPattern } from "./BgPattern";

export const BannerBody = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center lg:justify-between bg-dark-violet text-center px-10 lg:px-20 py-20">
      <BgPattern />
      <h2 className="text-very-light-gray text-5xl font-headings pb-10 lg:text-left lg:w-2/4 z-10">
        Find out more about how we work
      </h2>
      <Button btnName="how we work" />
    </div>
  );
};
