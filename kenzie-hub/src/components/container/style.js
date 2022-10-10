import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    gap: 15px;

    width: 100vw;
    /* height: 100vh; */

    background-color: rgba(var(--grey-4),1);
    

    h2{
        padding-top: 15px;
        color: rgba(var(--color-primary),1);

    }
    
    div{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        /* align-content: center; */
        
        width: 296px;
        
        
        h2{
            color: rgba(var(--color-primary),1);
            padding-top: 25px;
            font-size: var(--title2);
            height: inherit;

        }

        a{
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: rgba(var(--grey-3),1);
            color: rgba(var(--grey-0),1);
            text-decoration: none;

            font-size: var(--headline);
            height: 30px;
            width: 50px;
        }
        
        
    }

    `
