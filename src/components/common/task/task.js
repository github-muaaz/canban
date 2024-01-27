import React, {useContext, useEffect, useState} from "react";
import {Draggable} from "react-beautiful-dnd";
import {toast} from "react-toastify";
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
import config from "../../../config.json";
import {capitalize} from "../../../utils/utils";
import http from "../../../service/httpService";
import List from "../element/lists/list-2";
import Popover from "../element/opover";
import DeleteModalBody from "../deleteModalBody";
import MyThemeContext from "../../../context/myThemeContext";

const TaskStyled = styled.div`
  padding: 23px 16px;
  border-radius: 8px;
  background: var(--white, #FFF);
  box-shadow: 0 4px 6px 0 rgba(54, 78, 126, 0.10);
  cursor: pointer;
  gap: 8px;
  background: ${({bg}) => bg};
`

const Task = ({task, index}) => {

    const modalContext = useContext(ModalContext);
    const themeContext = useContext(MyThemeContext);

    const openModal = () => {
        modalContext.setModalItem(task);
        modalContext.setModal(ModalContainer);
    }

    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <TaskStyled
                    bg={themeContext.getTheme().lightBgColor}
                    className={"flex--column"}
                    onClick={openModal}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Text content={capitalize(task.title)} fs={'15px'} color={themeContext.getTheme().textColor}/>

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
    const themeContext = useContext(MyThemeContext);

    const task = modalContext.getModalItem();

    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
        // backend call
        http.get(config.apiEndpoint + '/task/' + task?.id)
            .then(res => {
                modalContext.setModalItem(res.data.data)
                setStatuses(res.data.data.statuses)
            })
            .catch(err => toast.error(err.response.data.errors[0].msg))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleEdit = () => {
        const apiCall = async (data) => {
            await http.put(`${config.apiEndpoint}/task/${data.id}`, data)
                .then(res => toast.success(res.data.message))
                .catch(err => toast.error(err.response.data.errors[0].msg))
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

    const handleStatusChange = async (e) => {
        const statusId = e.target.value;

        const oldStatusId = task.statusId;

        const newTask = {...task};
        newTask.statusId = statusId;

        modalContext.setModalItem(newTask);

        // backend call
        await http.get(config.apiEndpoint + '/task/' + task.id + '/' + statusId)
            .catch(err => toast.error(err.response.data.errors[0].msg))

        boardContext.updateBoard(newTask, oldStatusId);
    }

    const handleDelete = () => {
        modalContext.setModalItem({})
        modalContext.setModal(<DeleteModalBody
            url={`${config.apiEndpoint}/task/${task.id}`}
            title={'Delete this Task?'}
            warning={'Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed.'}
        />);
    }

    const handleClose = () => modalContext.setModal(null);

    return (
        <React.Fragment>
            <div className={'flex--row align--itm--start justify--s--between g--25'}>
                <Text content={capitalize(task.title)} color={themeContext.getTheme().textColor}/>

                <Popover top={'100%'} right={'100%'} component={<Icon margin={'10px 0 0 0'} icon={MenuSvg}/>}>
                    <List onClick={handleClose}>
                        <Span ws={'nowrap'} content={'Close Modal'}/>
                    </List>

                    <List onClick={handleEdit}>
                        <Span ws={'nowrap'} content={'Edit Task'}/>
                    </List>

                    <List onClick={handleDelete}>
                        <Span color={'var(--red, #EA5555)'} ws={'nowrap'} content={'Delete Delete'}/>
                    </List>
                </Popover>
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