import {useContext} from "react";
import styled from "styled-components";
import Span from "../element/text/span";
import Icon from "../element/icon/icon";
import Text from "../element/text";
import BoardContext from "../../../context/boardContext";
import config from "../../../config.json";
import {toast} from "react-toastify";
import http from "../../../service/httpService";
import MyThemeContext from "../../../context/myThemeContext";

const BoxStyled = styled.div`
  gap: 16px;
`

const CardStyled = styled.div`
  padding: 13px;
  border-radius: 4px;
  background: ${({bg}) => bg};
`

const IconContainerStyled = styled.div`
  border-radius: 2px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  background: ${({checked, bg}) => checked ? 'var(--main-purple, #635FC7)' : bg};
  padding: 2.5px;
  width: 18px;
  height: 18px;
  position: relative;
  cursor: pointer;
`

const SubtaskBox = ({task, setTask}) => {

    const themeContext = useContext(MyThemeContext);

    if (task.subtasks?.length <= 0)
        return;

    return (
        <BoxStyled className={'flex--column'}>
            <Span
                color={themeContext.getTheme().textColor2}
                content={`Subtasks ${(task.completedSubtasks)} of ${task.subtasks?.length}`}
            />

            <div className={'flex--column g--8'}>
                {task.subtasks?.map(subtask => <SubtaskRow key={subtask.id} subtask={subtask} task={task} setTask={setTask}/>)}
            </div>
        </BoxStyled>
    )
}

const SubtaskRow = ({subtask, task, setTask}) => {

    const boardContext = useContext(BoardContext);
    const themeContext = useContext(MyThemeContext);

    const handleChecked = () => {
        // backend call
        http.get(`${config.apiEndpoint}/subtask/${subtask.id}/${!subtask.isCompleted}`)
            .catch(err => toast.error(err.message))

        const boardColumns = [...boardContext.getBoardColumns()];

        const tempTask = boardColumns
            .find(bc => bc.id === task.statusId)
            .tasks
            .find(t => t.id === task.id);

        if(subtask.isCompleted){
            subtask.isCompleted = false;
            tempTask.completedSubtasks = tempTask.completedSubtasks - 1;
            task.completedSubtasks = task.completedSubtasks - 1;
        }
        else{
            subtask.isCompleted = true;
            tempTask.completedSubtasks = tempTask.completedSubtasks + 1;
            task.completedSubtasks = task.completedSubtasks + 1;
        }

        setTask(task);

        boardContext.setBoardColumns(boardColumns);
    }

    return (
        <CardStyled
            bg={themeContext.getTheme().darkBgColor}
            className={'flex--row g--16 align--itm--center'}
        >
            <IconContainerStyled
                onClick={handleChecked}
                checked={subtask.isCompleted}
                bg={themeContext.getTheme().lightBgColor}
            >
                <Icon w={'11px'} h={'11px'} icon={themeContext.getTheme().name === 'dark' ? 'checked-dark' : 'checked'}/>
            </IconContainerStyled>

            <Text
                fs={'12px'}
                content={subtask.title}
                highlight={subtask.isCompleted}
                color={subtask.isCompleted
                    ? 'var(--Medium-Grey, #828FA3)'
                    : themeContext.getTheme().textColor}
            />
        </CardStyled>
    )
}

export default SubtaskBox;