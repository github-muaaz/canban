import Logo from "./common/logo";
import Navbar from "./navbar";

const Header = ({myRef, isSidebarOpen, ...rest}) => {
    return ( 
        <header {...rest} id="head--my" className="flex--row">
            <Logo myRef={myRef} isSidebarOpen={isSidebarOpen}/>

            <Navbar/>
        </header>
     );
}
 
export default Header;