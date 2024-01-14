import styled from "styled-components";

const FlexBoxStyled = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 25px;
  padding: 25px;
  background-color: red;
  height: 100%;
`

const FlexBox = ({children}) => {

    return (<FlexBoxStyled>
            {children}
        </FlexBoxStyled>)
}

export default FlexBox;