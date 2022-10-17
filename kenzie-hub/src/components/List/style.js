import styled from "styled-components";

export const CardsList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 11.43px;

    width: 90%;
    max-height: 298px;

    background-color: rgba(var(--grey3),1);

    @media (min-width: 768px) {
        width: auto;
    }

`