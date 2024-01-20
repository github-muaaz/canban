import React, {useContext, useEffect, useState} from "react";
import ModalContext from "../../../context/modalContext";
import BoardContext from "../../../context/boardContext";
import {getBoardStatuses, getCommonCols, saveBoard} from "../../../utils/fake";
import Form from "../element/form/form";
import FormContext from "../../../context/formContext";
import Text from "../element/text";
import Input from "../element/form/input";
import ListInput from "../element/form/listInput";
import Button from "../element/button";

const BoardForm = ({...rest}) => {

    const modalContext = useContext(ModalContext);
    const boardContext = useContext(BoardContext);

    const handleSubmit = (e, formData) => {

        console.log('submit',formData)

        const data = {
            id: formData.id,
            name: formData.name,
            columns: formData?.columns.map(col => col.name),
        }

        // // backend call
        saveBoard(data)

        modalContext.setModal(null);
        boardContext.updateBoards();
    }

    return (
        <Form onSubmit={handleSubmit} className={'flex--column g--24'}>
            <FormBody {...rest}/>
        </Form>
    )
}

const FormBody = ({defaultValues, title, btnTitle}) => {

    const formContext = useContext(FormContext);
    const board = formContext.getData();

    const [columns, setColumns] = useState();

    // console.log('board ',board)

    useEffect(() => {
        console.log('def', defaultValues)

        if (!defaultValues) {
            // backend call
            const data = getCommonCols();
            setColumns(data);

            formContext.setData({columns: data})
        }
        else
            formContext.setData(defaultValues);
    }, []);

    return (
        <React.Fragment>
            <Text content={title}/>

            <Input
                placeholder={'e.g. Web Design'}
                name={'name'}
                label={'Name'}
                defaultValue={board?.name}
            />

            <ListInput
                name={'columns'}
                label={'Columns'}
                inputName={'name'}
                btnLabel={'+ Add New Column'}
                placeholder={'e.g. Processing'}
                defaultValue={board?.columns || columns}
            />

            <Button
                title={btnTitle || 'Save'}
                type={'submit'}
                w={'100%'}
            />
        </React.Fragment>
    )
}

export default BoardForm;