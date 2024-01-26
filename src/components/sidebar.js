import {useContext} from "react";
import styled from "styled-components";
import SidebarBoards from "./common/sidebarBoards";
import NightModeBtn from "./common/nightModeBtn";
import Button from "./common/element/button";
import Icon from "./common/element/icon/icon";
import IconImg from "./common/element/icon/icon-img";
import OpenEyeSvg from "../assets/icons/open-eye.svg";
import MyThemeContext from "../context/myThemeContext";

const WrapperStyled = styled.div`
  position: relative;
  background: ${({bg}) => bg};
  
  @media(max-width: 768px){
    display: none;
  }
`

const TempStyled = styled.div`
  width: 300px;
  transition: 0.25s linear;
`

const DivStyled = styled.aside`
  background: ${({bg}) => bg};
  position: absolute;
  top: 0;
  width: 300px;
  transition: 0.25s linear;
  border-right: 1px solid var(--lines-light, #E4EBFA);
  padding-bottom: 20px;
  z-index: 800;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const BtnWrapperStyled = styled.div`
  position: absolute;
  bottom: 5%;
  left: 0;
  z-index: 700;
`

const BottomStyled = styled.div`
  position: sticky;
  bottom: 0;
  padding: 25px;
  height: max-content;
`

const Sidebar = ({isSidebarOpen, setIsSidebarOpen}) => {

    const themeContext = useContext(MyThemeContext);

    const handleToggle = () => {
        if (!isSidebarOpen) {
            if (window.innerWidth >= 768)
                document.getElementById("brand--box").style.width = '300px';

            document.getElementById("my--sidebar").style.transform = 'translateX(0)';
            document.getElementById("my--inner--sidebar").style.width = '300px';
            setIsSidebarOpen(true);
        } else {
            console.log('window',window.innerWidth)
            if (window.innerWidth >= 768)
                document.getElementById("brand--box").style.width = '250px';

            document.getElementById("my--sidebar").style.transform = 'translateX(-100%)';
            document.getElementById("my--inner--sidebar").style.width = '0';
            setIsSidebarOpen(false)
        }
    }

    return (
        <WrapperStyled bg={themeContext.getTheme().lightBgColor}>
            <TempStyled id={"my--inner--sidebar"}/>

            <DivStyled id={"my--sidebar"} bg={themeContext.getTheme().lightBgColor}>
                <SidebarBoards/>

                <BottomStyled className={'w--100'}>
                    <NightModeBtn/>

                    <Button onClick={handleToggle}
                            bg={"transparent"}
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