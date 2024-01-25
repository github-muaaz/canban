import React, {useContext} from "react";
import styled from "styled-components";
import EmptyBoards from "./emptyBoards";
import Column from "../column";
import Button from "../element/button";
import BoardContext from "../../../context/boardContext";
import {DragDropContext} from "react-beautiful-dnd";
import {setTaskStatus} from "../../../utils/fake";
import NoSelectedBoard from "./noSelectedBoard";
import http from "../../../service/httpService";
import config from "../../../config.json";
import {toast} from "react-toastify";
import BoardForm from "./boardForm";
import ModalContext from "../../../context/modalContext";
import MyThemeContext from "../../../context/myThemeContext";

const ContainerStyled = styled.div`
  background: ${({bg}) => bg};
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
    const modalContext = useContext(ModalContext);
    const themeContext = useContext(MyThemeContext);

    const boardColumns = boardContext.getBoardColumns();

    const isBoardEmpty = boardColumns?.length <= 0;

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

    const handleClick = () => {
        const apiCall = (data) => {
            http.put(`${config.apiEndpoint}/board/${data.id}`, data)
                .then(res => toast.info(res.message))
                .catch(err => toast.error(err.message))
        }
        modalContext
            .setModal(
                <BoardForm
                    title={'Edit Board'}
                    btnTitle={'Save Board'}
                    defaultValues={boardContext.getSelectedBoard()}
                    apiCall={apiCall}
                />);
    }

    return (
        <ContainerStyled bg={themeContext.getTheme().darkBgColor} className={"board--box w--100"}>
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
                                bg={themeContext.getTheme().lightBgColor}
                                onClick={handleClick}
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