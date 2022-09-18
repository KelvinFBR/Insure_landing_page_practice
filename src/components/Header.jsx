import { Banner } from "./header/Banner";
import { NavBar } from "./header/NavBar";

export const Header = () => {
  return (
    <header>
      <NavBar />
      <Banner />
    </header>
  );
};