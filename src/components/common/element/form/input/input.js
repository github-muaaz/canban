import React, {useContext} from "react";
import styled from "styled-components";
import FormContext from "../../../../../context/formContext";
import Label from "../label";
import MyThemeContext from "../../../../../context/myThemeContext";

const InputStyled = styled.input`
  background: ${({bg}) => bg};
  color: ${({color}) => color};
  border-radius: 4px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  padding: 8px 16px;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  outline: none;
  min-width: 100%;
`

const Input = ({name, label, onChange, hidden, ...rest}) => {

    const formContext = useContext(FormContext);
    const themeContext = useContext(MyThemeContext);

    const handleChange = e => {
        if (onChange)
            onChange(e);
        else {
            const data = {
                [name]: e.target.value
            }
            formContext.setData(data);
        }
    }

    return (
        <React.Fragment>
            {
                hidden ?
                    <InputStyled id={name} name={name} hidden={hidden} {...rest} onChange={handleChange}/>
                    :
                    <div className={'flex--column g--8'}>
                        {label &&
                            <Label title={label} htmlFor={name}/>
                        }

                        <InputStyled
                            id={name}
                            name={name}
                            {...rest}
                            bg={themeContext.getTheme().lightBgColor}
                            color={themeContext.getTheme().textColor2}
                            onChange={handleChange}
                        />
                    </div>
            }
        </React.Fragment>
    )
}

export default Input;