import { useIsDektop } from "../../hooks/useIsDektop";

export const ImgIntro = () => {
  const { isDesktop } = useIsDektop();

  return (
    <>
      {isDesktop ? (
        <img
          src="https://i.imgur.com/onU5KUn.jpg"
          alt="banner image"
          className="absolute w-96 right-28 top-24 "
        />
      ) : (
        <img src="https://i.imgur.com/I8nCESK.jpg" alt="banner image" />
      )}
    </>
  );
};
