import { useEffect, useState } from "react";

export const ImgIntro = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const handleChange = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleChange);

    return () => {
      window.removeEventListener("resize", handleChange);
    };
  }, [isDesktop]);

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
