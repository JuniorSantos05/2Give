import styled from "styled-components";
import { colors } from "../../styles/Global/colors";

export const ContactStyle = styled.div`

    .section1{
        height: 292px;
        background-color: #FFE8E3;
        padding: 10px;
        display: flex;
        justify-content: center;
        .box{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 60px;
        }
        h1{
            font-size: 4rem;
            text-align: center;
            color: #3D4749;
        }
        .vector{
            width: 105px;
            height: 5.5px;
            background-color: ${colors.colorPrimary};
        }
    }

    .section2{
        height: 495px;
        padding: 10px;
        box-sizing: border-box;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        .box-informatio{
            width: 260px;
            text-align: center;

            display: flex;
            flex-direction: column;
            gap: 20px;

            p{
                font-size: 28px;
            }

            div{
                
                display: flex;
                justify-content: center;
                gap: 10px;

                img{
                    cursor: pointer;
                }
            }
        }

        @media (max-width: 1000px){
            &>img{
                width: 500px;
            }
        }

        @media (max-width: 533px){
            &>img{
                width: 250px;
            }
        }


    }

`