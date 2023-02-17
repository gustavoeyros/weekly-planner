import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 18px;
  align-items: center;
  position: relative;

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;

export const Time = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: skeleton-loading 1s linear infinite alternate;
  font-weight: 800;

  font-size: 17px;
  width: 85px;
  height: 85px;
  box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
  border-radius: 10px;
  padding: 10px;
`;

export const IssuesContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: left;
  position: relative;
`;

export const Issues = styled.div`
  display: flex;
  align-items: center;
  background: white;
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
`;

export const IssuesColor = styled.div`
  display: flex;
  animation: skeleton-loading 1s linear infinite alternate;
  width: 20px;
  height: 85px;
  border-radius: 15px 0px 0px 15px;
`;

export const DeleteContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: skeleton-loading 1s linear infinite alternate;
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
