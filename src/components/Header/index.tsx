import { HeaderStyle } from "./style"
import logo from "./Logo.svg"
import { Link } from "react-router-dom"

interface IHeader {
    headerType: "type1" | "type2"
}


function Header ({headerType}:IHeader ){
    const userLog = false

    if(headerType === "type1"){
        return(
            <HeaderStyle>
                <header>
                    <img src={logo} alt="2Give Logo" />
                    <nav>
                        <Link to={""}>
                            <h4 id="active">Home</h4>
                        </Link>
                        <Link to={""}>
                            <h4>Sobre nós</h4>
                        </Link>
                        <Link to={""}>
                            <h4>Contato</h4>
                        </Link>
                        {
                            userLog ? (
                                <button>
                                    <h4>Sair</h4>
                                </button>
                            ) :(
                                <>
                                    <Link to={"/login"}>
                                        <button>
                                            <h4>Login</h4>
                                        </button>
                                    </Link>
                                    <Link to={"/register"}>
                                        <button>
                                            <h4>Cadastrar</h4>
                                        </button>
                                    </Link>
                                </>
                            )
                        }
                    </nav>
                </header>
            </HeaderStyle>
    
        )
    }else{
        return(
            <HeaderStyle>
                <header>
                    <img src={logo} alt="2Give Logo" />
                    <nav>
                        <Link to={"/home"}>
                            <h4 id="active">Home</h4>
                        </Link>
                        <Link to={"/dashboard"}>
                            <h4>Dashboard</h4>
                        </Link>
                        <Link to={"/events"}>
                            <h4>Eventos</h4>
                        </Link>
                        {
                            <button>
                                <h4>Sair</h4>
                            </button>
                            
                        }
                    </nav>
                </header>
            </HeaderStyle>
        )
    }
}

export default Header