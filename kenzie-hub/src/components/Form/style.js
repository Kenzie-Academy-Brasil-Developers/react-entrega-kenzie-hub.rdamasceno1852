import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  padding: 33.69px 0 33.69px 0;

  gap: 17px;

  background-color: rgba(var(--grey-3), 1);

  min-width: 296px;
  /* min-height: 402px; */
  max-width: 369px;
  max-height: 709.96px;

  overflow-y: auto;

  margin: 0 auto;

  @media (min-width: 768px) {
  max-height: 891px;
  }

  h3 {
    font-size: var(--title2);
    color: rgba(var(--grey-0), 1);

    @media (min-width: 768px) {
      font-size: var(--title1);
    }
  }

  label {
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

  p {
    font-size: var(--helper);
    color: rgba(var(--grey-1),1);
    font-weight: var(--regular);

    align-self: baseline;
    padding-left: 5%;

    text-decoration: none;
  }

  a {
    font-size: var(--helper);
    color: rgba(var(--grey-1),1);
    font-weight: var(--regular);

    align-self: baseline;

    text-decoration: none;
    align-self: center;
  }


  .btn{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90%;
    height: 35px;
    
    padding: 0px 22px;
    border-radius: 4px;
    
    text-align: center;

    font-size: var(--headline);
    font-weight: var(--medium);
    color: rgba(var(--white),1);
    letter-spacing: 1px;

    background-color: rgba(var(--color-primary),1);
    
    border: 1.22px solid rgba(var(--color-primary),1);


    @media (min-width: 768px){
        max-width: 329px;
        height: 48px;
        

    }

    & :hover{
      background-color: rgba(var(--color-primary-focus),1);
    }
  }  

  span{
    font-size: var(--helper);
    color: rgba(var(--grey-1),1);
    font-weight: var(--regular);

    /* align-self: baseline; */

    text-decoration: none;
    align-self: center;
  }

  select {
    width: 90%;
    height: 38px;

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

    
`;


