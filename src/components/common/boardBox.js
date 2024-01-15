import {useState} from "react";
import styled from "styled-components";
import {boardFake} from "../../utils/fake";
import EmptyBoards from "./emptyBoards";
import Board from "./board";

const BoxStyled = styled.div`
  background: var(--light-grey-light-bg, #F4F7FD);
  position: relative;
  overflow-x: auto;
`

const BoardBox = () => {

    const [board, setBoard] = useState(boardFake);

    const isEmpty = board.columns.filter(c => c.tasks?.length > 0).length <= 0;

    return (
        <BoxStyled className={"board--box w--100"}>
            {isEmpty ? <EmptyBoards/> : <Board board={board}/>}
        </BoxStyled>
    )
}

export default BoardBox;