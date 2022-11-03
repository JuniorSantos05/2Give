import { Routes, Route } from "react-router-dom";
import { UserPage } from "../pages/UserPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
    </Routes>
  );
};

export default RoutesMain;
