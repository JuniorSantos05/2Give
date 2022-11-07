import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";
import Api from "../services/api";

interface IUserContext {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: boolean;
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  projects: never[];
  setProjects: React.Dispatch<React.SetStateAction<never[]>>;
  createProjects(data: IProjectsData): Promise<void>;
}

interface IUserProviderProps {
  children: ReactNode;
}

export interface IProjectsData {
  name: string;
  urlImage: string;
  target_public: string;
  location: string;
  timeEvent: string;
  phone: string;
  description: string;
}

export const GiveContext = createContext<IUserContext>({} as IUserContext);

const GiveProvider = ({ children }: IUserProviderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [projects, setProjects] = useState([]);

  async function createProjects(data: IProjectsData) {
    try {
      console.log(data);

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
