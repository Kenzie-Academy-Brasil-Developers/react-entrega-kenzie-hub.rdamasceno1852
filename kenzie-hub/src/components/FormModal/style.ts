import styled from "styled-components";

import { IoClose } from "react-icons/io5";

export const Overlay = styled.div`
  background-color: rgba(var(--overlay), .5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  background-color: rgba(var(--grey-3), 1);

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;

  margin: 0 auto;

  max-width: 345px;
  width: 90%;
  height: 300px;

  @media (min-width: 768px){
    height: 342px;
    width: 369px;
    border-radius: 4px;
  }

`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;

  background-color: rgba(var(--grey-2), 1);

  width: 100%;
  height: 40px;

  padding: 20px;

  @media (min-width: 768px){
    height: 50px;
    font-size: var(--title1);
  }

  > h3 {
    font-size: var(--headline);
    color: rgba(var(--grey-0), 1);
  }

  > button {
    background-color: transparent;
    border: none;

    color: rgba(var(--grey-1), 1);
    font-size: var(--title-3);
    font-weight: var(--bold);
  }
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    width: 100%;

    margin: 0 auto;
    
> label {
    font-size: var(--label-mobile);
    font-weight: var(--regular);
    color: rgba(var(--grey-0), 1);
    align-self: baseline;
    padding-left: 5%;

@media (min-width: 768px) {
    font-size: var(--headline);
}
}

input {
    width: 90%;
    height: 38px;

    border-radius: 4px;

    padding: 0 13px;
    
    color: rgba(var(--grey-0), 1);
    
    background: rgba(var(--grey-2),1);
    
    border: 1.22px solid rgba(var(--grey-2), 1);
    
font-size: var(--headline);

@media (min-width: 768px) {
    max-width: 329px;
    height: 48px;
    
    padding: 0 16px;
    
    font-size: var(--title2);
    
} 

input::placeholder {
  color: rgba(var(--grey-0),1);
  font-weight: var(--regular);
}

&:hover {
    color: rgba(var(--grey-0),1);
    border: 1.22px solid rgba(var(--grey-0),1);
}
}



.red{
color: rgba(var(--negative),1);
font-size: var(--helper);
font-weight: var(--regular);

align-self: baseline;
padding-left: 5%;

text-decoration: none;
}

select {
width: 90%;
height: 38px;

z-index: 100;

border-radius: 4px;


padding: 0 13px;

color: rgba(var(--grey-0), 1);

background: rgba(var(--grey-2),1);

border: 1.22px solid rgba(var(--grey-2), 1);

font-size: var(--headline);

@media (min-width: 768px) {
    max-width: 329px;
    height: 48px;
    
    padding: 0 16px;
    
    font-size: var(--title2);
    
} 
}

input::placeholder {
    color: rgba(var(--grey-0),1);
    font-weight: var(--regular);
    &:hover {
        color: rgba(var(--grey-0),1);
        border: 1.22px solid rgba(var(--grey-0),1);
    }
}


> button{
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 90%;
    height: 38px;
    
    cursor: pointer;

    padding: 0px 22px;
    border-radius: 4px;
    
    text-align: center;
    
    font-size: var(--headline);
    font-weight: var(--medium);
    color: rgba(var(--white),1);
    letter-spacing: 1px;
    
    background-color: rgba(var(--grey-1),1);
    color: rgba(var(--grey-0), 1);
    
    border: 1.22px solid rgba(var(--color-primary),1);
    
    
    @media (min-width: 768px){
    max-width: 329px;
    height: 48px;
} 

& :hover{
    opacity: .4;
    transition: .5s;
}

}
`;

export const CloseIcon = styled(IoClose)``;
