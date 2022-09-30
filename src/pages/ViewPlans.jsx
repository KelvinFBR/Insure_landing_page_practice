import { Footer } from "../components/Footer";
import { NavBar } from "../components/header/NavBar";
import { CardsSection, SwitchButton } from "../components/plansCard/";
import { MainSection } from "../components/utilities/MainSection";
import { PlansProvider } from "../context/PlansContext";

export const ViewPlans = () => {
  return (
    <>
      <PlansProvider>
        <NavBar />

        {/* title */}
        <MainSection textTitle="Views Plans"></MainSection>

        {/* card section */}
        <SwitchButton />
        <CardsSection />

        {/* footer page */}
        <Footer />
      </PlansProvider>
    </>
  );
};
