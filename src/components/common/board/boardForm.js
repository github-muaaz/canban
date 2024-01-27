import React, {useContext, useEffect, useState} from "react";
import ModalContext from "../../../context/modalContext";
import Form from "../element/form/form";
import FormContext from "../../../context/formContext";
import Text from "../element/text";
import Input from "../element/form/input";
import ListInput from "../element/form/listInput";
import Button from "../element/button";
import config from "../../../config.json";
import {toast} from "react-toastify";
import http from "../../../service/httpService";
import Icon from "../element/icon/icon";

const BoardForm = ({apiCall, ...rest}) => {

    const modalContext = useContext(ModalContext);

    const validate = (data) => {
        const errors = {};
        if (!data.name?.trim())
            errors.name = 'CANNOT BE EMPTY';

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
            name: formData.name,
            columns: formData?.columns?.map(col => col?.name?.toLowerCase()),
        }

        // // backend call
        apiCall(data);

        modalContext.setModal(null);
    }

    return (
        <Form onSubmit={handleSubmit} className={'flex--column g--24'}>
            <FormBody {...rest}/>
        </Form>
    )
}

const FormBody = ({defaultValues, title, btnTitle}) => {

    const formContext = useContext(FormContext);
    const modalContext = useContext(ModalContext);
    const board = formContext.getData();
    const errors = formContext.getErrors();

    const [columns, setColumns] = useState();

    useEffect( () => {
        if (!defaultValues) {
            // backend call
             http.get(`${config.apiEndpoint}/column/common`)
                .then(res => {
                    setColumns(res.data.data);
                    formContext.setData({columns: res.data.data});
                })
                .catch(err => toast.error(err.response.data.errors[0].msg))
        }
        else
            formContext.setData(defaultValues);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>
            <div className={'flex--row justify--s--between align--itm--center'}>
                <Text content={title}/>

                <Icon onClick={() => modalContext.setModal(null)} icon={'close'}/>
            </div>

            <Input
                placeholder={'e.g. Web Design'}
                name={'name'}
                label={'Name'}
                defaultValue={board?.name}
                error={errors?.name}
            />

            <ListInput
                name={'columns'}
                label={'Columns'}
                inputName={'name'}
                btnLabel={'+ Add New Column'}
                placeholder={'e.g. Processing'}
                defaultValue={board?.columns || columns}
                error={errors?.columns}
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