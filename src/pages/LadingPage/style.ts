import styled from "styled-components";
import { colors } from "../../styles/Global/colors";
import { typography } from "../../styles/Global/typography";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff0f6;
    padding: 10px 30px;
    box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
    h1 {
    font-weight: 700;
    font-size: 25px;
    line-height: 45px;
    color: ${colors.colorPrimary};
    cursor: default;
    }
    nav {
        width: 70%;
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    ul {
        display: none;
        width: 80%;
        justify-content: space-evenly;
        align-items: center;
        gap: 10px;
    li {
        font-weight: 600;
        font-size: 16px;
        list-style: none;
        color: ${colors.colorGrey4};
    }
    .mobile{
        display: flex;
        align-items: flex-end;
        width: 200px;
        min-width: 30px;
    }
    a {
        transition: all 0.3s;
        color: ${colors.colorGrey4};
        :hover {
        color: ${colors.colorPrimary};
        }
    }
    }
    .btn {
    padding: 10px 16px;
    width: 100%;
    font-size: 12px;
    border-radius: 8px;
    background-color: ${colors.colorPrimary};
    color: ${colors.colorGrey0};
    transition: all 0.3s;
    :hover {
    background-color: ${colors.colorPrimarySoft};
    }
    }
    svg{
        min-width: 20px;
    }
    }

    @media screen and (min-width: 700px){
        ul{
            display: flex !important;
        }
        .mobile{
            display: none;
        }
        h1{
            font-size: 38px;
        }
    }
`
export const ContentStyle = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: center;
    align-items: center;
    gap: 52px;
    padding: 0 5%;
    height: 87vh;
    background-color: #fff0f6;

    main{
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 28px;
        max-width: 347px;
        max-height: 500px !important;
    }

    .titlePage{
        text-align: center;
        font-size: 38px;
    }

    .colorPink{
        color: ${colors.colorPrimary};
    }

    p{
        text-align: center;
        font-size: ${typography.title1.size};
        font-weight: ${typography.title1.weight};
    }

    .mainImage {
    display: none;
    width: 50%;
    max-width: 593px;
}

a {
    display: flex;
    align-items: center;
    justify-content: center;
}

button {
    padding: 10px 16px;
    border-radius: 8px;
    background-color: ${colors.colorPrimary};
    color: ${colors.colorGrey0};
    transition: all 0.3s;
    width: 150px;
    :hover {
    background-color: ${colors.colorPrimarySoft};
    }
    }

@media screen and (min-width: 900px) {
    justify-content: space-between;

    main{
    align-items: stretch;
    max-width: 500px;

    h1 {
        text-align: left;
    }

    ul{
        display: flex;
    }

    .mobile{
        display: none;
    }

    .link {
        max-width: 241px;
    }
    }
    .mainImage {
    display: block;
    }

    .titlePage{
        width: 500px;
        display: flex;
        gap: 20px;
    }

    p{
        text-align: start;
    }

    button{
        width: 200px;
        height: 40px;
    }
}
`
export const FooterStyle = styled.div`
    background-color: #fff0f6;
    display: flex;
    justify-content: center;
`
