import Text from "../element/text";
import Input from "../element/form/input";
import Textarea from "../element/form/textarea";
import ListInput from "../element/form/listInput";
import Select from "../element/form/select";
import Button from "../element/button";
import Form from "../element/form/form";
import React, {useContext, useEffect, useState} from "react";
import FormContext from "../../../context/formContext";
import {getBoardStatuses} from "../../../utils/fake2";

const TaskForm = (props) => {

    return (
        <Form className={'flex--column g--24'}>
            <FormBody {...props}/>
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