import styled, { css } from "styled-components";

export const ButtonTypeVariations = {

    primary: css`  
    background-color: rgba(var(--color-primary),1);
    
  
    border: 1.22px solid rgba(var(--color-primary),1);

    & :hover{
        background-color: rgba(var(--color-primary-focus),1);
        
    }

    & ::disabled{
        cursor: not-allowed;
        opacity: .5;
    }
    
    `,

disable: css`
    
    border: 1.22px solid rgba(var(--color-primary-negative),1);

    background-color: rgba(var(--color-primary-negative),1);

    & :hover {
        background-color: rgba(var(--grey-1),1);
    }

    & ::disabled{
        cursor: not-allowed;
        opacity: .5;
    }
    `,

AddButton: css`
background-color: rgba(var(--grey-3),1);
text-align: center;

border: none;

& :hover {
    background-color: rgba(var(--grey-2),1);
}        
`
}


export const Buttons = styled.button`
  ${({ variant }) => ButtonTypeVariations[variant || 'primary']}
  
    width: 90%;
    height: 35px;
    
    padding: 0px 22px;
    border-radius: 4px;
    
    font-size: var(--headline);
    font-weight: var(--medium);
    color: rgba(var(--white),1);
    letter-spacing: 1px;
    
    @media (min-width: 768px){
        max-width: 329px;
        height: 48px;
    }

    
   
`
