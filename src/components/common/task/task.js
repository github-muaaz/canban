import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import ModalContext from "../../../context/modalContext";
import Text from "../element/text";
import Span from "../element/text/span";
import Icon from "../element/icon/icon-img";
import MenuSvg from "../../../assets/icons/menu-dots.svg";
import SubtaskBox from "./subtaskBox";
import Select from "../element/form/select";
import TaskForm from "./taskForm";
import BoardContext from "../../../context/boardContext";
import {Draggable} from "react-beautiful-dnd";
import config from "../../../config.json";
import {toast} from "react-toastify";
import {capitalize} from "../../../utils/utils";
import http from "../../../service/httpService";

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
                    <Text content={capitalize(task.title)} fs={'15px'}/>

                    {
                        task.subtasksLength <= 0
                            ? <Span content={`No subtasks`}/>
                            : <Span content={`${task.completedSubtasks} of ${task.subtasksLength} subtasks`}/>
                    }
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

    const task = modalContext.getModalItem();

    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
        // backend call
        http.get(config.apiEndpoint + '/task/' + task?.id)
            .then(res => {
                modalContext.setModalItem(res.data.data)
                setStatuses(res.data.data.statuses)
            })
            .catch(err => toast.error(err.message))
    }, []);

    const handleEdit = () => {
        const apiCall = (data) => {
            http.put(`${config.apiEndpoint}/task/${data.id}`, data)
                .then(res => toast.info(res.message))
                .catch(err => toast.error(err.message))
        };

        modalContext.setModal(
            <TaskForm
                title={'Edit Task'}
                btnTitle={'Save Changes'}
                defaultValues={task}
                board={boardContext.getSelectedBoard()}
                apiCall={apiCall}
            />
        );
    }

    const handleStatusChange = e => {
        const statusId = e.target.value;

        const oldStatusId = task.statusId;

        const newTask = {...task};
        newTask.statusId = statusId;

        modalContext.setModalItem(newTask);

        // backend call
        http.get(config.apiEndpoint + '/task/' + task.id + '/' + statusId)
            .catch(err => toast.error(err.message))

        boardContext.updateBoard(newTask, oldStatusId);
    }

    return (
        <React.Fragment>
            <div className={'flex--row align--itm--start justify--s--between g--25'}>
                <Text content={capitalize(task.title)}/>

                <Icon onClick={handleEdit} margin={'10px 0 0 0'} icon={MenuSvg}/>
            </div>

            <Text
                content={capitalize(task.description)}
                fs={'13px'}
                className={'medium--grey font--weight--5 l--height--23'}
            />

            <SubtaskBox task={task} setTask={modalContext.setModalItem}/>

            <Select
                label={'Current Status'}
                onChange={handleStatusChange}
                defaultValue={task.statusId}
                options={statuses}
            />
        </React.Fragment>
    )
}

export default Task;