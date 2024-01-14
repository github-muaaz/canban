import Sidebar from "./sidebar";
import React from "react";
import BoardBox from "./common/boardBox";
import styled from "styled-components";

const MainStyled = styled.main`
  background-color: red;
  height: calc(100vh - ${({height}) => height});
`

const Main = ({isSidebarOpen, setIsSidebarOpen, headerHeight}) => {

    return(
        <MainStyled className="flex--row" height={headerHeight}>
            <Sidebar
                headerHeight={headerHeight}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />

            <BoardBox headerHeight={headerHeight} width={'width'}/>
        </MainStyled>
    )
}

export default Main;