import { Footer } from "../components/Footer";
import { NavBar } from "../components/header/NavBar";
import { MainSection } from "../components/utilities/MainSection";

export const HowWeWork = () => {
  return (
    <>
      <NavBar />

      <MainSection textTitle="How We Work">
        <p className="font-body text-lg text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          excepturi! Aut, aliquid dolorem aperiam amet consectetur pariatur
          expedita culpa praesentium qui quia nisi rem tempore fugiat minima
          quaerat? Reiciendis ut, nam repellat in tempora et natus mollitia vel
          eveniet esse quae quos praesentium. Vitae, exercitationem. Inventore
          officia eos dolorum repudiandae voluptates doloremque earum, odio
          quasi itaque quo ea nam nesciunt laborum! Error maxime quae aut ad
          modi! Quasi praesentium saepe ex, consequatur at repellat, itaque
          officia atque deleniti molestiae labore?
        </p>
        <br />
        <p className="font-body text-lg text-center lg:lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit
          voluptatum iure? Accusamus quibusdam cum maiores hic vel at labore
          tempore similique. Non iusto qui natus, aperiam commodi ad cumque
          animi placeat! Voluptas molestias veritatis placeat sapiente molestiae
          sed ratione.
        </p>
      </MainSection>
      <Footer />
    </>
  );
};
