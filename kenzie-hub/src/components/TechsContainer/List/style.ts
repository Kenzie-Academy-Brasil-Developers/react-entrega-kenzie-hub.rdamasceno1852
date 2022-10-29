import styled from "styled-components";

export const CardsList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 11.43px;
    margin-top: 30px;

    
    width: 110%;
    max-height: 298px;
    
    background: rgba(var(--grey-3),1);
    
    @media (min-width: 768px) {
        box-sizing: border-box;
        width: 48.7rem;
        max-height: -webkit-max-content;
        gap: 11.43px;
    }    
    `