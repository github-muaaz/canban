import styled from "styled-components";
import SidebarBoards from "./common/sidebarBoards";
import NightModeBtn from "./common/nightModeBtn";
import Button from "./common/element/button";
import Icon from "./common/element/icon/icon";
import IconImg from "./common/element/icon/icon-img";
import OpenEyeSvg from "../assets/icons/open-eye.svg";
import {useLayoutEffect, useRef, useState} from "react";

const WrapperStyled = styled.div`
  position: relative;
`

const TempStyled = styled.div`
  width: 300px;
  height: 100%;
  transition: 0.25s linear;
`

const DivStyled = styled.aside`
  position: absolute;
  top: 0;
  width: 300px;
  height: 100%;
  transition: 0.25s linear;
  border-right: 1px solid var(--lines-light, #E4EBFA);
  padding-bottom: 20px;
  background: var(--white, #FFF);
  z-index: 800;
`

const BtnWrapperStyled = styled.div`
  position: absolute;
  bottom: 5%;
  left: 0;
  z-index: 700;
`

const BottomStyled = styled.div`
  position: absolute;
  bottom: 0;
  padding: 25px;
`

const Sidebar = ({headerHeight, isSidebarOpen, setIsSidebarOpen}) => {

    const btnRef = useRef(null);

    const [btnHeight, setHeight] = useState(0);

    useLayoutEffect(() => {
        setHeight(btnRef.current.offsetHeight);
    }, []);

    const handleToggle = () => {
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

    const boardsHeight = headerHeight - btnHeight;

    // console.log(headerHeight)
    // console.log(btnHeight)
    // console.log(boardsHeight)

    return (
        <WrapperStyled>
            <TempStyled id={"my--inner--sidebar"}/>

            <DivStyled id={"my--sidebar"}>
                <SidebarBoards height={boardsHeight}/>

                <BottomStyled className={'w--100'} ref={btnRef}>
                    <NightModeBtn/>

                    <Button onClick={handleToggle} bg={"transparent"}
                            color={' var(--medium-grey, #828FA3)'}
                            padding={'15px 5px'}
                            noHover
                    >
                        <Icon icon={'eye'}/>
                        <span>Hide Sidebar</span>
                    </Button>

                </BottomStyled>
            </DivStyled>

            <BtnWrapperStyled>
                <IconImg onClick={handleToggle} icon={OpenEyeSvg} width={'56px'} height={'48px'}/>
            </BtnWrapperStyled>
        </WrapperStyled>);
}

export default Sidebar;