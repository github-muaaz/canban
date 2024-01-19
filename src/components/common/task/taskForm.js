import Text from "../element/text";
import Input from "../element/form/input";
import Textarea from "../element/form/textarea";
import ListInput from "../element/form/listInput";
import Select from "../element/form/select";
import Button from "../element/button";
import Form from "../element/form/form";
import React, {useContext, useEffect, useState} from "react";
import FormContext from "../../../context/formContext";
import {getBoardStatuses, saveTask} from "../../../utils/fake";
import ModalContext from "../../../context/modalContext";
import BoardContext from "../../../context/boardContext";

const TaskForm = ({boardId, ...rest}) => {

    const modalContext = useContext(ModalContext);
    const boardContext = useContext(BoardContext);

    const handleSubmit = (e, formData) => {

        const data = {
            id: formData.id,
            boardId: boardId,
            title: formData.title,
            statusId: formData.statusId,
            description: formData.description,
            subtasks: formData.subtasks?.filter(st => st.title.trim()) || [],
        }

        // backend call
        saveTask(data)

        modalContext.setModal(null);
        boardContext.updateBoardData();
    }

    return (
        <Form onSubmit={handleSubmit} className={'flex--column g--24'}>
            <FormBody boardId={boardId} {...rest}/>
        </Form>
    )
}

const FormBody = ({defaultValues, title, btnTitle, boardId}) => {

    const [statuses, setStatuses] = useState([]);

    const formContext = useContext(FormContext);
    const task = formContext.getData();

    useEffect(() => {
        formContext.setData(defaultValues);

        // backend call
        const data = getBoardStatuses(boardId);

        setStatuses(data);
    }, []);

    return (
        <React.Fragment>
            <Text content={title}/>

            <Input
                placeholder={'e.g. Take coffee break'}
                name={'title'}
                label={'Title'}
                defaultValue={task?.title}
            />

            <Textarea
                placeholder={'e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'}
                name={'description'}
                label={'Description'}
                defaultValue={task?.description}
            />

            <ListInput
                name={'subtasks'}
                label={'Subtasks'}
                btnLabel={'+ Add New Subtask'}
                placeholder={'e.g. Make coffee'}
                defaultValue={task?.subtasks}
            />

            <Select
                name={'status'}
                label={'Current Status'}
                defaultValue={task?.statusId}
                options={statuses}
            />

            <Button
                title={btnTitle || 'Save'}
                type={'submit'}
                w={'100%'}
            />
        </React.Fragment>
    )
}

export default TaskForm;