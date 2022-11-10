
import { useContext, useEffect } from "react";
import { CardUserPage } from "../../components/CardUserPage";
import Header from "../../components/Header";
import { InfoModalCampaign } from "../../components/InfoModalCampaign";
import { GiveContextUserPage } from "../../contexts/GiveContextUserPage";
import {
  ContainerClass,
  ContainerProjects,
  FalseButton,
  MainSection,
  SectionProjects,
} from "./styles";

const HomePage = () => {
  const {
    handleSearch,
    setSearch,
    projectsFiltered,
    setFilterProjects,
    showModalInfo,
    setThisPage,
  } = useContext(GiveContextUserPage);

  useEffect(()=>{
    setThisPage("Home")
  },[])


  return (
    <>
      {showModalInfo ? <InfoModalCampaign /> : null}
      <Header headerType="type1" />

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
            <FalseButton onClick={() => setFilterProjects("")}>
              Todos
            </FalseButton>
            <li onClick={() => setFilterProjects("Crianças")}>Crianças</li>
            <li onClick={() => setFilterProjects("Animais")}>Animais</li>
            <li onClick={() => setFilterProjects("Idosos")}>Idosos</li>
          </ContainerClass>
        </div>

        <img
          src="https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5d5e30d9898356c023c60de1_loving.svg"
          alt="Imagem caridade"
        />
      </MainSection>

      <SectionProjects>
        <ContainerProjects>
          {projectsFiltered.length ? (
            <CardUserPage />
          ) : (
            <h2>Sem projetos por enquanto...</h2>
          )}
        </ContainerProjects>
      </SectionProjects>
    </>
  );
};

export default HomePage;
