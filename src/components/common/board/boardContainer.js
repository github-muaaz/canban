import {useEffect, useState} from "react";
import {getBoards, getBoardTasks} from "../../../utils/fake";
import {BoardProvider} from "../../../context/boardContext";
import http from '../../../service/httpService';
import config from "../../../config.json";
import {toast} from "react-toastify";
import axios from "axios";

const BoardContainer = ({children}) => {

    const [selectedBoard, setSelectedBoard] = useState();
    const [boardColumns, setBoardColumns] = useState([]);
    const [boards, setBoards] = useState([])

    const getBoard = () => {
        // backend call
        http
            .get(config.apiEndpoint + "/board",)
            .then(res => setBoards(res.data.data))
            .catch(() => toast.error('something went wrong'))
        // setBoards(getBoards())

    }

    useEffect(() => {
        getBoard();
    }, [])

    useEffect(() => {
        // console.log('selected board changed', selectedBoard);

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
        // // backend call
        // const data = getBoardTasks(selectedBoard?.id);

        axios.get(config.apiEndpoint + '/column/'+selectedBoard?.id)
            .then(res => setBoardColumns(res.data.data))
            .catch(() => toast.error('something went wrong'))

        // setBoardColumns(data);
    }
    const handleGetBoards = () => boards;
    const handleUpdateBoards = () => {
        // backend call
        const res = getBoards();

        console.log('boards updata', res)
        setBoards(res);
    }

    const boardContext = {
        getBoardColumns: handleGetBoardColumns,
        setBoardColumns: handleSetBoardColumns,
        getSelectedBoard: handleGetSelectedBoard,
        onBoardChanged: handleBoardChange,
        updateBoard: handleUpdateBoard,
        updateBoardData: handleUpdateBoardData,
        getBoards: handleGetBoards,
        updateBoards: handleUpdateBoards,
    };

    return(
        <BoardProvider value={boardContext}>
            {children}
        </BoardProvider>
    )
}

export default BoardContainer;