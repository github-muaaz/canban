import styled from "styled-components";
import Span from "./element/text/span";
import Icon from "./element/icon/icon";
import Text from "./element/text";
import {useContext} from "react";
import ModalContext from "../../context/modalContext";
import {setSubtaskStatus} from "../../utils/fake2";
import BoardContext from "../../context/boardContext";

const BoxStyled = styled.div`
  gap: 16px;
`

const CardStyled = styled.div`
  padding: 13px;
  border-radius: 4px;
  background: var(--light-grey-light-bg, #F4F7FD);
`

const IconContainerStyled = styled.div`
  border-radius: 2px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  background: ${({checked}) => checked ? 'var(--main-purple, #635FC7)' : 'var(--White, #FFF)'};
  padding: 2.5px;
  width: 18px;
  height: 18px;
  position: relative;
  cursor: pointer;
`

const SubtaskBox = ({task, setTask}) => {

    if (task.subtasks?.length <= 0)
        return;

    console.log('task', task)

    return (
        <BoxStyled className={'flex--column'}>
            <Span content={`Subtasks ${(task.completedSubtasks)} of ${task.subtasks?.length}`}/>

            <div className={'flex--column g--8'}>
                {task.subtasks?.map(subtask => <SubtaskRow key={subtask.id} subtask={subtask} task={task} setTask={setTask}/>)}
            </div>
        </BoxStyled>
    )
}

const SubtaskRow = ({subtask, task, setTask}) => {

    // const modalContext = useContext(ModalContext);
    const boardContext = useContext(BoardContext);

    const handleChecked = () => {
        // backend call
        setSubtaskStatus(subtask.id, subtask.isCompleted);

        const boardColumns = [...boardContext.getBoardColumns()];

        console.log(boardColumns)

        const tempTask = boardColumns
            .find(bc => bc.id === task.statusId)
            .tasks
            .find(t => t.id === task.id);

        if(subtask.isCompleted){
            subtask.isCompleted = false;
            tempTask.completedSubtasks = tempTask.completedSubtasks - 1;
        }
        else{
            subtask.isCompleted = true;
            tempTask.completedSubtasks = tempTask.completedSubtasks + 1;
        }

        boardContext.setBoardColumns(boardColumns);

        setTask({...task, ...tempTask});

        // modalContext.setModalItem({...task, ...tempTask})
    }

    return (
        <CardStyled className={'flex--row g--16 align--itm--center'}>
            <IconContainerStyled
                onClick={handleChecked}
                checked={subtask.isCompleted}
            >
                <Icon w={'11px'} h={'11px'} icon={'checked'}/>
            </IconContainerStyled>

            <Text fs={'12px'} content={subtask.title}/>
        </CardStyled>
    )
}

export default SubtaskBox;