import { Routes, Route } from "react-router-dom";

import { EventsPage } from "../pages/EventsPage";
import { UserPage } from "../pages/UserPage";
import Register from "../pages/Register";
import Login from "../pages/login";


const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/userPage" element={<UserPage />} />
      <Route path="/events" element={<EventsPage />} />
    </Routes>
  );
};

export default RoutesMain;
