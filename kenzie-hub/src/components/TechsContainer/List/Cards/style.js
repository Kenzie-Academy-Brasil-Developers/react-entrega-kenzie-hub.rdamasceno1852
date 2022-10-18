import styled from "styled-components";

export const Card = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 90%;
    height: 35px;

    background-color: rgba(var(--grey4),1);

    & :hover{
        background-color: rgba(var(--grey2),1);
    }

    @media(min-width: 768px){
        width: auto;
    }

`