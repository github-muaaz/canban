import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import Header from "./components/header";
import GlobalStyle from "./utils/globalStyle";
import styled from "styled-components";
import {BoardProvider} from "./context/boardContext";
import Main from "./components/main";
import ModalContainer from "./components/common/element/modal/modalContainer";
import {getBoard} from "./utils/fake";

const BoxStyled = styled.div`
  height: 100vh;
`

function App() {

    const boxRef = useRef(null);
    const navRef = useRef(null);

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [selectedBoard, setSelectedBoard] = useState();
    const [boardItems, setBoardItems] = useState();


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
    const handleGetBoardItems = () => boardItems;

    useEffect(() => {
        console.log('selected board changed', selectedBoard);

        // backend call
        const res = getBoard(selectedBoard?.id);

        setBoardItems(res);
    }, [selectedBoard])


    const boardContext = {
        getBoardItems: handleGetBoardItems,
        getSelectedBoard: handleGetSelectedBoard,
        onBoardChanged: handleBoardChange,
    };

    return (
        <BoxStyled ref={boxRef}>
            <ModalContainer>
                <BoardProvider value={boardContext}>
                    <Header isSidebarOpen={isSidebarOpen} myRef={navRef}/>

                    <Main
                        isSidebarOpen={isSidebarOpen}
                        setIsSidebarOpen={setIsSidebarOpen}
                        headerHeight={headerHeight}
                    />
                </BoardProvider>

            </ModalContainer>
            <GlobalStyle/>
        </BoxStyled>);
}

export default App;