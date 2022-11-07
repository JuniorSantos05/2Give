import styled from "styled-components";
import { colors } from "../../styles/Global/colors";

export const HeaderStyle = styled.header`
    width: 100%;
    height: 92px;
    background-color: ${colors.colorBackground};
    box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
    
    display: flex;
    
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

        nav{
            display: flex;
            align-items: center;
            gap: 39px;

            #active{
                color: ${colors.colorPrimary};
            }

            a{
                color: black;
            }

        }

        button{
            height: 44px;
            padding-inline: 34.6px;
            background-color: ${colors.colorPrimary};
            color: white;
            border-radius: 8px;
        }

    }

`