import { useState } from "react"
import NavComponentHeader from "./navComponentHeader"

import { HeaderStyle, ModalHeader } from "./style"
import logo from "../../assets/Logo.svg"
import { BsJustify } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'



export interface IHeader {
    headerType: "type1" | "type2"
}


function Header ({headerType}:IHeader){
    const [isModal, setIsModal] = useState(false)

    function togglemodal(){
        isModal ? setIsModal(false) : setIsModal(true)
    }

    return(
        <>
            <HeaderStyle>
                <header>
                    <img src={logo} alt="2Give Logo" />
                    <NavComponentHeader headerType={headerType} />
                    {
                        isModal ? <AiOutlineClose onClick={togglemodal} /> : <BsJustify onClick={togglemodal} />
                    }
                </header>
            </HeaderStyle>
            {
                isModal && <ModalHeader> <NavComponentHeader headerType={headerType} /> </ModalHeader>
            }
 
        </>
    )

}

export default Header