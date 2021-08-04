import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 0px 10px 0px;
  height: 300px;  
  background: #395FA9;
  @media (max-width: 1000px) {
    padding: 10px 10px 10px 10px;
  }
  @media (max-width: 480px){
    padding: 0px 0px 0px 0px;
    height: 484px;
    background: #395FA9;
  }
`;

export const Wrapper = styled.div`
    background: #395FA9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    @media (max-width: 1000px) {
    }
    @media (max-width: 480px) {
      background: #395FA9;
      position: absolute;
    }
`;

export const Aboveft = styled.div`
  height: 280px;
  padding: 10px 10px 0px 10px;
  display: inline;
  justify-content: center;
  margin-left: 0 auto;
  @media (max-width: 1000px) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 480px) {
    background: #395FA9;
    height: 464px;
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;
  }
`;

export const Buttn = styled.div`
  height: 267px;
  width: 50%;
  float: left;
  margin-left: 13%;
  justify-content: center;
  @media (max-width: 480px) {
    width: 100%;
    height: 250px;
    padding: 10px 0px 0px 0px;
    margin: 10px 0px 0px 0px;
    justify-content: center;
    background: #395FA9;
  }
`;

export const Textname = styled.div`
  font-size: 30px;
  font-family: "Montserrat";
  font-weight: bold;
  color: white;
  width: 100%;
  height: 74px;
  margin-top: 50px;
  margin-left: 0px;
  justify-content: center;
  @media (max-width: 480px) {
    background: #395FA9;
    margin: 38px 10px 10px 15px;
    height: 87px;
    width: 85%;
    font-size: 24px;
    text-align: center;
    justify-content: center;
  }
`;

export const Reqst = styled.div`
  background-color: white;
  width: 52%;
  height: 66px;
  border: none;
  margin-top: 10px;
  margin-left: 0px;
  color: #0047ab;
  font-size: 16px;
  font-weight: bold;
  font-family: "Montserrat";
  justify-content: center;
  @media (max-width: 480px) {
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 25px;
    height: 53px;
    width: 85%;
    font-size: 24px; 
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Hads = styled.div`
  width: 30%;
  height: 260px;
  border: none;
  margin-top: 40px;
  justify-content: center;
  margin-left: 65%;
  @media (max-width: 480px) {
    background: #395FA9;
    height: 190px;
    width: 65%;
    margin-top: 294px;
    margin-left: 16%;
    justify-content: center;
  }
`;