import styled from 'styled-components';

export const Container = styled.div`
  background: #395FA9;
  margin-bottom: 0px;
  height: 243.29px;  
  background-color: #395FA9;
  @media (max-width: 1000px) {
  }
  @media (max-width: 480px) {
   display: none;
  }
`;

export const Wrapper = styled.div`
    background-color: #395FA9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1600px;
    margin: 0 auto;
    @media (max-width: 480px) {
      display: none;
     }
`;


export const Images = styled.a`
  color: #2B2D42;
  margin: 0;
  height: 243.29px;
  border: none;
  justify-content: center;
  @media (max-width: 480px) {
    display: none;
   }
`;
