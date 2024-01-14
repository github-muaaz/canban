import styled from "styled-components";

const GridStyled = styled.div`
    display: grid;
  background-color: green;
  width: 100%;
  padding: 40px;
  
`

const Grid = ({children}) => {

    return(
        <GridStyled>
            {children}
        </GridStyled>
    )
}

export default Grid;