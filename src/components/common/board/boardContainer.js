import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {BoardProvider} from "../../../context/boardContext";
import http from '../../../service/httpService';
import config from "../../../config.json";

const BoardContainer = ({children}) => {

    const [selectedBoard, setSelectedBoard] = useState();
    const [boardColumns, setBoardColumns] = useState([]);
    const [boards, setBoards] = useState([])

    const getBoards = () => {
        console.log('okk')
        // backend call
        http
            .get(config.apiEndpoint + "/board",)
            .then(res => setBoards(res.data.data))
            .catch(() => toast.error('something went wrong'))
    }

    useEffect(() => {
        getBoards();
    }, [])



    useEffect(() => {
        const handleUpdateBoardData = () => {
            // // backend call
            if (selectedBoard?.id)
                http.get(config.apiEndpoint + '/column/'+selectedBoard?.id)
                    .then(res => setBoardColumns(res.data.data))
                    .catch(() => toast.error('something went wrong'));
        }
        // console.log('selected board changed', selectedBoard);

        handleUpdateBoardData();
    }, [selectedBoard])

    const handleUpdateSelectedBoard = async () => {
        await http.get(config.apiEndpoint + '/board/'+selectedBoard?.id)
            .then(res => setSelectedBoard(res.data.data))
            .catch(err => toast.error(err.response.data.errors[0].msg))
    }

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


    const handleGetBoards = () => boards;
    const handleUpdateBoards = () => {
        // backend call
        getBoards();

        handleUpdateSelectedBoard().then(r => console.log(''));
        console.log('boards update')
    }

    const handleAddBoard = (data) => {
        setBoards(prev => [...prev, data]);
    }

    const handleDeleteBoard = (id) => {
        setBoards(prev => [...prev.filter(board => board.id !== id)]);

        setSelectedBoard(boards[0]);

        getBoards();
    }

    const boardContext = {
        getBoardColumns: handleGetBoardColumns,
        setBoardColumns: handleSetBoardColumns,
        getSelectedBoard: handleGetSelectedBoard,
        onBoardChanged: handleBoardChange,
        updateBoard: handleUpdateBoard,
        updateBoardData: handleUpdateSelectedBoard,
        getBoards: handleGetBoards,
        updateBoards: handleUpdateBoards,
        addBoard: handleAddBoard,
        deleteBoard: handleDeleteBoard,
    };

    return(
        <BoardProvider value={boardContext}>
            {children}
        </BoardProvider>
    )
}

export default BoardContainer;