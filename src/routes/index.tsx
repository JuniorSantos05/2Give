import { Routes, Route } from "react-router-dom";
import { Contact } from "../pages/Contact";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Contact />} />
    </Routes>
  );
};

export default RoutesMain;
