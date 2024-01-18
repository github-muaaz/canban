import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {getBoard, getStatus} from "../../utils/fake";
import EmptyBoards from "./emptyBoards";
import Column from "./column";
import Button from "./element/button";
import BoardContext from "../../context/boardContext";
import {DragDropContext} from "react-beautiful-dnd";

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

    const board = boardContext.getBoardTasks();

    const isEmpty = board?.columns?.filter(c => c.tasks?.length > 0).length <= 0;
    
    const onDrag = (result) => {
        if (!result.destination) return;

        const {source, destination} = result;

        const {columns} = board;

        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = columns.findIndex(c => c.id === source.droppableId);
            const destinationColIndex = columns.findIndex(c => c.id === destination.droppableId);

            const sourceCol = columns[sourceColIndex];
            const destinationCol = columns[destinationColIndex];

            const sourceTask = [...sourceCol.tasks];
            const destinationTask = [...destinationCol.tasks];

            const [removed] = sourceTask.splice(source.index, 1);

            removed.status = getStatus(destinationCol.id);

            destinationTask.splice(destination.index, 0, removed);

            columns[sourceColIndex].tasks = sourceTask;
            columns[destinationColIndex].tasks = destinationTask;

            boardContext.setBoardTasks(board)
        }
    }

    return (
        <ContainerStyled className={"board--box w--100"}>
            {isEmpty ? <EmptyBoards/> :
                <BoxStyled className={'p--25 h--100 g--25'}>
                    <DragDropContext onDragEnd={onDrag}>
                        {board?.columns?.map((column, index) =>
                            <Column column={column} key={column.title} index={index}/>
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
                    </DragDropContext>
                </BoxStyled>
            }
        </ContainerStyled>
    )
}

export default Board;