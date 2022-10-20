import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 90%;
    height: 517px;
    margin: 0 auto;

    @media (min-width:768px) {
        max-width: 780px;
    }

`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* outline: 2px solid red; */

    width: 110%;
    max-height: 517px;

    
    @media (min-width:868px) {
        max-width: 780px;
    }
    
    > h3{
        color: var(--white);

    }

    > Button{
      
        padding: 0;
        width: 32px;
        height: 32px;
        text-align: center;

        background-color: rgba(var(--grey-3),1);

        color: var(--white);
        
        >svg{
            font-size: var(--title1);
        }
        
        & :hover {      
            background-color: rgba(var(--grey-3),1);
        }  
    }
    `

    
    
