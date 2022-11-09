import { AxiosError } from "axios";
import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import Toastify from "../components/Toastify";
import Api from "../services/api";

interface IUserProviderProps {
  children: ReactNode;
}

export interface IRegisterForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  imagem: string;
}
interface IUserContext {
  registerUser(dataRegister: IRegisterForm): Promise<void>;
}

export const GiveContext = createContext<IUserContext>({} as IUserContext);

const GiveProvider = ({ children }: IUserProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const navigate = useNavigate();

  async function registerUser(dataRegister: IRegisterForm): Promise<void> {
    try {
      const response = await Api.post("/register", dataRegister);
      navigate("/login");
      Toastify.sucess("Conta registrada! 😎");
    } catch (error) {
      const requestError = error as AxiosError;
      Toastify.erro(requestError.response?.data);
    }
  }

  return (
    <GiveContext.Provider value={{ registerUser }}>
      {children}
    </GiveContext.Provider>
  );
};
export default GiveProvider;
