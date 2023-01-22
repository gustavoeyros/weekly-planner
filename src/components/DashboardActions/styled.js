import styled from "styled-components";

export const InputActions = styled.div`
  display: flex;
  gap: 3px;
`;

export const InputTask = styled.input`
  background: #ffffff;
  border: 1px solid ${(props) => (props.error === false ? "red" : "#fece00")};
  border-radius: 10px;
  padding: 12px 15.28px;
  width: 391px;
  height: 45px;
  outline: none;
  padding: 12px 15.28px 13px;
`;

export const DaySelect = styled.select`
  width: 240px;
  height: 45px;
  outline: none;
  background: #ffffff;
  border: 1px solid #fece00;
  border-radius: 10px;
  padding: 12px 8px 13px;
`;

export const TimeInput = styled.input`
  width: 120px;
  height: 45px;

  background: #ffffff;
  border: 1px solid ${(props) => (props.error === false ? "red" : "#fece00")};
  border-radius: 10px;
  padding: 13px 8px 12px;
  outline: none;

  &::-webkit-calendar-picker-indicator {
    background: none;
  }
`;

export const ButtonsAction = styled.div`
  display: flex;
  gap: 24px;
`;

export const ButtonActionStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: white;
  background: ${(props) => (props.btnType === "add" ? "#00BA88" : "#FF3D1F")};
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  width: 200px;
  height: 44px;
  cursor: pointer;
  & img {
    padding: 8px;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;

  justify-content: space-between;

  padding: 35px 24px 20px;
`;
