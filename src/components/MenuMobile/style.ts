import styled, { css } from "styled-components"
import { colors } from "../../styles/Global/colors"


export interface IPropsMenuStyle{
    isVisible?: boolean | string
}

export const Container = styled.div<IPropsMenuStyle>`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(3px);
    background: rgba(255,229,229,0.95) ;
    background: radial-gradient(circle, rgba(252,252,252,0.7) 0%, rgba(255,229,229,0.8) 95%);

    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);
    transition: .5s;

    ${({isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);
    `}

svg{
    position: absolute;
    top: 1rem;
    right: 1rem;
}

nav{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    font-size: 22px;
    font-weight: 500;
    line-height: 40px;
    span{
        :hover{
            color: ${colors.colorPrimarySoft};
        }
    }
}

`