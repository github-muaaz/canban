import styled from "styled-components";

const BtnStyled = styled.button`
  border: none;
  outline: none;
  display: flex;
  gap: 16px;
  align-items: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  justify-content: center;
  
  border-radius: ${({borderR}) => borderR ? borderR : '24px'};
  padding: ${({padding}) => padding ? padding : '15px 25px'};
  color: ${({color}) => color ? color : 'var(--white, #FFF)'};
  background-color: ${({bg}) => bg ? bg : 'var(--main-purple, #635FC7)'};
  width: ${({width}) => width ? width : 'fit-content'};

  :hover{
    background: ${({noHover}) => noHover ? noHover : 'var(--main-purple-hover, #635FC7)'};
  }
`
const Button = ({children, title, ...rest}) => {

    return <BtnStyled {...rest}>
        {title || children}
    </BtnStyled>
}

export default Button;