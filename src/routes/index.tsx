import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/login";


const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default RoutesMain;
