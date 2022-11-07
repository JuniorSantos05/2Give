import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  );
};

export default RoutesMain;
