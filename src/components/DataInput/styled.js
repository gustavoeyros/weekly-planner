import styled from "styled-components";

export const InputStyle = styled.input`
  width: 379px;
  height: 60px;
  border-radius: 50px;
  ${({ hasError }) =>
    hasError === false ? "border 1px solid red;" : "border: 1px solid #ffffff;"}
  outline: none;
  background: transparent;
  font-size: 12px;
  color: #e0e0e0;
  padding-left: 25px;
  padding-top: 23px;
  padding-bottom: 22px;
  &::placeholder {
    color: #e0e0e0;
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
  &[type="date"] {
    text-transform: uppercase;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  & label {
    color: #e0e0e0;
  }
`;
