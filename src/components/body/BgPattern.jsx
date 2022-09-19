import bg_pattern_mobile from "../../../public/bg-pattern-how-we-work-mobile.svg";
import bg_pattern_desktop from "../../../public/bg-pattern-how-we-work-desktop.svg";
import { useIsDektop } from "../../hooks/useIsDektop";

export const BgPattern = () => {
  const { isDesktop } = useIsDektop();

  return (
    <>
      {isDesktop ? (
        <>
          <img
            src={bg_pattern_desktop}
            alt="background pattern"
            className="absolute top-0 right-0 h-full -z-0"
          />
        </>
      ) : (
        <>
          <img
            src={bg_pattern_mobile}
            alt="background pattern"
            className="absolute top-0 right-0 h-full -z-0"
          />
        </>
      )}
    </>
  );
};
