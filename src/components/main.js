import React from "react";
import styled from "styled-components";
import Sidebar from "./sidebar";
import Board from "./common/board/board";

const MainStyled = styled.main`
  height: calc(100vh - ${({height}) => height});
`

const Main = ({isSidebarOpen, setIsSidebarOpen, headerHeight}) => {

    return(
        <MainStyled className="flex--row" height={headerHeight+'px'}>
            <Sidebar
                headerHeight={headerHeight}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />

            <Board/>
        </MainStyled>
    )
}

export default Main;