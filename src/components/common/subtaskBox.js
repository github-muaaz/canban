import styled from "styled-components";
import Span from "./element/text/span";
import Icon from "./element/icon/icon";
import Text from "./element/text";
import {useContext} from "react";
import ModalContext from "../../context/modalContext";
import {getCompletedCount} from "../../utils/utils";

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

const SubtaskBox = ({subtasks}) => {

    return (
        <BoxStyled className={'flex--column'}>
            <Span content={`Subtasks ${getCompletedCount(subtasks)} of ${subtasks.length}`}/>

            <div className={'flex--column g--8'}>
                {subtasks.map(task => <SubtaskRow key={task.id} task={task}/>)}
            </div>
        </BoxStyled>
    )
}

const SubtaskRow = ({task}) => {

    const modalContext = useContext(ModalContext);

    const handleChecked = () => modalContext.onChecked(task.id);

    return (
        <CardStyled className={'flex--row g--16 align--itm--center'}>
            <IconContainerStyled
                onClick={handleChecked}
                checked={task.isCompleted}
            >
                <Icon w={'11px'} h={'11px'} icon={'checked'}/>
            </IconContainerStyled>

            <Text fs={'12px'} content={task.title}/>
        </CardStyled>
    )
}

export default SubtaskBox;