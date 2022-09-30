import { useContext } from "react";
import { PlansContext } from "../../context/PlansContext";
import { PlanCard } from "./PlanCard";

export const CardsSection = () => {
  const { plansCard } = useContext(PlansContext);

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center gap-10 my-16">
      {plansCard.map(
        ({ id, type, price, storage, userAllowance, capacity }) => (
          <PlanCard
            key={id}
            type={type}
            price={price}
            storage={storage}
            userAllowance={userAllowance}
            capacity={capacity}
          />
        )
      )}
    </section>
  );
};
