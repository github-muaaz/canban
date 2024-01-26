import Logo from "./common/logo";
import Navbar from "./navbar";
import {useContext} from "react";
import MyThemeContext from "../context/myThemeContext";
import styled from "styled-components";

const HeaderStyled = styled.header`
  background: ${({bg}) => bg};
  
  @media(max-width: 768px){
    position: relative;
    z-index: 860;
  }
`

const Header = ({myRef, isSidebarOpen, ...rest}) => {

    const themeContext = useContext(MyThemeContext);

    return ( 
        <HeaderStyled bg={themeContext.getTheme().lightBgColor} {...rest} id="head--my" className="flex--row">
            <Logo myRef={myRef} isSidebarOpen={isSidebarOpen}/>

            <Navbar/>
        </HeaderStyled>
     );
}
 
export default Header;