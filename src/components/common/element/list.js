import {useContext} from "react";
import styled from "styled-components";
import BoardContext from "../../../context/boardContext";
import Icon from "./icon/icon";
import Span from "./text/span";

const LiStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 0 100px 100px 0;
  padding: 16px 30px 16px 35px;
  cursor: pointer;
  background: ${({isActive}) => isActive ? 'var(--main-purple, #635FC7)' : ''};

  span {
    color: ${({isActive}) => isActive ? 'var(--white, #FFF)' : 'var(--medium-grey, #828FA3)'};
  }
`

const List = ({item}) => {

    const boardContext = useContext(BoardContext);

    const isActive = (context, id) => context && context.selectedBoard?.id === id;

    const getIcon = (context, id) => isActive(context, id) ? 'board--active' : 'board';

    return (
        <LiStyled
            onClick={() => boardContext.onBoardChanged(item)}
            isActive={isActive(boardContext, item.id)}
        >
            <Icon icon={getIcon(boardContext, item.id)}/>

            <Span content={item.title} fs={'15px'}/>
        </LiStyled>
    )
}

export default List;