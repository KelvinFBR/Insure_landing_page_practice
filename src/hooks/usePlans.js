import { useContext, useState } from "react";
import { PlansContext } from "../context/PlansContext";

export const usePlans = () => {
  const { plansCard, setPlansCard, initialState, isMonthly, setIsMonthly } =
    useContext(PlansContext);

  const plansAnnually = () => {
    const plans = plansCard.map((plan) => {
      return {
        ...plan,
        price: (plan.price * 5).toFixed(2),
      };
    });

    setPlansCard(plans);
  };

  const plansReset = () => {
    setPlansCard(initialState);
  };

  return {
    plansAnnually,
    plansReset,
    isMonthly,
    setIsMonthly,
  };
};
