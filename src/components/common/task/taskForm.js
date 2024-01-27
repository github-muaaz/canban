import Text from "../element/text";
import Input from "../element/form/input";
import Textarea from "../element/form/textarea";
import ListInput from "../element/form/listInput";
import Select from "../element/form/select";
import Button from "../element/button";
import Form from "../element/form/form";
import React, {useContext, useEffect, useState} from "react";
import FormContext from "../../../context/formContext";
import ModalContext from "../../../context/modalContext";
import Icon from "../element/icon/icon";

const TaskForm = ({board, apiCall, ...rest}) => {

    const modalContext = useContext(ModalContext);

    const validate = (data) => {
        const errors = {};
        if (!data.title?.trim())
            errors.title = 'CANNOT BE EMPTY';

        return errors;
    }

    const handleSubmit = (e, formData, setErrors) => {

        const errors = validate(formData)

        if (!(errors && Object.keys(errors).length === 0)){
            setErrors(errors);
            return;
        }

        const data = {
            id: formData.id,
            boardId: board.id,
            title: formData.title?.toLowerCase().trim(),
            statusId: formData.statusId,
            description: formData.description?.trim(),
            subtasks: formData.subtasks?.filter(st => st.title?.trim()) || [],
        }

        // backend call
        apiCall(data);

        modalContext.setModal(null);
    }

    return (
        <Form onSubmit={handleSubmit} className={'flex--column g--24'}>
            <FormBody board={board} {...rest}/>
        </Form>
    )
}

const FormBody = ({defaultValues, title, btnTitle, board}) => {

    const [statuses, setStatuses] = useState([]);
    const modalContext = useContext(ModalContext);

    const formContext = useContext(FormContext);
    const task = formContext.getData();
    const errors = formContext.getErrors();

    useEffect(() => {
        formContext.setData(defaultValues);

        if (defaultValues)
            setStatuses(defaultValues.statuses)
        else
            setStatuses(board.columns)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>
            <div className={'flex--row justify--s--between align--itm--center'}>
                <Text content={title}/>

                <Icon onClick={() => modalContext.setModal(null)} icon={'close'}/>
            </div>

            <Input
                placeholder={'e.g. Take coffee break'}
                name={'title'}
                label={'Title'}
                defaultValue={task?.title}
                error={errors?.title}
            />

            <Textarea
                placeholder={'e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'}
                name={'description'}
                label={'Description'}
                defaultValue={task?.description}
                error={errors?.description}
            />

            <ListInput
                name={'subtasks'}
                label={'Subtasks'}
                inputName={'title'}
                btnLabel={'+ Add New Subtask'}
                placeholder={'e.g. Make coffee'}
                defaultValue={task?.subtasks}
                error={errors?.subtasks}
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