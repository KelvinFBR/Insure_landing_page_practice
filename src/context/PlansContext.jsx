import { createContext, useState } from "react";
import { data } from "../data/data";

const initialState = data.plans;

export const PlansContext = createContext();

export const PlansProvider = ({ children }) => {
  const [plansCard, setPlansCard] = useState(initialState);
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <PlansContext.Provider
      value={{ plansCard, setPlansCard, initialState, isMonthly, setIsMonthly }}
    >
      {children}
    </PlansContext.Provider>
  );
};
