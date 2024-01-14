import styled from "styled-components";

const IconStyled = styled.div`
    width: ${({width}) => width ? width : '16px'};
  height: ${({height}) => height ? height : '16px'};
  cursor: pointer;
`

const Icon = ({icon, ...rest}) => {
    return(
        <IconStyled {...rest}>
            <div className={`icon ${icon} w--100 h--100`} {...rest} />
        </IconStyled>
    )
}

export default Icon;

