import styled from "styled-components";

export const InfoSC = styled.div`
  padding-top: 75px;
  margin-bottom: 100px;
`;
export const InfoContent = styled.div`
  text-align: center;
`;
export const InfoTitle = styled.h1`
  font-weight: 700;
  font-size: 37px;
  line-height: 37px / 54px * 100%;
  color: #373737;
  margin-bottom: 25px;
  @media(max-width: 426px){
    font-size: 30px;
  }
  `;
export const InfoDesc = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 22px / 38px * 100%;
  color: #7d7d7d;
  max-width: 949px;
  margin: 0 auto;
  @media(max-width: 426px){
    font-size: 16px;
  }
`;
