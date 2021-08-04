import styled from 'styled-components';

export const Container = styled.div`
  padding: 60px 0px 40px 0px;;
  background: #fff;

  @media (max-width: 1000px) {
    padding: 70px 0px;
  }
  @media (max-width: 419px){
    padding: 10px 0px 0px 0px;
    height: 963px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    /* background: red; */
    padding: 0px 140px 0px 120px;
    @media (max-width: 419px) {
      padding: 0px 0px 0px 0px;
    }
`;

export const Wrapper1 = styled.div`
    display: flex;
    margin-left: 140px;
    margin-top: 30px;
    @media (max-width: 1000px) {
      padding: 20px 20px;
    }
    @media (max-width: 419px) {
      margin-left: 15px;
      margin-top: 5px;
      margin-bottom: 10px;
      padding: 0px 0px 10px 10px;
    }
`;

export const Hide = styled.div`
    @media (max-width: 419px) {
      display: none;
    }
    @media (max-width: 300px) {
    display: block;
    }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 90px;
  width: 220px;
  @media (max-width: 419px) {
    width: 40%;
    height: 260px;
    padding: 0px 10px 10px 0px;
    margin-left: 30px;
    margin-top: 10px;
  }

`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 65px;
  @media (max-width: 419px) {
    width: 30%;
    height: 260px;
    padding: 0px 10px 10px 10px;
    margin-left: 30px;
    margin-top: 10px;
  }
`;


export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 54px;
  width : 280px;
  @media (max-width: 419px) {
    width: 90%;
    height: 180px;
    padding: 0px 0px 10px 30px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 10px;
  }
`;


export const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: -15px;
  width : 300px;
  @media (max-width: 419px) {
    width: 90%;
    height: 300px;
    padding: 10px 0px 10px 10px;
    margin-left: 15px;
    margin-right: 0px;
    margin-top: 5px;
    justify-content: center;
  }
`;

export const Together = styled.div`
  display: none;
  @media (max-width: 419px) {
    display: block;
    width: 90%;
    height: 300px;
    padding: 10px 0px 10px 10px;
    margin-left: 15px;
    margin-right: 0px;
    margin-top: 15px;
    justify-content: center;
  }
  @media (max-width: 300px) {
    display: none;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  @media (max-width: 419px) {
    display: grid;
    height: auto;
    grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 20px;
  }
`;


export const Row1 = styled.div`
  margin-left: 100px;
  @media (max-width: 1000px) {
    padding: 20px 20px;
  }
  @media (max-width: 419px) {
    margin-left: 10px;
    padding: 5px 5px;
    margin-bottom: 10px;
  }
`;


export const Link = styled.a`
  color: #2B2D42;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;

  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
  @media (max-width: 300px) {
    width: 70%;
    }
`;
export const Form = styled.a`
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  width : 330px;
  height: 42px;
  @media (max-width: 419px){
    margin-bottom: 20px;
    font-size: 14px;
    text-decoration: none;
    width : 328px;
    height: 42px;
  }
`;


export const Link1 = styled.a`
  color: #2B2D42;
  margin-bottom: 10px;
  font-size: 20px;
  text-decoration: none;
  font-weight: regular;

  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
  @media (max-width: 419px){
    margin-top: 2px;
  }
`;

export const Link2 = styled.a`
  color: #2B2D42;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  font-weight: regular;
  margin-left: 1px;
  @media (max-width: 419px){
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 13px;
    text-decoration: none;
    font-weight: regular;
    margin-left: 1px;
  }
`;

export const Link3 = styled.a`
  color: #ff9c00;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 16px;
  text-decoration: none;
  font-weight: regular;
  @media (max-width: 419px){
    color: #ff9c00;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 13px;
    text-decoration: none;
    font-weight: regular;
    margin-left: 1px;
  }
`;


export const Title = styled.p`
  font-size: 18px;
  color: #FF8400;
  margin-bottom: 0px;
  font-weight: bold;
  @media (max-width: 419px) {
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;

export const Text = styled.a`
  color: #5F6377;
  margin-bottom: 20px;
  margin-top: 14px;
  font-size: 14px;
  font-weight: medium;
  text-decoration: none;
  @media (max-width: 419px) {
    font-size: 16px;
    margin-top: 20px;
    font-weight: medium;
    text-decoration: none;
  }
`;

