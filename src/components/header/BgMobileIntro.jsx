import bg_left_intro_mobile from "../../../public/bg-pattern-intro-left-mobile.svg";
import bg_right_intro_mobile from "../../../public/bg-pattern-intro-right-mobile.svg";
import bg_left_intro_desktop from "../../../public/bg-pattern-intro-left-desktop.svg";
import bg_right_intro_desktop from "../../../public/bg-pattern-intro-right-desktop.svg";

export const BgMobileIntro = () => {
  return (
    <>
      {/* bg -  desktop */}
      <img
        src={bg_left_intro_desktop}
        alt="background"
        className="w-44 absolute left-0 -bottom-1/2 -z-0 hidden lg:block "
      />
      <img
        src={bg_right_intro_desktop}
        alt="background"
        className="w-64 absolute right-0 top-0 -z-0 hidden lg:block"
      />

      {/* bg -  mobile */}
      <img
        src={bg_left_intro_mobile}
        alt="background"
        className="w-44 absolute top-0 -z-0 block lg:hidden"
      />
      <img
        src={bg_right_intro_mobile}
        alt="background"
        className="w-44 absolute -bottom-2/4 right-0 -z-0 block lg:hidden"
      />
    </>
  );
};
