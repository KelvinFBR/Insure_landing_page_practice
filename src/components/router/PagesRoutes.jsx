import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Account, Blog, ViewPlans, HowWeWork } from "../../pages";

export const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how-we-work" element={<HowWeWork />} />
      <Route path="/viewplans" element={<ViewPlans />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/account" element={<Account />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
