import Global from "./styles/Global/global";
import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import GiveProviderAuth from "./contexts/GiveContextAuthorization";
import GiveProviderUser from "./contexts/GiveContextUserPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Global />
      <GiveProviderAuth>
        <GiveProviderUser>
          <RoutesMain />
        </GiveProviderUser>
      </GiveProviderAuth>
    </>
  );
}

export default App;
