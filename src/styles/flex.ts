import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > div,
    & > ul {
        flex: 1;
    }
`

export const FlexBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`
export const FlexBetweenTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px 10px 0px;
`
