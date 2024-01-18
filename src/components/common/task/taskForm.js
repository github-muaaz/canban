import Text from "../element/text";
import Input from "../element/form/input";
import Textarea from "../element/form/textarea";
import ListInput from "../element/form/listInput";
import Select from "../element/form/select";
import Button from "../element/button";
import Form from "../element/form/form";
import React, {useContext, useEffect} from "react";
import {getStatuses} from "../../../utils/fake";
import FormContext from "../../../context/formContext";

const TaskForm = (props) => {

    return (
        <Form className={'flex--column g--24'}>
            <FormBody {...props}/>
        </Form>
    )
}

const FormBody = ({defaultValues, title}) => {

    const statuses = getStatuses();

    const formContext = useContext(FormContext);

    const task = formContext.getData();

    useEffect(() => {
        formContext.setData(defaultValues);
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
                defaultValue={task?.status?.id}
                options={statuses}
            />

            <Button
                title={'Create Task'}
                type={'submit'}
            />
        </React.Fragment>
    )
}

export default TaskForm;