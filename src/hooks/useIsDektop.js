import { useEffect, useState } from "react";

export const useIsDektop = () => {
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

  return { isDesktop };
};
