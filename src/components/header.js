import Logo from "./common/logo";
import Navbar from "./navbar";
import {useContext} from "react";
import MyThemeContext from "../context/myThemeContext";

const Header = ({myRef, isSidebarOpen, ...rest}) => {

    const themeContext = useContext(MyThemeContext);

    return ( 
        <header style={{background: themeContext.getTheme().lightBgColor}} {...rest} id="head--my" className="flex--row">
            <Logo myRef={myRef} isSidebarOpen={isSidebarOpen}/>

            <Navbar/>
        </header>
     );
}
 
export default Header;