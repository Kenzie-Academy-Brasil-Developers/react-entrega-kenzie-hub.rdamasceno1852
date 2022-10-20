import styled from "styled-components";

export const EmptyCard = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 90%;
    height: 35px;

    border-radius: 4px;

    color: rgba(var(--grey-0),1);
    background-color: rgba(var(--grey-4),1);
    text-align: center;

    font-size: var(--headline);

    margin: 10px auto;

    & :hover{
        background-color: rgba(var(--grey2),1);
    }

    @media(min-width: 768px){
        color: rgba(var(--grey-0),1);
    width: 95%;
    max-height: 49px;
    background-color: rgba(var(--grey-4),1);
    text-align: center;
    display: flex;
    align-content: center;
    justify-content: center;

    font-size: var(--title-2);


    margin: 10px auto;
    }
`