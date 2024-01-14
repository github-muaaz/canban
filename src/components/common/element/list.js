import Icon from "./icon";
import styled from "styled-components";
import GridSvg from "../../../assets/icons/board.svg";
import ActiveGridSvg from "../../../assets/icons/board-active.svg";
import BoardContext from "../../../context/boardContext";
import {useContext} from "react";

const LiStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 0 100px 100px 0;
  padding: 16px 30px 16px 35px;
  overflow: hidden;
  cursor: pointer;
  background: ${({isActive}) => isActive ? 'var(--main-purple, #635FC7)' : ''};

  span {
    color: ${({isActive}) => isActive ? 'var(--white, #FFF)' : 'var(--medium-grey, #828FA3)'};
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`

const List = ({item}) => {

    const boardContext = useContext(BoardContext);

    const isActive = (context, id) => context && context.selectedBoard?.id === id;

    const getIcon = (context, id) => isActive(context, id) ? ActiveGridSvg : GridSvg;

    return (
        <LiStyled
            onClick={() => boardContext.onBoardChanged(item)}
            isActive={isActive(boardContext, item.id)}
        >
            <Icon src={getIcon(boardContext, item.id)}/>

            <span>
                    {item.title}
                </span>
        </LiStyled>
    )
}

export default List;