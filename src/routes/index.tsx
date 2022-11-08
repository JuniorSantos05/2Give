import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesMain;
