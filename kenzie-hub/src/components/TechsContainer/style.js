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
        width: 100vh;
        padding: 0 200px;
    }

`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-height: 517px;

    color: rgba(var(--white),1);

    @media (min-width:768px) {
        width: 100vw;
        padding: 0 200px;
    }

    > Button{
      
        padding: 0;
        width: 32px;
        height: 32px;
        text-align: center;
        
        & :hover {
            
            background-color: rgba(var(--grey-2),1);
        }  
    }
    `

    
    
