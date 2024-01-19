import React from "react";
import styled from "styled-components";
import Sidebar from "./sidebar";
import Board from "./common/board/board";

const MainStyled = styled.main`
  height: calc(100vh - ${({height}) => height+'px'});
`

const Main = ({isSidebarOpen, setIsSidebarOpen, header}) => {

    return(
        <MainStyled className="flex--row" height={header.offsetHeight}>
            <Sidebar
                header={header}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />

            <Board/>
        </MainStyled>
    )
}

export default Main;