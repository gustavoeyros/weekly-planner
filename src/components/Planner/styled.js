import styled from "styled-components";

const Teste = styled.div``;

export const DaysWeek = styled.div`
  //colors
  --monday-color: #ff0024;
  --tuesday-color: #ff8000;
  --wednesday-color: #ffce00;
  --thursday-color: rgba(255, 0, 36, 0.7);
  --friday-color: rgba(255, 128, 0, 0.7);
  --saturday-color: rgba(255, 206, 0, 0.7);
  --sunday-color: rgba(255, 0, 36, 0.5);

  display: flex;
  justify-content: center;
  gap: 3px;
`;

export const StyledColors = styled.div``;

export const DayOfWeek = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--${({ day }) => day}-color);
  font-weight: 600;
  padding-left: 7px;
  width: 240px;
  height: 33px;
  box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
  border-radius: 9px 9px 0px 0px;
`;
