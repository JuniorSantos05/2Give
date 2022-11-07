import { Routes, Route } from "react-router-dom";
import { EventsPage } from "../pages/EventsPage";
import { UserPage } from "../pages/UserPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/events" element={<EventsPage />} />
    </Routes>
  );
};

export default RoutesMain;
