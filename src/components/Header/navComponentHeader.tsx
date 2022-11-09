import { Link, useNavigate } from "react-router-dom";
import { IHeader } from ".";

import { NavStyle } from "./style";


function NavComponentHeader({headerType}:IHeader){

    //trocar pelo userContext
    const userLog = true
    const navigate = useNavigate()

    function handlelogOut(){
        localStorage.clear()
        navigate("/login")
    }
    
    if(headerType === "type1"){
        return(
            <NavStyle>
                <Link to={"/"}>
                    <h4 id="active">Home</h4>
                </Link>
                <Link to={"/about"}>
                    <h4>Sobre nós</h4>
                </Link>
                <Link to={"contact"}>
                    <h4>Contato</h4>
                </Link>
                {
                    userLog ? (
                        <button onClick={handlelogOut}>
                            <h4>Sair</h4>
                        </button>
                    ) :(
                        <>
                            <Link to={"/login"}>
                                <button>
                                    <p>Login</p>
                                </button>
                            </Link>
                            <Link to={"/register"}>
                                <button>
                                    <p>Cadastrar</p>
                                </button>
                            </Link>
                        </>
                    )
                }
        </NavStyle>
        )
    }else{
        return(
            <NavStyle>
                <Link to={"/home"}>
                    <h4 id="active">Home</h4>
                </Link>
                <Link to={"/dashboard"}>
                    <h4>Dashboard</h4>
                </Link>
                <Link to={"/events"}>
                    <h4>Eventos</h4>
                </Link>
        
                <button  onClick={handlelogOut}>
                    <h4>Sair</h4>
                </button>

            </NavStyle>
        )
    }
}

export default NavComponentHeader