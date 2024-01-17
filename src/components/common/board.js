import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {getBoard} from "../../utils/fake";
import EmptyBoards from "./emptyBoards";
import Column from "./column";
import Button from "./element/button";
import BoardContext from "../../context/boardContext";

const ContainerStyled = styled.div`
  background: var(--light-grey-light-bg, #F4F7FD);
  position: relative;
  overflow-x: auto;
`

const BoxStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: fit-content;
`

const Board = () => {

    const boardContext = useContext(BoardContext);

    const board = boardContext.getBoardItems();

    const isEmpty = board?.columns?.filter(c => c.tasks?.length > 0).length <= 0;

    return (
        <ContainerStyled className={"board--box w--100"}>
            {isEmpty ? <EmptyBoards/> :
                <BoxStyled className={'p--25 h--100 g--25'}>
                    {board?.columns?.map(column =>
                        <Column column={column} key={column.title}/>
                    )}

                    <Button
                        className={'medium--grey f--size--24 m--top--40'}
                        width={'280px'}
                        borderR={'6px'}
                        noHover
                        bg={'var(--lines-light)'}
                    >
                        + New Column
                    </Button>
                </BoxStyled>
            }
        </ContainerStyled>
    )
}

export default Board;