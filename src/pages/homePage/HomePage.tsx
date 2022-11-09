import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import CardProject from "../../components/cardProject/CardProject";
import Api from "../../services/api";
import {
  ContainerClass,
  ContainerProjects,
  FalseButton,
  MainSection,
  SectionProjects,
} from "./styles";

interface iApiError {
  message: string;
}

export interface iProjects {
  userId: string;
  name: string;
  description: string;
  donation: string;
  mark: string;
  address: string;
  account: string;
  image: string;
  id: number;
}

const HomePage = () => {
  const [projects, setProjects] = useState([] as iProjects[]);
  const [filteredProjects, setFilteredProjects] = useState("");
  const [search, setSearch] = useState("");

  const showProjects = projects.filter((project) =>
    filteredProjects === ""
      ? true
      : project.name
          .toLocaleLowerCase()
          .includes(filteredProjects.toLocaleLowerCase())
  );
  console.log(showProjects);
  useEffect(() => {
    (async () => {
      try {
        const response = await Api.get("/projects");

        setProjects(response.data);
      } catch (error) {
        const requestError = error as AxiosError<iApiError>;
        console.log(requestError);
      }
    })();
  }, []);

  function handleSearch(event: any) {
    event.preventDefault();
    setFilteredProjects(search);
    console.log(filteredProjects);
  }

  return (
    <>
      <header>
        <h1>Homepage</h1>
      </header>

      <MainSection>
        <div>
          <h2>Busque entre os nossos mais de </h2>
          <h1>100 eventos beneficentes</h1>

          <form onSubmit={handleSearch}>
            <input
              type="text"
              id="search"
              placeholder="Pesquisar"
              onChange={(event) => setSearch(event.target.value)}
            />
            <button type="submit">Pesquisar</button>
          </form>

          <ContainerClass>
            <FalseButton>Destaques</FalseButton>
            <li onClick={() => setFilteredProjects("alimentação")}>
              Alimentação
            </li>
            <li onClick={() => setFilteredProjects("Agasalho")}>Agasalhos</li>
            <li onClick={() => setFilteredProjects("")}>Todos</li>
          </ContainerClass>
        </div>

        <img
          src="https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5d5e30d9898356c023c60de1_loving.svg"
          alt="Imagem caridade"
        />
      </MainSection>

      <SectionProjects>
        <ContainerProjects>
          {showProjects.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
        </ContainerProjects>
      </SectionProjects>
    </>
  );
};

export default HomePage;
