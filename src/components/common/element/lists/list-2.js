import styled from "styled-components";

const LiStyled = styled.li`
  cursor: pointer;
  padding: 10px 20px;
  list-style: none;
  display: ${({display}) => display ? display : 'unset'};
`

const List = ({onClick, children}) => {

    return (
        <LiStyled onClick={onClick}>
            {children}
        </LiStyled>
    )
}

export default List;