import {useContext} from "react";
import styled from "styled-components";
import BoardContext from "../../../../context/boardContext";
import Icon from "../icon/icon";
import Span from "../text/span";
import {capitalizeAll} from "../../../../utils/utils";
import MyThemeContext from "../../../../context/myThemeContext";
import SmallModalContext from "../../../../context/smallModalContext";

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
  
  :hover{
    background: ${({hoverBg}) => hoverBg};
    
    span{
      color: ${({hoverColor}) => hoverColor};
    }
    
    .icon{
      background: ${({hoverColor}) => hoverColor};
    }
  }
`

const List = ({item}) => {

    const boardContext = useContext(BoardContext);
    const smallModalContext = useContext(SmallModalContext);
    const themeContext = useContext(MyThemeContext);

    const isActive = (context, id) => context && context.getSelectedBoard()?.id === id;

    const getIcon = (context, id) => isActive(context, id) ? 'board--active' : 'board';

    const handleClick = () => {
        boardContext.onBoardChanged(item);
        smallModalContext.setModal(null);
    }

    return (
        <LiStyled
            onClick={handleClick}
            isActive={isActive(boardContext, item.id)}
            hoverBg={themeContext.getTheme().darkBgColor}
            hoverColor={themeContext.getTheme().btnHoverColor}
        >
            <Icon icon={getIcon(boardContext, item.id)}/>

            <Span content={capitalizeAll(item.name)} fs={'15px'}/>
        </LiStyled>
    )
}

export default List;