import React, {useEffect, useRef, useState} from "react";
import Header from "./components/header";
import GlobalStyle from "./utils/globalStyle";
import Sidebar from "./components/sidebar";
import Grid from "./components/common/grid";
import styled from "styled-components";
import {BoardProvider} from "./context/boardContext";

const BoxStyled = styled.div`
  height: 100vh;
  //background-color: hotpink;
`


function App() {

    const boxRef = useRef(null);
    const navRef = useRef(null);

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedBoard, setSelectedBoard] = useState();
    const [headerHeight, setHeaderHeight] = useState(0);
    const [boxHeight, setBoxHeight] = useState(0);

    useEffect(() => {
        setBoxHeight(boxRef.current.offsetHeight);
        setHeaderHeight(navRef.current.offsetHeight);
    }, [])

    const handleToggle = () => {
        console.log("clicked");

        if (!isSidebarOpen) {
            document.getElementById("brand--box").style.width = '360px';
            document.getElementById("my--sidebar").style.transform = 'translateX(0)';
            document.getElementById("my--inner--sidebar").style.width = '300px';
            setIsSidebarOpen(true);
        } else {
            document.getElementById("brand--box").style.width = '270px';
            document.getElementById("my--sidebar").style.transform = 'translateX(-100%)';
            document.getElementById("my--inner--sidebar").style.width = '0';
            setIsSidebarOpen(false)
        }
    }

    const handleBoardChange = board => {
        console.log(board)
        setSelectedBoard(board)
    };

    const boardContext = {
        selectedBoard,
        onBoardChanged: handleBoardChange,
    };

    const height = boxHeight - headerHeight;

    return (<BoxStyled ref={boxRef}>
            <BoardProvider value={boardContext}>
                <Header myRef={navRef}/>

                <main className="flex--row " style={{height: height + 'px'}}>
                    <Sidebar onToggle={handleToggle}/>

                    <Grid>
                        <button onClick={handleToggle}>show</button>

                    </Grid>
                </main>

            </BoardProvider>
            <GlobalStyle/>
        </BoxStyled>);
}

export default App;