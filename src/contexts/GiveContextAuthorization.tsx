import { AxiosError, AxiosResponse } from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
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
  user: IUser | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userLogout: () => void;
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
  username: string;
  email: string;
  type: string;
  imagem: string;
}

interface IResponse {
  user: IUser;
  accessToken: string;
}

export const GiveContextAuthorization = createContext<IUserContext>(
  {} as IUserContext
);

const GiveProviderAuth = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const tokenUser = localStorage.getItem("@2Give:token");
  const userID = localStorage.getItem("@2Give:userID");
  const navigate = useNavigate();

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@2Give:token");
    localStorage.removeItem("@2Give:userID");
    navigate("/");
  };

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

  console.log(user);

  async function loginUser(data: ILoginUser) {
    try {
      await Api.post<IResponse>(
        //REMOVIDO O HTTPS
        "/login",
        data
      ).then((res) => {
        const { user: userResponse, accessToken } = res.data;
        setUser(userResponse);
        res.status === 200
          ? toast.success("Login realizado com sucesso!")
          : toast.error("Ops! Algo deu errado.");
        window.localStorage.setItem("@2Give:token", accessToken);
        window.localStorage.setItem("@2Give:userID", userResponse.id);
        console.log(res);
        setTimeout(() => {
          navigate(`/userPage`, { replace: true });
        }, 500);
      });
    } catch (err) {
      err ? toast.error("Ops! Algo deu errado.") : console.log();
    }
  }

  useEffect(() => {
    async function loadUser() {
      try {
        if (tokenUser) {
          Api.defaults.headers.authorization = `Bearer ${tokenUser}`;

          const { data } = await Api.get(`/users/${userID}`);
          console.log(data);
          setUser(data);
          console.log("oi");
        }
      } catch (error) {
        navigate("/");
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  return (
    <GiveContextAuthorization.Provider
      value={{
        registerUser,
        loginUser,
        user,
        loading,
        setLoading,
        userLogout,
      }}>
      {children}
    </GiveContextAuthorization.Provider>
  );
};
export default GiveProviderAuth;
