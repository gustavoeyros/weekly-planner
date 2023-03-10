import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 130px;
  box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
  padding-right: 23.3px;
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  background: #000000;
  color: white;
  padding: 10px 24px;
  width: 588px;
  height: 64px;
  border-radius: 0px 14px 15px 0px;

  & h1 {
    font-size: 22px;
    font-weight: 700;
  }
  & p {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const HeaderDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  color: #3b3e45;
  & span:nth-child(1) {
    font-size: 40px;
    font-weight: 700;
  }
`;

export const HeaderTemperature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #222222;

  font-weight: 400;
  font-size: 14px;
  & span:nth-child(2) {
    font-weight: 700;
    font-size: 48px;
  }
  & img {
    width: 34px;
    height: 34px;
    margin-top: 8px;
  }
`;

export const TemperatureContainer = styled.div`
  display: flex;
  gap: 15.22px;
  align-items: center;
`;

export const HeaderLogout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & div {
    align-items: flex-end;
  }
`;

export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  justify-content: center;
  padding-bottom: 15px;
  & img {
    width: 20px;
    height: 20px;
    margin-right: 18.76px;
    margin-bottom: 14px;
  }
  & button {
    border: none;
    background: none;
    cursor: pointer;
    position: absolute;
    margin-top: 14px;
    font-weight: 500;
    font-size: 17px;
  }
`;
