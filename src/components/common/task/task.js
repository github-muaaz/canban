import styled from "styled-components";
import React, {useContext, useEffect, useState} from "react";
import ModalContext from "../../../context/modalContext";
import Text from "../element/text";
import Span from "../element/text/span";
import {getCompletedCount} from "../../../utils/utils";
import Icon from "../element/icon/icon-img";
import MenuSvg from "../../../assets/icons/menu-dots.svg";
import SubtaskBox from "../subtaskBox";
import Select from "../element/form/select";
import {changeTaskStatus, getStatuses, getTask} from "../../../utils/fake";
import TaskForm from "./taskForm";
import BoardContext from "../../../context/boardContext";
import {Draggable} from "react-beautiful-dnd";

const TaskStyled = styled.div`
  padding: 23px 16px;
  border-radius: 8px;
  background: var(--white, #FFF);
  box-shadow: 0 4px 6px 0 rgba(54, 78, 126, 0.10);
  cursor: pointer;
  gap: 8px;
`

const Task = ({task, index}) => {

    const modalContext = useContext(ModalContext);

    const {subtasks} = task;

    const completedCount = getCompletedCount(subtasks);

    const openModal = () => {
        modalContext.setModalItem(task);
        modalContext.setModal(ModalContainer);
    }

    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <TaskStyled
                    className={"flex--column"}
                    onClick={openModal}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Text content={task.title} fs={'15px'}/>

                    <Span content={`${completedCount} of ${subtasks.length} subtasks`}/>
                </TaskStyled>
            )}
        </Draggable>
    )
}

const ModalContainer = () => {
    return (
        <ModalBody/>
    )
}

const ModalBody = () => {
    const modalContext = useContext(ModalContext);
    const boardContext = useContext(BoardContext);

    console.log('modal context 2', modalContext)

    const [task, setTask] = useState({});

    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
        // backend call
        const statuses = getStatuses();
        const task = getTask(modalContext.getModalItem().id);

        setStatuses(statuses);
        setTask(task);
    }, []);

    const handleEdit = () => modalContext.setModal(<TaskForm title={'Edit Task'} defaultValues={task}/>);

    const handleStatusChange = e => {
        const statusId = e.target.value;

        const selectedItem = boardContext.getSelectedBoard();

        // call backend
        const boardItems = changeTaskStatus(task.id, statusId);

        boardContext.setBoardItems(boardItems);

        // boardContext?.setSelectedBoard(selectedItem);

        modalContext.setModalItem(task);
    }

    return (
        <React.Fragment>
            <div className={'flex--row align--itm--start justify--s--between g--25'}>
                <Text content={task.title}/>

                <Icon onClick={handleEdit} margin={'10px 0 0 0'} icon={MenuSvg}/>
            </div>

            <Text
                content={task.description}
                fs={'13px'}
                className={'medium--grey font--weight--5 l--height--23'}
            />

            <SubtaskBox subtasks={task.subtasks}/>

            <Select
                label={'Current Status'}
                onChange={handleStatusChange}
                defaultValue={task.status?.id}
                options={statuses}
            />
        </React.Fragment>
    )
}

export default Task;