import React, {useContext, useEffect, useState} from "react";
import Ul from "./element/ul";
import {boards as fake} from "../../utils/fake";
import BoardContext from "../../context/boardContext";
import styled from "styled-components";

const BoxStyled = styled.div`
  height: 100%;
  overflow-y: auto;
  box-shadow: ${({shadow}) => shadow ? `0 -25px 10px -25px rgba(0,0,0,0.45) inset` : ''};
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`

const SidebarBoards = ({height}) => {

    const boardContext = useContext(BoardContext);

    const [boards, setBoards] = useState(fake);

    useEffect(() => {
        boardContext.onBoardChanged(boards[0])
    }, [])

    return (
        <div style={{padding: '20px 20px 35px 0', }}>
            <h4 className="board--subtitle">ALL BOARDS ({boards.length})</h4>

            <BoxStyled shadow={boards.length > 10}>
                <Ul items={boards}/>
            </BoxStyled>
        </div>
    )
}

export default SidebarBoards;