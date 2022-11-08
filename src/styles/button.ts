import styled from "styled-components";
import { colors } from "./Global/colors";

export interface IButtonProps {
    backgroundColor: boolean;
    small: boolean;
}

export const Button = styled.button<IButtonProps>`
    width: ${props => (props.small ? 'max-width' : '21em')};
    margin-top: ${props => (props.small ? '0px' : '25px')};
    border-radius: 5px;
    border: none;
    font-size: ${props => (props.small ? '12px' : '16px')};
    font-weight: 700;
    padding: 15px;
    background-color: ${props => ((props.backgroundColor === true) ? '#F0386B' : (props.backgroundColor === false) ? '#868E96' : '#212529')};
    color: ${({color}) => color || '#fff'};

    &:hover {
    opacity: 0.9;
    }
`
    