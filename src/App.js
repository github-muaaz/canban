import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import Header from "./components/header";
import GlobalStyle from "./utils/globalStyle";
import styled from "styled-components";
import {BoardProvider} from "./context/boardContext";
import Main from "./components/main";

const BoxStyled = styled.div`
  height: 100vh;
`


function App() {

    const boxRef = useRef(null);
    const navRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedBoard, setSelectedBoard] = useState();
    const [headerHeight, setHeaderHeight] = useState(0);

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

    const boardContext = {
        selectedBoard, onBoardChanged: handleBoardChange,
    };

    return (
        <BoxStyled ref={boxRef}>
            <BoardProvider value={boardContext}>
                <Header isSidebarOpen={isSidebarOpen} myRef={navRef}/>

                <Main isSidebarOpen={isSidebarOpen}
                      setIsSidebarOpen={setIsSidebarOpen}
                      headerHeight={headerHeight}
                />
            </BoardProvider>
            <GlobalStyle/>
        </BoxStyled>);
}

export default App;