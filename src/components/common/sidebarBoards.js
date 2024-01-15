import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import Ul from "./element/ul";
import {boards as fake} from "../../utils/fake";
import BoardContext from "../../context/boardContext";
import Text from "./element/text";

const BoxStyled = styled.div`
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
            <Text
                content={`ALL BOARDS ${boards.length}`}
                className="board--subtitle"
                fs={'12px'}
                lSpace={'2.4px'}
                color={'var(--medium-grey, #828FA3)'}
            />

            <BoxStyled className={'h--100'} shadow={boards.length > 10}>
                <Ul items={boards}/>
            </BoxStyled>
        </div>
    )
}

export default SidebarBoards;