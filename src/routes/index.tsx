import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import { EventsPage } from "../pages/EventsPage";
import { UserPage } from "../pages/UserPage";
import Register from "../pages/Register";
import Login from "../pages/login";
import { LandingPage } from "../pages/LadingPage/LadingPage";
import { Contact } from "../pages/Contact";
import { SobrePage } from "../pages/Sobre";
import ProtectedRoutes from "../components/ProtectedRoutes";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/homePage" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/userPage" element={<UserPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<SobrePage />} />
    </Routes>
  );
};

export default RoutesMain;
