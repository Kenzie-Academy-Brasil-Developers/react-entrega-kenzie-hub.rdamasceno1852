import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    width: 90%;
    height: 72px;
    
    margin: 0 auto;
    border-bottom: 1px solid rgba(var(--grey-2),1);

    h2{
            color: rgba(var(--color-primary),1);
            font-size: var(--title2);

        }

    button{
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

    @media (min-width: 768px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: auto;

        padding: 0 200px;
    }
`
export const UserData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    gap: 10px;

    width: 90%;
    height: 131px;
    
    margin: 0 auto;
    border-bottom: 1px solid rgba(var(--grey-2),1);

    h1{
        font-size: var(--title1);
        font-weight: var(--bold);
        color: rgba(var(--grey-0),1);
    }

    p{
        font-size: var(--title3);
        font-weight: var(--medium);
        color: rgba(var(--grey-1),1);
    }

    @media (min-width: 768px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        box-sizing: border-box;

        width: auto;

        padding: 0 200px;
    }
`