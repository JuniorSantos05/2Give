import styled from "styled-components";
import { colors } from "../../styles/Global/colors";

export const SobrePageStyle = styled.div`

    .section1{
        height: 694px;
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

        p{
            max-width: 858px;
            font-size: 28px;
            text-align: center;

            font-weight: 400;
            line-height: 36.23px;

            
        }

        .vector{
            width: 105px;
            height: 5.5px;
            background-color: ${colors.colorPrimary};
        }

    }

    .section2{
        max-width: 90%;
        height: 694px;
        padding: 10px;
        margin: 0 auto;
        box-sizing: border-box;

        display: flex;
        align-items: center;
        flex-wrap: wrap;


        h2{
            max-width: 652px;
            font-size: 2rem;
            color: #3D4749;

            margin-bottom: 30px;
        }
        
        p{
            font-size: 1.125rem;
            max-width: 638px;
        }

        img{
            max-width: 500px;

            @media (max-width: 700px){
                width: 300px;
            }
        }

    }
    
`