import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import Ul from "./element/lists/ul";
import BoardContext from "../../context/boardContext";
import Text from "./element/text";

const BoxStyled = styled.div`
   height: calc(100vh - ${({cutHeight}) => cutHeight + 'px'});
  overflow-y: auto;
  box-shadow: ${({shadow}) => shadow ? `0 -25px 10px -25px rgba(0,0,0,0.45) inset` : ''};
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`

const SidebarBoards = ({cutHeight}) => {

    const boardContext = useContext(BoardContext);

    const boards = boardContext.getBoards();
    // const [boards, setBoards] = useState([]);

    useEffect(() => {
        boardContext.onBoardChanged(boards[0])
    }, [boardContext, boards])

    return (
        <div style={{padding: '20px 20px 35px 0'}}>
            <Text
                content={`ALL BOARDS (${boards.length})`}
                className="board--subtitle"
                fs={'12px'}
                lSpace={'2.4px'}
                color={'var(--medium-grey, #828FA3)'}
            />

            <BoxStyled cutHeight={cutHeight} shadow={boards.length > 10}>
                <Ul items={boards}/>
            </BoxStyled>
        </div>
    )
}

export default SidebarBoards;