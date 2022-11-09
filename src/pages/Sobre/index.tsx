import { SobrePageStyle } from "./style"
import ilustration from "../../assets/ilustrationSobre.svg"

export const SobrePage = ()=>{
    return (
        <SobrePageStyle>
            <section className="section1">
                <div className="box">
                    <h1>Quem Somos</h1>
                    <div className="vector"></div>
                    <p>
                        Somos uma plataforma que viabiliza a criação e divulgação de doações com a finalidade de mudar  vidas de 
                        pessoas necessitadas.
                    </p>
                </div>
            </section>
            <section className="section2">
                <div>
                    <h2>
                        Acreditamos que a participação de cada um de nós é fundamental para mudanças, para realizações, para uma vida
                        melhor.
                    </h2>
                    <p>
                        E com nossa experiência , muito trabalho e orgulho abrimos nossa plataforma para todos os tipos de projetos e 
                        causas.
                    </p>
                </div>
                <img src={ilustration} alt="Imagem estética" />
            </section>
        </SobrePageStyle>
    )
}