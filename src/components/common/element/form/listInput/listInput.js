import React, {useContext} from "react";
import styled from "styled-components";
import Span from "../../text/span";
import Input from "../input";
import Button from "../../button";
import {v4 as uuid} from "uuid";
import FormContext from "../../../../../context/formContext";
import Icon from "../../icon/icon";
import Label from "../label";

const ContainerStyled = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
`

const ListInput = ({name, label, ...rest}) => {

    return (
        <div className={'flex--column g--8'}>
            {label &&
                <Label title={label} htmlFor={name}/>
            }

            <ListBody name={name} {...rest}/>
        </div>
    )
}

const ListBody = ({name, btnLabel, inputName = 'value', placeholder, defaultValue}) => {

    const formContext = useContext(FormContext);

    const formData = formContext.getData();

    const items = defaultValue ||  (formData ? formData[name] : null);

    const getTemplate = () => ({
        id: uuid(),
        [inputName]: '',
    });

    const handleAdd = () => {
        const data = formContext.getData();

        const items = data[name] || [];

        data[name] = [...items, getTemplate()];

        formContext.setData({...data});
    }

    const handleRemove = id => {
        const data = {...formData};

        const items = data[name];

        data[name] = items.filter(item => item.id !== id);

        formContext.setData({...data});
    }

    const handleChange = (e, id) => {
        const data = {...formData};

        const items = data[name];

        items.forEach(i => {
            if (i.id === id)
                i[inputName] = e.target.value;
        })

        data[name] = items;

        formContext.setData({...data});
    }

    return (
        <div className={'flex--column g--12'}>
            {
                items && items?.map(item => {
                    return (
                        <ContainerStyled key={item.id}>

                            <div className={'w--100'}>
                                <Input
                                    placeholder={placeholder}
                                    onChange={e => handleChange(e, item.id)}
                                    defaultValue={item[inputName]}
                                />
                            </div>

                            <Icon icon={'close'} onClick={() => handleRemove(item.id)}/>
                        </ContainerStyled>
                    )
                })
            }

            <Button
                type={'button'}
                bg={'#635FC71A'}
                w={'100%'}
                onClick={handleAdd}
                padding={'8px 20px'}
                noHover={'#635FC740'}
            >
                <Span
                    content={btnLabel}
                    fs={'13px'}
                    className={'l--height--23'}
                    color={'var(--main-purple, #635FC7)'}
                />
            </Button>
        </div>
    )
}

export default ListInput;