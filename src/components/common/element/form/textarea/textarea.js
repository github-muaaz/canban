import styled from "styled-components";
import React, {useContext} from "react";
import FormContext from "../../../../../context/formContext";
import Label from "../label";
import MyThemeContext from "../../../../../context/myThemeContext";

const TextareaStyled = styled.textarea`
  border-radius: 4px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  background: ${({bg}) => bg};
  color: ${({color}) => color};
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
    const themeContext = useContext(MyThemeContext);

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

            <TextareaStyled
                id={name}
                name={name}
                {...rest}
                onChange={handleChange}
                bg={themeContext.getTheme().lightBgColor}
                color={themeContext.getTheme().textColor2}
            />
        </div>
    )
}

export default Textarea;