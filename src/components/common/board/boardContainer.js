import {useEffect, useState} from "react";
import {getBoardTasks} from "../../../utils/fake";
import {BoardProvider} from "../../../context/boardContext";

const BoardContainer = ({children}) => {

    const [selectedBoard, setSelectedBoard] = useState();
    const [boardColumns, setBoardColumns] = useState([]);

    useEffect(() => {
        console.log('selected board changed', selectedBoard);

        handleUpdateBoardData();
    }, [selectedBoard])

    const handleBoardChange = board => setSelectedBoard(board);
    const handleGetSelectedBoard = () => selectedBoard;
    const handleGetBoardColumns = () => boardColumns;
    const handleSetBoardColumns = (columns) => setBoardColumns(columns);
    const handleUpdateBoard = (task, oldColumnId) => {
        const tempBoardColumns = [...boardColumns]

        const oldColumn = tempBoardColumns.find(bc => bc.id === oldColumnId);

        oldColumn.tasks = oldColumn.tasks.filter(t => t.id !== task.id);

        const newColumn = tempBoardColumns.find(bc => bc.id === task.statusId);

        newColumn.tasks = [...newColumn.tasks, task];

        setBoardColumns(tempBoardColumns);
    }
    const handleUpdateBoardData = () => {
        // backend call
        const data = getBoardTasks(selectedBoard?.id);

        setBoardColumns(data);
    }

    const boardContext = {
        getBoardColumns: handleGetBoardColumns,
        setBoardColumns: handleSetBoardColumns,
        getSelectedBoard: handleGetSelectedBoard,
        onBoardChanged: handleBoardChange,
        updateBoard: handleUpdateBoard,
        updateBoardData: handleUpdateBoardData,
    };

    return(
        <BoardProvider value={boardContext}>
            {children}
        </BoardProvider>
    )
}

export default BoardContainer;