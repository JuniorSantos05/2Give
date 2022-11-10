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
  filterProjects: string;
  projectsFiltered: IProjects[];
  showModalInfo: boolean;
  setShowModalInfo: React.Dispatch<React.SetStateAction<boolean>>;
  modalProject: IProjects[];
  showProject(id: any): Promise<void>;
  handleSearch(event: any): void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setFilterProjects: React.Dispatch<React.SetStateAction<string>>;
  thisPage: string;
  setThisPage: React.Dispatch<React.SetStateAction<string>>;
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

export const GiveContextUserPage = createContext<IUserContext>(
  {} as IUserContext
);

const GiveProviderUser = ({ children }: IUserProviderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [projects, setProjects] = useState([] as IProjects[]);
  const [filterProjects, setFilterProjects] = useState("");
  const [modalProject, setModalProject] = useState([] as IProjects[]);
  const [search, setSearch] = useState("");
  const [thisPage, setThisPage] = useState("");

  useEffect(() => {
    async function getProjects() {
      try {
        const { data } = await Api.get("/projects");
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProjects();
  }, []);

  async function createProjects(data: IProjects) {
    try {
      const token = localStorage.getItem("@2Give:token");

      await Api.post("/projects", data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProjects([...projects, data]);

      toast.success("Nova Campanha criada com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Ops, algo deu errado!");
    }
  }

  async function showProject(id: any) {
    try {
      const { data } = await Api.get(`/projects?id=${id}`);
      setModalProject(data);
      setShowModalInfo(true);
    } catch (error) {
      console.log(error);
    }
  }

  const projectsFiltered = projects.filter((project) =>
    filterProjects === ""
      ? true
      : project.name
          .toLocaleLowerCase()
          .includes(filterProjects.toLocaleLowerCase())
  );

  function handleSearch(event: any) {
    event.preventDefault();
    setFilterProjects(search);
  }

  return (
    <GiveContextUserPage.Provider
      value={{
        showMenu,
        setShowMenu,
        closeModal,
        setCloseModal,
        projects,
        setProjects,
        createProjects,
        filterProjects,
        projectsFiltered,
        showModalInfo,
        setShowModalInfo,
        modalProject,
        showProject,
        handleSearch,
        setSearch,
        setFilterProjects,
        thisPage,
        setThisPage,
      }}
    >
      {children}
    </GiveContextUserPage.Provider>
  );
};
export default GiveProviderUser;
