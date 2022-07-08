import styled from "styled-components";

export const CardsSC = styled.div``;
export const CardsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(356px, 1fr));
  gap: 47px;
  justify-items: center;
  
`;
export const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 77px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  padding: 30px 30px 25px 30px;
  max-width: 540px;
  @media (max-width: 376px) {
    padding: 15px 10px;
    text-align: center;
  }
`;
export const CardTop = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
  @media (max-width: 376px) {
    flex-direction: column;
    gap: 15px;
  }
`;
export const CardDateBlock = styled.div`
  background: #ecedff;
  border-radius: 11px;
  padding: 10px 20px 15px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const CardDateText = styled.span`
  font-weight: 700;
  font-size: 27px;
  color: #717cff;
`;
export const CardTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 24px / 37px * 100%;
  color: #37474f;
  max-width: 350px;
  @media (max-width: 376px) {
    font-size: 19px;
    width: 297px;
    text-align: center;
  }
`;
export const CardDesc = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px / 28px * 100%;
  color: rgba(55, 71, 79, 0.721569);
  margin-bottom: 30px;
  max-width: 480px;
  @media (max-width: 376px) {
    width: 285px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 30px;
  }
`;
export const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 376px) {
    flex-direction: column;
    gap: 15px;
  }
`;
export const CardLink = styled.a`
  font-weight: 700;
  font-size: 17px;
  line-height: 17px / 17px * 100%;
  color: #717cff;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
export const CardLinkIcon = styled.img``;
export const CardTime = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 16px / 28px * 100%;
  color: #373737;
`;
