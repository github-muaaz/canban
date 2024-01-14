import styled from "styled-components";

const TaskStyled = styled.div`
  padding: 23px 16px;
  border-radius: 8px;
  background: var(--white, #FFF);
  box-shadow: 0 4px 6px 0 rgba(54, 78, 126, 0.10);
  cursor: pointer;
  gap: 8px;
`

const Task = ({ task }) => {

    const { subtasks } = task;

    return (
        <TaskStyled className={"flex--column"}>
            <h2 className={'my--text f--size--15'}>
                {task.title}
            </h2>

            <span className={'my--text f--size--12 medium--grey'}>
                {`${subtasks.completed} of ${subtasks.completed} subtasks`}
            </span>
        </TaskStyled>
    )
}

export default Task;