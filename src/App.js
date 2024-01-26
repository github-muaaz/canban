import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {ToastContainer} from "react-toastify";
import Header from "./components/header";
import GlobalStyle from "./utils/globalStyle";
import Main from "./components/main";
import ModalContainer from "./components/common/element/modal/modalContainer";
import BoardContainer from "./components/common/board/boardContainer";
import config from "./config.json";
import {MyThemeProvider} from "./context/myThemeContext";
import SmallModalContainer from "./components/common/element/modal/smallModalContainer";

const BoxStyled = styled.div`
  height: 100vh;
`

function App() {
    const navRef = useRef(null);

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [header, setHeader] = useState(0);
    const [theme, setTheme] = useState(config.defaultTheme);

    useEffect(() => {
        localStorage.setItem(config.storageKey, theme);

        const setHeights = () => setHeader(navRef.current);

        setHeights();

        const key = localStorage.getItem(config.storageKey);

        if (!key)
            localStorage.setItem(config.storageKey, theme);

        const handleWindowResize = () => setHeights();

        navRef.current.addEventListener('resize', handleWindowResize);

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [theme]);

    const handleGetTheme = () => theme;
    const handleSetTheme = theme => setTheme(theme);

    const themeContext = {
        getTheme: handleGetTheme,
        setTheme: handleSetTheme,
    }

    return (
        <BoxStyled>
            <MyThemeProvider value={themeContext}>
                <BoardContainer>
                    <ModalContainer>
                        <SmallModalContainer>
                            <Header isSidebarOpen={isSidebarOpen} myRef={navRef}/>

                            <Main
                                isSidebarOpen={isSidebarOpen}
                                setIsSidebarOpen={setIsSidebarOpen}
                                header={header}
                            />
                        </SmallModalContainer>
                    </ModalContainer>
                </BoardContainer>
                <GlobalStyle/>
                <ToastContainer/>
            </MyThemeProvider>
        </BoxStyled>);
}

export default App;