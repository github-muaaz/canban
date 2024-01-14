import styled from "styled-components";

const IconStyled = styled.img`
    width: 16px;
  height: 16px;
  cursor: pointer;
`

const Icon = ({src, ...rest}) => {
    return(
        <IconStyled src={src} {...rest}/>
    )
}

export default Icon;