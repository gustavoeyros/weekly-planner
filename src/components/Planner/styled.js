import styled from "styled-components";

export const TesteContainer = styled.div`
  //colors
  --monday-color: #ff0024;
  --tuesday-color: #ff8000;
  --wednesday-color: #ffce00;
  --thursday-color: rgba(255, 0, 36, 0.7);
  --friday-color: rgba(255, 128, 0, 0.7);
  --saturday-color: rgba(255, 206, 0, 0.7);
  --sunday-color: rgba(255, 0, 36, 0.5);
`;

export const DaysWeek = styled.div`
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
  font-size: 20px;
  width: 240px;
  height: 33px;
  box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
  border-radius: 9px 9px 0px 0px;
`;

export const Time = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--${({ day }) => day}-color);
  font-weight: 800;
  font-size: 17px;
  width: 85px;
  height: 85px;
  box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
  border-radius: 10px;
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-left: 24px;
  padding-top: 6px;
`;

export const TaskContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 18px;
`;

export const Issues = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    112.83deg,
    rgba(228, 240, 248, 0.42) 0%,
    rgba(255, 255, 255, 0.336) 110.84%
  );
  width: 512px;
  height: 85px;
  box-shadow: 2px 2px 5.5px rgba(0, 0, 0, 0.09);
  backdrop-filter: blur(10.5px);
  border: 1px solid #ffffff;
  border-radius: 15px;
  & span {
    padding-top: 12px;
    padding-bottom: 13px;
    padding-left: 13px;
  }
  & div {
  }
`;

export const IssuesColor = styled.div`
  display: flex;
  background: red;
  width: 20px;
  height: 85px;
  border-radius: 15px 0px 0px 15px;
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff3d1f;
  border: none;
  color: white;
  cursor: pointer;

  font-size: 14px;
  padding: 10px 12px;
  width: 57px;
  height: 25px;
  margin-top: 6px;
  margin-right: 7px;
  margin-bottom: 54px;
  font-weight: 800;
  border-radius: 4px;
`;
