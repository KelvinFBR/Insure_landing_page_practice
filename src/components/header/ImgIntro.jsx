import { useIsDektop } from "../../hooks/useIsDektop";

export const ImgIntro = () => {
  const { isDesktop } = useIsDektop();

  return (
    <>
      {isDesktop ? (
        <img
          src="https://i.imgur.com/FJRmDBB.jpg"
          alt="banner image"
          className="absolute w-96 right-28 top-24 "
        />
      ) : (
        <img src="https://i.imgur.com/hZJIXhX.jpg" alt="banner image" />
      )}
    </>
  );
};
