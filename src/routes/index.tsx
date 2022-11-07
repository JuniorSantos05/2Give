import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<> <Login/> </>} />
      <Route path="login" element={<> <Login/> </>}></Route>
    </Routes>
  );
};

export default RoutesMain;
