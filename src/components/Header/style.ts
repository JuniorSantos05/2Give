import styled from "styled-components";
import { colors } from "../../styles/Global/colors";

export const HeaderStyle = styled.div`
    width: 100%;
    height: 92px;

    background-color: ${colors.colorBackground};
    box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
    position: sticky;
    
    display: flex;
    top: 0;
    
    header{
        width: 90%;
        padding: 10px;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: space-between;

        img{
            width: 98px;
            height: 45px;
        }

        svg{
            display: none;
        }

        @media (max-width: 800px) {
            nav{
                display: none;
            }

            svg{
                display: flex;
                height: 40px;
                width: 40px;
                color: ${colors.colorPrimary};
            }
        }

    }

`

export const ModalHeader = styled.div`
    background-color: ${colors.colorBackground};
    height: 100%;
    width: 100%;
    position: absolute;
    top: 92px;

    @media (min-width: 800px){
        display: none;
    }
    
`

export const NavStyle = styled.nav`

    display: flex;
    align-items: center;
    gap: 39px;


    a{
        color: black;
    }

    button{
        height: 44px;
        padding-inline: 34.6px;
        background-color: ${colors.colorPrimary};
        color: white;
        font-size: 18px;
        border-radius: 8px;
    }



    @media (max-width: 800px) {
        width: 90%;
        padding: 10px;
        margin: 0 auto;
        padding-top: 30px;

        flex-direction: column;
        align-items: flex-start;
        gap: 60px;
            
        button{
            font-size: 30px;
        }

        h4{
            font-size: 30px;
            color: black;
        }
    }
`