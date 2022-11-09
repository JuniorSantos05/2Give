import { Container } from "./style"
import { IoClose } from "react-icons/io5"

export interface IPropsMenu{
    menuIsVisible: boolean | string
    setMenuIsVisible: any
}

export const MenuMobile= ({menuIsVisible, setMenuIsVisible}:IPropsMenu) => {

    return (
    <Container isVisible={menuIsVisible}>
        <IoClose size={45} onClick={() => setMenuIsVisible(false)}/>
        <nav>
            <span>Home</span>
            <span>Sobre nós</span>
            <span>Contato</span>
        </nav>
    </Container>
    )
}
