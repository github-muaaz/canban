import styled from "styled-components";
import React, {useContext} from "react";
import ModalContext from "../../context/modalContext";
import Text from "./element/text";
import Span from "./element/text/span";
import {getCompletedCount} from "../../utils/utils";
import Modal from "./element/modal/modal";
import Icon from "./element/icon/icon-img";
import MenuSvg from "../../assets/icons/menu-dots.svg";
import SubtaskBox from "./subtaskBox";
import Select from "./element/form/select";
import {getTask} from "../../utils/fake";

const TaskStyled = styled.div`
  padding: 23px 16px;
  border-radius: 8px;
  background: var(--white, #FFF);
  box-shadow: 0 4px 6px 0 rgba(54, 78, 126, 0.10);
  cursor: pointer;
  gap: 8px;
`

const Task = ({task}) => {

    const modalContext = useContext(ModalContext);

    const {subtasks} = task;

    const completedCount = getCompletedCount(subtasks);

    const openModal = () => {
        modalContext.openModal((<ModalBody/>), task);
    }

    return (
        <React.Fragment>
            <TaskStyled className={"flex--column"} onClick={openModal}>
                <Text content={task.title} fs={'15px'}/>

                <Span content={`${completedCount} of ${subtasks.length} subtasks`}/>
            </TaskStyled>
        </React.Fragment>
    )
}

const ModalBody = () => {
    const modalContext = useContext(ModalContext);

    const task = getTask(modalContext.getModalItem().id);

    return(
        task &&
        <Modal>
            <div className={'flex--row align--itm--start justify--s--between g--25'}>
                <Text content={task.title}/>

                <Icon onClick={modalContext.closeModal} margin={'10px 0 0 0'} icon={MenuSvg}/>
            </div>

            <Text
                content={task.description}
                fs={'13px'}
                className={'medium--grey font--weight--5 l--height--23'}
            />

            <SubtaskBox subtasks={task.subtasks}/>

            <Select status={task.status}/>
        </Modal>
    )
}

export default Task;