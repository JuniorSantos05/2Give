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
  filterDonationFood(): void;
  filterDonationToys(): void;
  filterDonationCoat(): void;
  filterDonationAnimals(): void;
  filterDonation(): void;
  showModalInfo: boolean;
  setShowModalInfo: React.Dispatch<React.SetStateAction<boolean>>;
  modalProject: IProjects[];
  showProject(id: any): Promise<void>;
  thisPage: string;
  setThisPage: React.Dispatch<React.SetStateAction<string>>

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
  const [filterProjects, setFilterProjects] = useState("All");
  const [modalProject, setModalProject] = useState([] as IProjects[]);
  const [thisPage, setThisPage] = useState("")

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
      const response = await Api.post("/projects", data);

      const { projects: projectsResponse } = response.data;

      setProjects(projectsResponse);

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

  const projectsFiltered = projects.filter((project) => {
    if (filterProjects === "All") return project;

    return project.donation === filterProjects;
  });

  function filterDonationFood() {
    console.log();
    setFilterProjects("Alimentos");
  }
  function filterDonationToys() {
    console.log();
    setFilterProjects("Brinquedos");
  }
  function filterDonationCoat() {
    console.log();
    setFilterProjects("Cobertores e Agasalhos");
  }
  function filterDonationAnimals() {
    console.log();
    setFilterProjects("Ração");
  }
  function filterDonation() {
    console.log();
    setFilterProjects("All");
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
        filterDonationFood,
        filterDonationToys,
        filterDonationCoat,
        filterDonationAnimals,
        filterDonation,
        showModalInfo,
        setShowModalInfo,
        modalProject,
        showProject,
        thisPage,
        setThisPage,
      }}
    >
      {children}
    </GiveContextUserPage.Provider>
  );
};
export default GiveProviderUser;
