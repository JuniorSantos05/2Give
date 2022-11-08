import { createContext, ReactNode } from "react";
import { useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

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

export const GiveContext = createContext<IUserContext>({} as IUserContext);

const GiveProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

//   async function loadUser() {
//     const token = localStorage.getItem('@KenzieHub:token');
//     if (token) {
//         try {
//         api.defaults.headers.authorization = `Bearer ${token}`;
//         const {data} = await api.get('/profile');
//         setUser(data);
//         } catch(error) {
//             console.error(error);
//             localStorage.clear();
//             navigate("/login");
//         }
//     }
//     setLoading(false);
// }
  
//   useEffect(() => { loadUser(); }, []);

  async function loginUser(data: ILoginUser) {
    await api.post<IResponse>("https://json-server-projeto-front-end.herokuapp.com/login", data)
     .then((res) =>{ const {user: userResponse, token} = res.data;
     setUser(userResponse);
     res.status === 200 ? toast.success("Login realizado com sucesso!") : toast.error("Ops! Algo deu errado.")
    // window.localStorage.clear();
    //  window.localStorage.setItem("@2Give:ID", res.data.user.id);
     window.localStorage.setItem("@2Give:token", token);
    //  window.localStorage.setItem("@2Give:User", res.data.user.name);
     console.log(res)
     setTimeout(() => {
       navigate(`/dashboard`, { replace: true });
     }, 500);
     }
     )
     .catch(
       (err) =>
         err ? toast.error("Ops! Algo deu errado.") : console.log()
     );
 }

  return (
    <GiveContext.Provider value={{loginUser}}>{children}</GiveContext.Provider>
  );
};
export default GiveProvider;
