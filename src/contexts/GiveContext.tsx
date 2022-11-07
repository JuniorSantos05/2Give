import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Api from "../services/api";

interface IUserContext {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: boolean;
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  projects: IProjects[];
  setProjects: React.Dispatch<React.SetStateAction<IProjects[]>>;
  createProjects(data: IProjects): Promise<void>;
}

interface IUserProviderProps {
  children: ReactNode;
}

export interface IProjects {
  userId: number;
  name: string;
  description: string;
  donation: string;
  address: string;
  account: string;
  image: string;
  id: number;
}

export const GiveContext = createContext<IUserContext>({} as IUserContext);

const GiveProvider = ({ children }: IUserProviderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [projects, setProjects] = useState([] as IProjects[]);

  useEffect(() => {
    async function getProjects() {
      const { data } = await Api.get("/projects");
      setProjects(data);
      try {
      } catch (error) {
        console.log(error);
      }
    }
    getProjects();
  }, []);

  async function createProjects(data: IProjects) {
    try {
      const response = await Api.post("/projects", data);

      const { projects: projectsResponse } = response.data;

      setProjects(projectsResponse);

      toast.success("Nova Campanha criada com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Ops, algo deu errado!");
    }
  }

  return (
    <GiveContext.Provider
      value={{
        showMenu,
        setShowMenu,
        closeModal,
        setCloseModal,
        projects,
        setProjects,
        createProjects,
      }}
    >
      {children}
    </GiveContext.Provider>
  );
};
export default GiveProvider;
