import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import Header from "./components/header";
import GlobalStyle from "./utils/globalStyle";
import styled from "styled-components";
import {BoardProvider} from "./context/boardContext";
import Main from "./components/main";
import ModalContainer from "./components/common/element/modal/modalContainer";
import {getBoardTasks} from "./utils/fake2";

const BoxStyled = styled.div`
  height: 100vh;
`

function App() {

    const boxRef = useRef(null);
    const navRef = useRef(null);

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [selectedBoard, setSelectedBoard] = useState();
    const [boardColumns, setBoardColumns] = useState([]);


    const setHeights = () => {
        setHeaderHeight(navRef.current.offsetHeight);
    };

    useLayoutEffect(() => {
        setHeights();
    }, [])

    useEffect(() => {
        function handleWindowResize() {
            setHeights();
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

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


    useEffect(() => {
        console.log('selected board changed', selectedBoard);

        // backend call
        const data = getBoardTasks(selectedBoard?.id);

        setBoardColumns(data);
    }, [selectedBoard])


    const boardContext = {
        getBoardColumns: handleGetBoardColumns,
        setBoardColumns: handleSetBoardColumns,
        getSelectedBoard: handleGetSelectedBoard,
        onBoardChanged: handleBoardChange,
        updateBoard: handleUpdateBoard,
    };

    return (
        <BoxStyled ref={boxRef}>
            <BoardProvider value={boardContext}>
                <ModalContainer>
                    <Header isSidebarOpen={isSidebarOpen} myRef={navRef}/>

                    <Main
                        isSidebarOpen={isSidebarOpen}
                        setIsSidebarOpen={setIsSidebarOpen}
                        headerHeight={headerHeight}
                    />
                </ModalContainer>
            </BoardProvider>
            <GlobalStyle/>
        </BoxStyled>);
}

export default App;