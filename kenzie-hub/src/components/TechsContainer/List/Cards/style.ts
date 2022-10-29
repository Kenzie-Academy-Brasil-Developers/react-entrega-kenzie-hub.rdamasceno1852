import styled from "styled-components";

export const Card = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-radius: 4px;

    width: 90%;
    height: 35px;

    background-color: rgba(var(--grey4),1);

    color: rgba(var(--grey-0),1);

    
    @media(min-width: 768px){
        display: flex;
        justify-content: space-between;
        align-content: center;
        
        text-align: center;
        
        width: 95%;
        height: 49px;
        
        background-color: rgba(var(--grey-4),1);
        
        margin: 10px auto;
        box-sizing: border-box;
        
        padding: 0 25.3px;

        :hover{
            background-color: rgba(var(--grey-2),1);
            cursor: pointer;
            transition: .6s;
            }
    }
    
    div{
        
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 25px;

        p{
            color: rgba(var(--grey-1),1);
        }

        button{
            background-color: transparent;
            color: rgba(var(--grey-0),1);
            border: none;
        }
    }
    `