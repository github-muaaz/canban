import styled from "styled-components";

const IconStyled = styled.img`
    width: ${({width}) => width ? width : '16px'};
  height: ${({height}) => height ? height : '16px'};
  margin: ${({margin}) => margin ? margin : '0'};
  cursor: pointer;
`

const Icon = ({icon, ...rest}) => {
    return(
        <IconStyled src={icon} {...rest}/>
    )
}

export default Icon;
