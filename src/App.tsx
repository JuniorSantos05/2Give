import "./App.css";
import Global from "./styles/Global/global";
import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import GiveProvider from "./contexts/GiveContextLogin";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Global />
      <GiveProvider>
        <RoutesMain />
      </GiveProvider>
    </>
  );
}

export default App;
