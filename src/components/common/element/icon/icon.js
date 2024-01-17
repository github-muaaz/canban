import styled from "styled-components";

const IconStyled = styled.div`
    width: ${({w}) => w ? w : '16px'};
  height: ${({h}) => h ? h : '16px'};
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

