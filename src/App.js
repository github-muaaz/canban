import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import Header from "./components/header";
import GlobalStyle from "./utils/globalStyle";
import styled from "styled-components";
import Main from "./components/main";
import ModalContainer from "./components/common/element/modal/modalContainer";
import BoardContainer from "./components/common/board/boardContainer";
import {ToastContainer} from "react-toastify";

const BoxStyled = styled.div`
  height: 100vh;
`

function App() {
    const navRef = useRef(null);

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [header, setHeader] = useState(0);

    const setHeights = () => {
        setHeader(navRef.current);
        // console.log('navbar h: ', navRef.current.offsetHeight)
    };

    useEffect(() => {
        setHeights();
    }, [])

    useEffect(() => {
        function handleWindowResize() {
            setHeights();
        }

        navRef.current.addEventListener('resize', handleWindowResize);

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <BoxStyled>
            <BoardContainer>
                <ModalContainer>
                    <Header isSidebarOpen={isSidebarOpen} myRef={navRef}/>

                    <Main
                        isSidebarOpen={isSidebarOpen}
                        setIsSidebarOpen={setIsSidebarOpen}
                        header={header}
                    />
                </ModalContainer>
            </BoardContainer>
            <GlobalStyle/>
            <ToastContainer/>
        </BoxStyled>);
}

export default App;