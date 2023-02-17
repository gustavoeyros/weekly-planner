import {
  TaskContainer,
  Time,
  IssuesContainer,
  Issues,
  IssuesColor,
  DeleteContainer,
  DeleteButton,
} from "./styled";
const SkeletonLoading = () => {
  return (
    <TaskContainer>
      <Time></Time>
      <IssuesContainer>
        <Issues>
          <IssuesColor />
          <span></span>
          <DeleteContainer>
            <DeleteButton></DeleteButton>
          </DeleteContainer>
        </Issues>
      </IssuesContainer>
    </TaskContainer>
  );
};

export default SkeletonLoading;
