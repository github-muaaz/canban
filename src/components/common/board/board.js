import React, {useContext} from "react";
import styled from "styled-components";
import EmptyBoards from "./emptyBoards";
import Column from "../column";
import Button from "../element/button";
import BoardContext from "../../../context/boardContext";
import {DragDropContext} from "react-beautiful-dnd";
import {setTaskStatus} from "../../../utils/fake";
import NoSelectedBoard from "./noSelectedBoard";

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

    const boardColumns = boardContext.getBoardColumns();

    const isBoardEmpty = boardColumns?.filter(c => c.tasks?.length > 0).length <= 0;

    const noSelectedBoard = boardContext.getSelectedBoard();

    const onDrag = (result) => {
        if (!result.destination) return;

        const {source, destination, draggableId} = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = boardColumns.findIndex(c => c.id === source.droppableId);
            const destinationColIndex = boardColumns.findIndex(c => c.id === destination.droppableId);

            setTaskStatus(draggableId, destination.droppableId);

            const sourceCol = boardColumns[sourceColIndex];
            const destinationCol = boardColumns[destinationColIndex];

            const sourceTask = [...sourceCol.tasks];
            const destinationTask = [...destinationCol.tasks];

            const [removed] = sourceTask.splice(source.index, 1);

            destinationTask.splice(destination.index, 0, removed);

            boardColumns[sourceColIndex].tasks = sourceTask;
            boardColumns[destinationColIndex].tasks = destinationTask;

            boardContext.setBoardColumns(boardColumns)
        }
    }

    return (
        <ContainerStyled className={"board--box w--100"}>
            {!noSelectedBoard
                ? <NoSelectedBoard/>
                : (isBoardEmpty)
                    ? <EmptyBoards/>
                    : <BoxStyled className={'p--25 h--100 g--25'}>
                        <DragDropContext onDragEnd={onDrag}>
                            {boardColumns?.map((column, index) =>
                                <Column column={column} key={column.name} index={index}/>
                            )}

                            <Button
                                className={'medium--grey f--size--24 m--top--40'}
                                w={'280px'}
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