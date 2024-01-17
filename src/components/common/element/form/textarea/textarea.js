import styled from "styled-components";
import React, {useContext} from "react";
import FormContext from "../../../../../context/formContext";
import Label from "../label";

const TextareaStyled = styled.textarea`
  border-radius: 4px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  background: var(--white, #FFF);
  padding: 8px 16px;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  outline: none;
  width: 100%;
  min-height: 112px;
`

const Textarea = ({name, label, ...rest}) => {

    const formContext = useContext(FormContext);

    const handleChange = e => {
        const data = {
            [name]: e.target.value
        }
        formContext.setData({...data});
    }

    return(
        <div className={'flex--column g--8'}>
            {label &&
                <Label title={label} htmlFor={name}/>
            }

            <TextareaStyled id={name} name={name} {...rest} onChange={handleChange}/>
        </div>
    )
}

export default Textarea;