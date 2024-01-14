import styled from "styled-components";
import {useState} from "react";
import {boardFake} from "../../utils/fake";
import EmptyBoards from "./emptyBoards";
import Board from "./board";

const BoxStyled = styled.div`
  background: var(--light-grey-light-bg, #F4F7FD);
  position: relative;

  width: calc(100vw - ${({pWidth}) => pWidth});
`

const BoardBox = () => {

    const [board, setBoard] = useState(boardFake);

    const isEmpty = board.columns.filter(c => c.tasks?.length > 0).length <= 0;

    return (
        <BoxStyled className={"board--box"} pWidth={'100px'}>
            {isEmpty ? <EmptyBoards/> : <Board board={board}/>}
        </BoxStyled>
    )
}

export default BoardBox;