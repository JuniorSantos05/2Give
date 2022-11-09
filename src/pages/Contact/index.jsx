import { ContactStyle } from "./style"

import Twitter from "../../assets/iconTwitter.svg"
import Instagram from "../../assets/iconInstagram.svg"
import Facebook from "../../assets/iconFacebook.svg"
import Doddle from "../../assets/CoffeeDoddle.svg"
import { useContext, useEffect } from "react"
import { GiveContextUserPage } from "../../contexts/GiveContextUserPage"
import Header from "../../components/Header"

export const Contact = ()=>{
    const { setThisPage } = useContext(GiveContextUserPage);

    useEffect(()=>{
        setThisPage("Contato")
    },[])

    return(
        <>
            <Header headerType="type1" />
            <ContactStyle>
                <section className="section1">
                    <div className="box">
                        <h1>Contatos</h1>
                        <div className="vector" />
                    </div>
                </section>
                <section className="section2">
                    <div className="box-informatio">
                        <p>+1-415-555-0173</p>
                        <p>twogive@hotmail.com</p>
                        <span>
                            Page Loft, 1228 Diamond Street,  
                            San Francisco
                        </span>
                        <div>
                            <img src={Twitter} alt="Twiter" />
                            <img src={Instagram} alt="Instagram" />
                            <img src={Facebook} alt="Facebook " />
                        </div>
                    </div>
                    <img src={Doddle} alt="Imagem estética" />
                </section>
            </ContactStyle>
        </>
    )
}