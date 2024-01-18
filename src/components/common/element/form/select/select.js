import styled from "styled-components";
import React, {useContext} from "react";
import DropdownSvg from "../../../../../assets/icons/drop-down.svg";
import FormContext from "../../../../../context/formContext";
import Label from "../label";

const SelectStyled = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(${({icon}) => icon}) white no-repeat 98.5% !important;
  background: url(${({icon}) => icon}) white no-repeat calc(100% - 10px) !important;
  border-radius: 4px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
  outline: none;

  ::-ms-expand {
    display: none;
  }
`

const Select = ({name, label, options: old, onChange, ...rest}) => {

    const formContext = useContext(FormContext);

    const options = old?.sort((a, b) => a.order - b.order);

    const handleChange = (e) => {
        const data = {
            [name]: options.find(option => option.id === e.target.value)
        }

        formContext.setData(data);
    }

    return(
        <div className={'flex--column g--8'}>
            {label &&
                <Label title={label} htmlFor={name}/>
            }

            <SelectStyled
                name={name}
                icon={DropdownSvg}
                onChange={onChange || handleChange}
                {...rest}
            >
                {options.map(option =>
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                )}
            </SelectStyled>
        </div>
    )
}

export default Select;