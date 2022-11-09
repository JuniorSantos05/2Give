import { AxiosError } from "axios";
import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import Toastify from "../components/Toastify";
import { toast } from "react-toastify";
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

interface IUserContext {
  loginUser: (data: ILoginUser) => void;
}

interface IUserProviderProps {
  children: ReactNode;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  type: string;
}

interface IResponse {
  user: IUser;
  token: string;
}

export const GiveContextAuthorization = createContext<IUserContext>({} as IUserContext);

const GiveProviderAuth = ({ children }: IUserProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
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

  async function loginUser(data: ILoginUser) {
    try {
      await Api
        .post<IResponse>(
          //REMOVIDO O HTTPS
          "/login",
          data
        )
        .then((res) => {
          const { user: userResponse, token } = res.data;
          setUser(userResponse);
          res.status === 200
            ? toast.success("Login realizado com sucesso!")
            : toast.error("Ops! Algo deu errado.");
          window.localStorage.setItem("@2Give:token", token);
          console.log(res);
          setTimeout(() => {
            navigate(`/dashboard`, { replace: true });
          }, 500);
        });
    } catch (err) {
      err ? toast.error("Ops! Algo deu errado.") : console.log();
    }
  }

  return (
    <GiveContextAuthorization.Provider value={{ registerUser, loginUser }}>
      {children}
    </GiveContextAuthorization.Provider>
  );
};
export default GiveProviderAuth;
